import type { Unit } from "../../types";

interface UnitToggleProps {
  value: Unit;
  onChange: (unit: Unit) => void;
}

export function UnitToggle({ value, onChange }: UnitToggleProps) {
  return (
    <div className="flex gap-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
      <button
        onClick={() => onChange("imperial")}
        className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
          value === "imperial"
            ? "bg-slate-100 dark:bg-slate-700"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-400"
        }`}
      >
        IMPERIAL
      </button>
      <button
        onClick={() => onChange("metric")}
        className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
          value === "metric"
            ? "bg-slate-100 dark:bg-slate-700"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-400"
        }`}
      >
        METRIC
      </button>
    </div>
  );
}
