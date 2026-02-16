import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepButton, // <--- IMPORTANTE
  Typography,
} from "@mui/material";
import ButtonFactory from "../forms/buttons/ButtonFactory";

export default function CustomStepper({
  steps,
  activeStep,
  handleNext,
  onStepClick, // <--- NUEVA PROP: Función al hacer click en el paso
  orientation = "vertical",
}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        nonLinear // <--- IMPORTANTE: Permite saltar entre pasos no consecutivos
        activeStep={activeStep}
        orientation={orientation}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            {/* CAMBIO CLAVE: Usamos StepButton en lugar de solo StepLabel.
                Esto hace que todo el encabezado del paso sea un botón.
            */}
            <StepButton
              onClick={() => onStepClick(index)} // Llamamos a la función con el índice
              optional={
                step.description && orientation === "horizontal" ? (
                  <Typography variant="caption" color="text.secondary">
                    {step.description}
                  </Typography>
                ) : null
              }
            >
              <StepLabel>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: activeStep === index ? 700 : 500,
                    color:
                      activeStep === index ? "text.primary" : "text.secondary",
                  }}
                >
                  {step.title}
                </Typography>
              </StepLabel>
            </StepButton>

            {/* CONTENIDO DESPLEGABLE (Solo funciona en vertical) */}
            <StepContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, ml: 1 }}
              >
                {step.description}
              </Typography>

              <Box sx={{ mb: 1, ml: 1 }}>
                <ButtonFactory
                  action="save"
                  label={index === steps.length - 1 ? "Finalizar" : "Siguiente"}
                  onClick={handleNext}
                  size="small"
                  variant="contained"
                  color="inherit"
                  icon={null}
                  sx={{
                    bgcolor: "text.primary",
                    color: "background.paper",
                    "&:hover": { opacity: 0.9 },
                  }}
                />
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
