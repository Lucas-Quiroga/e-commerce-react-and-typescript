import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Login from "../Login/Login";
import { useRecoilState } from "recoil";
import { login, firstName } from "../../atoms/atoms";
import Register from "../Register/Register";
import Home from "../../pages/Home";

const InicioSesion = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(login);

  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
};

export default InicioSesion;
