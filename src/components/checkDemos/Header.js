import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      
      <div className="bg-red-300">
        <h1 className="text-slate">Hello</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
