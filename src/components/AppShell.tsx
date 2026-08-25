"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

const STORAGE_KEY = "arm-sidebar-open";

export function AppShell({
  userEmail,
  children,
}: {
  userEmail: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "0") setOpen(false);
  }, []);

  function collapse() {
    setOpen(false);
    window.localStorage.setItem(STORAGE_KEY, "0");
  }

  function expand() {
    setOpen(true);
    window.localStorage.setItem(STORAGE_KEY, "1");
  }

  if (!open) {
    return (
      <div className="min-h-screen">
        <TopBar userEmail={userEmail} onExpand={expand} />
        <div className="h-16" aria-hidden />
        <main className="px-6 py-10 sm:px-12 sm:py-14 max-w-4xl mx-auto">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar userEmail={userEmail} onCollapse={collapse} />
      <main className="flex-1 px-6 py-10 sm:px-12 sm:py-14 max-w-4xl">{children}</main>
    </div>
  );
}
