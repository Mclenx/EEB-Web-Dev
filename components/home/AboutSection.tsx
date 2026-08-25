import type { TContent } from "@/app/lib/content";

export function AboutSection({ t }: { t: TContent }) {
  return (
    <section id="about" className="scroll-mt-24 py-12 sm:py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
            {t.about.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.about.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xl font-medium leading-snug tracking-tight text-slate-800 dark:text-slate-100 sm:text-2xl">
            {t.about.headline}
          </p>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-emerald-400/20 via-emerald-400 to-sky-400/70" />

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-[0.95rem]">
            {t.about.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] md:items-stretch md:gap-12 lg:gap-16">
            {t.about.principles.slice(0, 2).map((principle, index) => (
              <div key={principle.title} className="contents">
                {index === 1 && (
                  <div
                    aria-hidden="true"
                    className="relative h-px w-full bg-slate-200 md:h-full md:w-px dark:bg-transparent"
                  >
                    <div className="absolute inset-0 hidden bg-white/80 dark:block" />
                    <div className="absolute left-1/2 top-1/2 hidden h-3 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/15 blur-md dark:block md:h-3/4 md:w-3" />
                    <div className="absolute left-1/2 top-1/2 hidden h-8 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/[0.05] blur-xl dark:block md:h-full md:w-8" />
                  </div>
                )}

                <article className="mx-auto max-w-md text-center md:text-left">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-[0.95rem]">
                    {principle.text}
                  </p>
                </article>
              </div>
            ))}
          </div>

          <article className="mx-auto mt-12 max-w-xl text-center sm:mt-16">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
              {t.about.principles[2].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-[0.95rem]">
              {t.about.principles[2].text}
            </p>
          </article>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white/70 px-6 py-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 sm:px-10 sm:py-9">
          <div className="pointer-events-none absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent dark:via-sky-300/30" />
          <p className="relative mx-auto max-w-3xl text-center text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[0.95rem]">
            {t.about.founder}
          </p>
        </div>
      </div>
    </section>
  );
}
