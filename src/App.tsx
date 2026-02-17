import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import { Home } from "./pages";
import "./App.css";
import { AppHeader } from "./components";
import { useDevices } from "./hooks";

const queryClient = new QueryClient();

function AppContent() {
  const { data: devices, isLoading, error } = useDevices();
  const device = devices?.[0];
  const deviceData = device?.latestData;
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
              <Home devices={devices} isLoading={isLoading} error={error} />
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
