import { Typography, Paper } from "@mui/material";
import ButtonFactory from "./forms/buttons/ButtonFactory";
function Contenido() {
  return (
    <div className="container-fluid py-4">
      <header className="mb-5 border-bottom pb-3 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="display-5 fw-bold">React Playground</h1>
          <p className="lead">
            Bootstrap 5.3 (Layout) + Material UI (Components)
          </p>
        </div>
      </header>

      <div className="row g-4">
        {/* Section 1: Basic MUI Components */}
        <div className="d-inline-flex">
          <Paper elevation={5} className="p-4 h-100 rounded-3">
            <Typography variant="h5" component="h2" gutterBottom>
              Botones
            </Typography>
            <div className="d-flex flex-row gap-3">
              <ButtonFactory
                action="save"
                mode="button"
                onClick={() => console.log("Guardar")}
              />

              <ButtonFactory
                action="delete"
                mode="button"
                onClick={() => console.log("Eliminar")}
              />
              <ButtonFactory
                action="edit"
                mode="icon"
                onClick={() => console.log("Editar")}
              />
              <ButtonFactory
                action="create"
                mode="button"
                color="secondary"
                label="Crear nuevo agente IA"
                loading={false}
                onClick={() => console.log("Crear")}
              />
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
