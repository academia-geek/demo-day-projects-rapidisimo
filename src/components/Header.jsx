// Base
import * as React from "react";
import PropTypes from "prop-types";

// Material UI
import Badge from '@mui/material/Badge';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

const Header = ({nameUser}) => {
  return (
    <div className="flex items-center gap-3 w-full h-auto mb-6 md:mb-8">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Hola,
        <span className="ml-2 font-light">
          {nameUser}
        </span>
      </h2>
      <Badge badgeContent={4} color="error">
        <NotificationsOutlinedIcon sx={{ fontSize: 30 }}/>
      </Badge>

    </div>
  )
}

Header.propTypes = {
  nameUser: PropTypes.string,
};

Header.defaultProps = {
  nameUser: "Administrador",
};


export default Header
