// React
import React from 'react'
import PropTypes from 'prop-types'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { modalDetalleRepartidor } from '../redux/actions/actionsRepartidor'

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


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DialogPerfilRepartidor = ({ name, rol, email, status }) => {
  const dispatch = useDispatch()
  const {
    estadoActual,
    modalRepartidor
  } = useSelector((state) => state.repartidores)

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  const onClose = () => {
    dispatch(modalDetalleRepartidor(false))
  }

  return (
    <Dialog
      open={modalRepartidor}
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
          <section className="flex items-center gap-4">
            <img
              className="rounded-full h-16 w-16 object-cover object-center"
              src={
                estadoActual.user_image === ' ' || null
                  ? 'https://res.cloudinary.com/rapidisimo/image/upload/v1655160552/rapidisimo/person_box_phs8c3.png'
                  : estadoActual.user_image
              }
              alt={estadoActual.name}
            />
            <aside>
              <h4 className="mb-1 text-xl font-medium">
                {`${estadoActual.name} ${estadoActual.lastname}`}

              </h4>
              <p className="mb-0 text-base font-light">
                {estadoActual.rol === 'Delivery man' ? 'Repartidor' : null}
              </p>
              <p className="mb- text-base font-light">{estadoActual.email}</p>
            </aside>
          </section>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </header>
      </DialogTitle>

      <DialogContent sx={{ padding: "0 16px 16px" }}>
        <p
          className="
            mb-8
            font-regular text-sm md:text-base
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
            {estadoActual.delivery_man_status}
          </span>
        </p>

        <section>
          <h3 className="font-medium text-xl">
            Ordenes Asignadas
          </h3>

        </section>
      </DialogContent>
    </Dialog>
  )
}

DialogPerfilRepartidor.propTypes = {
  name: PropTypes.string,
  rol: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
}

DialogPerfilRepartidor.defaultProps = {
  name: 'Nina Rice',
  rol: 'Repartido',
  email: 'nina.rice@gmail.com',
  status: 'Activo',
}

export default DialogPerfilRepartidor