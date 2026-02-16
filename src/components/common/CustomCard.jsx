import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Box,
} from "@mui/material";

export default function CustomCard({
  title,
  subtitle,
  children,
  footer,
  noPadding = false,
  ...props
}) {
  return (
    <Card
      elevation={1}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...props.sx,
      }}
      {...props}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: "1.1rem" }}
          >
            {title}
          </Typography>
        }
        subheader={
          subtitle && (
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          )
        }
        sx={{ pb: 2 }}
      />

      {(title || subtitle) && (
        <Divider
          variant="fullWidth"
          sx={{
            borderBottomWidth: 2,
          }}
        />
      )}

      <CardContent
        sx={{
          flexGrow: 1,
          p: noPadding ? 0 : 3,
          "&:last-child": { pb: noPadding ? 0 : 3 },
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>{children}</Box>
      </CardContent>

      {footer && (
        <>
          <Divider />
          <Box
            sx={{
              p: 2,
              bgcolor: (theme) =>
                theme.palette.mode === "light"
                  ? "grey.50"
                  : "rgba(255, 255, 255, 0.05)",
            }}
          >
            {footer}
          </Box>
        </>
      )}
    </Card>
  );
}
