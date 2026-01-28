import { Route, Routes } from "react-router";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
}

export default App;
