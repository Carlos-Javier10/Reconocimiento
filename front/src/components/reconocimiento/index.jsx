"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material"

// Mock data for collaborators
const collaborators = [
  { id: "1", name: "Ana Martínez" },
  { id: "2", name: "Carlos López" },
  { id: "3", name: "Elena Rodríguez" },
  { id: "4", name: "Javier Sánchez" },
  { id: "5", name: "María González" },
  { id: "6", name: "Pedro Ramírez" },
]

// Mock data for institutional values with ULI values
const institutionalValues = [
  { id: "1", name: "Integridad", ulis: 50 },
  { id: "2", name: "Colaboración", ulis: 40 },
  { id: "3", name: "Innovación", ulis: 60 },
  { id: "4", name: "Excelencia", ulis: 70 },
  { id: "5", name: "Responsabilidad", ulis: 45 },
  { id: "6", name: "Compromiso", ulis: 55 },
  { id: "7", name: "Respeto", ulis: 35 },
]

export default function Reconocimiento() {
  const navigate = useNavigate()
  const [selectedCollaborator, setSelectedCollaborator] = useState("")
  const [selectedValues, setSelectedValues] = useState([])
  const [justification, setJustification] = useState("")
  const [certificateText, setCertificateText] = useState("")
  const [step, setStep] = useState("form") // "form" | "confirm"
  const [totalUlis, setTotalUlis] = useState(0)

  // Update certificate text when selected values change
  useEffect(() => {
    if (selectedValues.length > 0) {
      const valueNames = selectedValues
        .map((id) => institutionalValues.find((v) => v.id === id)?.name)
        .filter(Boolean)
        .join(", ")

      setCertificateText(
        `En reconocimiento por haberse destacado por el cumplimiento de los valores institucionales de ${valueNames}.`,
      )
    } else {
      setCertificateText("")
    }
  }, [selectedValues])

  // Calculate total ULIs when selected values change
  useEffect(() => {
    const total = selectedValues.reduce((sum, valueId) => {
      const value = institutionalValues.find((v) => v.id === valueId)
      return sum + (value?.ulis || 0)
    }, 0)
    setTotalUlis(total)
  }, [selectedValues])

  const handleValueChange = (event, valueId) => {
    const checked = event.target.checked
    if (checked) {
      setSelectedValues([...selectedValues, valueId])
    } else {
      setSelectedValues(selectedValues.filter((id) => id !== valueId))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep("confirm")
  }

  const handleConfirm = () => {
    // Aquí se asegura que la ruta sea correcta
    navigate("/reconocimiento/exito"); // Cambia la ruta si es necesario
  }

  const handleBack = () => {
    setStep("form")
  }

  const isFormValid =
    selectedCollaborator &&
    selectedValues.length > 0 &&
    justification.trim().length > 0 &&
    certificateText.trim().length > 0

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {step === "form" ? (
        <>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
            Dar Reconocimiento
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Reconoce a tus colaboradores por demostrar valores institucionales.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Card sx={{ maxWidth: "md", mx: "auto" }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Reconocimiento de Valores Institucionales
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel id="collaborator-label">Seleccionar Colaborador</InputLabel>
                    <Select
                      labelId="collaborator-label"
                      id="collaborator"
                      value={selectedCollaborator}
                      label="Seleccionar Colaborador"
                      onChange={(e) => setSelectedCollaborator(e.target.value)}
                    >
                      {collaborators.map((collaborator) => (
                        <MenuItem key={collaborator.id} value={collaborator.id}>
                          {collaborator.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Box>
                    <Typography variant="subtitle1" gutterBottom>
                      Valores Institucionales
                    </Typography>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      {institutionalValues.map((value) => (
                        <Box
                          key={value.id}
                          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1 }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={selectedValues.includes(value.id)}
                                onChange={(e) => handleValueChange(e, value.id)}
                              />
                            }
                            label={value.name}
                          />
                          <Typography variant="body2" sx={{ fontWeight: "medium", color: "primary.main" }}>
                            {value.ulis} ULIs
                          </Typography>
                        </Box>
                      ))}
                    </Paper>
                    {selectedValues.length > 0 && (
                      <Box sx={{ textAlign: "right", mt: 1 }}>
                        <Typography variant="body2">
                          Total:{" "}
                          <Box component="span" sx={{ fontWeight: "bold", color: "primary.main" }}>
                            {totalUlis} ULIs
                          </Box>
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  <TextField
                    id="justification"
                    label="Justificación"
                    multiline
                    rows={4}
                    placeholder="Explica cómo y por qué el colaborador ha destacado en estos valores..."
                    value={justification}
                    onChange={(e) => setJustification(e.target.value)}
                    fullWidth
                  />

                  <TextField
                    id="certificate"
                    label="Texto del Certificado"
                    multiline
                    rows={3}
                    placeholder="Texto que aparecerá en el certificado..."
                    value={certificateText}
                    onChange={(e) => setCertificateText(e.target.value)}
                    fullWidth
                    helperText="Puedes editar el texto según sea necesario."
                  />
                </Box>
              </CardContent>
              <CardActions sx={{ p: 3, justifyContent: "space-between" }}>
                <Button variant="outlined" onClick={() => navigate("/")}>
                  Cancelar
                </Button>
                <Button type="submit" variant="contained" disabled={!isFormValid}>
                  Continuar
                </Button>
              </CardActions>
            </Card>
          </form>
        </>
      ) : (
        <Box sx={{ maxWidth: "sm", mx: "auto" }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom align="center">
                Confirmar Reconocimiento
              </Typography>
              <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                    Colaborador:
                  </Typography>
                  <Typography variant="body1">
                    {collaborators.find((c) => c.id === selectedCollaborator)?.name}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                    Valores Institucionales:
                  </Typography>
                  <List disablePadding>
                    {selectedValues.map((valueId) => {
                      const value = institutionalValues.find((v) => v.id === valueId)
                      return (
                        <ListItem key={valueId} disablePadding sx={{ py: 0.5 }}>
                          <ListItemText
                            primary={
                              <Typography variant="body2">
                                {value?.name}{" "}
                                <Box component="span" sx={{ color: "primary.main" }}>
                                  ({value?.ulis} ULIs)
                                </Box>
                              </Typography>
                            }
                          />
                        </ListItem>
                      )
                    })}
                  </List>
                  <Typography variant="body2" sx={{ fontWeight: "medium", mt: 1 }}>
                    Total:{" "}
                    <Box component="span" sx={{ color: "primary.main" }}>
                      {totalUlis} ULIs
                    </Box>
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                    Justificación:
                  </Typography>
                  <Typography variant="body2">{justification}</Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: "medium" }}>
                    Texto del Certificado:
                  </Typography>
                  <Paper variant="outlined" sx={{ p: 2, bgcolor: "background.default" }}>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                      {certificateText}
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ p: 3, justifyContent: "space-between" }}>
              <Button variant="outlined" onClick={handleBack}>
                Volver
              </Button>
              <Button variant="contained" onClick={handleConfirm}>
                Confirmar y Enviar
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </Container>
  )
}

