import { Link } from "react-router-dom"
import { Button, Card, CardContent, CardActions, Typography, Grid, Container, Box } from "@mui/material"
import {
  FileCopy as CertificateIcon,
  Store as MarketplaceIcon,
  EmojiEvents as RecognitionIcon,
} from "@mui/icons-material"

export default function Home() {
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
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Bienvenido a ULI Rewards
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Recompensa comportamientos institucionales y canjea tus ULIs por premios
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ maxWidth: "md", width: "100%" }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Mis Certificados
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Visualiza y descarga tus certificados de comportamientos
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
                  <CertificateIcon sx={{ fontSize: 64, color: "primary.main" }} />
                </Box>
              </CardContent>
              <CardActions>
                <Link to="/certificados" style={{ width: "100%", textDecoration: "none" }}>
                  <Button variant="contained" fullWidth>
                    Ver Certificados
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Reconocimiento
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Evalúa valores institucionales de tus colaboradores
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
                  <RecognitionIcon sx={{ fontSize: 64, color: "primary.main" }} />
                </Box>
              </CardContent>
              <CardActions>
                <Link to="/reconocimiento" style={{ width: "100%", textDecoration: "none" }}>
                  <Button variant="contained" fullWidth>
                    Dar Reconocimiento
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Marketplace
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Canjea tus ULIs por premios exclusivos
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
                  <MarketplaceIcon sx={{ fontSize: 64, color: "primary.main" }} />
                </Box>
              </CardContent>
              <CardActions>
                <Link to="/marketplace" style={{ width: "100%", textDecoration: "none" }}>
                  <Button variant="contained" fullWidth>
                    Ir al Marketplace
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body1" color="text.secondary">
            Tienes{" "}
            <Box component="span" sx={{ fontWeight: "bold", color: "primary.main" }}>
              250 ULIs
            </Box>{" "}
            disponibles
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}