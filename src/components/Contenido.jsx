import { Typography, Paper, Box } from "@mui/material";
import ButtonFactory from "./forms/buttons/ButtonFactory";
import {
  faFaceGrinWink,
  faUserTie,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import ToggleCard from "./common/ToggleCard";
import { useState } from "react";
import CustomCard from "./common/CustomCard";
function Contenido() {
  const [selectedPersona, setSelectedPersona] = useState("professional");

  const PERSONALITIES = [
    {
      id: "friendly",
      title: "Amigable",
      description:
        "Un tono cercano, empático y casual. Ideal para soporte al cliente B2C.",
      icon: faFaceGrinWink,
    },
    {
      id: "professional",
      title: "Corporativo",
      description:
        "Respuestas precisas, formales y directas. Perfecto para finanzas o legal.",
      icon: faUserTie,
    },
    {
      id: "technical",
      title: "Técnico",
      description: "Enfocado en datos, código y especificaciones detalladas.",
      icon: faRobot,
    },
  ];
  return (
    <div className="container-fluid py-4">
      <header className="mb-5 border-bottom pb-3 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="display-5 fw-bold">PRUEBAS</h1>
          <p className="lead">Subtitulo de pruebas</p>
        </div>
      </header>

      <div className="row g-4">
        <div className=" col-12">
          <CustomCard title="Botones">
            <div className="d-flex flex-row gap-3 flex-wrap">
              <ButtonFactory
                action="save"
                mode="button"
                onClick={() => console.log("Guardar")}
              />
              <ButtonFactory
                action="save"
                mode="icon"
                onClick={() => console.log("Guardar")}
              />
              <ButtonFactory
                action="delete"
                mode="button"
                onClick={() => console.log("Eliminar")}
              />
              <ButtonFactory
                action="delete"
                mode="icon"
                onClick={() => console.log("Eliminar")}
              />
              <ButtonFactory
                action="edit"
                mode="button"
                onClick={() => console.log("Editar")}
              />
              <ButtonFactory
                action="edit"
                mode="icon"
                color="primary"
                onClick={() => console.log("Editar")}
              />
              <ButtonFactory
                action="create"
                mode="button"
                label="Crear nuevo agente IA"
                loading={false}
                onClick={() => console.log("Crear")}
              />
              <ButtonFactory
                action="create"
                mode="icon"
                label="Crear nuevo agente IA"
                loading={false}
                onClick={() => console.log("Crear")}
              />
              <ButtonFactory
                action="search"
                mode="button"
                label="Buscar"
                loading={false}
                onClick={() => console.log("Buscar")}
              />
              <ButtonFactory
                action="search"
                mode="icon"
                label="Buscar"
                loading={false}
                onClick={() => console.log("Buscar")}
              />
              <ButtonFactory
                action="view"
                mode="button"
                label="Ver"
                loading={false}
                onClick={() => console.log("Ver")}
              />
              <ButtonFactory
                action="view"
                mode="icon"
                label="Ver"
                loading={false}
                onClick={() => console.log("Ver")}
              />
            </div>
          </CustomCard>
        </div>
        <div className="col-12 ">
          <CustomCard title="Tarjetas seleccionables">
            {" "}
            <div className="d-flex flex-row gap-3 flex-wrap">
              {PERSONALITIES.map((persona) => (
                <ToggleCard
                  key={persona.id}
                  title={persona.title}
                  description={persona.description}
                  icon={null}
                  selected={selectedPersona === persona.id}
                  onClick={() => setSelectedPersona(persona.id)}
                />
              ))}
            </div>
          </CustomCard>
        </div>
        <div className="col-12 ">
          <div className="row">
            <div className="col-3">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
              ></CustomCard>
            </div>
            <div className="col-6">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
              ></CustomCard>
            </div>
            <div className="col-3">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
                footer={
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="caption" color="text.secondary">
                      Cancela cuando quieras
                    </Typography>
                    <ButtonFactory
                      action="save"
                      mode="button"
                      icon={null}
                      onClick={() => console.log("Guardar")}
                    />
                  </Box>
                }
              >
                <ButtonFactory
                  action="save"
                  mode="button"
                  icon={null}
                  onClick={() => console.log("Guardar")}
                />
              </CustomCard>
            </div>
          </div>
        </div>
        <div className="col-12 ">
          <div className="row">
            <div className="col-3">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
              ></CustomCard>
            </div>
            <div className="col-6">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
              ></CustomCard>
            </div>
            <div className="col-3">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
                footer={
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="caption" color="text.secondary">
                      Cancela cuando quieras
                    </Typography>
                    <ButtonFactory
                      action="save"
                      mode="button"
                      icon={null}
                      onClick={() => console.log("Guardar")}
                    />
                  </Box>
                }
              >
                <ButtonFactory
                  action="save"
                  mode="button"
                  icon={null}
                  onClick={() => console.log("Guardar")}
                />
              </CustomCard>
            </div>
          </div>
        </div>{" "}
        <div className="col-12 ">
          <div className="row">
            <div className="col-3">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
              ></CustomCard>
            </div>
            <div className="col-6">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
              ></CustomCard>
            </div>
            <div className="col-3">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
                footer={
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="caption" color="text.secondary">
                      Cancela cuando quieras
                    </Typography>
                    <ButtonFactory
                      action="save"
                      mode="button"
                      icon={null}
                      onClick={() => console.log("Guardar")}
                    />
                  </Box>
                }
              >
                <ButtonFactory
                  action="save"
                  mode="button"
                  icon={null}
                  onClick={() => console.log("Guardar")}
                />
              </CustomCard>
            </div>
          </div>
        </div>{" "}
        <div className="col-12 ">
          <div className="row">
            <div className="col-3">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
              ></CustomCard>
            </div>
            <div className="col-6">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
              ></CustomCard>
            </div>
            <div className="col-3">
              <CustomCard
                title="Tarjeta de información"
                subtitle="Subtítulo de la tarjeta"
                footer={
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="caption" color="text.secondary">
                      Cancela cuando quieras
                    </Typography>
                    <ButtonFactory
                      action="save"
                      mode="button"
                      icon={null}
                      onClick={() => console.log("Guardar")}
                    />
                  </Box>
                }
              >
                <ButtonFactory
                  action="save"
                  mode="button"
                  icon={null}
                  onClick={() => console.log("Guardar")}
                />
              </CustomCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
