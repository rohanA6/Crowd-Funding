import React from "react";
import { navlinks } from "../constant/index";
import CustomButton from "./CustomButton";

const SmallScreenNavbar = ({setToggleDrawer, toggleDrawer, isActive, router, address}) => {
  return (
    <div className="sm:hidden flex justify-between items-center relative">
      <div className="w-[50px] h-[50px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
        <img
          src="./assets/profile.svg"
          alt="user"
          className="w-[60%] h-[60%] object-contain"
        />
      </div>

      <img
        src="./assets/menu.svg"
        alt="menu"
        className="w-[30px] h-[30px] object-contain cursor-pointer"
        onClick={() => setToggleDrawer((prev) => !prev)}
      />

      <div
        className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
          !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
        } transition-all duration-700 rounded-b-xl`}
      >
        <ul className="mb-4">
          {navlinks.map((link) => (
            <li
              key={link.name}
              className={`flex p-4 ${isActive === link.name && "bg-[#3a3a43]"}`}
              onClick={() => {
                setIsActive(link.name);
                setToggleDrawer(false);
                router.push(link.link);
              }}
            >
              <img
                src={link.imgUrl}
                alt={link.name}
                className={`w-[24px] h-[24px] object-contain ${
                  isActive === link.name ? "grayscale-0" : "grayscale"
                }`}
              />
              <p
                className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                  isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                }`}
              >
                {link.name}
              </p>
            </li>
          ))}
        </ul>
        <div className=" flex mx-4">
          <CustomButton
            btnType="button"
            title={address ? "Create campaign" : "Connect"}
            styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
            handleClick={() => {
              if (address) router.push("/createCampaigns");
              else "connect()";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
