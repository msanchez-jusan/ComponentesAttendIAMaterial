import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

// Definimos el componente
export default function ChatBubble({ message, time, isMe }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isMe ? "flex-end" : "flex-start",
        mb: 2, // Margen inferior entre mensajes
      }}
    >
      <Paper
        elevation={0} // Sin sombra para un look más moderno (flat)
        sx={{
          maxWidth: "70%", // Que no ocupe todo el ancho
          p: 2, // Padding interno
          backgroundColor: isMe ? "#ff5c5c" : "#f5f8fa", // Tus colores (Rojo Attendia / Gris Metronic)
          color: isMe ? "#fff" : "#000",

          // LA MAGIA: Bordes redondeados asimétricos
          borderRadius: 2,
          borderTopRightRadius: isMe ? 0 : 2, // Punta arriba derecha si soy yo
          borderTopLeftRadius: !isMe ? 0 : 2, // Punta arriba izquierda si es el otro
        }}
      >
        {/* El Texto del mensaje */}
        <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
          {message}
        </Typography>

        {/* La Hora */}
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={1}
          mt={1}
        >
          <Typography
            variant="caption"
            sx={{
              color: isMe ? "rgba(255,255,255,0.7)" : "text.secondary",
              fontSize: "0.7rem",
            }}
          >
            {time}
          </Typography>

          {/* Si quieres poner el doble check de Font Awesome aquí */}
          {isMe && (
            <i
              className="fa-solid fa-check-double"
              style={{ fontSize: 10, opacity: 0.7 }}
            />
          )}
        </Stack>
      </Paper>
    </Box>
  );
}
