import { NextRequest, NextResponse } from "next/server";

function pickLang(acceptLanguage: string | null) {
  if (!acceptLanguage) return "en";
  const lower = acceptLanguage.toLowerCase();
  if (lower.includes("fr")) return "fr";
  if (lower.includes("en")) return "en";
  return "en";
}

// This proxy runs for the root request and redirects based on Accept-Language
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname !== "/") {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set(
      "x-document-lang",
      pathname === "/fr" || pathname.startsWith("/fr/") ? "fr-CA" : "en",
    );

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  const lang = pickLang(req.headers.get("accept-language"));
  const url = req.nextUrl.clone();
  url.pathname = `/${lang}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/", "/en/:path*", "/fr/:path*"],
};
