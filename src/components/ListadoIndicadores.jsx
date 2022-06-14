// Base
import React from "react"
import PropTypes from "prop-types"

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
        <Indicadores />
      </div>
    </div>
  )
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
