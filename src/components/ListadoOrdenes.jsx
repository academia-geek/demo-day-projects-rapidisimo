// Base
import React, { useState } from "react";

// Components
import DialogOrdenDetalle from "./DialogOrdenDetalle";

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
  const [abrir, setAbrir] = useState(false);

  const handleClickOpen = () => {
    setAbrir(!abrir);
  };

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
      </section>

      <DialogOrdenDetalle open={abrir} onClose={handleClickOpen} />
    </div>
  );
};

export default ListadoOrdenes;
