// src/components/common/buttons/IconAction.jsx
import { IconButton, Tooltip, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomIconButton({
  icon, // Ahora espera un objeto de icono importado (ej: faEdit)
  tooltip,
  onClick,
  color = "primary",
  size = "medium",
  disabled = false,
  ...props
}) {
  return (
    <Tooltip title={tooltip || ""} arrow>
      {/* El Box protege el tooltip para que funcione aunque esté disabled */}
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          width: "fit-content",
          verticalAlign: "middle", // Alineación perfecta
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <IconButton
          onClick={onClick}
          color={color}
          size={size}
          disabled={disabled}
          {...props}
        >
          {/* Renderizamos el componente FontAwesomeIcon en lugar de <i> */}
          <FontAwesomeIcon icon={icon} />
        </IconButton>
      </Box>
    </Tooltip>
  );
}
