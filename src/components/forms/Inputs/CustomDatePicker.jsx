import PropTypes from "prop-types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

function CustomDatePicker({
  title,
  value,
  onChange,
  type = "date",
  required = false,
  disabled = false,
  minDate,
  maxDate,
  error = false,
  helperText = "",
  className,
  ...props
}) {
  const parsedValue = value ? dayjs(value) : null;

  const commonSlotProps = {
    textField: {
      fullWidth: true,
      variant: "outlined",
      size: "small",
      required: required,
      error: !!error,
      helperText: helperText,
      className: className,
      InputLabelProps: { shrink: true },
    },
  };

  const renderPicker = () => {
    const commonProps = {
      label: title,
      value: parsedValue,
      onChange: onChange,
      disabled: disabled,
      slotProps: commonSlotProps,
      ...props,
    };

    if (type === "time") {
      return <TimePicker {...commonProps} />;
    } else if (type === "datetime") {
      return (
        <DateTimePicker
          {...commonProps}
          minDateTime={minDate ? dayjs(minDate) : undefined}
          maxDateTime={maxDate ? dayjs(maxDate) : undefined}
        />
      );
    } else {
      return (
        <DatePicker
          {...commonProps}
          minDate={minDate ? dayjs(minDate) : undefined}
          maxDate={maxDate ? dayjs(maxDate) : undefined}
        />
      );
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      {renderPicker()}
    </LocalizationProvider>
  );
}

CustomDatePicker.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["date", "time", "datetime"]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  minDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  maxDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  helperText: PropTypes.string,
  className: PropTypes.string,
};

export default CustomDatePicker;
