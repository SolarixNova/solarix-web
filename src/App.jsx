import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cabecalho from "./Cabecalho";
import ListaEnergias from "./ListaEnergias";
import TiposEnergia from "./TiposEnergia";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<ListaEnergias />} />
        <Route path="/tipos-energia" element={<TiposEnergia />} />
      </Routes>
    </Router>
  );
}

export default App;
