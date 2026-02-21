import { OutdoorTempPanel, Panel, WindSpeedPanel } from "../../components";
import type { LatestData } from "../../types/device";

type HomeProps = {
  data?: LatestData | null;
  isLoading: boolean;
  error: Error | null;
};

export function Home({ data, isLoading, error }: HomeProps) {
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
          temperature={data?.tempOut ?? 0}
          feelsLike={data?.feelsLike ?? 0}
        />
        <WindSpeedPanel
          className="md:col-span-2 md:row-span-1"
          gust={data?.windGust ?? 0}
          speed={data?.windSpeed ?? 0}
          directionDegrees={data?.windDir ?? 0}
        />
        <Panel title="Precipitation (24h)">{data?.dailyRain ?? 0} inches</Panel>
        <Panel title="Dew Point">{data?.dewPoint ?? 0}°</Panel>
        <Panel title="Humidity">{data?.humidityOut ?? 0}%</Panel>
        <Panel title="Barometer">{data?.baromRel ?? 0} inHg</Panel>
        <Panel title="UV Index">{data?.uvIndex ?? 0}</Panel>
        <Panel title="Solar Radiation">{data?.solarRadiation ?? 0} W/m²</Panel>
      </div>
    </main>
  );
}
