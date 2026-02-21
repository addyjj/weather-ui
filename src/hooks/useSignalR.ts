import { useEffect, useState, useRef } from "react";
import * as signalR from "@microsoft/signalr";
import type { LatestData } from "../types/device";

interface UseSignalRResult {
  weatherData: LatestData | null;
  isConnected: boolean;
  error: Error | null;
}

export function useSignalR(hubUrl?: string): UseSignalRResult {
  let url = hubUrl;

  if (!url) {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    if (!baseUrl) {
      throw new Error(
        "SignalR hub URL not provided. Pass it as a parameter or set VITE_API_BASE_URL environment variable.",
      );
    }
    url = `${baseUrl}/weatherHub`;
  }
  const [weatherData, setWeatherData] = useState<LatestData | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const connectionRef = useRef<signalR.HubConnection | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    const connection = new signalR.HubConnectionBuilder()
      .withUrl(url, {
        withCredentials: false,
        transport: signalR.HttpTransportType.WebSockets,
        skipNegotiation: true,
      })
      .withAutomaticReconnect([0, 1000, 3000, 5000, 10000])
      .configureLogging(signalR.LogLevel.Information)
      .build();

    connectionRef.current = connection;

    connection.on("weatherData", (data: LatestData) => {
      console.log("Weather data received:", data);
      if (isMountedRef.current) {
        setWeatherData(data);
      }
    });

    connection.onreconnected(() => {
      console.log("SignalR reconnected");
      if (isMountedRef.current) {
        setIsConnected(true);
        setError(null);
      }
    });

    connection.onclose(() => {
      console.log("SignalR connection closed");
      if (isMountedRef.current) {
        setIsConnected(false);
      }
    });

    const startConnection = async () => {
      try {
        console.log("Starting SignalR connection to:", url);
        console.log("Connection state:", connection.state);
        await connection.start();
        console.log("SignalR connected successfully");
        if (isMountedRef.current) {
          setIsConnected(true);
          setError(null);
        }
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        console.error("Failed to start SignalR connection:", error.message);
        console.error("Full error:", error);
        if (isMountedRef.current) {
          setError(error);
          setIsConnected(false);
        }
      }
    };

    startConnection();

    return () => {
      isMountedRef.current = false;
      const conn = connectionRef.current;
      if (conn && conn.state === signalR.HubConnectionState.Connected) {
        console.log("Stopping SignalR connection");
        conn
          .stop()
          .catch((err) => console.error("Error stopping connection:", err));
      }
    };
  }, [url]);

  return { weatherData, isConnected, error };
}
