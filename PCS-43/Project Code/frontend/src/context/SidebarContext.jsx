import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  const [isSidebarOpenDesktop, setIsSidebarOpenDesktop] = useState(true);
  const [selectedLink, setSelectedLink] = useState("Home");

  const toggleSidebarLarge = () => {
    setIsSidebarOpenDesktop((prev) => !prev);
  };

  const toggleSidebarSmall = () => {
    setIsSidebarOpenMobile((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpenMobile,
        isSidebarOpenDesktop,
        toggleSidebarLarge,
        toggleSidebarSmall,
        selectedLink,
        setSelectedLink,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
