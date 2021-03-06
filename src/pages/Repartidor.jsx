// Base
import React from "react"
import PropTypes from "prop-types"

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Components
import DrawerSidebar from "../components/DrawerSidebar"
import Header from "../components/Header"
import Layout from "../containers/Layout"
import ListadoSolicitudesRepartidor from "../components/ListadoSolicitudesRepartidor"

// Material UI Icons
import StarIcon from "@mui/icons-material/Star"

const InfoRepartidor = ({ services, distance, rating }) => {
  return (
    <div className="w-full h-full">
      <h4 className="text-xl font-light text-white mb-3">
        Información de Servicio
      </h4>
      <hr />

      <section className="w-full h-full mt-3 text-white">
        <div>
          <p className="mb-2 text-base font-normal">Servicios Realizados</p>
          <p className="text-2xl font-semibold">
            {services}
            <span className="ml-1 text-base font-normal">Servicios</span>
          </p>
        </div>

        <div className="my-6">
          <p>Distancia Recorrida</p>
          <p className="text-2xl font-semibold">
            {distance} KM
            <span className="ml-1 text-base font-normal">Recorridos</span>
          </p>
        </div>

        <div>
          <p className="mb-2 text-base font-normal">Calificación de servicio</p>
          <div className="flex items-center">
            <StarIcon sx={{ fontSize: 32 }} />
            <p className="ml-2 text-2xl font-semibold">{rating}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

const Repartidor = () => {
  const dispatch = useDispatch()
  const {
    estadoActual,
  } = useSelector((state) => state.repartidores)

  const {
    perfilActual,
  } = useSelector((state) => state.perfil)

  return (
    <div className="w-full h-screen">
      <DrawerSidebar
        bgColor="bg-secondary"
        btnColor="primary"
        image="http://res.cloudinary.com/rapidisimo/image/upload/v1655160552/rapidisimo/person_box_phs8c3.png"
        name={`${perfilActual.name} ${perfilActual.lastname}`}
        role="Repartidor"
      >
        <InfoRepartidor />
      </DrawerSidebar>

      <Layout>
        <Header
          nameUser={estadoActual.name === '' ? 'Repartidor' : estadoActual.name}
        />
        <ListadoSolicitudesRepartidor />
      </Layout>
    </div>
  )
}

InfoRepartidor.propTypes = {
  services: PropTypes.string,
  distance: PropTypes.string,
  rating: PropTypes.string,
}

InfoRepartidor.defaultProps = {
  services: "145",
  distance: "1240",
  rating: "9.6",
}

export default Repartidor
