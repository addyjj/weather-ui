import { LastUpdated } from "../LastUpdated";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 glass px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-xl">wb_sunny</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-sm font-bold leading-tight">Home Station</h1>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
            San Francisco, CA
          </p>
        </div>
      </div>
      <LastUpdated date={new Date()} />
    </header>
  );
}
