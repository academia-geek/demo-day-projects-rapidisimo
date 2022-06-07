// Base
import React from "react";

// Container
import Layout from "../containers/Layout";

// Components
import DrawerSidebar from "../components/DrawerSidebar";
import ListarRepartidores from "../components/ListarRepartidores";
import ListarComercios from "../components/ListadoComercios";
import ListadoOrdenes from "../components/ListadoOrdenes";
import ListadoIndicadores from "../components/ListadoIndicadores";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <DrawerSidebar
        bgColor="bg-primary"
        btnColor="secondary"
      >
      </DrawerSidebar>

      <Layout>
        <ListarRepartidores />
        <ListarComercios />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ListadoOrdenes />
          <ListadoIndicadores />
        </section>
      </Layout>
    </div>
  );
};

export default Home;
