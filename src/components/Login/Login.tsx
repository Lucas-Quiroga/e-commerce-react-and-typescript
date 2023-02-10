import React, { useState } from "react";
import Register from "../Register/Register";

interface usuarioDatos {
  nameUser: string | null;
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
  const [usuario] = useState(localStorage.getItem("register"));
  const [datos, setDatos] = useState<usuarioDatos>({
    nameUser: "",
    passwordUser: "",
  });
  const [nameusu, setNameusu] = useState("");
  const [passwordusu, setPasswordusu] = useState("");

  const handleInputChange = (event: any) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event: any) => {
    event.preventDefault();

    let UserValidation = JSON.stringify(localStorage.getItem("register"));
    // let UserValidation = JSON.parse(localStorage.getItem("register"));

    // en algún momento más tarde

    //areglar esto
    let userprueba = JSON.parse(UserValidation);
    const { nameUser } = userprueba;

    // let usuarioNameInputValidation = (
    //   document.getElementById("nameUser") as HTMLInputElement
    // ).value;
    // let usuarioPasswordInputValidation = (
    //   document.getElementById("namepassword") as HTMLInputElement
    // ).value;

    let usuarioNameInputValidation = nameusu;
    let usuarioPasswordInputValidation = passwordusu;

    if (
      usuarioNameInputValidation.length === 0 ||
      (usuarioNameInputValidation.length === null &&
        usuarioPasswordInputValidation.length === 0) ||
      usuarioPasswordInputValidation.length === null
    ) {
      alert("complete los datos");
    } else {
      if (
        usuarioNameInputValidation &&
        usuarioPasswordInputValidation === UserValidation
      ) {
        localStorage.setItem("loginUsuario", `${true}`);
        localStorage.setItem("usuario", usuarioNameInputValidation);
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
    console.log("enviando datos..." + userprueba + " " + nameUser);
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
                onChange={(e) => setNameusu(e.target.value)}
                name="nameUser"
                id="nameusu"
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Apellido"
                onChange={(e) => setPasswordusu(e.target.value)}
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
