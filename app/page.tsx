import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = await cookies(); // ✅ important in Next 16
  const lang = cookieStore.get("lang")?.value;

  redirect(lang === "fr" ? "/fr" : "/en");
}

