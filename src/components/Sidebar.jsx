import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Typography,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  People as PeopleIcon,
  ExpandLess,
  ExpandMore,
  Phone as PhoneIcon,
  Message as MessageIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";

import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Colores basados en tu imagen (Estilo Dark Metronic)
const colors = {
  bg: "#1e1e2d", // Fondo oscuro principal
  text: "#92929f", // Texto gris
  textActive: "#ffffff", // Texto activo blanco
  primary: "#f1416c", // El rojo/rosa de tu marca
  activeBg: "rgba(241, 65, 108, 0.1)", // Fondo rojizo suave para el activo
  hover: "#2b2b40", // Color al pasar el mouse
};

const drawerWidth = 280;

export default function Sidebar({ mode, colorMode, theme }) {
  // Estado para controlar qué menús están abiertos
  const [openMenus, setOpenMenus] = useState({ dashboard: true });

  const handleClick = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: colors.bg,
          color: colors.text,
          borderRight: "none", // Quitar borde default de MUI
        },
      }}
    >
      <Box>
        <Typography variant="caption" sx={{ mr: 1 }}>
          {mode === "dark" ? "Dark Mode" : "Light Mode"}
        </Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
      {/* 1. LOGO AREA */}
      <Box sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}>
        {/* Aquí iría tu logo <img> */}
        <Box
          sx={{
            width: 40,
            height: 40,
            bgcolor: colors.primary,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          A
        </Box>
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          ATTENDIA
        </Typography>
      </Box>

      {/* 2. MENU ITEMS */}
      <Box sx={{ overflow: "auto", flex: 1, px: 2 }}>
        {/* SECCIÓN: OVERVIEW */}
        <Typography
          variant="caption"
          sx={{
            ml: 2,
            mt: 2,
            mb: 1,
            display: "block",
            fontWeight: "bold",
            opacity: 0.5,
          }}
        >
          OVERVIEW
        </Typography>

        <List component="nav">
          {/* Item Padre: Dashboard (Activo) */}
          <ListItemButton
            onClick={() => handleClick("dashboard")}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              bgcolor: colors.activeBg, // Fondo activo
              color: colors.primary, // Texto activo
              "&:hover": { bgcolor: colors.activeBg },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: colors.primary }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{ fontWeight: 600 }}
            />
            {openMenus.dashboard ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* Sub-items (Llamadas, Mensajes...) */}
          <Collapse in={openMenus.dashboard} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Renderizamos una línea vertical visual si quieres el efecto árbol */}
              <Box
                sx={{
                  position: "relative",
                  ml: 3,
                  pl: 2,
                  borderLeft: `1px solid ${colors.hover}`,
                }}
              >
                {[
                  "Llamadas y mensajes",
                  "Llamadas",
                  "Mensajes",
                  "Conversaciones",
                ].map((text) => (
                  <ListItemButton
                    key={text}
                    sx={{
                      py: 0.5,
                      borderRadius: 1,
                      color: text === "Conversaciones" ? "white" : colors.text, // Simulo que Conversaciones está seleccionado
                      "&:hover": { color: "white" },
                    }}
                  >
                    {/* Bullet point pequeño típico de templates admin */}
                    <Box
                      sx={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        bgcolor: "currentColor",
                        mr: 2,
                      }}
                    />
                    <ListItemText primary={text} />
                  </ListItemButton>
                ))}
              </Box>
            </List>
          </Collapse>
        </List>

        {/* SECCIÓN: CONFIGURACIÓN */}
        <Typography
          variant="caption"
          sx={{
            ml: 2,
            mt: 3,
            mb: 1,
            display: "block",
            fontWeight: "bold",
            opacity: 0.5,
          }}
        >
          CONFIGURACIÓN
        </Typography>

        <List>
          <ListItemButton
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&:hover": { bgcolor: colors.hover, color: "white" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Agentes IA" />
            <Box sx={{ opacity: 0.5 }}>›</Box> {/* Flecha simple derecha */}
          </ListItemButton>

          <ListItemButton
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&:hover": { bgcolor: colors.hover, color: "white" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Contactos" />
            <Box sx={{ opacity: 0.5 }}>›</Box>
          </ListItemButton>
        </List>
      </Box>

      {/* 3. FOOTER (USUARIO) */}
      <Box sx={{ p: 2, borderTop: `1px solid ${colors.hover}` }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src="/ruta-a-tu-imagen.jpg"
            sx={{ width: 40, height: 40, mr: 2 }}
            variant="rounded" // Cuadrado redondeado como en la foto
          />
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Laura Agente
            </Typography>
            <Typography variant="caption" sx={{ color: colors.text }}>
              Admin
            </Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<LogoutIcon />}
          sx={{
            color: colors.text,
            borderColor: colors.hover,
            justifyContent: "flex-start",
            "&:hover": { borderColor: colors.primary, color: "white" },
          }}
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );
}
