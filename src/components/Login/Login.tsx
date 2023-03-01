import React, { useState } from "react";
import Register from "../Register/Register";
import Home from "../../pages/Home";
import Logout from "../Logout/Logout";

type login = true | false;

interface logear {
  comprobarSesion(): boolean;
}

interface usuarioDatos {
  nameUser: string;
  passwordUser: string | number;
}

const INITIAL_STATE = {
  nameUser: "",
  passwordUser: "",
};

const Login = () => {
  const comprobarSesion = (): boolean => {
    let sesion = localStorage.getItem("login");
    if (sesion === "true") {
      alert("Sesión iniciada");
      return JSON.parse(sesion);
    } else {
      return false;
    }
  };

  //ESTADO DONDE SE GUARDAN LOS DATOS DE LOS INPUTS
  const [datos, setDatos] = useState<usuarioDatos>(INITIAL_STATE);
  //ESTADO QUE COMPRUEBA EL INICIO DE SESIÓN
  const [login, setLogin] = useState<boolean>(comprobarSesion());
  //ESTADO PARA MOSTRAR/DEMOSTRAR UN COMPONENTE
  const [cambioDeComponente, setCambioDeComponente] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("login");
    setLogin(false);
  };

  const handleInputChange = (event: any) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const usuarioRegistrado = localStorage.getItem("register");
    const usuarios: usuarioDatos[] = usuarioRegistrado
      ? JSON.parse(usuarioRegistrado)
      : [];

    const usuarioIngresado = usuarios.find(
      (usuario) => usuario.nameUser === datos.nameUser
    );

    if (!usuarioIngresado) {
      return alert("El usuario no está registrado");
    }

    const { passwordUser } = usuarioIngresado;

    if (passwordUser !== datos.passwordUser) {
      return alert("La contraseña es incorrecta");
    }

    setLogin(true);
    alert("¡Bienvenido!");
    localStorage.setItem("login", "true");
  };

  const registerComponent = () => {
    setCambioDeComponente(true);
  };

  return (
    <>
      {login ? (
        <div>
          <p>Bienvenido {datos.nameUser}</p>
          <Logout setLogin={setLogin} />
        </div>
      ) : (
        <div>
          <p>Inicie sesión para continuar</p>
          <div>
            <h1>Inciar sesion</h1>
            <form onSubmit={enviarDatos}>
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  onChange={handleInputChange}
                  name="nameUser"
                  id="nameusu"
                ></input>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                  name="passwordUser"
                  id="namepassword"
                ></input>
              </div>
              <button type="submit">Logear</button>
            </form>
            <button onClick={registerComponent}>Registrar</button>
          </div>
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
