"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { TContent } from "@/app/lib/content";

function LeadGenFlow({ t }: { t: TContent }) {
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

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr,auto,1fr,auto,1fr,auto,1fr] sm:items-center">
        <FlowNode
          title={t.leadFlow.nodes.visitor.title}
          subtitle={t.leadFlow.nodes.visitor.subtitle}
          icon="👤"
        />
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
      <span className="hidden sm:inline" aria-hidden>
        →
      </span>
      <span className="sm:hidden" aria-hidden>
        ↓
      </span>
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

export function ScoreLoop({
  label,
  caption,
}: {
  label: string;
  caption: string;
}) {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    // Set a stable initial value after mount
    setScore(72);

    const id = setInterval(() => {
      setScore((s) => {
        const curr = typeof s === "number" ? s : 72;
        return curr >= 98 ? 72 : curr + 1;
      });
    }, 80);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-full w-full">
      <div className="w-full px-4 pb-4 pt-4">
        <div className="flex items-baseline justify-between gap-3 min-w-0">
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500 whitespace-nowrap">
            {label}
          </p>

          <div className="shrink-0 pr-2">
            <p className="text-2xl font-semibold text-slate-900 dark:text-white tabular-nums leading-none">
              {score ?? "—"}
            </p>
          </div>
        </div>

        <div className="mt-3 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-emerald-400 transition-[width] duration-300 ease-out"
            style={{ width: `${score ?? 0}%` }}
          />
        </div>

        <p className="mt-2 text-[0.75rem] text-slate-600 dark:text-slate-300">
          {caption}
        </p>
      </div>
    </div>
  );
}


type WorkSectionProps = {
  t: TContent;
};

type WorkCardProps = {
  id: string;
  title: string;
  desc: string;
  meta: string;
  footer: string;
  details: {
    problem: string;
    solution: string;
    context: string;
  };
  labels: {
    problem: string;
    solution: string;
    context: string;
  };
  isOpen: boolean;
  onToggle: () => void;
  media: React.ReactNode;
  expandLabel: string;
  collapseLabel: string;
};

function WorkCard({
  title,
  desc,
  meta,
  footer,
  details,
  isOpen,
  onToggle,
  media,
  expandLabel,
  collapseLabel,
  labels,
}: WorkCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition dark:border-slate-800 dark:bg-slate-900/30">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full flex-col gap-4 text-left"
      >
        {media}

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="text-sm text-slate-700 dark:text-slate-300">{desc}</p>

          <p className="text-xs text-slate-600 dark:text-slate-400">{meta}</p>

          <span className="inline-flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200/80">
            {footer}
            <span aria-hidden>•</span>
            <span className="underline decoration-dotted underline-offset-4">
              {isOpen ? collapseLabel : expandLabel}
            </span>
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="mt-5 space-y-4 border-t border-slate-200 pt-4 text-sm dark:border-slate-800 md:hidden fade-up-soft">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {labels.problem}
            </p>
            <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">
              {details.problem}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {labels.solution}
            </p>
            <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">
              {details.solution}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {labels.context}
            </p>
            <p className="mt-2 leading-relaxed text-slate-700 dark:text-slate-300">
              {details.context}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}

export function WorkSection({ t }: WorkSectionProps) {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const activeWorkItem =
    activeCaseStudy === "cryoair"
      ? t.work.cryoair
      : activeCaseStudy === "systemkit"
        ? t.work.systemkit
        : activeCaseStudy === "leadgen"
          ? t.work.leadgen
          : activeCaseStudy === "seoAuditor"
            ? t.work.seoAuditor
            : null;

  return (
    <>
      <section id="work" className="relative isolate py-10 sm:py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-emerald-500/6 via-transparent to-transparent dark:from-emerald-400/10"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_15%_15%,rgba(16,185,129,0.08),transparent_60%),radial-gradient(900px_circle_at_85%_25%,rgba(99,102,241,0.06),transparent_60%)] dark:bg-[radial-gradient(900px_circle_at_15%_15%,rgba(52,211,153,0.10),transparent_60%),radial-gradient(900px_circle_at_85%_25%,rgba(129,140,248,0.08),transparent_60%)]"
        />

        <div className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {t.work.title}
            </h2>
            <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
              {t.work.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <WorkCard
              id="cryoair"
              title={t.work.cryoair.title}
              desc={t.work.cryoair.desc}
              meta={t.work.cryoair.meta}
              footer={t.work.cryoair.footer}
              details={t.work.cryoair.details}
              labels={t.work.detailLabels}
              isOpen={activeCaseStudy === "cryoair"}
              onToggle={() =>
                setActiveCaseStudy((prev) => (prev === "cryoair" ? null : "cryoair"))
              }

              expandLabel={t.work.expandLabel}
              collapseLabel={t.work.collapseLabel}
              media={
                <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                  <Image
                    src="/work/cryoair-homepage.png"
                    alt="Cryo-Air homepage screenshot"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              }
            />

            <WorkCard
              id="systemkit"
              title={t.work.systemkit.title}
              desc={t.work.systemkit.desc}
              meta={t.work.systemkit.meta}
              footer={t.work.systemkit.footer}
              details={t.work.systemkit.details}
              labels={t.work.detailLabels}
              isOpen={activeCaseStudy === "systemkit"}
              onToggle={() =>
                setActiveCaseStudy((prev) =>
                  prev === "systemkit" ? null : "systemkit",
                )
              }
              expandLabel={t.work.expandLabel}
              collapseLabel={t.work.collapseLabel}
              media={
                <div className="flex aspect-video items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/30">
                  <div className="rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-200">
                    Reusable structure · SEO-ready · Conversion-focused
                  </div>
                </div>
              }
            />

            <WorkCard
              id="leadgen"
              title={t.work.leadgen.title}
              desc={t.work.leadgen.desc}
              meta={t.work.leadgen.meta}
              footer={t.work.leadgen.footer}
              details={t.work.leadgen.details}
              labels={t.work.detailLabels}
              isOpen={activeCaseStudy === "leadgen"}
              onToggle={() =>
                setActiveCaseStudy((prev) => (prev === "leadgen" ? null : "leadgen"))
              }
              expandLabel={t.work.expandLabel}
              collapseLabel={t.work.collapseLabel}
              media={
                <div className="aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/30">
                  <div className="h-full w-full">
                    <LeadGenFlow t={t} />
                  </div>
                </div>
              }
            />

            <WorkCard
              id="seoAuditor"
              title={t.work.seoAuditor.title}
              desc={t.work.seoAuditor.desc}
              meta={t.work.seoAuditor.meta}
              footer={t.work.seoAuditor.footer}
              details={t.work.seoAuditor.details}
              labels={t.work.detailLabels}
              isOpen={activeCaseStudy === "seoAuditor"}
              onToggle={() =>
                setActiveCaseStudy((prev) =>
                  prev === "seoAuditor" ? null : "seoAuditor",
                )
              }
              expandLabel={t.work.expandLabel}
              collapseLabel={t.work.collapseLabel}
              media={
                <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-200/60 p-2 dark:bg-slate-800/30">
                  <ScoreLoop
                    label="SEO audit"
                    caption="Technical issues surfaced clearly"
                  />
                </div>
              }
            />
          </div>

          {activeWorkItem && (
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/30 hidden md:block fade-up-soft">

              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {activeWorkItem.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {activeWorkItem.meta}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveCaseStudy(null)}
                  className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  {t.work.collapseLabel}
                </button>
              </div>

              {/* Content */}
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.work.detailLabels.problem}
                  </p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeWorkItem.details.problem}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.work.detailLabels.solution}
                  </p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeWorkItem.details.solution}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.work.detailLabels.context}
                  </p>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeWorkItem.details.context}
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {activeCaseStudy === "cryoair" && (
        <section id="cryoair" className="max-w-3xl space-y-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {t.work.cryoair.caseTitle}
          </h2>

          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {t.work.cryoair.p1}
          </p>

          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
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

          <div className="grid gap-6 text-sm md:grid-cols-2">
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
                {t.work.cryoair.resultLabel}
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                {t.work.cryoair.resultText}
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-900 dark:text-white">
                {t.work.cryoair.statusLabel}
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
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {t.work.cryoair.approachP}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.work.cryoair.approachNote}
            </p>
          </div>

          <div className="flex items-center gap-4">
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
    </>
  );
}
