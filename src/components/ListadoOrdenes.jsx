// Base
import React, { useEffect } from "react"

// Redux
import { useDispatch, useSelector } from "react-redux"
import {
  actualizarModalOrden,
  actualizarOrden,
  listarOrdenes
} from '../redux/actions/actionOrdenes'

// Utils
import clientRapidisimo from "../utils/client.js"

// Components
import DialogOrdenDetalle from "./DialogOrdenDetalle"

// Material UI
import {
  Avatar,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Select,
  TextField,
} from "@mui/material"

// Material UI Icons
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined"

const ListadoOrdenes = () => {
  const dispatch = useDispatch()
  // ordenes
  const { listaOrdenes } = useSelector((state) => state.ordenes)


  // Comercios
  const { listaComercios } = useSelector((state) => state.comercios)

  const handleAbrirModal = (orden) => {
    dispatch(actualizarModalOrden(true))
    dispatch(actualizarOrden(orden))
  }

  const fetchOrdenes = async () => {
    try {
      const { data } = await clientRapidisimo({
        method: "GET",
        url: "/allOrders/",
      })
      dispatch(listarOrdenes(data))
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchOrdenes()
  }, [])

  return (
    <div>
      <h4 className="font-medium md:font-normal text-xl md:text-2xl mb-4">
        Listado de solicitudes
      </h4>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InputLabel id="demo-select-small">Estado</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Estado"
            fullWidth
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>En espera</MenuItem>
            <MenuItem value={20}>En reparto</MenuItem>
            <MenuItem value={30}>Entregado</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel id="demo-select-small">Comercio</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Comercio"
            fullWidth
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {listaComercios.map((comercio) => (
              <MenuItem value={comercio.id_company} key={comercio.id_company}>
                {comercio.name_company}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel id="demo-select-small">Fecha</InputLabel>
          <TextField
            // label="Fecha"
            id="outlined-size-small"
            size="small"
            fullWidth
            type="date"
          />
        </Grid>
      </Grid>

      <section
        className="
          scroll-app
          w-full h-[calc(100vh-450px)] lg:h-[calc(100vh-600px)]
          overflow-x-auto mt-4
          bg-white
        "
      >
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {
            listaOrdenes.map(orden => (
              <div key={orden.id_order}>
                <button
                  onClick={() => handleAbrirModal(orden)}
                  className="w-full"
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        style={
                          orden.status_order === "En espera"
                            ? { background: "#ef4444" }
                            : orden.status_order === "En reparto"
                              ? { background: "#fa8a24" }
                              : { background: "#50ae57" }
                        }
                      >
                        <AddLocationAltOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`Orden de envío #${orden.id_order}`}
                      secondary={orden.status_order}
                      {...orden}
                    />
                  </ListItem>
                </button>
                <Divider variant="inset" component="li" />
              </div>
            ))
          }
        </List>
      </section>

      <DialogOrdenDetalle />
    </div>
  )
}

export default ListadoOrdenes
