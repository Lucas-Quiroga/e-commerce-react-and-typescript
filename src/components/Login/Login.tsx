import React, { useState } from "react";
import Register from "../Register/Register";
import { useRecoilState } from "recoil";
import { login, firstName } from "../../atoms/atoms";
import Shop from "../Shop/Shop";
import { Link } from "react-router-dom";
import "./Login.css";

interface User {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
  const [showRegister, setShowRegister] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState<boolean>(login);
  const [name, setName] = useRecoilState(firstName);

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
        setUser({ name: "", email: "", password: "" });
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
        <div className="login">
          <h2>Login</h2>
          <form
            style={{ display: "flex", flexDirection: "column", gap: 5 }}
            onSubmit={handleLogin}
          >
            <label>
              Email:
              <input
                type="email"
                name="email"
                style={{ width: "100%" }}
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
                style={{ width: "100%" }}
                value={user.password}
                onChange={handleInputChange}
                required
                autoComplete="current-password"
              />
            </label>
            <br />
            <button style={{ width: "100%" }} type="submit">
              Login
            </button>
          </form>
          <button onClick={() => setShowRegister(!false)}>Register</button>
          {/* <Shop /> */}
        </div>
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
