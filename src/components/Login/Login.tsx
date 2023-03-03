import React, { useState } from "react";
import Register from "../Register/Register";
import Home from "../../pages/Home";
import Logout from "../Logout/Logout";
import { Navigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const storedUser = localStorage.getItem(user.email);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (user.password === parsedUser.password) {
        alert("usuario ingresado");
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <>
      {showRegister ? (
        <Register />
      ) : (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                required
                autoComplete="current-password"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
                required
                autoComplete="current-password"
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
          <button onClick={() => setShowRegister(!false)}>Register</button>
        </>
      )}
    </>
  );
};

export default Login;

//reusu o retoque de ideas

// let nuevoRegistro = localStorage.getItem("register");
// console.log(nuevoRegistro);

//--------------------------------------------------------//

// let UserValidation = JSON.parse(localStorage.getItem("register"));

//--------------------------------------------------------//

// let usuarioNameInputValidation = (
//   document.getElementById("nameUser") as HTMLInputElement
// ).value;
// let usuarioPasswordInputValidation = (
//   document.getElementById("namepassword") as HTMLInputElement
// ).value;

//--------------------------------------------------------//

// const [nameusu, setNameusu] = useState("");
// const [passwordusu, setPasswordusu] = useState("");

// let usuarioNameInputValidation = nameusu;
// let usuarioPasswordInputValidation = passwordusu;
