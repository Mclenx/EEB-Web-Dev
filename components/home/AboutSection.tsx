import type { TContent } from "@/app/lib/content";

export function AboutSection({ t }: { t: TContent }) {
  return (
    <section id="about" className="space-y-6 max-w-3xl scroll-mt-24">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
        {t.about.title}
      </h2>
      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        {t.about.text}
      </p>
    </section>
  );
}
