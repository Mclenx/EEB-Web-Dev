import HomeClient from "./HomeClient";
import { content } from "../lib/content";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;

  return <HomeClient lang={lang} content={content} />;
}
