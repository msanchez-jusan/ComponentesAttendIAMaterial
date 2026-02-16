import ActionButton from "./ActionButton";
import CustomIconButton from "./CustomIconButton";
import { ACTIONS } from "./actionConfig";

/**
 * @param {string} action - (Opcional) Clave de la acción. Si no existe, usa props manuales.
 * @param {string} mode - 'button' o 'icon'. Default: 'button'
 * @param {object} props - Propiedades manuales (label, icon, onClick, color...)
 */
export default function ButtonFactory({ action, mode = "button", ...props }) {
  const config = action ? ACTIONS[action] : null;

  if (action && !config) {
    console.warn(
      `La acción "${action}" no está definida en actionsConfig.js. Se usará un botón genérico con las props pasadas.`,
    );
  }

  const mergedProps = { ...(config || {}), ...props };

  if (mode === "icon") {
    return (
      <CustomIconButton
        size={mergedProps.size}
        icon={mergedProps.icon}
        tooltip={mergedProps.tooltip || mergedProps.label}
        color={mergedProps.color}
        onClick={mergedProps.onClick}
        disabled={mergedProps.disabled}
        type={mergedProps.type}
        {...props}
      />
    );
  }

  return (
    <ActionButton
      label={mergedProps.label || "Botón"}
      icon={mergedProps.icon}
      color={mergedProps.color}
      variant={mergedProps.variant}
      size={mergedProps.size}
      type={mergedProps.type}
      {...props}
    />
  );
}
