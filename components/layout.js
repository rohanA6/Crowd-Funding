import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
