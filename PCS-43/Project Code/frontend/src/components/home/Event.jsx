import React,{useState} from "react";
import { eventData } from "../../utils/eventData";
const Event = () => {
  
  return (
    <div className="bg-[#ecf2fa] pb-20">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8 p-20">
          Upcoming Events
        </h1>

        <div className="grid grid-cols-3 max-w-6xl gap-5 m-auto">
          <div className="grid col-span-2 h-full">
            <div className="relative text-white flex flex-col justify-end mx-auto h-80 w-full">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="p-4 z-10 relative">
                <h2 className="text-2xl font-bold mb-2">KIET Sports Day</h2>
                <p className="text-gray-200 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Kiet Group of Institutions, Muradnagar, Ghaziabad
                </p>
                <button className="bg-white absolute right-0 bottom-0 text-black py-2 px-4 font-medium hover:bg-blue-700 transition duration-300">
                  Join Now
                </button>
              </div>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2 pt-2 box-border scrollbar">
              {eventData.map(() => (
                <div className="relative text-white flex-shrink-0 flex flex-col justify-end mx-auto h-48">
                  <img
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="University of Southern California"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <div className="p-4 z-10 relative">
                    <h2 className="font-bold mb-2">KIET Sports Day</h2>
                    <p className="text-gray-200 mb-4 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Kiet Group of Institutions, Muradnagar, Ghaziabad
                    </p>
                    <button className="bg-white absolute right-0 bottom-0 text-black py-1 px-2 font-medium hover:bg-blue-700 transition duration-300">
                      Join Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 col-span-1 text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              alt="Student"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex justify-center items-center flex-col text-center">
              <h2 className="text-2xl font-bold mb-2">
                KIET Group of{" "}
                <span className="text-red-500">Not Alumni Member?</span>
              </h2>
              <button className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-200 transition duration-300 mt-4">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
