"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom" // Updated import
import { Button, Card, CardContent, CardActions, CardMedia, Typography, Container, Box, Divider } from "@mui/material"
import { Warning as AlertCircleIcon, CheckCircle as CheckCircleIcon } from "@mui/icons-material"

// Mock data for prizes
const prizes = [
  {
    id: "1",
    title: "Día Libre",
    description: "Un día libre para disfrutar como quieras",
    points: 500,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "2",
    title: "Tarjeta de Regalo",
    description: "Tarjeta de regalo de $50 para tu tienda favorita",
    points: 300,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "3",
    title: "Almuerzo con el CEO",
    description: "Disfruta de un almuerzo exclusivo con el CEO",
    points: 750,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "4",
    title: "Curso Online",
    description: "Acceso a un curso online de tu elección",
    points: 400,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "5",
    title: "Merchandising Exclusivo",
    description: "Kit de productos exclusivos de la empresa",
    points: 200,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "6",
    title: "Sesión de Coaching",
    description: "Una sesión de coaching profesional",
    points: 350,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function PrizeDetail({ params = { id: "1" } }) { // Agrega un valor predeterminado para params
  const navigate = useNavigate() // Updated hook
  const [step, setStep] = useState("detail") // "detail" | "confirm" | "success"

  // Find the prize by ID
  const prize = prizes.find((p) => p.id === params.id)

  if (!prize) {
    return (
      <Container maxWidth="sm" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Premio no encontrado
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          El premio que estás buscando no existe.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/marketplace")}> {/* Updated navigation */}
          Volver al Marketplace
        </Button>
      </Container>
    )
  }

  const userPoints = 250 // Mock user points
  const canRedeem = userPoints >= prize.points

  const handleConfirm = () => {
    setStep("confirm")
  }

  const handleCancel = () => {
    setStep("detail")
  }

  const handleRedeem = () => {
    // Here you would make an API call to redeem the prize
    setStep("success")
  }

  const handleBackToMarketplace = () => {
    navigate("/marketplace") // Updated navigation
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {step === "detail" && (
        <Box sx={{ maxWidth: "sm", mx: "auto" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {prize.title}
          </Typography>

          <Card sx={{ mb: 4 }}>
            <CardMedia component="img" height="300" image={prize.image} alt={prize.title} />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {prize.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {prize.description}
              </Typography>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "primary.light",
                  opacity: 0.1,
                  borderRadius: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                  Costo:
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main" }}>
                  {prize.points} ULIs
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Tienes actualmente{" "}
                <Box component="span" sx={{ fontWeight: "bold", color: "primary.main" }}>
                  {userPoints} ULIs
                </Box>{" "}
                disponibles.
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2, gap: 2 }}>
              <Button variant="outlined" fullWidth onClick={handleBackToMarketplace}>
                Volver
              </Button>
              <Button variant="contained" fullWidth onClick={handleConfirm} disabled={!canRedeem}>
                {canRedeem ? "Canjear Premio" : "ULIs insuficientes"}
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}

      {step === "confirm" && (
        <Box sx={{ maxWidth: "sm", mx: "auto" }}>
          <Card>
            <CardContent>
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom align="center">
                  Confirmar Canje
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <AlertCircleIcon sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  ¿Estás seguro?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Estás a punto de canjear{" "}
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    {prize.title}
                  </Box>{" "}
                  por{" "}
                  <Box component="span" sx={{ fontWeight: "bold", color: "primary.main" }}>
                    {prize.points} ULIs
                  </Box>
                  .
                </Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "primary.light",
                  opacity: 0.1,
                  borderRadius: 1,
                  mb: 2,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body1">ULIs actuales:</Typography>
                  <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                    {userPoints}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography variant="body1">ULIs a gastar:</Typography>
                  <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                    -{prize.points}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body1">ULIs restantes:</Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {userPoints - prize.points}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ p: 2, gap: 2 }}>
              <Button variant="outlined" fullWidth onClick={handleCancel}>
                Cancelar
              </Button>
              <Button variant="contained" fullWidth onClick={handleRedeem}>
                Confirmar Canje
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}

      {step === "success" && (
        <Box sx={{ maxWidth: "sm", mx: "auto" }}>
          <Card>
            <CardContent>
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom align="center">
                  ¡Canje Exitoso!
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <CheckCircleIcon sx={{ fontSize: 64, color: "success.main", mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Premio Canjeado
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Has canjeado exitosamente{" "}
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    {prize.title}
                  </Box>
                  .
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Te quedan{" "}
                  <Box component="span" sx={{ fontWeight: "bold", color: "primary.main" }}>
                    {userPoints - prize.points} ULIs
                  </Box>{" "}
                  disponibles.
                </Typography>
              </Box>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
              <Button variant="contained" fullWidth onClick={handleBackToMarketplace}>
                Volver al Marketplace
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </Container>
  )
}

