// app/[lang]/layout.tsx
import type { Metadata } from "next";

const baseUrl = "https://eebweb.dev";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "fr" };
}): Promise<Metadata> {
  const { lang } = params;

  const isFr = lang === "fr";

  const title = isFr
    ? "EEB Web Dev | Sites web pour petites entreprises au Québec"
    : "EEB Web Dev | Websites for Small Businesses in Québec";

  const description = isFr
    ? "Sites web professionnels pour petites entreprises au Québec. Rapides, clairs et bilingues, sans complications."
    : "Professional websites for small businesses in Québec. Fast, clean, bilingual-ready websites built without the hassle.";

  const url = `${baseUrl}/${lang}`;

  return {
    title,
    description,

    // Canonical + hreflang
    alternates: {
      canonical: url,
      languages: {
        "en-CA": `${baseUrl}/en`,
        "fr-CA": `${baseUrl}/fr`,
        "x-default": `${baseUrl}/en`,
      },
    },

    // OG basics 
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

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

