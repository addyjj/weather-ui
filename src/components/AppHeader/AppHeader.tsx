import { LastUpdated } from "../LastUpdated";

type AppHeaderProps = {
  stationName?: string;
  location?: string;
  lastUpdated?: Date;
};

export function AppHeader({
  stationName = "Home Station",
  location = "San Francisco, CA",
  lastUpdated = new Date(),
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-50 glass px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-xl">wb_sunny</span>
        </div>
        <div className="flex flex-col text-xs sm:text-sm">
          <h1 className="font-bold leading-tight">{stationName}</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            {location}
          </p>
        </div>
      </div>
      <LastUpdated date={lastUpdated} />
    </header>
  );
}
