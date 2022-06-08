// Base
import React from "react";
import PropTypes from "prop-types";

// Material UI
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
  TextField,
} from "@mui/material";

// Material UI Icons
import CloseIcon from "@mui/icons-material/Close";

// Styles
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogOrdenRepartidor = ({
  state,
  code,
  commerce,
  date,
  pickupLocation,
  placeDelivery,
  deliveryTime,
  pickUpTimes,
  openModal,
  onCloseModal,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        open={openModal}
        fullScreen={fullScreen}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={onCloseModal ? onCloseModal : null}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ padding: "16px" }}>
          <header
            className="
              relative flex
              items-center justify-between
              w-full h-auto pb-3
              border-b border-gray-400
            "
          >
            <h4 className="font-medium text-xl md:text-2xl">
              Detalle de la orden #{code}
            </h4>
            <IconButton onClick={onCloseModal}>
              <CloseIcon />
            </IconButton>
          </header>
        </DialogTitle>

        <DialogContent sx={{ padding: "0 16px" }}>
          <ul>
            <li
              className="
                mb-1
                font-semibold text-sm md:text-base
                text-ellipsis overflow-hidden
              "
            >
              Estado Actual:
              <span
                className="
                  ml-1 px-3 py-1
                  font-light text-white font-medium
                  bg-yellow-500 rounded-full
                "
              >
                {state}
              </span>
            </li>
            <li
              className="
                mb-1
                font-semibold text-sm md:text-base
                text-ellipsis overflow-hidden
              "
            >
              Codígo:
              <span className="ml-1 font-light">{code}</span>
            </li>
            <li
              className="
                mb-1
                font-semibold text-sm md:text-base
                text-ellipsis overflow-hidden
              "
            >
              Comercio:
              <span className="ml-1 font-light">{commerce}</span>
            </li>
            <li
              className="
                mb-1
                font-semibold text-sm md:text-base
                text-ellipsis overflow-hidden
              "
            >
              Fecha de solicitud:
              <span className="ml-1 font-light">{date}</span>
            </li>
            <li
              className="
                mb-1
                font-semibold text-sm md:text-base
                text-ellipsis overflow-hidden
              "
            >
              Lugar de recogida:
              <span className="ml-1 font-light">{pickupLocation}</span>
            </li>
            <li
              className="
                mb-1
                font-semibold text-sm md:text-base
                text-ellipsis overflow-hidden
              "
            >
              Lugar de entrega:
              <span className="ml-1 font-light">{placeDelivery}</span>
            </li>
            <li
              className="
                mb-1
                font-semibold text-sm md:text-base
                text-ellipsis overflow-hidden
              "
            >
              Horario de entrega:
              <span className="ml-1 font-light">{deliveryTime}</span>
            </li>
            <li
              className="
                mb-1
                font-semibold text-sm md:text-base
                text-ellipsis overflow-hidden
              "
            >
              Horario de recogida:
              <span className="ml-1 font-light">{pickUpTimes}</span>
            </li>
          </ul>

          <section className="mb-2">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <p className="mb-1 font-semibold text-sm md:text-base">
                  Código de Validación
                </p>
                <TextField
                  label="Ingresar código  de validacion"
                  id="outlined-size-small"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <p className="mb-1 font-semibold text-sm md:text-base">
                  Evidencia de entrega
                </p>
                <input
                  type="file"
                  id="inputarchivo"
                  name="file"
                  className="hidden"
                  required
                />
                <button
                  className="
                    w-full h-10
                    text-center text-white uppercase text-sm font-medium
                    tracking-wider bg-primary rounded-md
                  "
                >
                  <label for="inputarchivo" id="labelarchivo">
                    Selecciona un archivo
                  </label>
                </button>
              </Grid>
            </Grid>
          </section>
        </DialogContent>

        <DialogActions sx={{ padding: "16px" }}>
          <Button variant="contained" color="secondary" fullWidth>
            Finalizar Orden
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogOrdenRepartidor.propTypes = {
  state: PropTypes.string,
  code: PropTypes.string,
  commerce: PropTypes.string,
  date: PropTypes.string,
  pickupLocation: PropTypes.string,
  placeDelivery: PropTypes.string,
  deliveryTime: PropTypes.string,
  pickUpTimes: PropTypes.string,
};

DialogOrdenRepartidor.defaultProps = {
  state: "En espera",
  code: "0o9i8u7y6",
  commerce: "Zipol",
  date: "12/12/2020",
  pickupLocation: "Calle 153 # 104 - 18 - Medellin",
  placeDelivery: "Carrera 18 # 134 - 65 - Medellin",
  deliveryTime: "7:00am hasta 5:30pm",
  pickUpTimes: "Inmediato",
};

export default DialogOrdenRepartidor;
