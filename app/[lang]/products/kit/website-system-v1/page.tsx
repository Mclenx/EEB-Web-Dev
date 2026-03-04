import Image from "next/image";
import Link from "next/link";
import { content } from "@/app/lib/content";

type Lang = "en" | "fr";

export default async function WebsiteSystemV1Page({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const t = content[lang] ?? content.en;
  const kit = t.products.kitV1;
  const banner = lang === "fr"
  ? "/products/website-system-kit-v1-banner-fr.png"
  : "/products/website-system-v1-banner.png";

  return (
    <main className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl py-14 sm:py-16 text-center">
        <div className="w-full text-left">
          <Link
            href={`/${lang}#products`}
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition dark:text-slate-400 dark:hover:text-white"
          >
            <span aria-hidden>←</span>
            <span>{t.products.back}</span>
          </Link>
        </div>

        <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {kit.pageTitle}
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
          {kit.pageDesc}
        </p>

        <div className="mt-6 sm:mt-8 relative aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
          <Image
            src={banner}
            alt={kit.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={kit.links.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-medium text-slate-900 shadow transition hover:bg-emerald-300"
          >
            {kit.demoCta}
          </a>

          <a
            href={kit.links.gumroad}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-700 dark:text-slate-200/80 hover:text-slate-900 dark:hover:text-white underline decoration-dotted underline-offset-4"
          >
            {kit.buyCta}
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
          {kit.microNote}
        </p>

        <div className="mt-10">
          <Link
            href={`/${lang}#products`}
            className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            ← {t.products.title}
          </Link>
        </div>
      </div>
    </main>
  );
}