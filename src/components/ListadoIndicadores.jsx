// Base
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

// Utils
import clientRapidisimo from "../utils/client"

//
import { InputLabel, TextField } from "@mui/material"

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

const IndicadoresConFecha = ({ title, subtitle, children }) => {
  return (
    <div
      className="
        px-3 md:px-4 py-4 md:py-5
        bg-white shadow-md rounded-md
        border-l-4 border-primary
      "
    >
      <section
        className="
          flex items-center justify-between
          w-full h-auto mb-3
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
      </section>

      <section className="grid grid-cols-2 gap-4">
        {children}
      </section>
    </div>
  )
}

const ListadoIndicadores = () => {
  const [ganancia , setGanancia] = useState('')

  const fetchTotalGanancias = async () => {
    try {
      const { data } = await clientRapidisimo({
        method: "GET",
        url: "/getTotalEarnings/",
      })
      setGanancia(data)
    } catch (error) {
      console.log(error)
    }
  }

  // const fetchTotalEarnings = async () => {
  //   try {
  //     const { data } = await clientRapidisimo({
  //       method: "GET",
  //       url: "/getTotalEarningsToday/",
  //     })
  //   }
  //   catch(error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    fetchTotalGanancias()
    // fetchTotalEarnings()
  }, [])

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
        <Indicadores
          title="Total de ganancias"
          subtitle={`$ ${ganancia.ganancias}`}
        />

        <Indicadores title="Total de entregas hoy" subtitle="0 Entregas"/>
        <Indicadores title="Total utilidades acumuladas" subtitle="$0"/>

        <IndicadoresConFecha
          title="Total utilidades acumuladas por fecha"
          subtitle="$0"
        >
          <div>
            <InputLabel id="demo-select-small">Fecha Inicial</InputLabel>
            <TextField
              // label="Fecha"
              id="outlined-size-small"
              size="small"
              fullWidth
              type="date"
            />
          </div>

          <div>
            <InputLabel id="demo-select-small">Fecha Final</InputLabel>
            <TextField
              // label="Fecha"
              id="outlined-size-small"
              size="small"
              fullWidth
              type="date"
            />
          </div>
        </IndicadoresConFecha>

      </div>
    </div>
  )
}

Indicadores.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.number,
}

Indicadores.defaultProps = {
  title: "Total de entregas hoy",
  subtitle: 30,
}

export default ListadoIndicadores
