import React, { useState } from "react";
import Link from "next/link";

import { navlinks } from "../constant/index";
// Icon component
const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={` w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#2c2f32]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    }${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} className=" w-1/2 h-1/2" />
    ) : (
      <img
        src={imgUrl}
        alt="fund-logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);

const SideBar = () => {
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className=" flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      {/* logo */}
      <Link href={"/"}>
        <Icon
          styles="w-[52px] h-[52px] bg-[#2c2f32]"
          imgUrl={"./assets/logo.svg"}
        />
      </Link>

      {/* side bar */}

      <div className=" flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className=" flex flex-col justify-center items-center gap-5">
          {/* Side bar options */}
          {navlinks.map((link) => (
            <Link href={link.link}>
              <Icon
                key={link.name}
                {...link}
                isActive={isActive}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                  }
                }}
              />
            </Link>
          ))}
        </div>
        
        <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={"./assets/sun.svg"}/>
      </div>
    </div>
  );
};

export default SideBar;
