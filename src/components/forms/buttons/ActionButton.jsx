import { Button, CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActionButton({
  label,
  icon,
  loading,
  onClick,
  variant = "contained",
  color = "primary",
  size = "medium",
  expanded = false,
  ...props
}) {
  return (
    <Button
      size={size}
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{ width: expanded ? "100%" : "fit-content", textTransform: "none" }}
      disabled={loading}
      startIcon={
        loading ? (
          <CircularProgress size={20} color="inherit" />
        ) : icon ? (
          <FontAwesomeIcon icon={icon} />
        ) : null
      }
      {...props}
    >
      {label}
    </Button>
  );
}
