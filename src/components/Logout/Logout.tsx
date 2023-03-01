import React from "react";

interface LogoutProps {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logout = ({ setLogin }: LogoutProps) => {
  const handleLogout = () => {
    localStorage.removeItem("login");
    setLogin(false);
  };
  return <button onClick={handleLogout}>Cerrar sesión</button>;
};

export default Logout;
