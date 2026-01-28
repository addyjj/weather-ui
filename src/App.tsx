import { Route, Routes } from "react-router";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
