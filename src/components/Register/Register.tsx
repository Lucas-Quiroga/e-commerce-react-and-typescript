import React, { useState, useEffect } from "react";
import Login from "../Login/Login";

interface User {
  email: string;
  password: string;
}

const Register = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem(user.email, JSON.stringify(user));
    alert("User registered");
    setUser({ email: "", password: "" });
  };

  return (
    <>
      {showLogin ? (
        <Login />
      ) : (
        <>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                required
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
              />
            </label>
            <br />
            <button type="submit">Register</button>
          </form>
          <button onClick={() => setShowLogin(!false)}>Login</button>
        </>
      )}
    </>
  );
};

export default Register;
