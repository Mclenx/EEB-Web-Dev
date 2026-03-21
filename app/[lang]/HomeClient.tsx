"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { content as siteContent } from "../lib/content";
import type { TContent } from "../lib/content";
import { HeroSection } from "@/components/home/HeroSection";
import { WorkSection } from "@/components/home/WorkSection";

type Lang = "en" | "fr";
type ContentMap = typeof siteContent;

function ThemeToggle({ t }: { t: TContent }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-full border border-slate-300/60 bg-slate-100/70 px-3 py-1 text-xs text-slate-800 hover:bg-slate-200 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800"
      aria-label="Toggle theme"
    >
      {isDark ? `🌙 ${t.nav.themeToggle.dark}` : `☀️ ${t.nav.themeToggle.light}`}
    </button>
  );
}

type ServiceId =
  | "websites"
  | "service-businesses"
  | "bilingual"
  | "seo"
  | "photography"
  | "automation";

function getServiceDetails(t: any): Record<
  ServiceId,
  {
    title: string;
    description: string;
    tag: string;
    icon: string;
    visual: string;
  }
> {
  return {
    websites: {
      title: t.serviceDetails.websites.title,
      description: t.serviceDetails.websites.description,
      tag: t.serviceDetails.websites.tag,
      icon: "💻",
      visual: t.serviceDetails.websites.visual,
    },
    "service-businesses": {
      title: t.serviceDetails["service-businesses"].title,
      description: t.serviceDetails["service-businesses"].description,
      tag: t.serviceDetails["service-businesses"].tag,
      icon: "🛠️",
      visual: t.serviceDetails["service-businesses"].visual,
    },
    bilingual: {
      title: t.serviceDetails.bilingual.title,
      description: t.serviceDetails.bilingual.description,
      tag: t.serviceDetails.bilingual.tag,
      icon: "🇨🇦",
      visual: t.serviceDetails.bilingual.visual,
    },
    seo: {
      title: t.serviceDetails.seo.title,
      description: t.serviceDetails.seo.description,
      tag: t.serviceDetails.seo.tag,
      icon: "📈",
      visual: t.serviceDetails.seo.visual,
    },
    photography: {
      title: t.serviceDetails.photography.title,
      description: t.serviceDetails.photography.description,
      tag: t.serviceDetails.photography.tag,
      icon: "📷",
      visual: t.serviceDetails.photography.visual,
    },
    automation: {
      title: t.serviceDetails.automation.title,
      description: t.serviceDetails.automation.description,
      tag: t.serviceDetails.automation.tag,
      icon: "⚙️",
      visual: t.serviceDetails.automation.visual,
    },
  };
}

type ServiceWordProps = {
  id: ServiceId;
  children: ReactNode;
  activeService: ServiceId;
  setActiveService: (id: ServiceId) => void;
};

function ServiceWord({
  id,
  children,
  activeService,
  setActiveService,
}: ServiceWordProps) {
  const isActive = activeService === id;

  return (
    <button
      type="button"
      onMouseEnter={() => setActiveService(id)}
      onFocus={() => setActiveService(id)}
      onClick={() => setActiveService(id)}
      className={`relative inline-flex items-center rounded-full px-1.5 py-0.5 text-[0.8rem] font-medium transition ${isActive
          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-200 border border-emerald-400/60"
          : "border border-dashed border-emerald-300/60 text-emerald-700/90 dark:text-emerald-200/90 hover:bg-emerald-500/10"
        }`}
    >
      {children}
    </button>
  );
}

type ServiceDetailPanelProps = {
  activeService: ServiceId;
  t: any;
};

function ServiceDetailPanel({ activeService, t }: ServiceDetailPanelProps) {
  const service = getServiceDetails(t)[activeService];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
          <span className="text-base">{service.icon}</span>
          <span>{service.tag}</span>
        </span>
        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {t.servicePanel.header}
        </span>
      </div>

      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-slate-700 dark:text-slate-300">
        {service.description}
      </p>

      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/50 overflow-hidden">
        <div className="flex items-center gap-1 px-3 py-2 border-b border-slate-200/70 dark:border-slate-800">
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
          <span className="ml-2 text-[0.65rem] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
            {t.servicePanel.preview}
          </span>
        </div>
        <div className="h-28 flex items-center justify-center px-4 text-xs text-slate-600 dark:text-slate-300 text-center">
          {service.visual}
        </div>
      </div>
    </div>
  );
}

function useSafeHash() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const update = () => setHash(window.location.hash || "");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  useEffect(() => {
    // re-sync after route changes (e.g., locale switch)
    setHash(window.location.hash || "");
  }, [pathname]);

  return hash;
}

function LangSwitcher({ lang }: { lang: "en" | "fr" }) {
  const router = useRouter();
  const hash = useSafeHash();

  function switchLang(next: "en" | "fr") {
    document.cookie = `lang=${next}; path=/; max-age=31536000`;
    const hash = window.location.hash || "";
    window.location.href = `/${next}${hash}`;
  }

  return (
    <div className="inline-flex items-center rounded-full border border-slate-300/60 bg-white/70 p-1 text-xs backdrop-blur transition-colors duration-200 dark:border-slate-700/60 dark:bg-slate-900/50">
      <button
        type="button"
        onClick={() => switchLang("en")}
        className={`rounded-full px-3 py-1 transition-all duration-200 ease-out active:scale-[0.98] ${lang === "en"
            ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
            : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => switchLang("fr")}
        className={`rounded-full px-3 py-1 transition-all duration-200 ease-out active:scale-[0.98] ${lang === "fr"
            ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
            : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          }`}
      >
        FR
      </button>
    </div>
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

  const [activeService, setActiveService] = useState<ServiceId>("websites");
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [formState, setFormState] = useState<{
    status: "idle" | "sending" | "sent" | "error";
    message?: string;
  }>({ status: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    setFormState({ status: "sending", message: t.contact.sending });

    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json?.error || t.contact.errorFallback);
      }

      setFormState({ status: "sent", message: t.contact.sent });
      setTimeout(() => setFormState({ status: "idle" }), 4000);
      form.reset();
      (document.activeElement as HTMLElement | null)?.blur();
    } catch (err) {
      const msg =
        err instanceof Error && err.message
          ? err.message
          : t.contact.errorFallback;

      setFormState({ status: "error", message: msg });
    }
  }

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
              className="flex items-center gap-2 focus:outline-none"
              aria-label="Back to top"
            >
              {/*Logo placeholder*/}
              <div className="h-9 w-9 min-h-9 min-w-9 shrink-0 rounded-full bg-gradient-to-tr from-emerald-400 via-sky-400 to-indigo-500" />
              <span className="text-sm uppercase tracking-[0.35em] text-slate-700 dark:text-slate-200">
                EEB Web Dev
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm text-slate-600 dark:text-slate-200/80">
            <a
              href={`/${lang}#work`}
              className="cta-link hover:text-slate-900 dark:hover:text-white transition"
            >
              {t.nav.work}
            </a>
            <a
              href={`/${lang}#services`}
              className="cta-link hover:text-slate-900 dark:hover:text-white transition"
            >
              {t.nav.services}
            </a>
            <a
              href={`/${lang}#products`}
              className="cta-link hover:text-slate-900 dark:hover:text-white transition"
            >
              {t.nav.products}
            </a>
            <a
              href={`/${lang}#about`}
              className="cta-link hover:text-slate-900 dark:hover:text-white transition"
            >
              {t.nav.about}
            </a>
            <a
              href={`/${lang}#contact`}
              className="cta-link hover:text-slate-900 dark:hover:text-white transition"
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
                  className={`rounded-full px-3 py-1 transition-all duration-200 ease-out active:scale-[0.98] ${lang === "en"
                      ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`}
                >
                  EN
                </button>

                <button
                  type="button"
                  onClick={() => switchLang("fr")}
                  className={`rounded-full px-3 py-1 transition-all duration-200 ease-out active:scale-[0.98] ${lang === "fr"
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
              className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-300/60 bg-slate-100/70 px-3 py-2 text-sm text-slate-800 hover:bg-slate-200 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              ☰
            </button>

            <a
              href={`/${lang}#contact`}
              onClick={() => setMobileOpen(false)}
              className="cta-primary inline-flex items-center rounded-full bg-emerald-400 px-4 py-1.5 text-sm font-medium text-slate-900 shadow transition hover:bg-emerald-300"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur">
            <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4 text-sm text-slate-700 dark:text-slate-200">
              <a
                href={`/${lang}#work`}
                onClick={() => setMobileOpen(false)}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {t.nav.work}
              </a>
              <a
                href={`/${lang}#services`}
                onClick={() => setMobileOpen(false)}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {t.nav.services}
              </a>
              <a
                href={`/${lang}#products`}
                onClick={() => setMobileOpen(false)}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {t.nav.products}
              </a>
              <a
                href={`/${lang}#about`}
                onClick={() => setMobileOpen(false)}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {t.nav.about}
              </a>
              <a
                href={`/${lang}#contact`}
                onClick={() => setMobileOpen(false)}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {t.nav.contact}
              </a>

              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
                <Link
                  href={`/en${typeof window !== "undefined" ? window.location.hash : ""
                    }`}
                  scroll={false}
                  className={`text-xs px-3 py-1 rounded-full border ${lang === "en"
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
                  className={`text-xs px-3 py-1 rounded-full border ${lang === "fr"
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
        <WorkSection
          t={t}
          activeCaseStudy={activeCaseStudy}
          setActiveCaseStudy={setActiveCaseStudy}
        />

        {/* Services */}
        <section id="services" className="relative isolate scroll-mt-24 py-10 sm:py-12">
          <div className="px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
              {t.services.title}
            </h2>

            <div className="grid gap-10 md:grid-cols-2 items-start">
              <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  {t.services.p1a}{" "}
                  <ServiceWord
                    id="websites"
                    activeService={activeService}
                    setActiveService={setActiveService}
                  >
                    {t.services.words.websites}
                  </ServiceWord>{" "}
                  {t.services.p1b}{" "}
                  <ServiceWord
                    id="service-businesses"
                    activeService={activeService}
                    setActiveService={setActiveService}
                  >
                    {t.services.words.serviceBusinesses}
                  </ServiceWord>
                  {t.services.p1c}{" "}
                  <ServiceWord
                    id="bilingual"
                    activeService={activeService}
                    setActiveService={setActiveService}
                  >
                    {t.services.words.bilingual}
                  </ServiceWord>{" "}
                  {t.services.p1d}{" "}
                  <ServiceWord
                    id="seo"
                    activeService={activeService}
                    setActiveService={setActiveService}
                  >
                    {t.services.words.seo}
                  </ServiceWord>
                  {t.services.p1e}{" "}
                  <ServiceWord
                    id="photography"
                    activeService={activeService}
                    setActiveService={setActiveService}
                  >
                    {t.services.words.photography}
                  </ServiceWord>{" "}
                  {t.services.p1f}
                </p>

                <p>
                  {t.services.p2a}{" "}
                  <ServiceWord
                    id="automation"
                    activeService={activeService}
                    setActiveService={setActiveService}
                  >
                    {t.services.words.automation}
                  </ServiceWord>{" "}
                  {t.services.p2b}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.services.hint}
                </p>
              </div>

              <ServiceDetailPanel activeService={activeService} t={t} />
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="relative isolate py-10 sm:py-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-6 h-px
      bg-gradient-to-r from-transparent via-slate-200 to-transparent
      dark:via-slate-700"
          />

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
                {t.products.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {t.products.subtitle}
              </p>
            </div>

            <div className="mt-12 sm:mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Website System Kit v1 */}
              <article className="lg:col-start-2 rounded-2xl border border-slate-200 bg-white/80 p-5 flex flex-col gap-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/30 transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/30">
                  <Image
                    src="/products/website-system-v1.png"
                    alt={t.products.kitV1.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-700 backdrop-blur dark:text-emerald-200">
                    {t.products.kitV1.badge}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t.products.kitV1.title}
                </h3>

                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {t.products.kitV1.desc}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3">
                  <Link
                    href={`/${lang}/products/kit/website-system-v1`}
                    className="inline-flex items-center rounded-full bg-emerald-400 px-4 py-1.5 text-sm font-medium text-slate-900 shadow transition hover:bg-emerald-300"
                  >
                    {t.products.kitV1.cta}
                  </Link>

                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {t.products.kitV1.meta}
                  </span>
                </div>
              </article>

              {/* MVP1 (Coming soon) */}
              <article className="lg:col-start-3 rounded-2xl border border-slate-200 bg-white/80 p-5 flex flex-col gap-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/30 transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/30 flex items-center justify-center">
                  <span className="text-xs tracking-wide text-slate-400 dark:text-slate-500 uppercase text-center px-4">
                    {t.products.mvp1.previewNote}
                  </span>

                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/60 px-3 py-1 text-xs text-slate-700 backdrop-blur dark:border-slate-700/60 dark:bg-slate-950/40 dark:text-slate-200">
                    {t.products.mvp1.badge}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t.products.mvp1.title}
                </h3>

                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {t.products.mvp1.desc}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3">
                  <span
                    className="inline-flex items-center rounded-full border border-slate-300/60 px-4 py-1.5 text-sm text-slate-500 dark:border-slate-700/60 dark:text-slate-400 cursor-not-allowed bg-slate-100 dark:bg-slate-800"
                    aria-disabled="true"
                  >
                    {t.products.mvp1.cta}
                  </span>

                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {t.products.mvp1.meta}
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="space-y-6 max-w-3xl scroll-mt-24">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {t.about.text}
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6 max-w-2xl scroll-mt-24">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm">
            {t.contact.subtitle}
          </p>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
            <input
              name="name"
              required
              autoComplete="name"
              className="text-base sm:text-sm rounded-lg bg-white border border-slate-300 px-4 py-2 text-sm outline-none focus:border-emerald-400 dark:bg-slate-900/40 dark:border-slate-700"
              placeholder={t.contact.name}
            />
            <input
              name="contact"
              type="email"
              required
              autoComplete="email"
              className="text-base sm:text-sm rounded-lg bg-white border border-slate-300 px-4 py-2 text-sm outline-none focus:border-emerald-400 dark:bg-slate-900/40 dark:border-slate-700"
              placeholder={t.contact.email}
            />
            <textarea
              name="message"
              required
              className="text-base sm:text-sm rounded-lg bg-white border border-slate-300 px-4 py-2 text-sm outline-none focus:border-emerald-400 min-h-[140px] dark:bg-slate-900/40 dark:border-slate-700"
              placeholder={t.contact.message}
            />
            <button
              type="submit"
              disabled={formState.status === "sending"}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-300"
            >
              {t.contact.send}
            </button>

            {formState.status === "sending" && (
              <p className="text-xs text-slate-500">{formState.message}</p>
            )}
            {formState.status === "sent" && (
              <p className="text-xs text-emerald-600">{formState.message}</p>
            )}
            {formState.status === "error" && (
              <p className="text-xs text-red-500">
                {formState.message ?? t.contact.errorFallback}
              </p>
            )}
          </form>

          <p className="text-xs text-slate-500 dark:text-slate-500">
            {t.contact.note}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            {t.contact.availability}
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} EEB Web Dev — Montréal.
      </footer>
    </div>
  );
}
