import PropTypes from "prop-types";
import { TextField, InputAdornment, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function CustomInput({
  title,
  name = "",
  type = "text",
  step = type === "number" ? "1" : undefined,
  value = "",
  onChange,
  required = false,
  maxLength,
  autoComplete,
  disabled = false,
  icon,
  placeholder,
  error = false,
  helperText = "",
  className,
  ...props
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (maxLength > 0 && value && value.toString().length >= maxLength) {
      setShowTooltip(true);
      const timer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [value, maxLength]);

  return (
    <Tooltip open={showTooltip} placement="top-end" arrow>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label={title}
        placeholder={placeholder}
        InputLabelProps={{ shrink: true }}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        error={!!error}
        helperText={helperText}
        className={className}
        InputProps={{
          startAdornment: icon ? (
            <InputAdornment position="start">
              <FontAwesomeIcon icon={icon} />
            </InputAdornment>
          ) : null,
          sx: {
            color: "text.primary",
            "& .MuiInputAdornment-root": {
              color: "text.secondary",
            },
          },
          inputProps: {
            maxLength: maxLength,
            step: step,
            autoComplete: autoComplete,
          },
        }}
        sx={{
          mb: 3,

          "& .MuiInputLabel-root.Mui-focused": {
            color: error ? "error.main" : "text.primary",
          },

          "& .MuiOutlinedInput-root": {
            backgroundColor: "background.paper",

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "error.main" : "text.primary",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "error.main" : "text.primary",
            },
          },
        }}
        {...props}
      />
    </Tooltip>
  );
}

CustomInput.propTypes = {
  // ... (igual que antes)
  title: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  step: PropTypes.string,
  icon: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  helperText: PropTypes.string,
  autoComplete: PropTypes.string,
};

export default CustomInput;
