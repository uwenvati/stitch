import { Routes, Route } from "react-router-dom";
import Enterprise from "./pages/Enterprise";
import Express from "./pages/Express";

function App() {
  return (
    <Routes>
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/express" element={<Express />} />
      
      <Route path="/" element={<Enterprise />} />
    </Routes>
  );
}

export default App;

