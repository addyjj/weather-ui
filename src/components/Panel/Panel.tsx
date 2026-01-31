interface PanelProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Panel({ title, className, children }: PanelProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm ${className || ""}`}
    >
      {title && (
        <div className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-2">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
