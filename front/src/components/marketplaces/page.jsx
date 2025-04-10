import { useState } from "react"
import { Link } from "react-router-dom" // Updated import
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Grid,
  Container,
  Box,
  TextField,
  Slider,
  InputLabel,
  Paper,
} from "@mui/material"

// Mock data for prizes
const allPrizes = [
  {
    id: 1,
    title: "Día Libre",
    description: "Un día libre para disfrutar como quieras",
    points: 500,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    title: "Tarjeta de Regalo",
    description: "Tarjeta de regalo de $50 para tu tienda favorita",
    points: 300,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    title: "Almuerzo con el CEO",
    description: "Disfruta de un almuerzo exclusivo con el CEO",
    points: 750,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    title: "Curso Online",
    description: "Acceso a un curso online de tu elección",
    points: 400,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    title: "Merchandising Exclusivo",
    description: "Kit de productos exclusivos de la empresa",
    points: 200,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    title: "Sesión de Coaching",
    description: "Una sesión de coaching profesional",
    points: 350,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function Marketplace() {
  const [maxPoints, setMaxPoints] = useState(800)
  const [searchTerm, setSearchTerm] = useState("")

  // Filter prizes based on search term and max points
  const filteredPrizes = allPrizes.filter(
    (prize) =>
      prize.points <= maxPoints &&
      (prize.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prize.description.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
        Marketplace
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Canjea tus ULIs por premios exclusivos. Actualmente tienes{" "}
        <Box component="span" sx={{ fontWeight: "bold", color: "primary.main" }}>
          250 ULIs
        </Box>
        .
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Filtrar Premios
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box>
            <InputLabel htmlFor="search" sx={{ mb: 1 }}>
              Buscar
            </InputLabel>
            <TextField
              id="search"
              placeholder="Buscar premios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              size="small"
            />
          </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <InputLabel htmlFor="points">Máximo de ULIs: {maxPoints}</InputLabel>
            </Box>
            <Slider
              id="points"
              min={100}
              max={1000}
              step={50}
              value={maxPoints}
              onChange={(_, value) => setMaxPoints(value)}
              aria-labelledby="points"
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="caption" color="text.secondary">
                100 ULIs
              </Typography>
              <Typography variant="caption" color="text.secondary">
                1000 ULIs
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        {filteredPrizes.map((prize) => (
          <Grid item xs={12} sm={6} md={4} key={prize.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" height="140" image={prize.image} alt={prize.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  {prize.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {prize.description}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Costo:
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold", color: "primary.main" }}>
                    {prize.points} ULIs
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Link to={`/marketplace/${prize.id}`} style={{ width: "100%", textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={prize.points > 250} // Assuming user has 250 ULIs
                  >
                    {prize.points > 250 ? "ULIs insuficientes" : "Seleccionar"}
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredPrizes.length === 0 && (
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography color="text.secondary">No se encontraron premios con los filtros actuales.</Typography>
        </Box>
      )}
    </Container>
  )
}

