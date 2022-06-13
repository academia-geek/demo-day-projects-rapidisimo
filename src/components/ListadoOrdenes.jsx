// Base
import React, { useEffect, useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
actualizarModalOrden,
actualizarOrden,
listarOrdenes
} from '../redux/actions/actionOrdenes';

// Utils
import clientRapidisimo from "../utils/client.js";

// Components
import DialogOrdenDetalle from "./DialogOrdenDetalle";

import { getAuth, onAuthStateChanged } from "firebase/auth";


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
} from "@mui/material";

// Material UI Icons
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";

const ListadoOrdenes = () => {
  const dispatch = useDispatch()
  const { listaOrdenes }  = useSelector((state) => state.ordenes)

  const handleAbrirModal = (orden) => {
    dispatch(actualizarModalOrden(true))
    dispatch(actualizarOrden(orden))
  }

  const [token, setToken] = useState('');

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      user.getIdToken()
      .then((token) => {
        setToken(token);
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
      console.log("No estas logueado")
    }
  });

  const fetchOrdenes = async () => {
    try {
      const { data } = await clientRapidisimo({
        method: "GET",
        url: "/allOrders/",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      dispatch(listarOrdenes(data))
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOrdenes()
  },[token])

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
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
                <button onClick={() => handleAbrirModal(orden)}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ background: "green" }}>
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

      <DialogOrdenDetalle/>
    </div>
  );
};

export default ListadoOrdenes;
