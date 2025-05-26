import React from "react";
import eventbg from "../../assets/eventbg.jpg";
import background from "../../assets/bg_home.jpg";
import { FaLocationDot } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import TopSection from "../common/TopSection";
import Pagination from "../common/Pagination";
import Rann from "../../assets/rann.jpg";
import epoque from "../../assets/epoque.jpg";
import iit from "../../assets/iit.webp";

const events = [
  {
    id: 1,
    countdown: { days: 2, hours: 7, seconds: 49 },
    date: "32 Nov 2021",
    location: "KIET Group of Institutions, Ghaziabad, India",
    eventName: "RANN 2025",
    background: Rann,
  },
  {
    id: 2,
    countdown: { days: 1, hours: 14, seconds: 23 },
    date: "25 Dec 2024",
    location: "KIET Group of Institutions, Ghaziabad, India",
    eventName: "Music Fest 2024",
    background: epoque,
  },
  {
    id: 3,
    countdown: { days: 5, hours: 8, seconds: 15 },
    date: "15 Mar 2025",
    location: "IIT Delhi, India",
    eventName: "Innovation Summit 2025",
    background: iit,
  },
  {
    id: 4,
    countdown: { days: 3, hours: 12, seconds: 34 },
    date: "30 Sep 2024",
    location: "Mumbai, India",
    eventName: "Global Business Expo 2024",
    background: background,
  },
  {
    id: 5,
    countdown: { days: 7, hours: 16, seconds: 9 },
    date: "10 Aug 2025",
    location: "Chennai, India",
    eventName: "IEEE Conference 2025",
    background: background,
  },
];

const Event = () => {
  return (
    <div className="relative">
      <TopSection title={"Events"} bgImage={eventbg} />

      <div className="bg-blue-50 relative">
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl gap-6 relative pb-10">
          <div className="md:col-span-2 space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                style={{
                  background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${event.background}) no-repeat center center/cover `,
                }}
                className="bg-contain text-white h-80 overflow-hidden shadow-lg"
              >
                <div className="relative z-10 space-y-4 h-full flex flex-col justify-between ">
                  {/* Upper Section (Countdown Timer) */}
                  <div className=" bg-linkBlue border-white border-l border-r border-b w-1/2 h-10 rounded-b-3xl relative top-0 left-1/2 -translate-x-[50%]">
                    <div className="flex justify-center gap-2 text-linkBlue space-x-4 pt-2">
                      <div className="bg-white rounded-2xl border-[#0701011e] border-4 text-center p-1 w-14">
                        <h4 className="text-md font-bold">
                          {event.countdown.days}
                        </h4>
                        <p className="text-xs">DAY</p>
                      </div>
                      <div className="bg-white rounded-2xl border-[#0701011e] border-4 text-center p-1 w-14">
                        <h4 className="text-xl font-bold">
                          {event.countdown.hours}
                        </h4>
                        <p className="text-xs">HOUR</p>
                      </div>
                      <div className="bg-white rounded-2xl border-[#0701011e] border-4 text-center p-1 w-14">
                        <h4 className="text-xl font-bold">
                          {event.countdown.seconds}
                        </h4>
                        <p className="text-xs">SEC</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section Event Details */}
                  <div className="flex justify-between ">
                    <div className="ml-5 mb-2">
                      <div className="flex space-x-3">
                        <p className="bg-linkBlue p-2">{event.date}</p>
                        <p className="flex items-center p-2 bg-linkBlue">
                          <FaLocationDot className="text-lg mr-1" />
                          {event.location}
                        </p>
                      </div>
                      <h2 className="text-3xl font-bold mt-2 text-left">
                        {event.eventName}
                      </h2>
                    </div>
                    {/* Join Now Button */}
                    <button className="bg-linkBlue p-2 h-14 my-auto mr-2 text-lg font-bold">
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <Pagination />
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Event;
