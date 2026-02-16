import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Link,
  useTheme,
} from "@mui/material";
import CustomInput from "./components/forms/Inputs/CustomInput";
import PasswordInput from "./components/forms/Inputs/PasswordInput";
import ButtonFactory from "./components/forms/buttons/ButtonFactory";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function LoginPage() {
  const theme = useTheme();
  const [credentials, setCredentials] = useState({ user: "", pass: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login con:", credentials);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        p: 2,
        overflow: "hidden",

        // 1. IMAGEN DE FONDO
        backgroundImage:
          'url("https://plus.unsplash.com/premium_photo-1664304519683-edde298ccc9d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Cambia esto por tu ruta: /img/tu-fondo.jpg
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,

          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(70px)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1,
        }}
      >
        <img src="/img/logo.png" alt="Logo App" style={{ height: 40 }} />
      </Box>

      <Card
        elevation={0}
        sx={{
          position: "relative",
          maxWidth: 450,
          width: "100%",
          borderRadius: 2,
          p: 2,
          boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
              mx: "auto",
              background: `linear-gradient(${theme.palette.primary.main}30 20%, rgba(255, 255, 255, 1) 100%)`,
            }}
          >
            <img
              src="/img/logo.png"
              alt="Logo Central"
              style={{ height: 50, display: "block" }}
            />
          </Box>

          <Typography
            variant="h5"
            sx={{ color: "primary.main" }}
            fontWeight="800"
            align="center"
            gutterBottom
          >
            ¡Bienvenido!
          </Typography>

          <Typography
            variant="h6"
            fontWeight="600"
            color="text.primary"
            align="center"
            sx={{ mb: 4 }}
          >
            Inicia sesión en tu cuenta
          </Typography>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleLogin}
            sx={{ width: "100%" }}
          >
            <CustomInput
              title="Usuario"
              placeholder="Usuario"
              name="user"
              value={credentials.user}
              onChange={handleChange}
              icon={faUser}
            />

            <Box>
              <PasswordInput
                title="Contraseña"
                name="pass"
                value={credentials.pass}
                onChange={handleChange}
                placeholder="********"
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
              <Link
                href="#"
                underline="hover"
                variant="caption"
                color="text.secondary"
                fontWeight="500"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </Box>

            <ButtonFactory
              mode="button"
              action="login"
              label="Acceder"
              color="secondary"
              onClick={handleLogin}
              expanded={true}
              type="submit"
              size="large"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
