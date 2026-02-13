// src/components/common/buttons/SystemAction.jsx
import ActionButton from "./ActionButton";
import CustomIconButton from "./CustomIconButton"; // Tu componente corregido
import { ACTIONS } from "./actionConfig";

/**
 * @param {string} action - Clave de la acción: 'edit', 'delete', 'save', etc.
 * @param {string} mode - 'button' (texto + icono) o 'icon' (solo icono). Default: 'button'
 * @param {object} props - Resto de propiedades (onClick, loading, disabled, etc.)
 */
export default function ButtonFactory({ action, mode = "button", ...props }) {
  // 1. Buscamos la configuración en nuestro diccionario
  const config = ACTIONS[action];

  // Si la acción no existe, lanzamos un error o devolvemos null para evitar crash
  if (!config) {
    console.warn(`La acción "${action}" no está definida en actionsConfig.js`);
    return null;
  }

  // 2. Combinamos la config por defecto con las props que nos llegan.
  // IMPORTANTE: Las props ganan. Si pasas un color manual, sobrescribe al del config.
  const mergedProps = { ...config, ...props };

  // 3. Decidimos qué componente pintar
  if (mode === "icon") {
    return (
      <CustomIconButton
        size={mergedProps.size}
        icon={mergedProps.icon}
        tooltip={mergedProps.tooltip}
        color={mergedProps.color}
        onClick={mergedProps.onClick}
        disabled={mergedProps.disabled} // CustomIcon no usa 'loading' directamente, pero podrías mapearlo a disabled
        // size={mergedProps.size} // Si quisieras pasarlo
      />
    );
  }

  // Por defecto: Botón completo con texto (ActionButton)
  return (
    <ActionButton
      label={mergedProps.label}
      icon={mergedProps.icon}
      color={mergedProps.color}
      variant={mergedProps.variant}
      size={mergedProps.size}
      {...props} // Pasamos loading, onClick, etc.
    />
  );
}
