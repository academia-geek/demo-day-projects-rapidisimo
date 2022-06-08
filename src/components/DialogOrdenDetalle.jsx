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
  IconButton,
  Slide,
} from "@mui/material";

// Material UI Icons
import CloseIcon from "@mui/icons-material/Close";

// Styles
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const TarjetaInfo = ({
  code,
  commerce,
  date,
  pickupLocation,
  placeDelivery,
  deliveryTime,
  pickUpTimes,
}) => {
  return (
    <aside className="w-full h-auto p-3 md:p-4 mb-4 bg-[#dbe4ed] rounded-md">
      <ul>
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
    </aside>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogOrdenDetalle = ({ open, onClose, nameOrder }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        open={open}
        fullScreen={fullScreen}
        maxWidth="md"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose ? onClose : null}
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
            <h4 className="font-medium text-xl md:text-2xl">{nameOrder}</h4>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </header>
        </DialogTitle>

        <DialogContent sx={{ padding: "0 16px" }}>
          <TarjetaInfo />

          {/* TODO: Agregar Mapa */}
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancelar
          </Button>
          <Button variant="contained" color="secondary">
            Comenzar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

TarjetaInfo.propTypes = {
  code: PropTypes.string,
  commerce: PropTypes.string,
  date: PropTypes.string,
  pickupLocation: PropTypes.string,
  placeDelivery: PropTypes.string,
  deliveryTime: PropTypes.string,
  pickUpTimes: PropTypes.string,
};

TarjetaInfo.defaultProps = {
  code: "0o9i8u7y6",
  commerce: "Zipol",
  date: "12/12/2020",
  pickupLocation: "Calle 153 # 104 - 18 - Medellin",
  placeDelivery: "Carrera 18 # 134 - 65 - Medellin",
  deliveryTime: "7:00am hasta 5:30pm",
  pickUpTimes: "Inmediato",
};

DialogOrdenDetalle.propTypes = {
  nameOrder: PropTypes.string,
};

DialogOrdenDetalle.defaultProps = {
  nameOrder: "Orden de envío 02",
};

export default DialogOrdenDetalle;
