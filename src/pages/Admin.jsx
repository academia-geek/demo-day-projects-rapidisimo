// Base
import React from "react"

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Container
import Layout from "../containers/Layout"

// Components
import Header from "../components/Header"
import DrawerSidebar from "../components/DrawerSidebar"
import ListarRepartidores from "../components/ListarRepartidores"
import ListarComercios from "../components/ListadoComercios"
import ListadoOrdenes from "../components/ListadoOrdenes"
import ListadoIndicadores from "../components/ListadoIndicadores"

const Admin = () => {
  const dispatch = useDispatch()
  const {
    perfilActual,
  } = useSelector((state) => state.perfil)

  return (
    <div className="w-full h-screen">
      <DrawerSidebar
        bgColor="bg-primary"
        btnColor="secondary"
      >
      </DrawerSidebar>

      <Layout>
        <Header
            nameUser = {perfilActual.name === '' ? 'Admin' : perfilActual.name }
        />
        <ListarRepartidores />
        <ListarComercios />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ListadoOrdenes />
          <ListadoIndicadores />
        </section>
      </Layout>
    </div>
  )
}

export default Admin
