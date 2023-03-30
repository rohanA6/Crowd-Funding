import { useRouter } from "next/router";
import React, { useState } from "react";
import Form from "../components/Form";

const createCampaigns = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });


  return (
    <div className=" bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10">
      {isLoading && "Loading...."}

      <div className=" flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className=" font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign 🚀
        </h1>
      </div>

      {/* Submit form */}
      <Form form={form} setForm={setForm} />
    </div>
  );
};

export default createCampaigns;
