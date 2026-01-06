// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const SUPPORTED = ["en", "fr"] as const;

function pickLang(acceptLanguage: string | null) {
  if (!acceptLanguage) return "en";
  const lower = acceptLanguage.toLowerCase();

  // Prefer French if any fr-* appears
  if (lower.includes("fr")) return "fr";
  if (lower.includes("en")) return "en";
  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only handle the site root
  if (pathname !== "/") return NextResponse.next();

  const lang = pickLang(req.headers.get("accept-language"));
  const url = req.nextUrl.clone();
  url.pathname = `/${lang}`;
  return NextResponse.redirect(url);
}

// Only run on "/"
export const config = {
  matcher: ["/"],
};
