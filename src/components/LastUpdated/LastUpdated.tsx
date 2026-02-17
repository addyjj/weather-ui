import { DateTime } from "luxon";

type LastUpdatedProps = {
  date: Date | string;
};

export function LastUpdated({ date }: LastUpdatedProps) {
  let dt: DateTime = DateTime.now();

  if (date instanceof Date) {
    dt = DateTime.fromJSDate(date);
  } else if (typeof date === "string") {
    dt = DateTime.fromISO(date);
  }

  return (
    <div className="flex flex-col items-end text-[10px] sm:text-sm">
      <span className="text-slate-400 font-bold uppercase">Last Updated</span>
      <div className="flex items-center gap-1 font-bold text-green-500">
        {dt.toLocaleString(DateTime.DATETIME_SHORT)}
      </div>
    </div>
  );
}

export default LastUpdated;
