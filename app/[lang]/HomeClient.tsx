"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

type Lang = "en" | "fr";

function ThemeToggle() {
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
      {isDark ? "🌙 Dark" : "☀️ Light"}
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
      className={`relative inline-flex items-center rounded-full px-1.5 py-0.5 text-[0.8rem] font-medium transition ${
        isActive
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

function LeadGenFlow({ t }: { t: any }) {
  return (
    <div className="h-full w-full p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {t.leadFlow.title}
        </p>
        <span className="text-[0.7rem] text-slate-500 dark:text-slate-400">
          {t.leadFlow.badge}
        </span>
      </div>

      <div className="grid grid-cols-[1fr,auto,1fr,auto,1fr,auto,1fr] items-center gap-2">
        <FlowNode
          title={t.leadFlow.nodes.visitor.title}
          subtitle={t.leadFlow.nodes.visitor.subtitle}
          icon="👤"
        />
        ...
        <FlowArrow />
        <FlowNode
          title={t.leadFlow.nodes.landing.title}
          subtitle={t.leadFlow.nodes.landing.subtitle}
          icon="📄"
        />
        <FlowArrow />
        <FlowNode
          title={t.leadFlow.nodes.form.title}
          subtitle={t.leadFlow.nodes.form.subtitle}
          icon="✉️"
        />
        <FlowArrow />
        <FlowNode
          title={t.leadFlow.nodes.inbox.title}
          subtitle={t.leadFlow.nodes.inbox.subtitle}
          icon="🗂️"
        />
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 p-3 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900/30 dark:text-slate-300">
        {t.leadFlow.note}
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-slate-400 dark:text-slate-600">
      <span aria-hidden>→</span>
    </div>
  );
}

function FlowNode({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <div className="flex items-center gap-2">
        <span className="text-base" aria-hidden>
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
            {title}
          </p>
          <p className="text-[0.75rem] text-slate-600 dark:text-slate-400 truncate">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScoreLoop({ label, caption }: { label: string; caption: string }) {
  const [score, setScore] = useState(72);

  useEffect(() => {
    const id = setInterval(() => {
      setScore((s) => (s >= 98 ? 72 : s + 1));
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full px-4 pb-4">
        <div className="flex items-end justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
            {label}
          </p>
          <p className="text-2xl font-semibold text-slate-900 dark:text-white tabular-nums">
            {score}
          </p>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-emerald-400 transition-all duration-300 ease-out"
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="mt-2 text-[0.75rem] text-slate-600 dark:text-slate-300">
          {caption}
        </p>
      </div>
    </div>
  );
}
/* Home client*/
export default function HomeClient({
  lang,
  content,
}: {
  lang: Lang;
  content: any;
}) {
  const t = content[lang] ?? content.en;

  const [activeService, setActiveService] = useState<ServiceId>("websites");
  const [activeCaseStudy, setActiveCaseStudy] = useState<"cryoair" | null>(
    null
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  {
    /* switchlang function*/
  }
  function switchLang(next: "en" | "fr") {
    document.cookie = `lang=${next}; path=/; max-age=31536000`;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    window.location.href = `/${next}${hash}`;
  }

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
    } catch (err) {
      const msg =
        err instanceof Error && err.message
          ? err.message
          : t.contact.errorFallback;

      setFormState({ status: "error", message: msg });
    }
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
              href="#work"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              {t.nav.work}
            </a>
            <a
              href="#services"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              {t.nav.services}
            </a>
            <a
              href="#about"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className="hover:text-slate-900 dark:hover:text-white transition"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle />

            <div className="hidden sm:flex items-center gap-2">
              <div className="inline-flex items-center rounded-full border border-slate-300/60 bg-white/70 p-1 text-xs backdrop-blur transition-colors duration-200 dark:border-slate-700/60 dark:bg-slate-900/50">
                <Link
                  href={`/en${
                    typeof window !== "undefined" ? window.location.hash : ""
                  }`}
                  scroll={false}
                  className={`rounded-full px-3 py-1 transition-all duration-200 ease-out active:scale-[0.98] ${
                    lang === "en"
                      ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  EN
                </Link>

                <Link
                  href={`/fr${
                    typeof window !== "undefined" ? window.location.hash : ""
                  }`}
                  scroll={false}
                  className={`rounded-full px-3 py-1 transition-all duration-200 ease-out active:scale-[0.98] ${
                    lang === "fr"
                      ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  FR
                </Link>
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
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center rounded-full bg-emerald-400 px-4 py-1.5 text-sm font-medium text-slate-900 shadow transition hover:bg-emerald-300"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur">
            <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4 text-sm text-slate-700 dark:text-slate-200">
              <a
                href="#work"
                onClick={() => setMobileOpen(false)}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {t.nav.work}
              </a>
              <a
                href="#services"
                onClick={() => setMobileOpen(false)}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {t.nav.services}
              </a>
              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {t.nav.about}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="hover:text-slate-900 dark:hover:text-white"
              >
                {t.nav.contact}
              </a>

              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
                <Link
                  href={`/en${
                    typeof window !== "undefined" ? window.location.hash : ""
                  }`}
                  scroll={false}
                  className={`text-xs px-3 py-1 rounded-full border ${
                    lang === "en"
                      ? "border-slate-400 text-slate-900 dark:text-white"
                      : "border-slate-300/60 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  EN
                </Link>

                <Link
                  href={`/fr${
                    typeof window !== "undefined" ? window.location.hash : ""
                  }`}
                  scroll={false}
                  className={`text-xs px-3 py-1 rounded-full border ${
                    lang === "fr"
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
        <section className="grid gap-12 md:grid-cols-[1.1fr,0.9fr] items-center">
          {/* Left column */}
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-700 dark:text-emerald-50">
              {t.hero.badge}
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              {t.hero.headline}
            </h1>

            <p className="text-slate-700 dark:text-slate-300 max-w-lg">
              {t.hero.subtext}
            </p>

            <p className="text-slate-700 dark:text-slate-300 max-w-lg">
              {t.hero.personal}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-medium text-slate-900 shadow transition hover:bg-emerald-300"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              >
                {t.hero.ctaSecondary} <span aria-hidden>→</span>
              </a>
            </div>

            <div className="flex gap-4 pt-4 text-xs text-slate-500 dark:text-slate-400">
              {t.hero.stats.map((stat: { label: string; value: string }) => (
                <div key={stat.label}>
                  <p className="text-slate-900 dark:text-slate-50 text-lg font-semibold">
                    {stat.value}
                  </p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg space-y-6 dark:border-slate-800 dark:bg-slate-900/40">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {t.hero.nextProject.label}
            </p>

            <div className="rounded-xl bg-slate-100 border border-slate-200 p-4 flex flex-col gap-2 dark:bg-slate-950/40 dark:border-slate-800">
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                {t.hero.nextProject.title}
              </h2>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                {t.hero.nextProject.desc}
              </p>

              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                {t.hero.nextProject.bullets.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-500">
              {t.hero.nextProject.note}
            </p>
          </div>
        </section>

        {/* Work (kept as-is for now) */}
        <section id="work" className="space-y-8 scroll-mt-32">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
              {t.work.title}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
              {t.work.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* OTA */}
            <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 flex flex-col gap-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/30">
              <div className="relative h-40 sm:aspect-video sm:h-auto aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 via-slate-400 to-slate-200/0 dark:from-slate-900 dark:via-slate-700 dark:to-slate-900/0">
                <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-700 backdrop-blur dark:text-emerald-200">
                  <span aria-hidden>⏳</span>
                  <span>{t.work.ota.badge}</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-xs text-slate-700 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/40 dark:text-slate-200">
                    {t.work.ota.note}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {t.work.ota.title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {t.work.ota.desc}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {t.work.ota.meta}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400/90">
                {t.work.ota.footer}
              </span>
            </article>

            {/* Lead Gen */}
            <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 flex flex-col gap-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/30">
              <div className="aspect-video h-40 sm:aspect-video sm:h-auto overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/30">
                <LeadGenFlow t={t} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {t.work.leadgen.title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {t.work.leadgen.desc}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {t.work.leadgen.meta}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-slate-700 dark:text-slate-200/80">
                {t.work.leadgen.footer}
              </span>
            </article>

            {/* Scoring Concept */}
            <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 flex flex-col gap-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/30">
              <div className="relative h-40 sm:aspect-video sm:h-auto rounded-xl bg-slate-200/60 dark:bg-slate-800/30 overflow-hidden">
                <ScoreLoop
                  label={t.work.scoring.loopLabel}
                  caption={t.work.scoring.loopCaption}
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {t.work.scoring.title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {t.work.scoring.desc}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {t.work.scoring.meta}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-slate-700 dark:text-slate-200/80">
                {t.work.scoring.footer}
              </span>
            </article>

            {/* Cryo-Air */}
            <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 flex flex-col gap-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/30">
              <button
                type="button"
                onClick={() =>
                  setActiveCaseStudy((prev) =>
                    prev === "cryoair" ? null : "cryoair"
                  )
                }
                className="flex flex-col gap-4 text-left group"
              >
                <div className="relative h-40 sm:aspect-video sm:h-auto aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                  <Image
                    src="/work/cryoair-homepage.png"
                    alt="Cryo-Air homepage screenshot"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={false}
                  />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t.work.cryoair.title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {t.work.cryoair.desc}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {t.work.cryoair.meta}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-slate-700 dark:text-slate-200/80">
                  Shopify / Liquid <span aria-hidden>•</span>{" "}
                  <span className="underline decoration-dotted">
                    {activeCaseStudy === "cryoair"
                      ? t.work.cryoair.hideDetails
                      : t.work.cryoair.viewOverview}
                  </span>
                </span>
              </button>
            </article>
          </div>
        </section>

        {activeCaseStudy === "cryoair" && (
          <section id="cryoair" className="space-y-8 max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
              {t.work.cryoair.caseTitle}
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {t.work.cryoair.p1}
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {t.work.cryoair.p2}
            </p>

            <div className="space-y-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <Image
                  src="/work/cryoair-shoppage.png"
                  alt="Cryo-Air product catalog screenshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.work.cryoair.shotCaption}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 text-sm">
              <div className="space-y-1">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {t.work.cryoair.roleLabel}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {t.work.cryoair.roleText}
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {t.work.cryoair.toolsLabel}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {t.work.cryoair.toolsText}
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-slate-900 dark:text-white">
                  R{t.work.cryoair.resultLabel}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  C{t.work.cryoair.resultText}
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {t.work.cryoair.resultStatus}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {t.work.cryoair.statusText}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {t.work.cryoair.approachTitle}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {t.work.cryoair.approachP}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.work.cryoair.approachNote}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://cryo-air.ca"
                target="_blank"
                className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                {t.work.cryoair.visit}
              </a>
              <button
                type="button"
                onClick={() => setActiveCaseStudy(null)}
                className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                {t.work.cryoair.close}
              </button>
            </div>
          </section>
        )}

        {/* Services */}
        <section id="services" className="space-y-8 scroll-mt-24">
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
              className="rounded-lg bg-white border border-slate-300 px-4 py-2 text-sm outline-none focus:border-emerald-400 dark:bg-slate-900/40 dark:border-slate-700"
              placeholder={t.contact.name}
            />
            <input
              name="contact"
              type="email"
              required
              autoComplete="email"
              className="rounded-lg bg-white border border-slate-300 px-4 py-2 text-sm outline-none focus:border-emerald-400 dark:bg-slate-900/40 dark:border-slate-700"
              placeholder={t.contact.email}
            />
            <textarea
              name="message"
              required
              className="rounded-lg bg-white border border-slate-300 px-4 py-2 text-sm outline-none focus:border-emerald-400 min-h-[140px] dark:bg-slate-900/40 dark:border-slate-700"
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
