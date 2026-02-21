import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import { Home } from "./pages";
import "./App.css";
import { AppHeader } from "./components";
import { useDevices, useSignalR } from "./hooks";

const queryClient = new QueryClient();

function AppContent() {
  const { data: devices, isLoading, error } = useDevices();
  const { weatherData } = useSignalR();
  const device = devices?.[0];
  // Use real-time weatherData from SignalR if available, otherwise fall back to initial device data
  const deviceData = weatherData || device?.latestData;
  const lastUpdated = new Date(deviceData?.date || new Date());

  return (
    <div>
      <AppHeader
        stationName={device?.name}
        location={device?.location}
        lastUpdated={lastUpdated}
      />
      <div className="flex h-screen overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <Home data={deviceData} isLoading={isLoading} error={error} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

export default App;
