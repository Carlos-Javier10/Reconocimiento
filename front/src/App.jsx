import { Link } from "react-router-dom"
import { Button, Card, CardContent, CardActions, Typography, Grid, Container, Box } from "@mui/material"
import {
  FileCopy as CertificateIcon,
  Store as MarketplaceIcon,
  EmojiEvents as RecognitionIcon,
} from "@mui/icons-material"
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/header.jsx'
import Certificados from "./components/certificados/page.jsx"
import Reconocimiento from "./components/reconocimiento/index.jsx"
import MarketplacePage from "./components/marketplaces/page.jsx"
import ReconocimientoExito from "./components/reconocimiento/page.jsx"
import PrizeDetail from "./components/marketplaces/index.jsx"

export default function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/reconocimiento" element={<Reconocimiento />} />
        <Route path="/reconocimiento/exito" element={<ReconocimientoExito />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/marketplace/:id" element={<PrizeDetail />} />
      </Routes>
    </>
  )
}

function HomeContent() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          gap: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenido a ULI Rewards
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Recompensa comportamientos institucionales y canjea tus ULIs por premios
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              title: "Mis Certificados",
              description: "Visualiza y descarga tus certificados de comportamientos",
              icon: <CertificateIcon sx={{ fontSize: 64, color: "primary.main" }} />,
              link: "/certificados",
              buttonText: "Ver Certificados",
            },
            {
              title: "Reconocimiento",
              description: "Evalúa valores institucionales de tus colaboradores",
              icon: <RecognitionIcon sx={{ fontSize: 64, color: "primary.main" }} />,
              link: "/reconocimiento",
              buttonText: "Dar Reconocimiento",
            },
            {
              title: "Marketplace",
              description: "Canjea tus ULIs por premios exclusivos",
              icon: <MarketplaceIcon sx={{ fontSize: 64, color: "primary.main" }} />,
              link: "/marketplace",
              buttonText: "Ir al Marketplace",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ mb: { xs: 3, sm: 0 } }}>
              <Box
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: 3,
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: 300, // Añadido para un tamaño horizontal consistente
                  mx: "auto", // Centrar horizontalmente
                }}
              >
                <Box>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {item.description}
                  </Typography>
                  <Box sx={{ py: 3 }}>{item.icon}</Box>
                </Box>
                <Link to={item.link} style={{ textDecoration: "none" }}>
                  <Button variant="contained" fullWidth>
                    {item.buttonText}
                  </Button>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 4 }}>
          Tienes{" "}
          <Box component="span" sx={{ fontWeight: "bold", color: "primary.main" }}>
            250 ULIs
          </Box>{" "}
          disponibles
        </Typography>
      </Box>
    </Container>
  )
}