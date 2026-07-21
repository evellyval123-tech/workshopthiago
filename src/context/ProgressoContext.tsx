"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createClient } from "@/lib/supabase/client";
import { isSectionComplete, SECTIONS, type SectionDef } from "@/lib/sections";

type Answers = Record<string, Record<string, unknown>>;

type ProgressoContextValue = {
  answers: Answers;
  getField: (sectionId: string, fieldKey: string) => unknown;
  setField: (sectionId: string, fieldKey: string, value: unknown) => void;
  isComplete: (section: SectionDef) => boolean;
  saving: boolean;
};

const ProgressoContext = createContext<ProgressoContextValue | null>(null);

const SAVE_DELAY_MS = 800;

export function ProgressoProvider({
  userId,
  initialAnswers,
  children,
}: {
  userId: string;
  initialAnswers: Answers;
  children: React.ReactNode;
}) {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [saving, setSaving] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingAnswers = useRef<Answers>(initialAnswers);
  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, []);

  const flush = useCallback(async () => {
    setSaving(true);
    await supabase
      .from("progresso")
      .upsert({ user_id: userId, answers: pendingAnswers.current }, { onConflict: "user_id" });
    setSaving(false);
  }, [supabase, userId]);

  const setField = useCallback(
    (sectionId: string, fieldKey: string, value: unknown) => {
      setAnswers((prev) => {
        const next: Answers = {
          ...prev,
          [sectionId]: { ...prev[sectionId], [fieldKey]: value },
        };
        pendingAnswers.current = next;
        return next;
      });

      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(flush, SAVE_DELAY_MS);
    },
    [flush]
  );

  const getField = useCallback(
    (sectionId: string, fieldKey: string) => answers[sectionId]?.[fieldKey],
    [answers]
  );

  const isComplete = useCallback(
    (section: SectionDef) => isSectionComplete(section, answers),
    [answers]
  );

  const value = useMemo(
    () => ({ answers, getField, setField, isComplete, saving }),
    [answers, getField, setField, isComplete, saving]
  );

  return <ProgressoContext.Provider value={value}>{children}</ProgressoContext.Provider>;
}

export function useProgresso() {
  const ctx = useContext(ProgressoContext);
  if (!ctx) throw new Error("useProgresso deve ser usado dentro de ProgressoProvider");
  return ctx;
}

export function useSectionField(sectionId: string, fieldKey: string) {
  const { getField, setField } = useProgresso();
  const value = getField(sectionId, fieldKey);
  const setValue = useCallback(
    (v: unknown) => setField(sectionId, fieldKey, v),
    [setField, sectionId, fieldKey]
  );
  return [value, setValue] as const;
}

export { SECTIONS };
