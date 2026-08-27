"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import type { TContent } from "@/app/lib/content";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

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
  const reducedMotion = useReducedMotion();
  const [score, setScore] = useState(72);

  useEffect(() => {
    if (reducedMotion) return;

    const id = setInterval(() => {
      setScore((s) => {
        return s >= 98 ? 72 : s + 1;
      });
    }, 80);

    return () => clearInterval(id);
  }, [reducedMotion]);

  const displayedScore = reducedMotion ? 98 : score;

  return (
    <div className="h-full w-full">
      <div className="w-full px-4 pb-4 pt-4">
        <div className="flex items-baseline justify-between gap-3 min-w-0">
          <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500 whitespace-nowrap">
            {label}
          </p>

          <div className="shrink-0 pr-2">
            <p className="text-2xl font-semibold text-slate-900 dark:text-white tabular-nums leading-none">
              {displayedScore}
            </p>
          </div>
        </div>

        <div className="mt-3 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-emerald-400 transition-[width] duration-300 ease-out motion-reduce:transition-none"
            style={{ width: `${displayedScore}%` }}
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

export type WorkProjectId =
  | "cryoair"
  | "systemkit"
  | "leadgen"
  | "seoAuditor";

type WorkProjectTier = "featured" | "supporting";
type WorkMediaType = "screenshot" | "systemKit" | "leadGen" | "seoScore";

type WorkProjectDefinition = {
  id: WorkProjectId;
  tier: WorkProjectTier;
  media: WorkMediaType;
  hasExtendedCaseStudy: boolean;
};

const workProjects: readonly WorkProjectDefinition[] = [
  {
    id: "cryoair",
    tier: "featured",
    media: "screenshot",
    hasExtendedCaseStudy: true,
  },
  {
    id: "systemkit",
    tier: "supporting",
    media: "systemKit",
    hasExtendedCaseStudy: false,
  },
  {
    id: "leadgen",
    tier: "supporting",
    media: "leadGen",
    hasExtendedCaseStudy: false,
  },
  {
    id: "seoAuditor",
    tier: "supporting",
    media: "seoScore",
    hasExtendedCaseStudy: false,
  },
];

const mediaRenderers: Record<WorkMediaType, (t: TContent) => ReactNode> = {
  screenshot: () => (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
      <Image
        src="/work/cryoair-homepage.png"
        alt="Cryo-Air homepage screenshot"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>
  ),
  systemKit: () => (
    <div className="flex aspect-video items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/30">
      <div className="rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-200">
        Reusable structure · SEO-ready · Conversion-focused
      </div>
    </div>
  ),
  leadGen: (t) => (
    <div className="aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/30">
      <div className="h-full w-full">
        <LeadGenFlow t={t} />
      </div>
    </div>
  ),
  seoScore: () => (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-200/60 p-2 dark:bg-slate-800/30">
      <ScoreLoop
        label="SEO audit"
        caption="Technical issues surfaced clearly"
      />
    </div>
  ),
};

type WorkCardProps = {
  projectId: WorkProjectId;
  hasExtendedCaseStudy: boolean;
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
  projectId,
  hasExtendedCaseStudy,
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
  const triggerId = `work-${projectId}-trigger`;
  const mobileDetailsId = `work-${projectId}-details-mobile`;
  const desktopDetailsId = `work-${projectId}-details-desktop`;
  const extendedDetailsId = projectId;
  const controlledRegions = [
    mobileDetailsId,
    desktopDetailsId,
    ...(hasExtendedCaseStudy ? [extendedDetailsId] : []),
  ].join(" ");

  return (
    <article className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition dark:border-slate-800 dark:bg-slate-900/30">
      <button
        id={triggerId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={controlledRegions}
        className="flex w-full flex-col gap-4 rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
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
        <div
          id={mobileDetailsId}
          aria-labelledby={triggerId}
          className="mt-5 space-y-4 border-t border-slate-200 pt-4 text-sm dark:border-slate-800 md:hidden fade-up-soft"
        >
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

type ExtendedCaseStudyProps = {
  t: TContent;
  onClose: () => void;
  regionId: string;
  labelledBy: string;
};

function CryoAirCaseStudy({
  t,
  onClose,
  regionId,
  labelledBy,
}: ExtendedCaseStudyProps) {
  return (
    <section
      id={regionId}
      aria-labelledby={labelledBy}
      className="max-w-3xl space-y-8"
    >
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
          onClick={onClose}
          className="rounded-sm text-xs text-slate-500 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-400 dark:hover:text-slate-200 dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
        >
          {t.work.cryoair.close}
        </button>
      </div>
    </section>
  );
}

const extendedCaseStudyRenderers: Partial<
  Record<WorkProjectId, (props: ExtendedCaseStudyProps) => ReactNode>
> = {
  cryoair: (props) => <CryoAirCaseStudy {...props} />,
};

export function WorkSection({ t }: WorkSectionProps) {
  const [activeCaseStudy, setActiveCaseStudy] =
    useState<WorkProjectId | null>(null);
  const featuredProjects = workProjects.filter(
    (project) => project.tier === "featured",
  );
  const supportingProjects = workProjects.filter(
    (project) => project.tier === "supporting",
  );
  const hasFeaturedRow = featuredProjects.length > 1;
  const activeProject = activeCaseStudy
    ? workProjects.find((project) => project.id === activeCaseStudy)
    : undefined;
  const activeWorkItem = activeProject ? t.work[activeProject.id] : null;
  const renderExtendedCaseStudy =
    activeProject?.hasExtendedCaseStudy && activeCaseStudy
      ? extendedCaseStudyRenderers[activeCaseStudy]
      : undefined;

  function renderProjectCard(project: WorkProjectDefinition) {
    const content = t.work[project.id];

    return (
      <WorkCard
        key={project.id}
        projectId={project.id}
        hasExtendedCaseStudy={project.hasExtendedCaseStudy}
        title={content.title}
        desc={content.desc}
        meta={content.meta}
        footer={content.footer}
        details={content.details}
        labels={t.work.detailLabels}
        isOpen={activeCaseStudy === project.id}
        onToggle={() =>
          setActiveCaseStudy((previous) =>
            previous === project.id ? null : project.id,
          )
        }
        expandLabel={t.work.expandLabel}
        collapseLabel={t.work.collapseLabel}
        media={mediaRenderers[project.media](t)}
      />
    );
  }

  return (
    <>
      <section id="work" className="relative isolate scroll-mt-24 py-10 sm:py-12">
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

          {hasFeaturedRow ? (
            <div className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {featuredProjects.map(renderProjectCard)}
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {supportingProjects.map(renderProjectCard)}
              </div>
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {workProjects.map(renderProjectCard)}
            </div>
          )}

          {activeWorkItem && (
            <div
              id={`work-${activeCaseStudy}-details-desktop`}
              aria-labelledby={`work-${activeCaseStudy}-trigger`}
              className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/30 hidden md:block fade-up-soft"
            >

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
                  className="rounded-sm text-xs text-slate-500 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-400 dark:hover:text-slate-200 dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
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

      {renderExtendedCaseStudy &&
        activeCaseStudy &&
        renderExtendedCaseStudy({
          t,
          onClose: () => setActiveCaseStudy(null),
          regionId: activeCaseStudy,
          labelledBy: `work-${activeCaseStudy}-trigger`,
        })}
    </>
  );
}
