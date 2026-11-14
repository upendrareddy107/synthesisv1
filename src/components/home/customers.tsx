import Image from "next/image";
import { SectionLabel } from "@/components/section-label";

export function Customers({ logos }: { logos: { name: string; src: string }[] }) {
  return (
    <section aria-labelledby="cust-title" className="theme-light py-10 lg:py-16">
      <div className="page-grid gap-y-3">
        <div className="col-span-full lg:col-span-8">
          <SectionLabel n="06">Customers</SectionLabel>
          <h2 id="cust-title" className="display mt-3 text-display-l">
            On production floors
            <br />
            in close to 40 countries<span className="text-accent">.</span>
          </h2>
        </div>
      </div>
      <ul className="page-x mt-6 grid grid-cols-3 border-t border-l border-line sm:grid-cols-4 lg:mt-10 lg:grid-cols-6">
        {logos.map((l) => (
          <li key={l.name} className="group flex aspect-[3/2] items-center justify-center border-r border-b border-line p-2">
            {/* Grey copy underneath, colour copy on top; hover/focus fades colour in (opacity only). */}
            <span className="relative block w-full max-w-[140px]">
              <Image
                src={l.src}
                alt={l.name}
                width={165}
                height={88}
                className="h-auto w-full object-contain opacity-75 mix-blend-multiply grayscale transition-opacity duration-(--duration-base) group-hover:opacity-0"
              />
              <Image
                src={l.src}
                alt=""
                aria-hidden="true"
                width={165}
                height={88}
                className="absolute inset-0 h-auto w-full object-contain opacity-0 mix-blend-multiply transition-opacity duration-(--duration-base) group-hover:opacity-100"
              />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
