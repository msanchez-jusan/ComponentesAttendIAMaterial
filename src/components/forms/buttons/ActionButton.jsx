// src/components/common/buttons/ActionButton.jsx
import { Button, CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActionButton({
  label,
  icon, // Ahora espera un objeto de icono importado (ej: faSave)
  loading,
  onClick,
  variant = "contained",
  color = "primary",
  size = "medium",
  ...props
}) {
  return (
    <Button
      size={size}
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{ width: "fit-content", textTransform: "none" }}
      disabled={loading} // Deshabilita el botón visualmente
      startIcon={
        loading ? (
          // 1. Si carga, mostramos el spinner
          <CircularProgress size={20} color="inherit" />
        ) : icon ? (
          // 2. Si no carga y hay icono, renderizamos el componente SVG
          <FontAwesomeIcon icon={icon} fixedWidth />
        ) : null
      }
      {...props}
    >
      {/* 3. El texto SIEMPRE visible */}
      {label}
    </Button>
  );
}
