import { useState } from "react";
import { InputAdornment } from "@mui/material";
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import Input from "./CustomInput";
import CustomIconButton from "../buttons/CustomIconButton";

export default function PasswordInput({
  value,
  onChange,
  name = "password",
  title = "Contraseña",
  placeholder = "********",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Input
      title={title}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={showPassword ? "text" : "password"}
      icon={faLock}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CustomIconButton
              icon={showPassword ? faEyeSlash : faEye}
              tooltip={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              size="small"
            />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
