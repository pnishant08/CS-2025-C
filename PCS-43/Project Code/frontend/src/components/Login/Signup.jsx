import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import GenerateURN from "../../utils/generateURN";
import toast from "react-hot-toast";
import axios from "axios";
import {  Select } from "antd";
Select;
const Signup = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    role: "",
    password: "",
  });
  const navigate = useNavigate();
  const college = sessionStorage.getItem("CollegeSelected")
    ? JSON.parse(sessionStorage.getItem("CollegeSelected"))
    : null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup/${college?.collegeId}`,
        formData,
        {
          headers: {
            unq: GenerateURN(),
          },
        }
      );
      console.log("reponse", response);

      if (
        response?.data?.apiResponseCode == "200" &&
        response?.data?.apiResponseMessage == "Success"
      ) {
        navigate("/login");
        toast.success("SignUp successful!");
      } else {
        toast.error(response.data.apiResponseMessage);
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    } finally {
      setFormData({
        user_name: "",
        email: "",
        role: "",
        password: "",
      });
    }
  };

  return (
    <div className="w-full h-full shadow-xl flex rounded-md overflow-hidden z-20 ">
      <div className="w-1/2 h-full">
        <img
          src={college?.coverImg}
          alt={college?.collegeName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 bg-white px-10 flex justify-center items-center">
        <div className="bg-gradient-to-t from-[#cce9ecb4] to-[#d1ffff94] shadow-lg w-full max-w-md relative">
          <div className=" p-8 space-y-12">
            <h2 className="text-black text-center text-2xl font-bold mb-6">
              New Account
            </h2>
            <form onSubmit={handleSignUp}>
              <div className="relative z-0 w-full mb-5 group">
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    name="user_name"
                    id="floating_username"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_username"
                    className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Username
                  </label>
                  <div className="flex justify-center">
                    <Select
                      allowClear
                      style={{ width: 120 }}
                      name="role"
                      value={formData.role}
                      onChange={(value) =>
                        setFormData((prev) => ({ ...prev, role: value }))
                      }
                      options={[
                        { value: "Admin", label: "Admin" },
                        { value: "Student", label: "Student" },
                        { value: "Alumni", label: "Alumni" },
                      ]}
                      placeholder="Role"
                    />
                  </div>
                </div>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="floating_email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="password"
                  id="floating_password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
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
                Sign Up
              </button>
            </form>

            <div className="mt-6">
              <p className="text-black text-center mb-4">
                Signup with your Google or Twitter account
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
            <span className="text-black font-medium">
              Already have account?
            </span>
            <Link
              to="/login"
              className="text-white font-bold ml-2 bg-linkBlue hover:scale-105 transition-all duration-300 p-2"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
