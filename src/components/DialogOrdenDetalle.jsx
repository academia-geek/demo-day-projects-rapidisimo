// Base
import React, { useState } from "react"
import PropTypes from "prop-types"

// Utils
import clientRapidisimo from "../utils/client.js"

// Libraries
import { format } from "date-fns"
import GoogleMapReact from 'google-map-react'

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
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slide
} from "@mui/material"

// Material UI Icons
import CloseIcon from "@mui/icons-material/Close"

// Styles
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

const AnyReactComponent = ({ text }) => <div>{text}</div>

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
    <aside className="w-full h-auto p-3 md:p-4 mb-6 bg-[#dbe4ed] rounded-md">
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
          <span className="ml-1 font-light">{deliveryTime} Aprox</span>
        </li>
        <li
          className="
            mb-1
            font-semibold text-sm md:text-base
            text-ellipsis overflow-hidden
          "
        >
          Costo del envío:
          <span className="ml-1 font-light">$ {pickUpTimes}</span>
        </li>
        {/* <li
          className="
            mb-1
            font-semibold text-sm md:text-base
            text-ellipsis overflow-hidden
          "
        >
          Horario de recogida:
          <span className="ml-1 font-light">{pickUpTimes}</span>
        </li> */}
      </ul>
    </aside>
  )
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DialogOrdenDetalle = ({ center, zoom }) => {
  const dispatch = useDispatch()
  // Ordenes
  const {
    listaOrdenes,
    loader,
    modalOrden,
    ordenActual
  } = useSelector((state) => state.ordenes)

  const nameOrder = ordenActual.id_order

  // Repartidores
  const { listaRepartidores } = useSelector((state) => state.repartidores)
  const repartidores = listaRepartidores.filter((repartidor) => {
    return repartidor.rol === 'Delivery man' & repartidor.delivery_man_status === 'Disponible'
  })

  // Comercios
  const { listaComercios } = useSelector((state) => state.comercios)

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  const onClose = () => {
    dispatch(actualizarModalOrden(false))
    dispatch(ordenPorDefecto())
  }

  const [estadoOrden] = useState([
    { id: "uno", name: "En espera", value: "En espera" },
    { id: "dos", name: "En reparto", value: "En reparto" },
    { id: "tres", name: "Entregado", value: "Entregadas" },
  ])

  const handleCambiarEstadoOrden = (e) => {
    dispatch(actualizarOrden({ status_order: e.target.value }))
  }

  const EnviarCorreoCLiente = async () => {
    try {
      await clientRapidisimo({
        method: "POST",
        url: '/mailAssignedOrden/',
        data: {
          id_order: ordenActual.id_order,
          id_delivery_man: repartidores.id
        }
      })
    }
    catch (error) {
      console.log(error)
    }
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
            code={ordenActual.id_order}
            commerce={ordenActual.id_company === null
              ? 'No asignado'
              : listaComercios.find(comercio => comercio.id_company === ordenActual.id_company).name_company
            }
            date={ordenActual.date_delivery}
            pickupLocation={ordenActual.id_company === null
              ? 'No asignado'
              : listaComercios.find(comercio => comercio.id_company === ordenActual.id_company).companie_address}
            placeDelivery={ordenActual.client_address}
            deliveryTime={ordenActual.estimated_time}
            pickUpTimes={ordenActual.order_cost}
            {...ordenActual}
          />

          <section className="w-full h-auto">
            <div
              className="
                grid grid-cols-1 md:grid-cols-3 gap-4
                w-full h-auto px-3 py-4
                bg-zinc-200 rounded-t-md
              "
            >
              <aside className>
                <FormControl fullWidth size="small">
                  <InputLabel id="estado-label">Estado</InputLabel>
                  <Select
                    labelId="estado-label"
                    id="estado"
                    value={ordenActual.status_order}
                    label="Estado"
                    onChange={handleCambiarEstadoOrden}
                    fullWidth
                  >
                    {estadoOrden.map((estado) => (
                      <MenuItem key={estado.id} value={estado.value}>
                        {estado.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </aside>

              <aside>
                <FormControl fullWidth size="small">
                  <InputLabel id="repartidores-label">Repartidores</InputLabel>
                  <Select
                    labelId="repartidores-label"
                    id="repartidores"
                    value={repartidores.name}
                    label="Repartidores"
                    // onChange={handleChange}
                    fullWidth
                  >
                    {
                      repartidores.map((repartidor) => (
                        <MenuItem
                          key={repartidor.id_user}
                          value={repartidor.id_user}
                        >
                          {`${repartidor.name} ${repartidor.lastname}`}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </aside>

              <aside
                className="
                  relative
                  w-full h-10 px-3 py-2
                  border border-gray-400
                  rounded
                "
              >
                <p
                  className="
                    absolute -top-2
                    px-1
                    text-xs font-normal bg-zinc-200 text-gray-600
                  "
                >
                  Tiempo de llegada
                </p>

                <p>
                  Aprox
                </p>
              </aside>
            </div>

            <div className="h-96 w-full rounded-b-md">
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDa3u_6oJQaFtn2n5EbwYHFYpMIknmZilE' }}
                defaultCenter={center}
                defaultZoom={zoom}
              >
                <AnyReactComponent
                  lat={4.7008}
                  lng={-74.0426}
                  text="Aca estoy"
                />
              </GoogleMapReact>
            </div>
          </section>
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
  center: PropTypes.object,
  zoom: PropTypes.number,
}

DialogOrdenDetalle.defaultProps = {
  center: { lat: 4.7008, lng: -74.0426 },
  zoom: 11,
}

export default DialogOrdenDetalle
