import { DateTime } from "luxon";

interface LastUpdatedProps {
  date: Date | string;
  label?: string;
  icon?: string;
  className?: string;
}

export function LastUpdated({ date }: LastUpdatedProps) {
  let formattedDate = "";
  if (date instanceof Date) {
    formattedDate = DateTime.fromJSDate(date).toLocaleString(
      DateTime.DATETIME_MED,
    );
  } else if (typeof date === "string") {
    formattedDate = DateTime.fromISO(date).toLocaleString(
      DateTime.DATETIME_MED,
    );
  } else {
    formattedDate = String(date);
  }

  return (
    <div className={`flex flex-col items-end`}>
      <span className="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">
        Last Updated
      </span>
      <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
        <span className="material-symbols-outlined text-sm text-green-500">
          schedule
        </span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}

export default LastUpdated;
