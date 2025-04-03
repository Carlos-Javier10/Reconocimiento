import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import Certificados from "./components/certificados/page.jsx"
import Navbar from './components/navbar/header.jsx';
import Reconocimiento from "./components/reconocimiento/index.jsx";
import MarketplacePage from "./components/marketplaces/page.jsx"; // Importar el componente page.jsx
import ReconocimientoExito from "./components/reconocimiento/page.jsx"; // Asegúrate de importar la pantalla de éxito
import PrizeDetail from "./components/marketplaces/index.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/reconocimiento" element={<Reconocimiento />} />
        <Route path="/reconocimiento/exito" element={<ReconocimientoExito />} /> 
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/marketplace/:id" element={<PrizeDetail />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
)
