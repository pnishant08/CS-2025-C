import React, { useState } from "react";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../home/Footer";
import Header from "../header/Header";
import ChatSupport from "../chatSupport/ChatSupport";
const Dashboard = () => {
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  return (
    <>
      <Header />
      <div className="md:flex">
        <SideBar
          isSidebarOpenMobile={isSidebarOpenMobile}
          setIsSidebarOpenMobile={setIsSidebarOpenMobile}
        />
        <div className="flex-1 overflow-auto md:mt-[3.8rem]">
          <Outlet />
          <ChatSupport/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
