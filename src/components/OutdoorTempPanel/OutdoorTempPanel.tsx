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
      <div className="mt-8 h-20 w-full flex items-end gap-1.5">
        <div className="flex-1 bg-primary/20 rounded-t-md h-[40%]"></div>
        <div className="flex-1 bg-primary/20 rounded-t-md h-[50%]"></div>
        <div className="flex-1 bg-primary/20 rounded-t-md h-[45%]"></div>
        <div className="flex-1 bg-primary/20 rounded-t-md h-[60%]"></div>
        <div className="flex-1 bg-primary/20 rounded-t-md h-[75%]"></div>
        <div className="flex-1 bg-primary/20 rounded-t-md h-[65%]"></div>
        <div className="flex-1 bg-primary rounded-t-md h-[85%] shadow-[0_-4px_12px_rgba(19,127,236,0.3)]"></div>
      </div>
    </Panel>
  );
}
