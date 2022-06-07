// Base
import React from "react";

// Container
import Layout from "../containers/Layout";

// Components
import DrawerSidebar from "../components/DrawerSidebar";
import ListarRepartidores from "../components/ListarRepartidores";
import ListarComercios from "../components/ListadoComercios";

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
      </Layout>
    </div>
  );
};

export default Home;
