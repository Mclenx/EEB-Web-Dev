"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { TContent } from "@/app/lib/content";

export function ContactSection({ t }: { t: TContent }) {
  const [formState, setFormState] = useState<{
    status: "idle" | "sending" | "sent" | "error";
    message?: string;
  }>({ status: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    setFormState({ status: "sending", message: t.contact.sending });

    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json?.error || t.contact.errorFallback);
      }

      setFormState({ status: "sent", message: t.contact.sent });
      setTimeout(() => setFormState({ status: "idle" }), 4000);
      form.reset();
      (document.activeElement as HTMLElement | null)?.blur();
    } catch (err) {
      const msg =
        err instanceof Error && err.message
          ? err.message
          : t.contact.errorFallback;

      setFormState({ status: "error", message: msg });
    }
  }

  return (
    <section id="contact" className="space-y-6 max-w-2xl scroll-mt-24">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
        {t.contact.title}
      </h2>
      <p className="text-slate-700 dark:text-slate-300 text-sm">
        {t.contact.subtitle}
      </p>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />
        <input
          name="name"
          required
          autoComplete="name"
          className="text-base sm:text-sm rounded-lg bg-white border border-slate-300 px-4 py-2 text-sm outline-none focus:border-emerald-400 dark:bg-slate-900/40 dark:border-slate-700"
          placeholder={t.contact.name}
        />
        <input
          name="contact"
          type="email"
          required
          autoComplete="email"
          className="text-base sm:text-sm rounded-lg bg-white border border-slate-300 px-4 py-2 text-sm outline-none focus:border-emerald-400 dark:bg-slate-900/40 dark:border-slate-700"
          placeholder={t.contact.email}
        />
        <textarea
          name="message"
          required
          className="text-base sm:text-sm rounded-lg bg-white border border-slate-300 px-4 py-2 text-sm outline-none focus:border-emerald-400 min-h-[140px] dark:bg-slate-900/40 dark:border-slate-700"
          placeholder={t.contact.message}
        />
        <button
          type="submit"
          disabled={formState.status === "sending"}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-300"
        >
          {t.contact.send}
        </button>

        {formState.status === "sending" && (
          <p className="text-xs text-slate-500">{formState.message}</p>
        )}
        {formState.status === "sent" && (
          <p className="text-xs text-emerald-600">{formState.message}</p>
        )}
        {formState.status === "error" && (
          <p className="text-xs text-red-500">
            {formState.message ?? t.contact.errorFallback}
          </p>
        )}
      </form>

      <p className="text-xs text-slate-500 dark:text-slate-500">
        {t.contact.note}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-500">
        {t.contact.availability}
      </p>
    </section>
  );
}
