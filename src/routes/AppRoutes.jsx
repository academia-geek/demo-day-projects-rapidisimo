// Base
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Pages
import Register from "../pages/Register";
import Login from "../pages/Login";

// Componentes
import { PrivateRoutes, PublicRoutes } from "./PublicAndPrivateRoutes";
import DashboardRoutes from "./DashboardRoutes";

// Material UI
import { CircularProgress } from "@mui/material";

const AppRoutes = () => {
  const [checkIn, setCheckIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        user.getIdToken()
        .then((token) => {})
        .catch((error) => {})
      } else {
        setIsLoggedIn(false);
      }
      setCheckIn(false);
    });
  }, [setIsLoggedIn, setCheckIn]);
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
            <PublicRoutes isAuth={true}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes isAuth={true}>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoutes isAuth={true}>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
