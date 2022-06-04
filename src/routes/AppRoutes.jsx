import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../containers/Register";
import { PrivateRoutes, PublicRoutes } from "./PublicAndPrivateRoutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../containers/Login";
import DashboardRoutes from "./DashboardRoutes";


const AppRoutes = () => {
  const [checkIn, setCheckIn] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false)
      }
      setCheckIn(false)
    })
  }, [setIsLoggedIn, setCheckIn])
  if (checkIn) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    )
  }
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/login" element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Login />
            </PublicRoutes>
          } />
          <Route path="/register" element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Register />
            </PublicRoutes>
          } />
          <Route path="/*" element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRoutes>
          } />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
