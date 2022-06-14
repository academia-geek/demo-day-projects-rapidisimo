// Base
import React, { useState } from "react"
import PropTypes from "prop-types"

// Redux
import { useDispatch } from "react-redux"
import { logoutAsync } from "../redux/actions/actionLogin"

// Material UI
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"

// Icons
import MenuIcon from "@mui/icons-material/Menu"

function DrawerSidebar({
  bgColor,
  btnColor,
  children,
  image,
  name,
  role,
  window }) {

  const dispatch = useDispatch()

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { sm: "none" },
          position: "absolute",
          top: "24px",
          right: "16px"
        }}
      >
        <MenuIcon />
      </IconButton>
      <section>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            position: "relative",
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { xs: "320px", sm: "330px" },
              height: "100%",
            },
          }}
        >
          <aside
            className={`
              relative
              flex flex-col
              items-start justify-between
              w-full h-full
              p-4 md:p-6 ${bgColor}
            `}
          >
            <section
              className="
                flex flex-col
                items-center justify-center
                w-full h-auto
              "
            >
              <img
                className="w-[160px] h-auto rounded-full mb-5 object-cover"
                src={image}
                alt="User Logo"
              />
              <h3
                className="
                    mb-4
                    text-2xl text-white
                    font-semibold tracking-wider uppercase
                  "
              >
                {name}
              </h3>
              <div className="w-auto h-auto bg-info py-2 px-4 rounded-full">
                <p className="text-xl text-white font-medium">{role}</p>
              </div>
            </section>

            <section className="w-full h-auto">{children}</section>

            <Button
              sx={{
                width: "100%",
              }}
              href="/"
              onClick={() => dispatch(logoutAsync())}
              variant="contained"
              color={btnColor}
            >
              Cerrar Sesión
            </Button>
          </aside>
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            position: "relative",
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { md: "340px", lg: "360px" },
              height: "100%",
            },
          }}
          open
        >
          <aside
            className={`
              relative
              flex flex-col
              items-start justify-between
              w-full h-full
              p-4 md:p-6 ${bgColor}
            `}
          >
            <section
              className="
                flex flex-col
                items-center justify-center
                w-full h-auto
              "
            >
              <img
                className="w-[160px] h-auto rounded-full mb-5 object-cover"
                src={image}
                alt="User Logo"
              />
              <h3
                className="
                    mb-4
                    text-2xl text-white
                    font-semibold tracking-wider uppercase
                  "
              >
                {name}
              </h3>
              <div className="w-auto h-auto bg-info py-2 px-4 rounded-full">
                <p className="text-xl text-white font-medium">{role}</p>
              </div>
            </section>

            <section className="w-full h-auto">{children}</section>

            <Button
              sx={{
                width: "100%",
              }}
              href="/"
              onClick={() => dispatch(logoutAsync())}
              variant="contained"
              color={btnColor}
            >
              Cerrar Sesión
            </Button>
          </aside>
        </Drawer>
      </section>
    </>
  )
}

DrawerSidebar.propTypes = {
  window: PropTypes.func,
  bgColor: PropTypes.string,
  btnColor: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
}

DrawerSidebar.defaultProps = {
  bgColor: "bg-primary",
  btnColor: "secondary",
  image: "https://res.cloudinary.com/rapidisimo/image/upload/v1654557867/rapidisimo/logo_logo_1_otcwoh.png",
  name: "Administrador",
  role: "Administrador",
}

export default DrawerSidebar
