import React, { useState, useEffect } from "react";

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
  const [nameUser, setNameUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  const enviarDatos = (e: any) => {
    e.preventDefault();

    let user = {
      nameUser,
      passwordUser,
    };

    setRegister([...register, user]);
  };

  //cuando haya cambios en los registros los guarda en el localStorage (pero no es permanente)
  useEffect(() => {
    localStorage.setItem("register", JSON.stringify(register));
  }, [register]);

  console.log(register);

  return (
    <div className="register_container">
      <h1>Por favor registrate</h1>
      <form onSubmit={enviarDatos}>
        <label>Enter your username:</label>
        <input
          id="text"
          type="text"
          name="text"
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
  );
};

export default Register;
