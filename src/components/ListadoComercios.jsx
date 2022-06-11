// Base
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Utils
import clientRapidisimo from "../utils/client.js";

// Material UI
import { Avatar } from "@mui/material";

// Material UI Icons
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";

const ComercioPerfil = ({ nameCommerce, email }) => {
  return (
    <div
      className="
        relative
        flex items-center justify-start gap-3
        min-w-[340px] max-w-[340px] h-24
        p-4 md:px-3 md:py-4
        bg-white rounded-md shadow-lg
        border-l-4 border-secondary
      "
    >
      <Avatar sx={{ width: 56, height: 56, bgcolor: "#3e7cb1" }}>
        <StoreMallDirectoryOutlinedIcon sx={{ fontSize: 32 }} />
      </Avatar>

      <section>
        <h5 className="mb-1 text-lg font-semibold text-ellipsis overflow-hidden">
          {nameCommerce}
        </h5>

        <p className="mb-0 text-base font-medium text-ellipsis overflow-hidden">
          Email: <span className="font-light">{email}</span>
        </p>
      </section>
    </div>
  );
};

const ListarComercios = () => {
  const [comercios, setComercios] = useState([]);

  const fetchComercios = async () => {
    try {
      const { data } = await clientRapidisimo({
        method: "GET",
        url: "/allCompanies/",
      });
      setComercios(data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComercios();
  }, []);

  return (
    <div className="w-full h-auto mb-6">
      <h4 className="font-medium md:font-normal text-xl md:text-2xl mb-4">
        Comercios
      </h4>

      <section className="scroll-app flex flex-nowrap gap-4 overflow-y-auto">
        {comercios.map((comercio) => (
          <ComercioPerfil
            key={comercio.id}
            nameCommerce={comercio.name_company}
            email={comercio.email_company}
            {...comercio}
          />
        ))}
      </section>
    </div>
  );
};

ComercioPerfil.propTypes = {
  nameCommerce: PropTypes.string,
  logo: PropTypes.string,
  email: PropTypes.string,
};

ComercioPerfil.defaultProps = {
  nameCommerce: "Comercio",
  logo: "https://picsum.photos/200/300",
  email: "compañia@compañia.com",
};

export default ListarComercios;
