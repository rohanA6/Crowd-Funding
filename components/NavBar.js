import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/router";
import Link from "next/link";
import SmallScreenNavbar from "./SmallScreenNavbar";

const NavBar = () => {
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const router = useRouter();

  const address = "0x4a9A95B6fe3b9416f0c78A8735Aa075c75AF46a4";

  return (
    <div className=" flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      {/* Search bar */}
      <div className=" lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />

        <div className="w-[72px] h-full rounded-[20px] bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <img
            src="./assets/search.svg"
            alt="search"
            className="w-[15px] h-[15px] object-contain"
          />
        </div>
      </div>

      {/* Wallate conact */}
      <div className="lg:flex hidden flex-row justify-end gap-4 items-center">
        <CustomButton
          btnType="button"
          title={address ? "Create campaign" : "Connect"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) router.push("/createCampaigns");
            else "connect()";
          }}
        />

        {/* Profile */}
        <Link href="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img
              src="./assets/profile.svg"
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Small screen navigation */}
      <SmallScreenNavbar
        toggleDrawer={toggleDrawer}
        setToggleDrawer={setToggleDrawer}
        router={router}
        isActive={isActive}
        address={address}
      />
    </div>
  );
};

export default NavBar;
