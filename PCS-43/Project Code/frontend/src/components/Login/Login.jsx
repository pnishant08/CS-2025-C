import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import GenerateURN from "../../utils/generateURN";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setCredentials, setToken } from "../../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const college = sessionStorage.getItem("CollegeSelected")
    ? JSON.parse(sessionStorage.getItem("CollegeSelected"))
    : null;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
          collegeId: college.collegeId,
        },
        {
          headers: {
            unq: GenerateURN(),
          },
        },
        { withCredentials: true }
      );

      console.log("Login response:", response);
      
      if (
        response?.data.apiResponseCode == "200" &&
        response?.data.apiResponseMessage == "Success"
      ) {
        toast.success("Login successful!", {
          duration: 1000,
        });

        dispatch(setCredentials(response?.data?.apiResponseData?.userInfo));
        dispatch(setToken(response?.data?.apiResponseData?.token));

        navigate("/dashboard/");
      } else {
        toast.error(response.data.apiResponseMessage);
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <div className="w-full h-full shadow-xl flex rounded-md overflow-hidden z-20">
      <div className="w-1/2 h-full">
        <img
          src={college?.coverImg}
          alt={college?.collegeName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 px-10 flex bg-white justify-center items-center">
        <div className="bg-gradient-to-t from-[#cce9ecb4] to-[#d1ffff94] shadow-lg w-full max-w-md relative">
          <div className="p-8 space-y-12">
            <h2 className="text-black text-2xl text-center font-bold mb-6">
              Login to {college?.collegeName}
            </h2>
            <form onSubmit={handleLogin}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Password
                </label>
              </div>
              <div className="flex justify-between items-center mb-6 text-sm">
                <label className="flex items-center text-black">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-indigo-600 font-bold py-2 px-4 rounded-md hover:bg-indigo-100 transition duration-300"
              >
                LOG IN
              </button>
            </form>
            <div className="mt-6">
              <p className="text-black text-center mb-4">
                Login with your Google or Twitter account
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
                  <FaGoogle className="text-black" /> Google
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
                  <FaXTwitter className="text-black" /> Twitter
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 py-4 flex justify-evenly items-center w-full text-center">
            <span className="text-black font-medium">Need a new account?</span>
            <Link
              to="/signup"
              className="text-white font-bold ml-2 bg-linkBlue hover:scale-105 transition-all duration-300 p-2"
            >
              Sign up now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
