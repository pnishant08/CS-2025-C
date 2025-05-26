import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { useSidebar } from "../../context/SidebarContext";
import { RxCross2 } from "react-icons/rx";
import {
  MdHome,
  MdEventAvailable,
  MdGroups,
  MdPermPhoneMsg,
} from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { IoIosInformationCircle } from "react-icons/io";

const SideBar = () => {
  const {
    isSidebarOpenMobile,
    isSidebarOpenDesktop,
    toggleSidebarSmall,
    toggleSidebarLarge,
    selectedLink,
    setSelectedLink,
  } = useSidebar();

  const handleLinkClick = (label) => {
    if (!isSidebarOpenDesktop) {
      toggleSidebarLarge();
    }
    setSelectedLink(label);
  };

  useEffect(() => {
    if (isSidebarOpenMobile) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpenMobile]);

  const menuItems = [
    {
      to: "/dashboard",
      icon: <MdHome size={24} />,
      label: "Home",
    },

    {
      to: "event",
      icon: <MdEventAvailable size={24} />,
      label: "Event",
    },
    {
      to: "#committee",
      icon: <MdGroups size={24} />,
      label: "Committee",
    },
    {
      to: "job",
      icon: <FaUserTie size={24} />,
      label: "Job",
    },
    {
      to: "member",
      icon: <IoMdPerson size={24} />,
      label: "Members",
    },
    {
      to: "#blog",
      icon: <TfiWrite size={24} />,
      label: "Blog",
    },
    {
      to: "contactus",
      icon: <MdPermPhoneMsg size={24} />,
      label: "Contact",
    },
    {
      to: "about",
      icon: <IoIosInformationCircle size={24} />,
      label: "About",
    },
  ];

  return (
    <>
      {/* For Desktop View */}
      <div
        className={`max-md:hidden md:relative left-0 h-screen dark:bg-darkSection transition-width duration-300 ease-in-out ${
          isSidebarOpenDesktop ? "w-48 text-nowrap" : "w-16"
        }`}
      >
        <div
          className={`${
            isSidebarOpenDesktop ? "w-48 text-nowrap" : "w-16"
          } fixed left-0 h-full dark:bg-darkSection bg-gradient-to-t from-[#cce9ecb4] to-[#d1ffff94] top-[3.8rem] shadow-md border-r-sec z-30 transition-width duration-300 ease-in-out `}
        >
          <div className="h-full overflow-auto">
            <div className=" overflow-auto flex flex-col justify-between p-2 h-full">
              <ul className="text-left">
                {menuItems.map(({ to, icon, label }) => (
                  <li key={label}>
                    <Link to={to} className="w-full">
                      <div
                        onClick={() => handleLinkClick(label)}
                        className={`${
                          selectedLink === label
                            ? "bg-headingBg border border-linkBlue dark:bg-darkBg dark:text-whiteTextColor text-textColor"
                            : ""
                        } cursor-pointer p-3 flex items-center hover:border rounded-md hover:border-linkBlue justify-between font-semibold mb-2 dark:hover:text-whiteTextColor dark:hover:bg-darkBg dark:text-darkTextColor hover:bg-headingBg text-textColor w-full text-left`}
                      >
                        <div className="flex w-full items-center overflow-hidden">
                          {icon}

                          <span
                            className={`ml-2 w-full ${
                              isSidebarOpenDesktop ? "block" : "hidden"
                            }`}
                          >
                            {label}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile View */}
      {isSidebarOpenMobile && (
        <div
          className={`min-h-screen h-full md:hidden text-nowrap fixed w-screen left-0 top-0 z-20  transition-all duration-500 ease-in-out  border-r`}
        >
          <div
            className=" fixed w-screen h-full bg-[#00000038] -z-10"
            onClick={toggleSidebarSmall}
          ></div>
          <div
            className={` bg-white dark:bg-darkSection h-full overflow-auto z-50 ${
              isSidebarOpenMobile ? "max-w-72" : "max-w-0 "
            }`}
          >
            <div className="p-5 shadow-sm sticky top-0 bg-white dark:bg-darkBg">
              <img src={rapipayLogo} alt="Rapipay" className="w-11/12 m-auto" />
              <Button
                className="absolute right-2 top-2 text-2xl bg-headingBg dark:bg-darkSection dark:text-darkTextColor"
                onClick={toggleSidebarSmall}
              >
                <RxCross2 />
              </Button>
            </div>
            <div className="flex flex-col justify-between p-2">
              <ul className="text-left">
                {menuItems.map(({ to, icon, label }) => (
                  <li key={label}>
                    <div
                      onClick={() => handleLinkClick(label)}
                      className={`${
                        selectedLink === label
                          ? "bg-headingBg text-textBlue dark:bg-darkBg dark:text-whiteTextColor"
                          : "hover:bg-headingBg hover:text-textBlue text-textColor"
                      } flex items-center dark:hover:text-whiteTextColor dark:hover:bg-darkBg dark:text-darkTextColor justify-between font-semibold transition-all duration-300 mb-2 w-full text-left`}
                    >
                      <Link
                        to={to}
                        className="w-full"
                        onClick={toggleSidebarSmall}
                      >
                        <div className="flex items-center my-4 mx-2 overflow-hidden">
                          {icon}
                          <span className={`ml-2 text-sm `}>{label}</span>
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
