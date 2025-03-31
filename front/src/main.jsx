import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import Certificados from "./components/certificados/page"
import Navbar from './components/navbar/header.jsx';
import Reconocimiento from "./components/reconocimiento/index";
import MarketplacePage from "./components/marketplaces/page"; // Importar el componente page.jsx

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/reconocimiento" element={<Reconocimiento />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
