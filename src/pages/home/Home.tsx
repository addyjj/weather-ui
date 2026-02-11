import { Panel } from "../../components";

export function Home() {
  return (
    <main className="flex-1 overflow-y-auto p-4">
      <div className="grid gap-4 md:grid-cols-4 md:auto-rows-min">
        <Panel
          className="md:col-span-2 md:row-span-1 h-60"
          title="Outdoor Temperature"
        />
        <Panel
          className="md:col-span-2 md:row-span-1"
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
