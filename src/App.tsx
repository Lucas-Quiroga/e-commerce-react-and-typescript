import { Route, Routes } from "react-router-dom";
import Carrito from "./pages/Carrito";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/FetchComponent/Main";
import DetailComponent from "./components/DetailComponent/DetailComponent";
import CartProvider from "./context/CartProvider";
// import CarouselView from './components/CarouselView/CarouselView'
import InicioSesion from "./components/InicioSesion/InicioSesion";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import React, { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState<string>("");

  const handleLogin = (email: string) => {
    setLoggedInUser(email);
  };
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/category" element={<Main />} />
        <Route path="/category/:categoryId" element={<Main />} />
        <Route path="/inicioSesion" element={<InicioSesion />} />
        <Route path="/detail/:detailId" element={<DetailComponent />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
