// app/[lang]/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";

const baseUrl = "https://eebweb.dev";
const inter = Inter({ subsets: ["latin"] });

export const dynamicParams = false;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise <{ lang: "en" | "fr" }>;
}): Promise<Metadata> {
  const { lang } =  await params;

  const isFr = lang === "fr";

  const title = isFr
    ? "EEB Web Dev | Sites web pour petites entreprises au Québec"
    : "EEB Web Dev | Websites for Small Businesses in Québec";

  const description = isFr
    ? "Sites web professionnels pour petites entreprises au Québec. Rapides, clairs et bilingues, sans complications."
    : "Professional websites for small businesses in Québec. Fast, clean, bilingual-ready websites built without the hassle.";

  const url = `${baseUrl}/${lang}`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    icons: {
      icon: [
        { url: "/favicon-16 - 1.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32 - 1.png", sizes: "32x32", type: "image/png" },
      ],
    },
    other: {
      google: "notranslate",
    },
    alternates: {
      canonical: url,
      languages: {
        "en-CA": `${baseUrl}/en`,
        "fr-CA": `${baseUrl}/fr`,
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "EEB Web Dev",
      locale: isFr ? "fr_CA" : "en_CA",
      type: "website",
      images: [
        {
          url: isFr ? `${baseUrl}/og-fr.png` : `${baseUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "EEB Web Dev",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [isFr ? `${baseUrl}/og-fr.png` : `${baseUrl}/og.png`],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const documentLang = lang === "fr" ? "fr-CA" : "en";

  return (
    <html lang={documentLang} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
