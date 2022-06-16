// React
import React from 'react'
import PropTypes from 'prop-types'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Material UI
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material"

// Material UI Icons
import CloseIcon from "@mui/icons-material/Close"

// Styles
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

import { Field, Form, Formik } from "formik"
import * as Yup from "yup"


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})


const SingUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Valor muy corto!")
    .max(15, "Valor muy largo!")
    .required("Campo sin información"),
  lastname: Yup.string()
    .min(2, "Valor muy corto!")
    .max(15, "Valor muy largo!")
    .required("Campo sin información"),
  id: Yup.number()
    .min(1, "Valor muy corto!")
    .max(15, "Valor muy largo!")
    .required("Campo sin información"),
  email: Yup.string()
    .email("Correo Invalido")
    .required("Campo sin información"),
  phone: Yup.number()
    .min(1, "Valor muy corto!")
    .max(15, "Valor muy largo!")
    .required("Campo sin información"),
})

const DialogPerfilLogin = ({ name, rol, email, status }) => {
  const dispatch = useDispatch()
  // const {
  //   estadoActual,
  //   modalRepartidor
  // } = useSelector((state) => state.repartidores)

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  // const onClose = () => {
  //   dispatch(modalDetalleRepartidor(false))
  // }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog
        open={open}
        fullScreen={fullScreen}
        maxWidth="md"
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        // onClose={onClose ? onClose : null}
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
              Completa tu perfil
            </h4>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </header>
        </DialogTitle>

        <DialogContent sx={{ padding: "0 16px 16px" }}>
          <Formik
            initialValues={{
              name: "",
              lastname: "",
              id: 0,
              email: "",
              phone: 0,
            }}
            validationSchema={SingUpSchema}
            onSubmit={(values) => {}}
          >
            {({ errors, touched, handleReset, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 mb-4 border border-grey-700
                    bg-transparent
                    placeholder-grey-600 text-grey-700 rounded-md
                    focus:outline-none focus:primary
                    focus:border-primary focus:z-10 sm:text-base
                  "
                />

                {errors.name && touched.name ? (
                  <div className="text-grey-700">{errors.name}</div>
                ) : null}

                <Field
                  name="lastname"
                  type="text"
                  placeholder="Apellido"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 mb-4 border border-grey-700
                    bg-transparent
                    placeholder-grey-600 text-grey-700 rounded-md
                    focus:outline-none focus:primary
                    focus:border-primary focus:z-10 sm:text-base
                  "
                />

                {errors.lastname && touched.lastname ? (
                  <div className="text-grey-700">{errors.lastname}</div>
                ) : null}

                <Field
                  name="id"
                  type="number"
                  placeholder="Identificación"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 mb-4 border border-grey-700
                    bg-transparent
                    placeholder-grey-600 text-grey-700 rounded-md
                    focus:outline-none focus:primary
                    focus:border-primary focus:z-10 sm:text-base
                  "
                />

                {errors.id && touched.id ? (
                  <div className="text-grey-700">{errors.id}</div>
                ) : null}

                <Field
                  name="email"
                  type="email"
                  placeholder="Correo electrónico"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 mb-4 border border-grey-700
                    bg-transparent
                    placeholder-grey-600 text-grey-700 rounded-md
                    focus:outline-none focus:primary
                    focus:border-primary focus:z-10 sm:text-base
                  "
                />
                {errors.email && touched.email ? (
                  <div className="text-grey-700">{errors.email}</div>
                ) : null}

                <Field
                  name="phone"
                  type="number"
                  placeholder="Teléfono"
                  className="
                    appearance-none relative block
                    w-full px-3 py-3 mb-4 border border-grey-700
                    bg-transparent
                    placeholder-grey-600 text-grey-700 rounded-md
                    focus:outline-none focus:primary
                    focus:border-primary focus:z-10 sm:text-base
                  "
                />

                {errors.phone && touched.phone ? (
                  <div className="text-grey-700">{errors.phone}</div>
                ) : null}

                <div className="mt-3">
                  <button
                    type="submit"
                    className="
                    group relative flex justify-center w-full
                    py-2 px-4 border border-transparent text-sm font-medium
                    rounded-md text-background bg-primary focus:outline-none
                    focus:ring-2 focus:ring-offset-2 uppercase
                  "
                  >
                    Aceptar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}


export default DialogPerfilLogin
