import { useState } from "react";
import { LastUpdated, PageTitle, Panel, UnitToggle } from "../../components";
import type { Unit } from "../../types";

export function Home() {
  const [unit, setUnit] = useState<Unit>("metric");
  const [lastUpdated] = useState<Date>(new Date());

  const handleUnitChange = (value: Unit) => {
    setUnit(value);
  };

  return (
    <main>
      <header className="hidden md:flex md:justify-between md:visible mb-8">
        <PageTitle
          title="Current Conditions"
          subtitle="San Francisco Personal Weather Observation Station"
        />
        <div className="flex gap-9 items-center">
          <LastUpdated date={lastUpdated} />
          <UnitToggle value={unit} onChange={handleUnitChange} />
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-4 md:auto-rows-min">
        <Panel
          className="md:col-span-2 md:row-span-1 h-60"
          title="Outdoor Temperature"
        />
        <Panel
          className="md:col-span-2 md:row-span-1 h-60"
          title="Wind Speed & Gusts"
        />
        <Panel title="Precipitation (24h)" />
        <Panel title="Solar Radiation" />
        <Panel title="UV Index" />
        <Panel title="Outdoor Humidity" />
        <Panel title="Sensor Battery" />
        <Panel title="Indoor Temp" />
        <Panel title="Indoor Humidity" />
        <Panel title="Barometer" />
      </div>
    </main>
  );
}
