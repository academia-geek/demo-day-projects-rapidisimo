// Base
import React from "react";
import PropTypes from "prop-types";

const RepartidorPerfil = ({ nameDealer, image }) => {
  return (
    <div className="w-20 h-auto text-center">
      <section
        className="
          flex items-center justify-center
          w-20 h-20 mb-1 rounded-full
          bg-white border-2 border-success
        "
      >
        <img
          className="w-16 h-16 object-cover rounded-full"
          src={image}
          alt="Dealer Profile"
        />
      </section>

      <p className="mb-0 text-base text-ellipsis overflow-hidden">
        {nameDealer}
      </p>
    </div>
  );
};

const ListarRepartidores = () => {
  return (
    <div className="w-full h-auto mb-6">
      <section className="flex items-center gap-4 mb-4">
        <h4 className="font-medium md:font-normal text-xl md:text-2xl">
          Repartidores
        </h4>
        <aside
          className="
            w-[120px] h-auto
            py-1 px-2 md:py-2 md:px-3
            rounded-full bg-success
            text-white text-base font-medium text-center
          "
        >
          Activos
          <span className="ml-2 font-bold">0</span> /
          <span className="font-bold"> 0</span>
        </aside>
      </section>

      <section className="scroll-app flex flex-nowrap gap-6 overflow-y-auto">
        <RepartidorPerfil />
      </section>
    </div>
  );
};

RepartidorPerfil.propTypes = {
  nameDealer: PropTypes.string,
  image: PropTypes.string,
};

RepartidorPerfil.defaultProps = {
  nameDealer: "Repartidor",
  image: "https://picsum.photos/200/300",
};

export default ListarRepartidores;
