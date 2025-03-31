import { Link } from "react-router-dom"
import { Button, Card, CardContent, CardActions, Typography, Grid, Container, Box } from "@mui/material"
import { Download as DownloadIcon } from "@mui/icons-material"

// Mock data for certificates
const certificates = [
  {
    id: 1,
    title: "Colaboración Excepcional",
    date: "15 de marzo, 2025",
    points: 50,
    issuer: "Juan Pérez",
  },
  {
    id: 2,
    title: "Innovación en Procesos",
    date: "28 de febrero, 2025",
    points: 75,
    issuer: "María González",
  },
  {
    id: 3,
    title: "Liderazgo Efectivo",
    date: "10 de enero, 2025",
    points: 100,
    issuer: "Carlos Rodríguez",
  },
]

export default function Certificados() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
        Mis Certificados
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Aquí puedes ver y descargar los certificados de comportamientos que has realizado.
      </Typography>

      <Grid container spacing={3}>
        {certificates.map((certificate) => (
          <Grid item xs={12} sm={6} md={4} key={certificate.id}>
            <Card>
              <Box sx={{ bgcolor: "primary.light", opacity: 0.1, py: 1 }}>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {certificate.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {certificate.date}
                  </Typography>
                </CardContent>
              </Box>
              <CardContent sx={{ pt: 3 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Puntos ULI:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                    {certificate.points}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2" color="text.secondary">
                    Otorgado por:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                    {certificate.issuer}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button variant="outlined" fullWidth size="small" startIcon={<DownloadIcon />}>
                  Descargar Certificado
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {certificates.length === 0 && (
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography color="text.secondary">No tienes certificados disponibles.</Typography>
        </Box>
      )}

      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Volver al Inicio</Button>
        </Link>
      </Box>
    </Container>
  )
}

