import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import defaultbg from "../../assets/homePng.png";
import Logo from "../../assets/logo.png";
const DefaultPage = () => {
  return (
    <div className=" w-full bg-gradient-to-t from-[#cce9ecb4] to-[#d1ffff94] flex flex-col justify-center h-screen items-center ">
      <a href="/dashboard" className="dark:bg-darkBg absolute left-5 top-5 py-2">
        <img src={Logo} alt="rapipay" className={`w-44 px-3 `} />
      </a>
      <div
        // style={{
        //   background: `url(${defaultbg}) no-repeat center center/cover`,
        //   backgroundColor: "rgba(0, 0, 0, 0.5)",
        // }}
        className="relative w-4/5 h-4/5 flex flex-col justify-center items-center rounded-xl text-white"
      >
        <div className="absolute inset-0rounded-xl"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultPage;
