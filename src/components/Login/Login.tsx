import React, { useState } from "react";
import Register from "../Register/Register";

interface usuarioDatos {
  nameUser: string;
  passwordUser: string;
}

type login = true | false;

interface logear {
  comprobarSesion(): login;
}

const Login = () => {
  const comprobarSesion = () => {
    let sesion = localStorage.getItem("miLogin");
    if (sesion === `${true}`) {
      return JSON.parse(sesion); //true
    } else {
      return false;
    }
  };

  // let nuevoRegistro = localStorage.getItem("register");
  // console.log(nuevoRegistro);

  const [login, setLogin] = useState(comprobarSesion());
  const [cambioDeComponente, setCambioDeComponente] = useState(false);
  const [datos, setDatos] = useState<usuarioDatos>({
    nameUser: "",
    passwordUser: "",
  });

  const handleInputChange = (event: any) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event: any) => {
    event.preventDefault();

    let UserValidation = localStorage.getItem("register");

    try {
      if (datos.nameUser.length === 0 || datos.passwordUser.length === 0) {
        alert("complete los datos");
      } else {
        if (datos.nameUser && datos.passwordUser === UserValidation) {
          localStorage.setItem("loginUsuario", `${true}`);
          localStorage.setItem("usuario", datos.nameUser);
          alert("usuario ingresado");
        } else {
          setLogin(false);
          alert("error");
          setDatos({
            nameUser: "",
            passwordUser: "",
          });
        }
      }
      console.log(
        "enviando datos..." + datos.nameUser + " " + datos.passwordUser
      );
    } catch (error) {
      console.error(error);
      // Expected output: ReferenceError: nonExistentFunction is not defined
      // (Note: the exact output may be browser-dependent)
    }
  };

  const registerComponent = () => {
    setCambioDeComponente(true);
  };

  return (
    <>
      {cambioDeComponente === false ? (
        <div>
          <h1>Inciar sesion</h1>
          <form onSubmit={enviarDatos}>
            <div>
              <input
                type="text"
                placeholder="Nombre"
                onChange={handleInputChange}
                name="nameUser"
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Apellido"
                onChange={handleInputChange}
                name="passwordUser"
              ></input>
            </div>
            <button type="submit">Logear</button>
          </form>
          <button onClick={registerComponent}>Registrar</button>
        </div>
      ) : (
        <Register />
      )}
    </>
  );
};

export default Login;
