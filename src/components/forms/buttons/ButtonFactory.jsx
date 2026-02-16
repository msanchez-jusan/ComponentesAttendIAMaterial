import ActionButton from "./ActionButton";
import CustomIconButton from "./CustomIconButton";
import { ACTIONS } from "./actionConfig";

/**
 * @param {string} action - Clave de la acción: 'edit', 'delete', 'save', etc.
 * @param {string} mode - 'button' (texto + icono) o 'icon' (solo icono). Default: 'button'
 * @param {object} props - Resto de propiedades (onClick, loading, disabled, etc.)
 */
export default function ButtonFactory({ action, mode = "button", ...props }) {
  const config = ACTIONS[action];

  if (!config) {
    console.warn(`La acción "${action}" no está definida en actionsConfig.js`);
    return null;
  }

  const mergedProps = { ...config, ...props };

  if (mode === "icon") {
    return (
      <CustomIconButton
        size={mergedProps.size}
        icon={mergedProps.icon}
        tooltip={mergedProps.tooltip}
        color={mergedProps.color}
        onClick={mergedProps.onClick}
        disabled={mergedProps.disabled}
      />
    );
  }
  return (
    <ActionButton
      label={mergedProps.label}
      icon={mergedProps.icon}
      color={mergedProps.color}
      variant={mergedProps.variant}
      size={mergedProps.size}
      {...props}
    />
  );
}
