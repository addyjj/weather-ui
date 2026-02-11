import { Route, Routes } from "react-router";
import { Home } from "./pages";
import "./App.css";
import { AppHeader } from "./components";

function App() {
  return (
    <div>
      <AppHeader />
      <div className="flex h-screen overflow-hidden">
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
