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
import CustomInput from "./forms/Inputs/CustomInput";
import PasswordInput from "./forms/Inputs/PasswordInput";
import CustomStepper from "./common/CustomStepper";
import CustomDatePicker from "./forms/Inputs/CustomDatePicker";
import CustomSelect from "./forms/Inputs/CustomSelect";
import CustomModal from "./common/CustomModal";

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
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Crear Agente IA",
      description:
        "Define el nombre, la personalidad y el avatar de tu asistente.",
    },
    {
      title: "Diseñar prompt",
      description:
        "Escribe las instrucciones base (System Prompt) que guiarán su comportamiento.",
    },
    {
      title: "Base de Conocimiento",
      description:
        "Sube archivos PDF, TXT o DOC para que el agente aprenda de tu negocio.",
    },
    {
      title: "Configuración Final",
      description: "Revisa los permisos y activa el agente.",
    },
  ];
  const roles = [
    { id: "admin", nombre: "Administrador" },
    { id: "user", nombre: "Usuario Básico" },
    { id: "guest", nombre: "Invitado" },
  ];
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log("¡Formulario Finalizado!");
    }
  };

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };
  const [fecha, setFecha] = useState(null);
  const [rol, setRol] = useState("");
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="col-12">
          <CustomCard>
            <CustomInput
              title="Nombre"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              icon={null}
              placeholder="Nombre"
            />
            <PasswordInput
              title="Contraseña"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="********"
            />
            {/* 1. FECHA SIMPLE */}
            <CustomDatePicker
              title="Fecha de Nacimiento"
              value={fecha}
              onChange={(newValue) => setFecha(newValue)}
              error={!fecha}
            />

            {/* 2. HORA */}
            <CustomDatePicker
              title="Hora de entrada"
              type="time"
              value={fecha}
              onChange={(newValue) => setFecha(newValue)}
            />

            {/* 3. FECHA Y HORA */}
            <CustomDatePicker
              title="Cita agendada"
              type="datetime"
              value={fecha}
              onChange={(newValue) => setFecha(newValue)}
            />
            <CustomSelect
              title="Rol de Usuario"
              items={roles}
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              idKey="id"
              nameKey="nombre"
              emptyTitle="Seleccione un rol..."
            />
          </CustomCard>
        </div>
        <div className="col-12 ">
          <CustomCard title="Tarjetas seleccionables">
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
        <div className="col-12">
          <CustomCard title="Modal">
            <ButtonFactory
              action="create"
              mode="button"
              label="Crear nuevo agente IA"
              loading={false}
              onClick={() => setIsOpen(true)}
            />
            <CustomModal
              display={isOpen}
              closeHandler={() => setIsOpen(false)}
              title="Titulo del modal"
              subtitle="Descripción del modal"
              width="sm"
              isForm={true}
              submitHandler={() => console.log("Guardar")}
              showDeleteButton={true}
              showCancelButton={true}
              showSaveButton={true}
              deleteHandler={() => console.log("Eliminar")}
              cancelButtonText="Cancelar"
              saveButtonText="Guardar"
            >
              <CustomInput
                title="Nombre"
                placeholder="Ingrese el nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CustomInput
                title="Email"
                placeholder="Ingrese el email"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </CustomModal>
          </CustomCard>
        </div>
        <div className="col-12 ">
          <div className="row">
            <div className="col-3">
              <CustomCard
                title="Flujo de creación"
                subtitle="Completa los pasos y publica tu agente"
              >
                <CustomStepper
                  steps={steps}
                  activeStep={activeStep}
                  handleNext={handleNext}
                  orientation="vertical"
                  onStepClick={handleStepClick}
                />
              </CustomCard>
            </div>
            <div className="col-6">
              <CustomCard
                title={steps[activeStep].title}
                subtitle={steps[activeStep].description}
                footer={
                  <Box display="flex" justifyContent="end" alignItems="center">
                    <ButtonFactory
                      action="save"
                      mode="button"
                      icon={null}
                      onClick={() => console.log("Guardar")}
                    />
                  </Box>
                }
              ></CustomCard>
            </div>
            <div className="col-3">
              <CustomCard
                title="Preview Agente IA"
                subtitle="Comprueba el diseño y el comportamiento"
                footer={
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="caption" color="text.secondary">
                      Escribe un mensaje
                    </Typography>
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
