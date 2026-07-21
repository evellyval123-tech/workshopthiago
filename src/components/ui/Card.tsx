export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-surface border border-border rounded-2xl p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
