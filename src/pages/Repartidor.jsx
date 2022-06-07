import React from "react";
import DrawerSidebar from "../components/DrawerSidebar";
import Layout from "../containers/Layout";


const Repartidor = () => {
  return (
    <div className="w-full h-screen">
      <DrawerSidebar
        bgColor="bg-secondary"
        btnColor="primary"
      >
      </DrawerSidebar>

      <Layout>
      </Layout>
    </div>
  );
};

export default Repartidor;
