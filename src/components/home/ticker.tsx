/** Continuous capability strip. CSS transform animation; stops under reduced motion. */
export function Ticker({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <li key={i} className="label flex items-center gap-3 px-3 whitespace-nowrap text-fg/80">
          {t}
          <span className="marker" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="theme-dark overflow-hidden border-y border-line py-2" role="region" aria-label="Capabilities">
      <div className="flex w-max animate-[ticker_48s_linear_infinite] motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
