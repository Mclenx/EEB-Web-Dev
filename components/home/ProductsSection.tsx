import Image from "next/image";
import Link from "next/link";
import type { TContent } from "@/app/lib/content";

type ProductsSectionProps = {
  t: TContent;
  lang: "en" | "fr";
};

export function ProductsSection({ t, lang }: ProductsSectionProps) {
  return (
    <section id="products" className="relative isolate scroll-mt-24 py-10 sm:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-6 h-px
      bg-gradient-to-r from-transparent via-slate-200 to-transparent
      dark:via-slate-700"
      />

      <div className="mx-auto max-w-6xl">
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
  );
}
