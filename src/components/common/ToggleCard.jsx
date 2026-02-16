import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ToggleCard({
  title,
  description,
  icon,
  selected,
  onClick,
}) {
  return (
    <Card
      sx={{
        height: "100%",
        border: selected ? "2px solid" : "2px solid",
        borderColor: selected ? "primary.main" : "divider",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          borderColor: "primary.light",
          boxShadow: 3,
        },
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Box>
            {icon && (
              <Box
                sx={{
                  color: selected ? "primary.main" : "text.secondary",
                  fontSize: 24,
                }}
              >
                <FontAwesomeIcon icon={icon} />
              </Box>
            )}
          </Box>

          <Typography
            variant="h6"
            component="div"
            gutterBottom
            fontWeight="bold"
            color={selected ? "primary.main" : "text.secondary"}
          >
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
