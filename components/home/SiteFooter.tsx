export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800">
      © {new Date().getFullYear()} EEB Web Dev — Montréal.
    </footer>
  );
}
