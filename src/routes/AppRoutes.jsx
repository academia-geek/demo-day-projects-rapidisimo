// Base
import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth"

// Pages
import Register from "../pages/Register"
import Login from "../pages/Login"

// Componentes
import { PrivateRoutes, PublicRoutes } from "./PublicAndPrivateRoutes"
import DashboardRoutes from "./DashboardRoutes"

// Material UI
import { CircularProgress } from "@mui/material"
import clientRapidisimo from "../utils/client"
import { listarRepartidores } from "../redux/actions/actionsRepartidor"
import { useDispatch } from "react-redux"

const AppRoutes = () => {
  const dispatch = useDispatch()
  const [checkIn, setCheckIn] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const fetchPerfil = async () => {
    try {
      const { data } = await clientRapidisimo({
        method: "GET",
        url: "/auth/validateUser/",
      })
      dispatch(listarRepartidores(data.email))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
        user.getIdToken()
          .then((token) => {
            console.log(token)
            window.localStorage.setItem('token', token)
          })
          .catch((error) => { })
      } else {
        setIsLoggedIn(false)
      }
      setCheckIn(false)
    })

    if (localStorage.getItem('token') !== null)  {
      console.log('Token: ', localStorage.getItem('token'))
    } else {
      fetchPerfil()
    }
  }, [setIsLoggedIn, setCheckIn])

  if (checkIn) {
    return (
      <div
        className="
          flex items-center justify-center
          w-screen h-screen bg-white
        "
      >
        <CircularProgress color="primary" />
      </div>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
