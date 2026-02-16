import PropTypes from "prop-types";
import { TextField, MenuItem, InputAdornment } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useTranslation } from "react-i18next";

function CustomSelect({
  title, // Label
  items = [],
  value,
  onChange,
  required = false,
  disabled = false,
  emptyTitle = "",
  idKey = "id",
  nameKey = "name",
  use18Next = false,
  icon,
  error = false,
  helperText = "",
  className,
  name,
  ...props
}) {
  //   const { t } = useTranslation();

  return (
    <TextField
      select
      fullWidth
      variant="outlined"
      size="small"
      label={title}
      name={name}
      value={value ?? ""}
      onChange={onChange}
      disabled={disabled}
      required={required}
      error={!!error}
      helperText={helperText}
      className={className}
      InputLabelProps={{ shrink: true }}
      SelectProps={{
        displayEmpty: true,
        renderValue: (selected) => {
          if (!selected || selected === "") {
            return <span style={{ color: "#aaa" }}>{emptyTitle || title}</span>;
          }
          const selectedItem = items.find((i) => i[idKey] === selected);
          if (!selectedItem) return selected;

          // return use18Next ? t(selectedItem[nameKey]) : selectedItem[nameKey];
          return selectedItem[nameKey];
        },
      }}
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
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
          },
        },
      }}
      sx={{
        mb: 2,

        "& label.Mui-focused": {
          color: error ? "error.main" : "text.primary !important",
        },
        "& .MuiOutlinedInput-root": {
          backgroundColor: "background.paper",

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "error.main" : "text.primary",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "error.main" : "text.primary !important",
          },
        },
      }}
      {...props}
    >
      {emptyTitle && (
        <MenuItem value="">
          <em>{emptyTitle}</em>
        </MenuItem>
      )}

      {items && items.length > 0 ? (
        items.map((item) => (
          <MenuItem key={item[idKey]} value={item[idKey]}>
            {use18Next ? t(item[nameKey]) : item[nameKey]}
          </MenuItem>
        ))
      ) : (
        <MenuItem disabled value="">
          Sin opciones
        </MenuItem>
      )}
    </TextField>
  );
}

CustomSelect.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  idKey: PropTypes.string,
  nameKey: PropTypes.string,
  emptyTitle: PropTypes.string,
  use18Next: PropTypes.bool,
  icon: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  helperText: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default CustomSelect;
