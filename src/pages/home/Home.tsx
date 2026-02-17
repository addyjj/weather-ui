import { OutdoorTempPanel, Panel, WindSpeedPanel } from "../../components";
import type { Device } from "../../types/device";

type HomeProps = {
  devices?: Device[];
  isLoading: boolean;
  error: Error | null;
};

export function Home({ devices, isLoading, error }: HomeProps) {
  // Get the first device's latest data
  const deviceData = devices?.[0]?.latestData;

  return (
    <main className="flex-1 overflow-y-auto p-4">
      {isLoading && <div className="text-center">Loading weather data...</div>}
      {error && (
        <div className="text-center text-red-500">
          Error loading data: {error.message}
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-4 md:auto-rows-min">
        <OutdoorTempPanel
          className="md:col-span-2 md:row-span-1"
          temperature={deviceData?.tempOut ?? 0}
          feelsLike={deviceData?.feelsLike ?? 0}
        />
        <WindSpeedPanel
          className="md:col-span-2 md:row-span-1"
          gust={deviceData?.windGust ?? 0}
          speed={deviceData?.windSpeed ?? 0}
          directionDegrees={deviceData?.windDir ?? 0}
        />
        <Panel title="Precipitation (24h)">
          {deviceData?.dailyRain ?? 0} inches
        </Panel>
        <Panel title="Dew Point">{deviceData?.dewPoint ?? 0}°</Panel>
        <Panel title="Humidity">{deviceData?.humidityOut ?? 0}%</Panel>
        <Panel title="Barometer">{deviceData?.baromRel ?? 0} inHg</Panel>
        <Panel title="UV Index">{deviceData?.uvIndex ?? 0}</Panel>
        <Panel title="Solar Radiation">
          {deviceData?.solarRadiation ?? 0} W/m²
        </Panel>
      </div>
    </main>
  );
}
