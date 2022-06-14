// Base
import React, { useState } from "react"
import PropTypes from "prop-types"

// Utils
import clientRapidisimo from "../utils/client.js"
import { format } from "date-fns"

// Redux
import { useSelector, useDispatch } from "react-redux"
import {
  actualizarModalOrden,
  actualizarLoader,
  actualizarOrden,
  listarOrdenes,
  ordenPorDefecto,
} from "../redux/actions/actionOrdenes"

// Material UI
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slide,
} from "@mui/material"

// Material UI Icons
import CloseIcon from "@mui/icons-material/Close"

// Styles
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

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
          <span className="ml-1 font-light">Zipol</span>
        </li>
        <li
          className="
            mb-1
            font-semibold text-sm md:text-base
            text-ellipsis overflow-hidden
          "
        >
          Fecha de solicitud:
          <span className="ml-1 font-light">
            {format(new Date(date), "dd/MM/yyyy")}
          </span>
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
  )
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DialogOrdenDetalle = () => {
  const dispatch = useDispatch()
  const {
    listaOrdenes,
    loader,
    modalOrden,
    ordenActual
  } = useSelector((state) => state.ordenes)

  const nameOrder = ordenActual.id_order

  const theme = useTheme()

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  const onClose = () => {
    dispatch(actualizarModalOrden(false))
    dispatch(ordenPorDefecto())
  }

  const [estadoOrden] = useState([
    { id: "uno", name: "En espera", value: "En espera" },
    { id: "dos", name: "En reparto", value: "En reparto" },
    { id: "tres", name: "Entregado", value: "Entregado" },
  ])

  const handleCambiarEstadoOrden = (e) => {
    dispatch(actualizarOrden({ status_order: e.target.value }))
  }

  const putOrden = async () => {
    try {
      const { id_order, _id_tracking, ...payload } = ordenActual
      dispatch(actualizarLoader(true))
      await clientRapidisimo({
        method: "PUT",
        url: `/putOrder/${ordenActual.id_order}`,
        data: payload,
      })
      const nuevaLista = listaOrdenes.map((orden) => {
        return orden.id_order === id_order ? ordenActual : orden
      })

      dispatch(listarOrdenes(nuevaLista))
      onClose()
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(actualizarLoader(false))
    }
  }

  const handleAsignarOrden = (e) => {
    putOrden()
  }

  return (
    <div>
      <Dialog
        open={modalOrden}
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
            <h4 className="font-medium text-xl md:text-2xl">
              {`Orden de envío #${nameOrder}`}
            </h4>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </header>
        </DialogTitle>

        <DialogContent sx={{ padding: "0 16px" }}>
          <TarjetaInfo
            code={ordenActual._id_tracking}
            date={ordenActual.date_delivery}
            pickupLocation={ordenActual.client_address}
            {...ordenActual}
          />

          {/* TODO: Agregar Mapa */}

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ordenActual.status_order}
              label="Estado"
              onChange={handleCambiarEstadoOrden}
            >
              {estadoOrden.map((estado) => (
                <MenuItem key={estado.id} value={estado.value}>
                  {estado.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancelar
          </Button>
          <Button
            disabled={loader}
            loading={loader}
            loadingIndicator="Enviando..."
            onClick={handleAsignarOrden}
            variant="contained"
            color="secondary"
          >
            {loader ? "Enviando..." : "Asignar"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

TarjetaInfo.propTypes = {
  code: PropTypes.string,
  commerce: PropTypes.string,
  date: PropTypes.string,
  pickupLocation: PropTypes.string,
  placeDelivery: PropTypes.string,
  deliveryTime: PropTypes.string,
  pickUpTimes: PropTypes.string,
}

TarjetaInfo.defaultProps = {
  code: "0o9i8u7y6",
  commerce: "Zipol",
  date: "2020-05-01T00:00:00.000Z",
  pickupLocation: "Calle 153 # 104 - 18 - Medellin",
  placeDelivery: "Carrera 18 # 134 - 65 - Medellin",
  deliveryTime: "7:00am hasta 5:30pm",
  pickUpTimes: "Inmediato",
}

DialogOrdenDetalle.propTypes = {
  nameOrder: PropTypes.string,
}

DialogOrdenDetalle.defaultProps = {
  nameOrder: "Orden de envío 02",
} 

export default DialogOrdenDetalle
