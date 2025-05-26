import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoPersonSharp } from "react-icons/io5";
import Logo from "../../assets/logo.png";
import { useSidebar } from "../../context/SidebarContext";
import {
  HiOutlineBars3BottomRight,
  HiOutlineBars3BottomLeft,
} from "react-icons/hi2";
import { useSelector ,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
const Profile = ({ userInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div class="max-w-sm w-full rounded-lg shadow-lg overflow-hidden bg-white">
      <div class="bg-linkBlue p-4 flex items-center justify-between">
        <div class="flex items-center">
          <div class="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center">
            <img
              src={`https://ui-avatars.com/api/?name=${userInfo?.user_name}&background=random&rounded=true`}
              alt="name"
            />
          </div>
          <div class="ml-3">
            <h2 class="text-white font-bold text-xl uppercase">{userInfo?.user_name}</h2>
            <p class="text-blue-200 text-lg">{userInfo?.email}</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center p-4">
        <div onClick={handleSignOut} class="text-red-500 font-bold text-lg flex items-center cursor-pointer">
          <span>Sign Out</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 h-5 ml-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 16l-4-4m0 0l4-4m-4 4h12m-6 4v1a3 3 0 01-3 3H4a3 3 0 01-3-3V5a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const { isSidebarOpenDesktop, toggleSidebarLarge, toggleSidebarSmall } =
    useSidebar();

  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  const handleProfileToggle = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const { userInfo } = useSelector((store) => store.auth);

  return (
    <div className="flex md:fixed h-16 z-30 dark:bg-darkSection bg-gradient-to-t from-[#cce9ecb4] to-[#d1ffff94] w-full max-md:flex-col shadow-md">
      <a href="/dashboard" className="dark:bg-darkBg py-2">
        <div className={`m-auto p-2 px-2 `}>
          <img src={Logo} alt="gradscircle" className={`w-40 px-3 m-auto `} />
        </div>
      </a>
      <div className="flex justify-between w-full py-2">
        <button
          className="max-md:hidden dark:text-darkTextColor dark:hover:text-whiteTextColor hover:bg-headingBg dark:hover:bg-darkSection hover:text-linkColor text-textColor px-2 dark:mx-1 outline-none"
          onClick={toggleSidebarLarge} // Desktop toggle for collapsing sidebar
        >
          {isSidebarOpenDesktop ? (
            <HiOutlineBars3BottomRight className="text-3xl m-auto" />
          ) : (
            <HiOutlineBars3BottomLeft className="text-3xl m-auto" />
          )}
        </button>
        <button
          className="md:hidden dark:text-darkTextColor text-textColor px-3 "
          onClick={toggleSidebarSmall} // Mobile toggle for showing/hiding sidebar
        >
          <VscThreeBars className="text-2xl m-auto" />
        </button>
        <div className="flex rounded-full items-center md:gap-5 mr-4 gap-3 max-md:pb-3 my-auto text">
          {/* Profile dropdown section */}
          <img
              src={`https://ui-avatars.com/api/?name=${userInfo?.user_name}&background=random&rounded=true`}
              alt="name"
              className="w-12 h-12 rounded-full cursor-pointer"
              onClick={handleProfileToggle}
            />

            {isProfileOpen &&<div className="absolute right-0 top-16 z-50">
              <Profile userInfo={userInfo}/>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
