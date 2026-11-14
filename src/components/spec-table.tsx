import type { SpecRow } from "@content/types";

/**
 * Datasheet table. Columns are the variant names as printed in the PDF.
 * Single-column sheets ("Specification") render as a two-column key/value table.
 */
export function SpecTable({ rows, caption }: { rows: SpecRow[]; caption: string }) {
  const cols: string[] = [];
  rows.forEach((r) => Object.keys(r.values).forEach((k) => !cols.includes(k) && cols.push(k)));
  const single = cols.length === 1;

  return (
    <div className="overflow-x-auto border border-line">
      <table className="w-full min-w-[520px] border-collapse text-left">
        <caption className="label border-b border-line bg-panel px-2 py-1.5 text-left text-muted">{caption}</caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="label w-[34%] px-2 py-1.5 font-normal text-muted">
              Particulars
            </th>
            {cols.map((c) => (
              <th key={c} scope="col" className="label px-2 py-1.5 font-medium text-fg">
                {single ? "Value" : c.replace(/^Smart Winder\s*/i, "")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.flatMap((r, i) => {
            const out = [];
            if (r.section && r.section !== rows[i - 1]?.section) {
              out.push(
                <tr key={`s${i}`} className="border-b border-line bg-panel">
                  <th scope="rowgroup" colSpan={cols.length + 1} className="label px-2 py-1 text-accent">
                    {r.section}
                  </th>
                </tr>,
              );
            }
            out.push(
              <tr key={i} className="border-b border-line last:border-0 hover:bg-panel">
                <th scope="row" className="px-2 py-1.5 align-top text-small font-normal text-muted">
                  {r.label}
                </th>
                {cols.map((c) => (
                  <td key={c} className="px-2 py-1.5 align-top font-mono text-small tabular-nums text-fg">
                    {r.values[c] ?? "—"}
                  </td>
                ))}
              </tr>,
            );
            return out;
          })}
        </tbody>
      </table>
    </div>
  );
}
