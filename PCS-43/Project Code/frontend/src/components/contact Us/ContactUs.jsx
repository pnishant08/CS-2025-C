import React from "react";
import contactbg from "../../assets/contactbg2.jpg";
import { FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiArrowRightSFill } from "react-icons/ri";
import TopSection from "../common/TopSection";
const ContactUs = () => {
  return (
    <div>
      <TopSection title={"Contact Us"} bgImage={contactbg}/>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d688.6542197956566!2d77.4974361199727!3d28.75273059194229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1729231468704!5m2!1sen!2sin"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[55vh]"
        ></iframe>
      </div>
      <div className="bg-white text-gray-800 p-32 flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Stay updated</h2>
              <form className="mb-4">
                <div className="flex gap-5">
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none "
                  />
                  <button
                    type="submit"
                    className="bg-linkBlue text-white px-4 py-2 hover:bg-indigo-700 transition duration-300"
                  >
                    SUBSCRIBE <RiArrowRightSFill className="inline m-auto text-xl"/>
                  </button>
                </div>
              </form>
              <p className="text-sm text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nesciunt officia dolores.
              </p>

              <h3 className="text-lg font-semibold mb-3">
                Social media presence
              </h3>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="#"
                  className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  <FaSquareXTwitter />
                </a>
                <a
                  href="#"
                  className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition duration-300"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
              <form>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none "
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none "
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none "
                />
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none "
                ></textarea>
                <button
                  type="submit"
                  className="bg-linkBlue text-white px-6 py-2 hover:bg-indigo-700 transition duration-300"
                >
                  SEND MESSAGE <RiArrowRightSFill className="inline m-auto text-xl"/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
