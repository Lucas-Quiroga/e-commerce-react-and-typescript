import React, { useState, useEffect } from "react";
import Login from "../Login/Login";

interface usuarioDatos {
  nameUser: string;
  passwordUser: string | number;
}

const Register = () => {
  const getRegister = () => {
    let datos = localStorage.getItem("register");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  };

  const [register, setRegister] = useState(getRegister());
  const [nameUser, setNameUser] = useState<usuarioDatos["nameUser"]>("");
  const [passwordUser, setPasswordUser] =
    useState<usuarioDatos["passwordUser"]>("");
  const [cambioDeComponente, setCambioDeComponente] = useState(false);

  const enviarDatos = (e: any) => {
    e.preventDefault();

    let user = {
      nameUser,
      passwordUser,
    };

    setRegister([...register, user]);
    setCambioDeComponente(true);
  };

  //cuando haya cambios en los registros los guarda en el localStorage (pero no es permanente)
  useEffect(() => {
    // localStorage.setItem("register", JSON.stringify(register));
    localStorage.setItem("nameRegister", JSON.stringify(nameUser));
    localStorage.setItem("passwordRegister", JSON.stringify(passwordUser));
  }, [register, nameUser, passwordUser]);

  console.log(register);

  return (
    <div className="register_container">
      {cambioDeComponente === false ? (
        <div>
          <h1>Por favor registrate</h1>
          <form onSubmit={enviarDatos}>
            <label>Enter your username:</label>
            <input
              id="text"
              type="text"
              name="nameUser"
              onChange={(e) => setNameUser(e.target.value)}
              required
            />
            <br />
            <label>Enter your password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPasswordUser(e.target.value)}
              required
            />
            <button>guardar datos</button>
          </form>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Register;
