import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className=" bg-[#13131a] min-h-screen font-epilogue relative lg:p-4 p-8 flex flex-row">
      <div className=" relative sm:flex hidden mr-10">
        <SideBar />
      </div>

      <div className=" flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
