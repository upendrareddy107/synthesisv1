"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { duration, ease } from "@/lib/motion";

const NAV = [
  { href: "/machines", label: "Machines" },
  { href: "/coil-types", label: "Coil types" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "Company" },
  { href: "/news-events", label: "News" },
  { href: "/blog", label: "Blog" },
];

function BengaluruClock() {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false });
    const update = () => setT(fmt.format(new Date()));
    update();
    const id = setInterval(update, 15_000);
    return () => clearInterval(id);
  }, []);
  return (
    <p className="label hidden items-center gap-1 text-muted xl:flex" aria-label={t ? `Bengaluru time ${t}` : undefined}>
      <span className="marker" aria-hidden="true" />
      Bengaluru <span className="tabular-nums text-fg">{t ?? "--:--"}</span> IST
    </p>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header className="theme-dark sticky top-0 z-40 border-b border-line">
      <div className="page-x flex h-(--header-h) items-center justify-between gap-3">
        <Link href="/" aria-label="Synthesis Winding Technologies — home" className="shrink-0">
          {/* Interim: light version traced from the raster logo. Replace with vector when supplied. */}
          <Image
            src="/images/brand/logo-synthesis-indigo.png"
            alt="Synthesis Winding Technologies Pvt. Ltd."
            width={900}
            height={200}
            priority
            className="h-auto w-[148px] md:w-[172px]"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-small text-fg/85 transition-colors duration-(--duration-fast) hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <BengaluruClock />
          <Link
            href="/contact"
            className="group hidden items-center gap-1.5 border border-fg/40 px-2 py-1.5 text-small font-medium transition-colors duration-(--duration-fast) hover:border-accent hover:text-accent sm:inline-flex"
          >
            Send an enquiry
            <span aria-hidden="true" className="transition-transform duration-(--duration-fast) group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <button
            type="button"
            className="flex h-5 w-5 flex-col items-center justify-center gap-1 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-px w-3 bg-fg transition-transform duration-(--duration-base) ${open ? "translate-y-[4.5px] rotate-45" : ""}`} />
            <span className={`h-px w-3 bg-fg transition-transform duration-(--duration-base) ${open ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Main"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.base, ease: ease.out }}
            className="border-t border-line bg-bg lg:hidden"
          >
            <ul className="page-x py-2">
              {[...NAV, { href: "/contact", label: "Send an enquiry" }].map((item, i) => (
                <li key={item.href} className="border-b border-line last:border-0">
                  <Link href={item.href} onClick={() => setOpen(false)} className="display flex items-baseline gap-2 py-2 text-display-m">
                    <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
