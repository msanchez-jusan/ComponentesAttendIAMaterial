import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Divider,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
// import { useTranslation } from "react-i18next";
import ButtonFactory from "../forms/buttons/ButtonFactory";

export default function CustomModal({
  display,
  closeHandler,
  submitHandler,
  deleteHandler,
  title,
  subtitle,
  children,

  showCancelButton = true,
  showDeleteButton = false,
  showSaveButton = true,
  saveButtonText,
  cancelButtonText,

  additionalEventsButtons = [],

  width = "md", // 'xs', 'sm', 'md', 'lg', 'xl'
  fullWidth = true,
  isForm = true,
}) {
  //   const { t } = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm")); // Fullscreen en móvil

  const ComponentTag = isForm ? "form" : "div";

  const handleFormSubmit = (e) => {
    if (isForm && submitHandler) {
      e.preventDefault();
      submitHandler(e);
    }
  };

  return (
    <Dialog
      open={display}
      onClose={closeHandler}
      fullWidth={fullWidth}
      maxWidth={width}
      fullScreen={fullScreen}
      scroll="paper"
      PaperProps={{
        component: ComponentTag,
        onSubmit: handleFormSubmit,
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 3,
          pb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
        <IconButton
          aria-label="close"
          onClick={closeHandler}
          sx={{
            color: (theme) => theme.palette.grey[500],
            mt: -1,
            mr: -1,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {(title || subtitle) && (
        <Divider variant="fullWidth" sx={{ borderBottomWidth: 1 }} />
      )}
      <DialogContent dividers sx={{ p: 4 }}>
        {children}
      </DialogContent>

      <DialogActions
        sx={{
          p: 3,
          bgcolor: (theme) =>
            theme.palette.mode === "light"
              ? "grey.50"
              : "rgba(255, 255, 255, 0.05)",
          borderTop: `1px solid ${theme.palette.divider}`,
          gap: 1,
        }}
      >
        {showDeleteButton && (
          <Box sx={{ flexGrow: 1 }}>
            <ButtonFactory
              action="delete"
              label={"Eliminar"}
              onClick={deleteHandler}
              color="error"
              variant="outlined"
            />
          </Box>
        )}

        {additionalEventsButtons.map(
          (btn, index) =>
            btn.visible !== false && (
              <ButtonFactory
                key={index}
                action="custom"
                label={btn.title}
                onClick={btn.handler}
                className={btn.cssClass}
                {...btn}
              />
            ),
        )}

        {showCancelButton && (
          <ButtonFactory
            action="cancel"
            label={cancelButtonText || "Cancelar"}
            onClick={closeHandler}
            variant="text"
            color="inherit"
            sx={{ color: "text.secondary" }}
          />
        )}

        {showSaveButton && (
          <ButtonFactory
            action="save"
            label={saveButtonText || "Guardar"}
            type={isForm ? "submit" : "button"}
            onClick={!isForm ? submitHandler : undefined}
            variant="contained"
            color="primary"
          />
        )}
      </DialogActions>
    </Dialog>
  );
}

CustomModal.propTypes = {
  display: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func,
  deleteHandler: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  showCancelButton: PropTypes.bool,
  showDeleteButton: PropTypes.bool,
  showSaveButton: PropTypes.bool,
  width: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  saveButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  isForm: PropTypes.bool,
  additionalEventsButtons: PropTypes.arrayOf(PropTypes.object),
};
