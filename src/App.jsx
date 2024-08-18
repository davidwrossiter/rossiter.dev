import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import EssayList from "./Pages/Essays/EssayList";
import LearnHowToCode from "./Pages/LearnHowToCode";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/essays" element={<EssayList />} />
      <Route path="/learn-how-to-code" element={<LearnHowToCode />} />
    </Routes>
  );
}

export default App;
