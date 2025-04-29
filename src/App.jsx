import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import BliMedlem from "./pages/bli-medlem";
import Artikkel1 from "./pages/33-år-i-2021";
import Artikkel2 from "./pages/ruv-prisen";
import Artikkel3 from "./pages/arsmoetekasoerer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/bli-medlem" element={<BliMedlem />} />
          <Route path="/33-år-i-2021" element={<Artikkel1 />} />
          <Route path="/ruv-prisen" element={<Artikkel2 />} />
          <Route path="/aarsmoetetema" element={<Artikkel3 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
