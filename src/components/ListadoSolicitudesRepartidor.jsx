// Base
import React, { useState } from "react"
import PropTypes from 'prop-types'


// Components
import DialogOrdenRepartidor from "./DialogOrdenRepartidor"

// Material UI
import {
  Avatar,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@mui/material"


// Material UI Icons
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined"

// Styles
import { useTheme } from '@mui/material/styles'


const ListadoSolicitudesRepartidor = () => {
  const [abrir, setAbrir] = useState(false)
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleClickOpen = () => {
    setAbrir(!abrir)
  }

  const theme = useTheme();

  return (
    <div className="flex flex-col gap-4 w-full h-auto">
      <section>
        <h4 className="font-medium md:font-normal text-xl md:text-2xl">
          Orden Actual
        </h4>

        <div
          className="
            scroll-app
            w-full h-[90px]
            overflow-x-auto mt-4
            bg-white shadow-lg rounded-md
          "
        >
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <button
              className="w-full"
              onClick={() => handleClickOpen()}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ background: "#E4DD2E" }}>
                    <AddLocationAltOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Orden de envío 01 - Proto Tech"
                  secondary="En proceso"
                />
              </ListItem>
            </button>
          </List>
        </div>
      </section>

      <section>
        <h4 className="font-medium md:font-normal text-xl md:text-2xl">
          Ordenes Finalizadas
        </h4>

        <div
          className="
            scroll-app
            w-full h-[calc(100vh-200px)] lg:h-[calc(100vh-320px)]
            overflow-x-auto mt-4
            bg-white shadow-lg rounded-md
          "
        >
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <button onClick={() => handleClickOpen()}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ background: "green" }}>
                    <AddLocationAltOutlinedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Orden de envío 01 - Proto Tech"
                  secondary="Entregado"
                />
              </ListItem>
            </button>
            <Divider variant="inset" component="li" />
          </List>
        </div>
      </section>

      <DialogOrdenRepartidor openModal={abrir} onCloseModal={handleClickOpen} />
    </div>
  )
}

export default ListadoSolicitudesRepartidor
