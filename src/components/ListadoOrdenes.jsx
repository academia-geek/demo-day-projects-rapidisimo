// Base
import * as React from "react";

// Material UI
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";

const ListadoOrdenes = () => {
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
        </List>
      </section>
    </div>
  );
};

export default ListadoOrdenes;
