"use client";

import { type CSSProperties, useState } from "react";
import { serviceIcons } from "./serviceIcons";
import type { TContent } from "@/app/lib/content";

type ServicesSectionProps = {
    t: TContent;
};


export type ServiceId =
    | "webDesign"
    | "bilingual"
    | "seoPerformance"
    | "automation"
    | "visualDirection";

const serviceOrder: ServiceId[] = [
    "webDesign",
    "bilingual",
    "seoPerformance",
    "automation",
    "visualDirection",
];


function getServiceItems(t: TContent): Record<
    ServiceId,
    {
        title: string;
        description: string;
        tag: string;
        showcaseTitle: string;
        showcaseText: string;
    }
> {
    return t.services.items;
}

type ServiceListItemProps = {
    id: ServiceId;
    service: {
        title: string;
        description: string;
        tag: string;
        showcaseTitle: string;
        showcaseText: string;
    };
    activeService: ServiceId;
    setActiveService: (id: ServiceId) => void;
};

function ServiceListItem({
    id,
    service,
    activeService,
    setActiveService,
}: ServiceListItemProps) {
    const isActive = activeService === id;
    const Icon = serviceIcons[id];

    return (
        <div className="relative">
            <button
                type="button"
                onMouseEnter={() => setActiveService(id)}
                onFocus={() => setActiveService(id)}
                onClick={() => setActiveService(id)}
                aria-expanded={isActive}
                className={[
                    "group relative w-full overflow-hidden rounded-2xl border px-4 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950",
                    isActive
                        ? "border-slate-200 bg-white text-slate-950 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.35)] dark:border-slate-200 dark:bg-white dark:text-slate-950"
                        : "border-slate-200 bg-white/[0.75] text-slate-900 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:hover:border-slate-700 dark:hover:bg-slate-900/80",
                ].join(" ")}
            >
                <div className="flex items-start gap-4">
                    <div
                        className={[
                            "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300",
                            isActive
                                ? "border-slate-300/80 bg-slate-50 dark:border-slate-300/30 dark:bg-slate-200/70"
                                : "border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/60",
                        ].join(" ")}
                    >
                        <Icon
                            strokeWidth={1.75}
                            className={[
                                "h-[18px] w-[18px] transition-all duration-300",
                                isActive
                                    ? "text-slate-700 dark:text-slate-800"
                                    : "text-slate-600 opacity-85 group-hover:opacity-100 dark:text-slate-300",
                            ].join(" ")}
                        />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                            <h3
                                className={[
                                    "text-sm font-medium sm:text-[0.95rem]",
                                    isActive
                                        ? "text-slate-950 dark:text-slate-950"
                                        : "text-slate-900 dark:text-white",
                                ].join(" ")}
                            >
                                {service.title}
                            </h3>

                            <span
                                className={[
                                    "shrink-0 text-[0.65rem] uppercase tracking-[0.18em]",
                                    isActive
                                        ? "text-slate-500 dark:text-slate-950/65"
                                        : "text-slate-400 dark:text-slate-500",
                                ].join(" ")}
                            >
                                {service.tag}
                            </span>
                        </div>

                        <p
                            className={[
                                "mt-2 pr-2 text-sm leading-relaxed",
                                isActive
                                    ? "text-slate-700 dark:text-slate-800"
                                    : "text-slate-600 dark:text-slate-300",
                            ].join(" ")}
                        >
                            {service.description}
                        </p>
                    </div>
                </div>
            </button>

            {isActive && (
                <div className="mt-2 rounded-2xl border border-slate-200 bg-white/[0.72] p-3.5 shadow-sm dark:border-slate-800 dark:bg-slate-950/50 lg:hidden">
                    <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                        {service.tag}
                    </p>

                    <h4 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                        {service.showcaseTitle}
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {service.showcaseText}
                    </p>
                </div>
            )}
        </div>
    );
}


type ServiceDetailPanelProps = {
    activeService: ServiceId;
    t: TContent;
};

function ServiceDetailPanel({ activeService, t }: ServiceDetailPanelProps) {
    const services = getServiceItems(t);
    const activeIndex = serviceOrder.indexOf(activeService);

    const cardBase =
        "absolute inset-x-6 top-0 h-full overflow-hidden rounded-[1.9rem] border backdrop-blur-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

    const stackStyles = [
        {
            transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)",
            zIndex: 30,
            opacity: 1,
            visual:
                "border-slate-200/90 bg-white/[0.92] shadow-[0_26px_55px_-24px_rgba(15,23,42,0.22),0_10px_24px_-20px_rgba(15,23,42,0.14)] dark:border-slate-600 dark:bg-slate-950",
        },
        {
            transform: "translate3d(-1.15rem, 0.45rem, 0) rotate(-2.5deg) scale(0.985)",
            zIndex: 18,
            opacity: 0.82,
            visual:
                "border-slate-200/95 bg-white/[0.86] shadow-[0_20px_34px_-22px_rgba(15,23,42,0.20)] dark:border-white/[0.12] dark:bg-sky-300/[0.045]",
        },
        {
            transform: "translate3d(1.35rem, -0.45rem, 0) rotate(2.25deg) scale(0.975)",
            zIndex: 16,
            opacity: 0.68,
            visual:
                "border-slate-200/95 bg-white/[0.82] shadow-[0_18px_32px_-22px_rgba(15,23,42,0.20)] dark:border-white/[0.09] dark:bg-sky-400/[0.035]",
        },
        {
            transform: "translate3d(-1.85rem, 1.05rem, 0) rotate(-3.75deg) scale(0.965)",
            zIndex: 14,
            opacity: 0.52,
            visual:
                "border-slate-200/95 bg-white/[0.78] shadow-[0_16px_30px_-22px_rgba(15,23,42,0.18)] dark:border-white/[0.07] dark:bg-sky-300/[0.025]",
        },
        {
            transform: "translate3d(2.15rem, 1.45rem, 0) rotate(4.25deg) scale(0.955)",
            zIndex: 12,
            opacity: 0.38,
            visual:
                "border-slate-200/90 bg-white/[0.82] shadow-[0_14px_28px_-22px_rgba(15,23,42,0.16)] dark:border-white/[0.05] dark:bg-white/[0.018]",
        },
    ] satisfies {
        transform: string;
        zIndex: number;
        opacity: number;
        visual: string;
    }[];

    const getCardPosition = (serviceId: ServiceId) => {
        const serviceIndex = serviceOrder.indexOf(serviceId);
        const deckPosition =
            (serviceIndex - activeIndex + serviceOrder.length) % serviceOrder.length;
        const stackStyle = stackStyles[deckPosition];

        return {
            deckPosition,
            isActive: deckPosition === 0,
            className: stackStyle.visual,
            style: {
                opacity: stackStyle.opacity,
                pointerEvents: deckPosition === 0 ? "auto" : "none",
                transform: stackStyle.transform,
                zIndex: stackStyle.zIndex,
            } satisfies CSSProperties,
        };
    };

    return (
        <div className="relative mx-auto w-full max-w-xl overflow-visible">
            <div className="relative h-14">
                {/* CORE LIGHT */}
                <div className="pointer-events-none absolute left-1/2 top-5 z-30 hidden h-[2px] w-[23rem] -translate-x-1/2 rounded-full bg-white/[0.95] blur-[0.3px] dark:block" />

                {/* MICRO GLOW */}
                <div className="pointer-events-none absolute left-1/2 top-[18px] z-20 hidden h-[6px] w-[24rem] -translate-x-1/2 rounded-full bg-white/[0.40] blur-md dark:block" />

                {/* MAIN BLOOM */}
                <div className="pointer-events-none absolute left-1/2 top-7 z-10 hidden h-20 w-[28rem] -translate-x-1/2 rounded-full bg-sky-300/16 blur-2xl dark:block" />

                {/* OUTER ATMOSPHERE */}
                <div className="pointer-events-none absolute left-1/2 top-3 z-0 hidden h-24 w-[30rem] -translate-x-1/2 rounded-full bg-sky-200/8 blur-3xl dark:block" />
            </div>

            {/* STACK AREA */}
            <div className="relative mt-14 h-[18.5rem] w-full overflow-visible px-6">

                {/* LEFT ARC — dark mode only */}
                <div className="pointer-events-none absolute -left-12 top-24 z-0 hidden dark:block">
                    {/* soft glow */}
                    <div className="absolute left-0 top-0 h-44 w-44 rounded-full border-[8px] border-cyan-200/16 blur-xl" />

                    {/* clipped arc line */}
                    <div className="relative h-44 w-24 overflow-hidden opacity-65">
                        <div className="h-44 w-44 rounded-full border-[2px] border-white/22" />
                    </div>
                </div>

                {serviceOrder.map((serviceId) => {
                    const service = services[serviceId];
                    const cardPosition = getCardPosition(serviceId);

                    return (
                        <div
                            key={serviceId}
                            aria-hidden={!cardPosition.isActive}
                            className={`${cardBase} ${cardPosition.className}`}
                            style={cardPosition.style}
                        >
                            <div className="relative flex h-full flex-col px-6 pt-8 pb-6">
                                {/* DARK MODE REFLECTION */}
                                <div
                                    className={[
                                        "pointer-events-none absolute inset-x-10 top-0 hidden h-16 rounded-full bg-sky-200/14 blur-2xl transition-opacity duration-500 motion-reduce:transition-none dark:block",
                                        cardPosition.isActive ? "opacity-100" : "opacity-35",
                                    ].join(" ")}
                                />

                                <div
                                    className={[
                                        "transition-opacity duration-500 motion-reduce:transition-none",
                                        cardPosition.isActive ? "opacity-100" : "opacity-35",
                                    ].join(" ")}
                                >
                                    {/* HEADER */}
                                    <div className="mb-6">
                                        <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                                            {service.tag}
                                        </p>
                                    </div>

                                    {/* TITLE */}
                                    <h3
                                        className={[
                                            "text-center font-semibold text-slate-900 dark:text-white",
                                            cardPosition.isActive ? "text-lg" : "text-base",
                                        ].join(" ")}
                                    >
                                        {service.showcaseTitle}
                                    </h3>
                                </div>

                                <div
                                    className={[
                                        "mt-4 mb-5 flex justify-center transition-opacity duration-500 motion-reduce:transition-none",
                                        cardPosition.isActive ? "opacity-100" : "opacity-20",
                                    ].join(" ")}
                                >
                                    <div className="relative h-px w-40">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-white/12" />
                                        <div className="absolute left-1/2 top-1/2 h-px w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-300/60 blur-[0.4px] dark:bg-white/[0.18]" />
                                    </div>
                                </div>

                                <p
                                    className={[
                                        "mx-auto max-w-[30ch] text-center text-sm leading-relaxed text-slate-600 transition-opacity duration-500 motion-reduce:transition-none dark:text-slate-300",
                                        cardPosition.isActive ? "opacity-100" : "opacity-0",
                                    ].join(" ")}
                                >
                                    {service.showcaseText}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function ServicesSection({ t }: ServicesSectionProps) {
    const [activeService, setActiveService] = useState<ServiceId>("webDesign");

    return (
        <section
            id="services"
            className="relative isolate overflow-hidden scroll-mt-24 py-12 sm:py-16"
        >
            <div className="pointer-events-none absolute bottom-20 right-0 -z-10 h-[360px] w-[520px] text-slate-500/[0.22] dark:text-slate-700/[0.35]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
                        backgroundSize: "28px 28px",
                        maskImage:
                            "radial-gradient(circle at bottom right, black 0%, black 24%, transparent 72%)",
                        WebkitMaskImage:
                            "radial-gradient(circle at bottom right, black 0%, black 24%, transparent 72%)",
                    }}
                />
            </div>

            <div>
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
                    <div className="max-w-2xl">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
                                    {t.services.title}
                                </p>

                                <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                    {t.services.headline}
                                </h2>

                                <p className="max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-[0.95rem]">
                                    {t.services.intro}
                                </p>
                            </div>

                            <div className="space-y-3 pt-2">
                                {serviceOrder.map((serviceId) => {
                                    const service = getServiceItems(t)[serviceId];

                                    return (
                                        <ServiceListItem
                                            key={serviceId}
                                            id={serviceId}
                                            service={service}
                                            activeService={activeService}
                                            setActiveService={setActiveService}
                                        />
                                    );
                                })}
                            </div>

                            <p className="pl-1 text-xs text-slate-500 dark:text-slate-400">
                                {t.services.hint}
                            </p>
                        </div>
                    </div>

                    <div className="relative hidden lg:grid lg:min-h-[720px] lg:grid-rows-[1fr_auto_1fr] lg:pl-6">
                        <div />
                        <div>
                            <ServiceDetailPanel activeService={activeService} t={t} />
                        </div>
                        <div />
                    </div>
                </div>
            </div>
        </section>
    );
}
