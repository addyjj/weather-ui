import { useMemo } from "react";
import { Panel } from "../Panel";

type WindSpeedPanelProps = {
  className?: string;
  speed: number;
  directionDegrees: number;
  gust: number;
};

const directions = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSW",
  "SW",
  "WSW",
  "W",
  "WNW",
  "NW",
  "NNW",
];

export function WindSpeedPanel({
  className,
  speed = 12.4,
  directionDegrees = 345,
  gust = 18.6,
}: WindSpeedPanelProps) {
  const directionLabel = useMemo(() => {
    if (directionDegrees === undefined) return "";

    const index = Math.round((directionDegrees % 360) / 22.5);
    return directions[index];
  }, [directionDegrees]);

  const directionStyle = {
    transform: `rotate(${directionDegrees}deg)`,
  };

  return (
    <Panel title="Wind Speed &amp; Gusts" className={className}>
      <div className="flex items-baseline gap-2">
        <h3 className="text-7xl font-bold tracking-tighter">{speed}</h3>
        <span className="text-3xl text-slate-400">mph</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span
          className="material-symbols-outlined text-primary"
          style={directionStyle}
        >
          navigation
        </span>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          {directionLabel} • Max Gust {gust} mph
        </p>
      </div>
    </Panel>
  );
}
