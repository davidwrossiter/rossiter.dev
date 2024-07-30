import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/essays" element={<div>essays</div>} />
    </Routes>
  );
}

export default App;
