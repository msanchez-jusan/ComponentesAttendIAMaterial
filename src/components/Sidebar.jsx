import React, { useState, useMemo } from "react";
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
  IconButton,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  ExpandLess,
  ExpandMore,
  Phone as PhoneIcon,
  Logout as LogoutIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";
import ButtonFactory from "./forms/buttons/ButtonFactory";

const drawerWidth = 280;

export default function Sidebar({ mode, colorMode }) {
  const globalTheme = useTheme();

  const sidebarTheme = useMemo(
    () =>
      createTheme({
        shape: globalTheme.shape,

        typography: globalTheme.typography,

        components: globalTheme.components,

        palette: {
          mode: "dark",

          primary: globalTheme.palette.primary,
          secondary: globalTheme.palette.secondary,

          background: {
            paper: "#1e1e1e",
            default: "#121212",
          },
        },
      }),
    [globalTheme],
  );

  return (
    <ThemeProvider theme={sidebarTheme}>
      <SidebarContent
        mode={mode}
        colorMode={colorMode}
        drawerWidth={drawerWidth}
      />
    </ThemeProvider>
  );
}

function SidebarContent({ mode, colorMode, drawerWidth }) {
  const theme = useTheme();
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
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.secondary,
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      {/* Header con Toggle */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography
          variant="caption"
          sx={{ mr: 1, color: theme.palette.text.disabled }}
        >
          {mode === "dark" ? "Modo oscuro" : "Modo claro"}
        </Typography>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      <Box
        sx={{
          px: 3,
          pb: 3,
          pt: 1,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            bgcolor: theme.palette.primary.main,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.primary.contrastText,
            fontWeight: "bold",
          }}
        >
          A
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: "bold",
          }}
        >
          ATTENDIA
        </Typography>
      </Box>

      {/* Menu Items */}
      <Box sx={{ overflow: "auto", flex: 1, px: 2 }}>
        <Typography
          variant="caption"
          sx={{
            ml: 2,
            mt: 2,
            mb: 1,
            display: "block",
            fontWeight: "bold",
            color: theme.palette.text.disabled,
          }}
        >
          OVERVIEW
        </Typography>

        <List component="nav">
          <ListItemButton
            onClick={() => handleClick("dashboard")}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              bgcolor: theme.palette.action.selected,
              color: theme.palette.primary.main, // Usará tu rosa #ff7976
              "&:hover": { bgcolor: theme.palette.action.hover },
            }}
          >
            <ListItemIcon
              sx={{ minWidth: 40, color: theme.palette.primary.main }}
            >
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{ fontWeight: 600 }}
            />
            {openMenus.dashboard ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={openMenus.dashboard} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Box
                sx={{
                  position: "relative",
                  ml: 3,
                  pl: 2,
                  borderLeft: `1px solid ${theme.palette.divider}`,
                }}
              >
                {[
                  "Llamadas y mensajes",
                  "Llamadas",
                  "Mensajes",
                  "Conversaciones",
                ].map((text) => {
                  const isActive = text === "Conversaciones";
                  return (
                    <ListItemButton
                      key={text}
                      sx={{
                        py: 0.5,
                        borderRadius: 1,
                        color: isActive
                          ? theme.palette.text.primary
                          : theme.palette.text.secondary,
                        "&:hover": { color: theme.palette.text.primary },
                      }}
                    >
                      <Box
                        sx={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          bgcolor: isActive
                            ? theme.palette.primary.main
                            : "currentColor",
                          mr: 2,
                        }}
                      />
                      <ListItemText primary={text} />
                    </ListItemButton>
                  );
                })}
              </Box>
            </List>
          </Collapse>
        </List>

        <Typography
          variant="caption"
          sx={{
            ml: 2,
            mt: 3,
            mb: 1,
            display: "block",
            fontWeight: "bold",
            color: theme.palette.text.disabled,
          }}
        >
          CONFIGURACIÓN
        </Typography>

        <List>
          {["Agentes IA", "Contactos"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                color: theme.palette.text.secondary,
                "&:hover": {
                  bgcolor: theme.palette.action.hover,
                  color: theme.palette.text.primary,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>
                {index === 0 ? <PeopleIcon /> : <PhoneIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
              <Box sx={{ opacity: 0.5 }}>›</Box>
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src="/ruta-a-tu-imagen.jpg"
            sx={{ width: 40, height: 40, mr: 2 }}
            variant="rounded"
          />
          <Box>
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
            >
              Laura Agente
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: theme.palette.text.secondary }}
            >
              Admin
            </Typography>
          </Box>
        </Box>
        <ButtonFactory
          action="logout"
          mode="button"
          label="Cerrar sesión"
          expanded={true}
          onClick={() => console.log("Logout")}
        />
      </Box>
    </Drawer>
  );
}
