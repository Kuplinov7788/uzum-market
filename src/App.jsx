import React, { use } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  const warm = location.pathname === "/admin";
  return (
    <div>
      {!warm && <Header />}
      <Outlet />
    </div>
  );
};

export default App;
