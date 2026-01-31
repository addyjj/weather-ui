interface PageTitleProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function PageTitle({ title, subtitle, className }: PageTitleProps) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 text-sm">{subtitle}</p>
      )}
    </div>
  );
}

export default PageTitle;
