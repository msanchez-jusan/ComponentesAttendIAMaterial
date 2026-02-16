import { IconButton, Tooltip, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomIconButton({
  icon,
  tooltip,
  onClick,
  color = "primary",
  size = "medium",
  disabled = false,
  ...props
}) {
  return (
    <Tooltip title={tooltip || ""} arrow>
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          width: "fit-content",
          verticalAlign: "middle",
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
          <FontAwesomeIcon icon={icon} />
        </IconButton>
      </Box>
    </Tooltip>
  );
}
