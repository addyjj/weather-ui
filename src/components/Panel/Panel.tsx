interface PanelProps {
  title?: string;
  children?: React.ReactNode;
}

export function Panel({ title, children }: PanelProps) {
  return (
    <div className="col-span-2 row-span-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 relative overflow-hidden group shadow-sm">
      {title && (
        <div className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-2">
          {title}
        </div>
      )}
      {children}
    </div>
  );
}
