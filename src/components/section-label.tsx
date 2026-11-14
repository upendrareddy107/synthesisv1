export function SectionLabel({ n, children, className = "" }: { n: string; children: React.ReactNode; className?: string }) {
  return (
    <p className={`label flex items-center gap-1 text-muted ${className}`}>
      <span className="marker" aria-hidden="true" />§ {n} — {children}
    </p>
  );
}
