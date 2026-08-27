import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://eebweb.dev"),
  title: {
    default:"EEB Web Dev",
    template:"%s",
  },
  description: "Portfolio site for Eric (EEB Web Dev).",
  icons: {
    icon: [
      { url: "/favicon-16 - 1.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32 - 1.png", sizes: "32x32", type: "image/png" },
    ],
  },
  other:{
    google:"notranslate",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestHeaders = await headers();
  const documentLang =
    requestHeaders.get("x-document-lang") === "fr-CA" ? "fr-CA" : "en";

  return (
    <html lang={documentLang} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// app/layout.tsx
export const viewport = {
  width: "device-width",
  initialScale: 1,
};



