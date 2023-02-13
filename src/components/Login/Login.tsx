import React, { useState } from "react";
import { json } from "stream/consumers";
import Register from "../Register/Register";

type login = true | false;

interface logear {
  comprobarSesion(): login;
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
  const comprobarSesion = () => {
    let sesion = localStorage.getItem("miLogin");
    if (sesion === `${true}`) {
      return JSON.parse(sesion); //true
    } else {
      return false;
    }
  };

  //ESTADO DONDE SE GUARDAN LOS DATOS DE LOS INPUTS
  const [datos, setDatos] = useState<usuarioDatos>(INITIAL_STATE);
  //ESTADO QUE COMPRUEBA EL INICIO DE SESIÓN
  const [login, setLogin] = useState(comprobarSesion());
  //ESTADO PARA MOSTRAR/DEMOSTRAR UN COMPONENTE
  const [cambioDeComponente, setCambioDeComponente] = useState(false);
  //ESTADO QUE ALMACENA EL USUARIO REGISTRADO
  const [usuarioNameRegister] = useState(localStorage.getItem("nameRegister"));
  const [usuarioPasswordRegister] = useState(
    localStorage.getItem("passwordRegister")
  );

  // console.log(usuarioPasswordRegister);
  // console.log(datos.passwordUser);

  // console.log("hola soy " + usuario);
  // const [nameRegistradoLocal] = useState<usuarioDatos["nameUser"]>(localStorage.getItem("nameRegister"))
  const getName = localStorage.getItem("nameRegister");
  const getPassword = JSON.stringify(localStorage.getItem("passwordRegister"));
  // console.log(usuario.nameUser, usuario.passwordUser);
  // console.log(nameRegistradoLocal);

  // console.log("hola soy " + getName);
  // console.log("hola mi contraseña es " + getPassword);

  const handleInputChange = (event: any) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  // console.log(datos.nameUser);

  const enviarDatos = (event: any) => {
    event.preventDefault();

    // if (datos.nameUser === "") {
    //   alert("complete los datos");
    // } else {
    // console.log(ndatos.nameUser);

    if (
      `"${datos.nameUser}"` === usuarioNameRegister &&
      `"${datos.passwordUser}"` === usuarioPasswordRegister
    ) {
      alert("si, es igual");
      localStorage.setItem("loginUsuario", `${true}`);
      localStorage.setItem("usuario", "");
      alert("usuario ingresado");
    } else {
      setLogin(false);
      alert("error");
      setDatos({
        nameUser: "",
        passwordUser: "",
      });
    }
  };
  // console.log("enviando datos...");

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
      ) : (
        <Register />
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
