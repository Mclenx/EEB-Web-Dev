"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import type { TContent } from "@/app/lib/content";

export function ContactSection({ t }: { t: TContent }) {
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [formState, setFormState] = useState<{
    status: "idle" | "sending" | "sent" | "error";
    message?: string;
  }>({ status: "idle" });

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formState.status === "sending") return;

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }

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
      resetTimeoutRef.current = setTimeout(() => {
        resetTimeoutRef.current = null;
        setFormState({ status: "idle" });
      }, 4000);
      form.reset();
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

      <form className="grid gap-4" onSubmit={handleSubmit} aria-busy={formState.status === "sending"}>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />
        <div className="grid gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
            {t.contact.name}
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-base outline-none focus-visible:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:border-slate-700 dark:bg-slate-900/40 dark:focus-visible:border-emerald-300 dark:focus-visible:ring-emerald-300/50 sm:text-sm"
            placeholder={t.contact.name}
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
            {t.contact.email}
          </label>
          <input
            id="contact-email"
            name="contact"
            type="email"
            required
            autoComplete="email"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-base outline-none focus-visible:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:border-slate-700 dark:bg-slate-900/40 dark:focus-visible:border-emerald-300 dark:focus-visible:ring-emerald-300/50 sm:text-sm"
            placeholder={t.contact.email}
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="contact-message" className="text-sm font-medium text-slate-700 dark:text-slate-200">
            {t.contact.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            className="min-h-[140px] rounded-lg border border-slate-300 bg-white px-4 py-2 text-base outline-none focus-visible:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:border-slate-700 dark:bg-slate-900/40 dark:focus-visible:border-emerald-300 dark:focus-visible:ring-emerald-300/50 sm:text-sm"
            placeholder={t.contact.message}
          />
        </div>
        <button
          type="submit"
          disabled={formState.status === "sending"}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 disabled:opacity-80 dark:focus-visible:ring-emerald-300 dark:focus-visible:ring-offset-slate-950 dark:disabled:bg-slate-700 dark:disabled:text-slate-300"
        >
          {formState.status === "sending" ? t.contact.sending : t.contact.send}
        </button>

        <div className="min-h-5" aria-live="polite" aria-atomic="true">
          {formState.status !== "idle" && (
            <p
              className={`text-xs ${formState.status === "sent"
                ? "text-emerald-700 dark:text-emerald-300"
                : formState.status === "error"
                  ? "text-red-700 dark:text-red-300"
                  : "text-slate-600 dark:text-slate-400"
                }`}
              role={formState.status === "error" ? "alert" : "status"}
            >
              {formState.message ?? t.contact.errorFallback}
            </p>
          )}
        </div>
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
