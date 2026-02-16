import {
  faPenToSquare,
  faTrashCan,
  faFloppyDisk,
  faMagnifyingGlass,
  faEye,
  faPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export const ACTIONS = {
  edit: {
    label: "Editar",
    icon: faPenToSquare,
    color: "secondary",
    tooltip: "Editar registro",
    variant: "contained",
  },
  delete: {
    label: "Eliminar",
    icon: faTrashCan,
    color: "error",
    tooltip: "Eliminar",
    variant: "outlined",
  },
  save: {
    label: "Guardar",
    icon: faFloppyDisk,
    color: "primary",
    tooltip: "Guardar cambios",
    variant: "contained",
  },
  search: {
    label: "Buscar",
    icon: faMagnifyingGlass,
    color: "info",
    tooltip: "Realizar búsqueda",
    variant: "outlined",
  },
  view: {
    label: "Detalle",
    icon: faEye,
    color: "info",
    tooltip: "Ver detalles",
    variant: "text",
  },
  create: {
    label: "Nuevo",
    icon: faPlus,
    color: "primary",
    tooltip: "Crear nuevo registro",
    variant: "contained",
  },
  logout: {
    label: "Cerrar sesión",
    icon: faSignOutAlt,
    color: "error",
    tooltip: "Cerrar sesión",
    variant: "outlined",
  },
};
