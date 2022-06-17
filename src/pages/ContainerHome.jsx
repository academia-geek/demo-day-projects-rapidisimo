// React
import React from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Pages
import Admin from './Admin'
import Repartidor from './Repartidor'


const ContainerHome = () => {
  const dispatch = useDispatch()
  const {
    perfilActual,
  } = useSelector((state) => state.perfil)

  return (
    <>
      {
        perfilActual.rol !== 'Delivery man' ?  <Admin /> : <Repartidor />
      }
    </>
  )
}

export default ContainerHome
