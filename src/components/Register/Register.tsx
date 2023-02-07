import React from "react";

const Register = () => {
  return (
    <div className="register_container">
      <h1>Por favor registrate</h1>
      <form action="">
        <label>Enter your username:</label>
        <input id="text" type="text" name="text" />
        <br />
        <label>Enter your password:</label>
        <input type="password" name="password" />
        <button>guardar datos</button>
      </form>
    </div>
  );
};

export default Register;
