import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import { VscPassFilled } from "react-icons/vsc";
import axios from "axios";
import toast from "react-hot-toast";
import GenerateURN from "../../utils/generateURN";
const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSucessRes, setIsSucessRes] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/colleges/registrationrequest`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            unq: GenerateURN(),
          },
        }
      );
    console.log(response);
      if (
        response.data.apiResponseCode == "200" &&
        response.data.apiResponseMessage == "Success"
      ) {
        setIsSucessRes(true);

        setFormData({
          name: "",
          email: "",
          mobileNo: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(response.apiResponseMessage, { duration: 2000 });
      }
    } catch (error) {
      toast.error("Something went wrong", { duration: 2000 });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-lg p-8 flex flex-col md:flex-row md:-mt-20 mt-5 md:h-[650px]">
      {/* Left side - Form */}

      <div className="w-full md:w-1/2 bg-[#417475] p-8 flex flex-col justify-center">
        {!isSucessRes ? (
          <div>
            <h2 className="text-2xl text-center font-semibold text-white mb-10">
              Send us a message
            </h2>
            <form className="space-y-6 w-2/3 m-auto">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[13px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  type="email"
                  className="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[13px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  required
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                  placeholder=" "
                  type="text"
                  className="peer h-full w-full border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[13px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Mobile No.
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                  type="text"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[13px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Subject
                </label>
              </div>
              <div className="relative w-full min-w-[200px]">
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                ></textarea>
                <label className=" after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[13px] font-normal leading-tight text-blue-gray-500 text-white transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="w-1/2 bg-linkBlue hover:bg-[#2e0d54] duration-200 text-white py-3 rounded font-semibold"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center p-5 ">
            <div className="flex text-6xl  gap-5 justify-center items-center">
              <p className=" block text-center ">
                <VscPassFilled />
              </p>
              <p className="py-5">Thank You!</p>
            </div>
            <p className="text-xl">
              Your message has been Submitted. Our Team will Contact You
              Shortly.
            </p>
          </div>
        )}
      </div>

      {/* Right side - Contact Info */}
      <div className="w-full bg-white md:w-1/2 p-8 shadow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 after:content-[''] after:w-1/5 after:shadow-xl after:shadow-[#d60b8c] after:h-1 after:mt-1 after:bg-[#d60b8c] after:block after:rounded-full">
          Contact us
        </h2>
        <p className="text-gray-600 mb-6">
          We're open for any suggestion or just to have a chat
        </p>
        <ul className="space-y-5 flex flex-col justify-center align-middle text-center w-full">
          <li className="md:p-4 flex md:gap-10 gap-4 items-center text-gray-600">
            <span className="w-10 h-10 border border-gray-600 rounded-full text-xl flex justify-center align-middle">
              <FaPhoneAlt className="mr-2 text-linkBlue m-auto" />
            </span>
            <div className="flex gap-2">
              <h4 className="text-black text-xl">Phone: </h4>
              <a className="text-lg hover:text-black" href="tel:+919876543210">
                +919876543210
              </a>
            </div>
          </li>
          <li className="md:p-4 flex md:gap-10 gap-4 items-center text-gray-600">
            <span className="w-10 h-10 border border-gray-600 rounded-full flex justify-center align-middle">
              <FaEnvelope className="mr-2 text-linkBlue m-auto text-xl" />
            </span>
            <div className="flex gap-2">
              <h4 className="text-black text-xl">Email: </h4>
              <a
                className="text-lg hover:text-blue-500"
                href="mailto:contact@gradeCircle.com"
              >
                contact@gradeCircle.com
              </a>
            </div>
          </li>
          <li className="md:p-4 flex md:gap-10 gap-4 items-center text-gray-600">
            <span className="w-10 h-10 border border-gray-600 rounded-full flex justify-center align-middle">
              <FaGlobe className="mr-2 text-linkBlue m-auto text-xl" />
            </span>
            <div className="flex gap-2">
              <h4 className="text-black text-xl">Website: </h4>
              <a
                className="text-lg hover:text-blue-500"
                href="https://gradeCircle.com/"
              >
                gradeCircle.com
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SupportPage;
