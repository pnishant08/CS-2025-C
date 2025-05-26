import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import homePng from "../../assets/homePng.png";
import bgHome from "../../assets/bg_home.jpg";
import microsoft from "../../assets/microsoft.png";
import adobe from "../../assets/adobe.png";
import meta from "../../assets/meta.png";
import google from "../../assets/google.png";
import netflix from "../../assets/netflix.png";
import Event from "./Event";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import stats from "../../utils/stats";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <header className="relative h-[76vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={bgHome}
            alt="University campus"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className="relative z-10  text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            KIET Group of Institutions
          </h1>
          <p className="text-xl mb-8   m-auto rounded-lg">
            We Work for Our College, Society and our Next Generation
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to={"/dashboar/event"}
              className="bg-linkBlue text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
            >
              Events
            </Link>
            <button className="bg-[#ecf2fa] align-middle text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              News
            </button>
          </div>
        </div>
      </header>

      <section className="absolute bottom-12 left-[62%] w-1/2 -translate-x-[66%] bg-linkBlue text-white py-10 ">
        <div className=" mx-auto px-4 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Job Opportunity</h2>
            <p className="text- mb-6">
              You can find suitable job for you. We help our alumni brothers,
              because it's our responsibility
            </p>
            <Link
              to={"/dashboard/job"}
              className="bg-white text-linkBlue font-medium px-6 py-2 outline-none  hover:bg-gray-100 transition duration-300"
            >
              View All Jobs
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap justify-between items-center">
            <img
              src={google}
              alt="google"
              className=" w-16 filter grayscale brightness-0 invert aspect-square"
            />
            <img
              src={meta}
              alt="meta"
              className=" w-16 filter grayscale brightness-0 invert aspect-square"
            />
            <img
              src={netflix}
              alt="netflix"
              className=" w-16 filter grayscale brightness-0 invert aspect-square"
            />
            <img
              src={microsoft}
              alt="microsoft"
              className=" w-16 filter grayscale brightness-0 invert aspect-square"
            />
            <img
              src={adobe}
              alt="adobe"
              className=" w-16 filter grayscale brightness-0 invert aspect-square"
            />
          </div>
        </div>
      </section>
      <Event />
      <Gallery />

      <div className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-5xl font-bold">{stat.value}</span>
                <span className="text-lg mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
