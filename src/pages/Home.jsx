import React from "react";
import DrawerSidebar from "../components/DrawerSidebar";
import Layout from "../containers/Layout";


const Home = () => {
  return (
    <div className="w-full h-screen">
      <DrawerSidebar
        bgColor="bg-primary"
        btnColor="secondary"
      >
      </DrawerSidebar>

      <Layout>
      </Layout>
    </div>
  );
};

export default Home;
