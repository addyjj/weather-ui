export interface LatestData {
  date: string;
  baromRel: number;
  tempOut: number;
  humidityOut: number;
  windDir: number;
  windSpeed: number;
  windGust: number;
  eventRain: number;
  dailyRain: number;
  uvIndex: number;
  feelsLike: number;
  dewPoint: number;
  solarRadiation: number;
}

export interface Device {
  name: string;
  location: string;
  macAddress: string;
  latestData: LatestData;
}
