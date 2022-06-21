// Base
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import clientRapidisimo from "../utils/client"

const Indicadores = ({ title, subtitle }) => {
  return (
    <div
      className="
        flex items-center justify-between
        w-full h-auto
        px-3 md:px-4 py-4 md:py-5
        bg-white shadow-md rounded-md
        border-l-4 border-primary
      "
    >
      <p className="text-regular text-xl lg:text-base xl:text-xl">{title}</p>

      <p
        className="
          font-semibold tracking-wider
          text-xl lg:text-base xl:text-xl
        "
      >
        {subtitle}
      </p>
    </div>
  )
}

const ListadoIndicadores = () => {
  const fetchTotalOrdenes = async () => {
    try {
      const { data } = await clientRapidisimo({
        method: "GET",
        url: "/getNumOrdersToday/",
      })

      console.log(data, 'DATA')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h4 className="font-medium md:font-normal text-xl md:text-2xl mb-4">
        Indicadores
      </h4>

      <div
        className="
          scroll-app
          relative flex flex-col gap-4
          w-full h-auto lg:h-[calc(100vh-520px)]
          overflow-x-auto
        "
      >
        {/* {
          totalOrdenes.map((totalOrden) => (
            <Indicadores
              title="Total de ordenes"
              subtitle={totalOrden.total_orders}
            />
          ))
        } */}
        {/* <Indicadores /> */}
      </div>
    </div>
  )

  useEffect(() => {
    fetchTotalOrdenes()
  }, [])
}

Indicadores.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

Indicadores.defaultProps = {
  title: "Total de entregas hoy",
  subtitle: "30 Entregas",
}

export default ListadoIndicadores
