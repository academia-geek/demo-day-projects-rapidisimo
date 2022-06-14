// Base
import React, { useState } from "react"

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

const ListadoSolicitudesRepartidor = () => {
  const [abrir, setAbrir] = useState(false)

  const handleClickOpen = () => {
    setAbrir(!abrir)
  }

  return (
    <div className="flex flex-col gap-4 w-full h-auto">
      <section>
        <h4 className="font-medium md:font-normal text-xl md:text-2xl">
          Ordenes Activas
        </h4>

        <div
          className="
            scroll-app
            w-full h-[calc(100vh-400px)] lg:h-[calc(100vh-575px)]
            overflow-x-auto mt-4
            bg-white shadow-lg rounded-md
          "
        >
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <button onClick={() => handleClickOpen()}>
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
            <Divider variant="inset" component="li" />
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
            w-full h-[calc(100vh-400px)] lg:h-[calc(100vh-575px)]
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
