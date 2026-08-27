"use client";

import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { content as siteContent } from "../lib/content";
import type { TContent } from "../lib/content";
import { HeroSection } from "@/components/home/HeroSection";
import { WorkSection } from "@/components/home/WorkSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { SiteFooter } from "@/components/home/SiteFooter";

type Lang = "en" | "fr";
type ContentMap = typeof siteContent;

const subscribeToHydration = () => () => {};

function ThemeToggle({ t }: { t: TContent }) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full border border-slate-300/60 bg-slate-100/70 px-3 text-xs text-slate-800 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100"
      >
        <span className="invisible">{`☀️ ${t.nav.themeToggle.light}`}</span>
      </span>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full border border-slate-300/60 bg-slate-100/70 px-3 text-xs text-slate-800 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
      aria-label="Toggle theme"
    >
      {isDark ? `🌙 ${t.nav.themeToggle.dark}` : `☀️ ${t.nav.themeToggle.light}`}
    </button>
  );
}


/* Home client*/
export default function HomeClient({
  lang,
  content,
}: {
  lang: Lang;
  content: ContentMap;
}) {
  const t = content[lang] ?? content.en;
  const [mobileOpen, setMobileOpen] = useState(false);

  function switchLang(next: "en" | "fr") {
    document.cookie = `lang=${next}; path=/; max-age=31536000`;
    const hash = window.location.hash || "";
    window.location.href = `/${next}${hash}`;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 border-b border-slate-200 backdrop-blur dark:bg-slate-950/70 dark:border-slate-800 shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link
              href={`/${lang}`}
              className="flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
              aria-label="Back to top"
            >
              {/*Logo placeholder*/}
              <div className="h-9 w-9 min-h-9 min-w-9 shrink-0 rounded-full bg-gradient-to-tr from-emerald-400 via-sky-400 to-indigo-500" />
              <span className="hidden text-sm uppercase tracking-[0.35em] text-slate-700 dark:text-slate-200 sm:inline">
                EEB Web Dev
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm text-slate-600 dark:text-slate-200/80">
            <a
              href={`/${lang}#work`}
              className="cta-link rounded-sm hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 transition"
            >
              {t.nav.work}
            </a>
            <a
              href={`/${lang}#services`}
              className="cta-link rounded-sm hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 transition"
            >
              {t.nav.services}
            </a>
            <a
              href={`/${lang}#products`}
              className="cta-link rounded-sm hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 transition"
            >
              {t.nav.products}
            </a>
            <a
              href={`/${lang}#about`}
              className="cta-link rounded-sm hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 transition"
            >
              {t.nav.about}
            </a>
            <a
              href={`/${lang}#contact`}
              className="cta-link rounded-sm hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 transition"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle t={t} />

            <div className="hidden sm:flex items-center gap-2">
              <div className="inline-flex items-center rounded-full border border-slate-300/60 bg-white/70 p-1 text-xs backdrop-blur transition-colors duration-200 dark:border-slate-700/60 dark:bg-slate-900/50">
                <button
                  type="button"
                  onClick={() => switchLang("en")}
                  className={`min-h-8 rounded-full px-3 transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 ${lang === "en"
                    ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`}
                >
                  EN
                </button>

                <button
                  type="button"
                  onClick={() => switchLang("fr")}
                  className={`min-h-8 rounded-full px-3 transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 ${lang === "fr"
                    ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`}
                >
                  FR
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/60 bg-slate-100/70 text-sm text-slate-800 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800 dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              ☰
            </button>

            <a
              href={`/${lang}#contact`}
              onClick={() => setMobileOpen(false)}
              className="cta-primary hidden items-center rounded-full bg-emerald-400 px-4 py-1.5 text-sm font-medium text-slate-900 shadow transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 sm:inline-flex"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-sm text-slate-700 dark:text-slate-200">
              <a
                href={`/${lang}#work`}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-10 items-center rounded-md py-2 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t.nav.work}
              </a>
              <a
                href={`/${lang}#services`}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-10 items-center rounded-md py-2 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t.nav.services}
              </a>
              <a
                href={`/${lang}#products`}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-10 items-center rounded-md py-2 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t.nav.products}
              </a>
              <a
                href={`/${lang}#about`}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-10 items-center rounded-md py-2 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t.nav.about}
              </a>
              <a
                href={`/${lang}#contact`}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-10 items-center rounded-md py-2 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
              >
                {t.nav.contact}
              </a>

              <a
                href={`/${lang}#contact`}
                onClick={() => setMobileOpen(false)}
                className="cta-primary mt-2 inline-flex min-h-10 items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-900 shadow transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 sm:hidden"
              >
                {t.nav.cta}
              </a>

              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
                <Link
                  href={`/en${typeof window !== "undefined" ? window.location.hash : ""
                    }`}
                  scroll={false}
                  className={`inline-flex min-h-10 items-center rounded-full border px-3 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 ${lang === "en"
                    ? "border-slate-400 text-slate-900 dark:text-white"
                    : "border-slate-300/60 text-slate-600 dark:text-slate-300"
                    }`}
                >
                  EN
                </Link>

                <Link
                  href={`/fr${typeof window !== "undefined" ? window.location.hash : ""
                    }`}
                  scroll={false}
                  className={`inline-flex min-h-10 items-center rounded-full border px-3 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 ${lang === "fr"
                    ? "border-slate-400 text-slate-900 dark:text-white"
                    : "border-slate-300/60 text-slate-600 dark:text-slate-300"
                    }`}
                >
                  FR
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-16 flex flex-col gap-24">

        {/* Hero */}
        <HeroSection t={t} />

        {/* Work */}
        <WorkSection t={t} />

        {/* Services */}
       <ServicesSection t={t} />

        {/* Products */}
        <ProductsSection t={t} lang={lang} />

        {/* About */}
        <AboutSection t={t} />

        {/* Contact */}
        <ContactSection t={t} />
      </main>

      <SiteFooter />
    </div>
  );
}
