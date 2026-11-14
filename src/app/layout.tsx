import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { company } from "@content/company";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-sans", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: `Winding Machines for Coils, Transformers, Capacitors & EV Motors | ${company.shortName}`,
    template: `%s | ${company.legalName}`,
  },
  description:
    "Synthesis Winding Technologies designs and builds coil, transformer, capacitor, film and foil, EV motor and special purpose winding machines in Bengaluru. ISO 9001:2015. Since 1993.",
};

export const viewport: Viewport = { themeColor: "#0e0f11" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`theme-dark ${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main" className="label sr-only z-50 bg-accent px-2 py-1 text-accent-fg focus:not-sr-only focus:fixed focus:top-1 focus:left-1">
          Skip to content
        </a>
        <SmoothScroll />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
