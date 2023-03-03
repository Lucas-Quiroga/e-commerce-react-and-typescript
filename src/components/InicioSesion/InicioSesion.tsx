import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../../pages/Home";

const InicioSesion = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isLoggedIn);
  }, []);

  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
};

export default InicioSesion;
