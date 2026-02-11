import { Panel } from "../Panel";

type OutdoorTempPanelProps = {
  className?: string;
  temperature?: number;
  feelsLike?: number;
};

export function OutdoorTempPanel({
  className,
  temperature,
  feelsLike,
}: OutdoorTempPanelProps) {
  return (
    <Panel title="Outdoor Temperature" className={className}>
      <div className="flex items-baseline gap-2">
        <h3 className="text-7xl font-bold tracking-tighter">
          {temperature}&#176;
        </h3>
        <span className="text-3xl text-slate-500 dark:text-slate-400">F</span>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 font-medium">
        Feels like {feelsLike}&#176;
      </p>
    </Panel>
  );
}
