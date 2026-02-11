import { OutdoorTempPanel, Panel, WindSpeedPanel } from "../../components";

export function Home() {
  return (
    <main className="flex-1 overflow-y-auto p-4">
      <div className="grid gap-4 md:grid-cols-4 md:auto-rows-min">
        <OutdoorTempPanel
          className="md:col-span-2 md:row-span-1"
          temperature={72.5}
          feelsLike={74.2}
        />
        <WindSpeedPanel
          className="md:col-span-2 md:row-span-1"
          gust={18.2}
          speed={12.4}
          directionDegrees={120}
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
