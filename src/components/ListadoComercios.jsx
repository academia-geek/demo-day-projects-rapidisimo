// Base
import React from "react";
import PropTypes from "prop-types";

const ComercioPerfil = ({ nameCommerce, logo, nit }) => {
  return (
    <div
      className="
        relative
        flex items-center justify-start gap-4
        min-w-[320px] max-w-[320px] h-24
        p-4 md:p-5
        bg-white rounded-md shadow-lg
      "
    >
      <img
        className="w-14 h-14 object-cover rounded-full"
        src={logo}
        alt="Commerce Logo Profile"
      />

      <section>
        <h5 className="mb-0 text-lg font-medium text-ellipsis overflow-hidden">
          {nameCommerce}
        </h5>

        <p className="mb-0 text-lg text-ellipsis overflow-hidden">NIT: {nit}</p>
      </section>
    </div>
  );
};

const ListarComercios = () => {
  return (
    <div className="w-full h-auto mb-8">
      <h4 className="font-normal text-2xl mb-4">Comercios</h4>

      <section className="scroll-app flex flex-nowrap gap-4 overflow-y-auto">
        <ComercioPerfil />
      </section>
    </div>
  );
};

ComercioPerfil.propTypes = {
  nameCommerce: PropTypes.string,
  logo: PropTypes.string,
  nit: PropTypes.string,
};

ComercioPerfil.defaultProps = {
  nameCommerce: "Comercio",
  logo: "https://picsum.photos/200/300",
  nit: "000000000000",
};

export default ListarComercios;
