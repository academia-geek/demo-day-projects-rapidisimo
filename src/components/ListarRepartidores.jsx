// Base
import React, { useEffect } from "react"
import PropTypes from "prop-types"

// Utils
import clientRapidisimo from "../utils/client"

// Redux
import { useDispatch, useSelector } from "react-redux"
import {
  actualizarRepartidor,
  modalDetalleRepartidor,
  listarRepartidores,
} from "../redux/actions/actionsRepartidor"

// Components
import DialogPerfilRepartidor from "./DialogPerfilRepartidor"

const RepartidorPerfil = ({
  colorStatus,
  nameDealer,
  lastNameDealer,
  image,
  onClick,
}) => {
  return (
    <div className="w-20 h-auto text-center cursor-pointer" onClick={onClick}>
      <section
        className={`
          flex items-center justify-center
          w-20 h-20 mb-1 rounded-full
          bg-white border-2 ${colorStatus}
        `}
      >
        <img
          className="w-16 h-16 object-cover rounded-full"
          src={image}
          alt="Dealer Profile"
        />
      </section>

      <p className="mb-0 text-sm text-ellipsis overflow-hidden">
        {nameDealer}
        <span className="ml-1">{lastNameDealer}</span>
      </p>
    </div>
  )
}

const ListarRepartidores = () => {
  const dispatch = useDispatch()
  const { listaRepartidores } = useSelector((state) => state.repartidores)

  const repartidores = listaRepartidores.filter((repartidor) => {
    return repartidor.rol === "Delivery man"
  })

  const handleAbrirModalRepartidor = (repartidor) => {
    dispatch(modalDetalleRepartidor(true))
    dispatch(actualizarRepartidor(repartidor))
  }

  const fetchRepartidores = async () => {
    try {
      const { data } = await clientRapidisimo({
        method: "GET",
        url: "/allUsers/",
      })
      dispatch(listarRepartidores(data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRepartidores()
  }, [])

  return (
    <div className="w-full h-auto mb-6">
      <section className="flex items-center gap-4 mb-4">
        <h4 className="font-medium md:font-normal text-xl md:text-2xl">
          Repartidores
        </h4>
        <aside
          className="
            min-w-[150px] w-auto h-auto
            py-1 px-2 md:py-2 md:px-3
            rounded-full bg-success
            text-white text-base font-medium text-center
          "
        >
          Disponibles
          <span className="ml-2 font-bold">

            {
              repartidores.filter((repartidor) => {
                return repartidor.delivery_man_status === "Disponible"
              }).length
            }
          </span> /
          <span className="ml-1 font-bold">
            {
              repartidores.length
            }
          </span>
        </aside>
      </section>

      <section className="scroll-app flex flex-nowrap gap-6 overflow-y-auto">
        {repartidores.map((repartidor) => (
          <RepartidorPerfil
            key={repartidor.id_user}
            onClick={() => handleAbrirModalRepartidor(repartidor)}
            nameDealer={repartidor.name}
            lastNameDealer={repartidor.lastname}
            image={
              repartidor.user_image === "" || null
                ? "https://res.cloudinary.com/rapidisimo/image/upload/v1655160552/rapidisimo/person_box_phs8c3.png"
                : repartidor.user_image
            }
            colorStatus={
              repartidor.delivery_man_status === 'Disponible'
                ? 'border-success'
                : repartidor.delivery_man_status === 'Ocupado'
                  ? 'border-error'
                  : 'border-grey-600'
            }
            {...repartidor}
          />
        ))}
      </section>

      <DialogPerfilRepartidor />
    </div>
  )
}

RepartidorPerfil.propTypes = {
  colorStatus: PropTypes.string,
  nameDealer: PropTypes.string,
  lastNameDealer: PropTypes.string,
  image: PropTypes.string,
}

RepartidorPerfil.defaultProps = {
  colorStatus: "border-success",
  nameDealer: "Repartidor",
  lastNameDealer: "Repartidor",
  image: "https://picsum.photos/200/300",
}

export default ListarRepartidores
