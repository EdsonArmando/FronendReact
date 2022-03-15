import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import MemoriaRam from "./pages/MemoriaRam";
import ListaProcesos from "./pages/ListaProcesos";
import ListaSubProcesos from "./pages/ListaSubProcesos";
import ListaLogs from "./pages/Logs";
import ListaSubRam from "./pages/MostrarDatos";
import ListaLogCpu from "./pages/MostrarDatosCPU";

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/ListaSub" exact element={<ListaSubProcesos />} />
          <Route path="/ListaSubRam" exact element={<ListaSubRam />} />
          <Route path="/GraficaRam" exact element={<MemoriaRam />} />
          <Route path="/GraficaProcesos" exact element={<ListaProcesos />} />
          <Route path="/ListaLogs" exact element={<ListaLogs />} />
          <Route path="/ListaLogsCPU" exact element={<ListaLogCpu />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;