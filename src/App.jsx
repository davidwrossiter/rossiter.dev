import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EssayList from "./Pages/Essays/EssayList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/essays" element={<EssayList /> } />
    </Routes>
  );
}

export default App;
