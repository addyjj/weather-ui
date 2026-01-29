interface PageProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function Page({ title, subtitle, children }: PageProps) {
  return (
    <main className="flex-1 overflow-y-auto px-8 py-8">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 text-sm">{subtitle}</p>
      {children}
    </main>
  );
}
