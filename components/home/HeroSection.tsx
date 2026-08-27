"use client";

import { useEffect, useMemo, useState } from "react";
import type { TContent } from "@/app/lib/content";

type HeroProps = {
  t: TContent;
};

function TerminalCard({ lines }: { lines: string[] }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const fullLine = lines[currentLine];
    let charIndex = 0;

    const typing = setInterval(() => {
      charIndex += 1;
      setCurrentText(fullLine.slice(0, charIndex));

      if (charIndex >= fullLine.length) {
        clearInterval(typing);

        setTimeout(() => {
          setVisibleLines((prev) => [...prev, fullLine]);
          setCurrentText("");
          setCurrentLine((prev) => prev + 1);
        }, 300);
      }
    }, 35);

    return () => clearInterval(typing);
  }, [currentLine, lines]);

  const completed = currentLine >= lines.length;

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/75 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-950/55">
      <div className="flex items-center gap-2 border-b border-slate-200/80 px-4 py-3 dark:border-slate-800">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
        <p className="ml-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          site-analysis
        </p>
      </div>

      <div className="space-y-3 p-5 font-mono text-sm leading-6 text-slate-700 dark:text-slate-200 min-h-[260px]">
        {visibleLines.map((line) => (
          <div key={line} className="flex gap-2">
            <span className="text-emerald-500 dark:text-emerald-400">{">"}</span>
            <span>{line}</span>
          </div>
        ))}

        {!completed && (
          <div className="flex gap-2">
            <span className="text-emerald-500 dark:text-emerald-400">{">"}</span>
            <span>
              {currentText}
              <span className="ml-0.5 inline-block h-4 w-[1px] animate-pulse bg-slate-500 dark:bg-slate-300 align-middle" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function HeroSection({ t }: HeroProps) {
  const lines = useMemo(() => t.hero.terminalLines, [t.hero.terminalLines]);

  return (
    <section className="relative overflow-hidden rounded-3xl px-6 py-16 sm:px-10">
      <img
        src="/hero/abstract-flow.png"
        alt=""
        className="hero-drift pointer-events-none absolute inset-0 h-full w-full object-cover object-[60%_50%] opacity-70 dark:opacity-35"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/45 to-transparent dark:hidden" />
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-zinc-950/75 via-indigo-950/35 to-transparent" />

      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-r from-emerald-500/10 via-sky-500/5 to-indigo-500/10
          dark:from-emerald-400/10 dark:via-sky-400/5 dark:to-indigo-400/10
          mix-blend-multiply dark:mix-blend-screen
        "
      />

      <div className="hero-enter relative z-10 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-700 dark:text-emerald-50">
            {t.hero.badge}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {t.hero.headline}
          </h1>

          <div className="max-w-2xl space-y-4 text-slate-700 dark:text-slate-300">
            {t.hero.subtext.split("\n\n").map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-medium text-slate-900 shadow transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
            >
              {t.hero.ctaPrimary}
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-sm text-sm text-slate-700 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-200 dark:hover:text-white dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950"
            >
              {t.hero.ctaSecondary}
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-500 dark:text-slate-400">
            {t.hero.stats.map((stat: { label: string; value: string }) => (
              <div key={stat.label}>
                <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {stat.value}
                </p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <TerminalCard lines={lines} />
      </div>
    </section>
  );
}
