import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "../../utils/testimonial";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="shadow-lg grid grid-cols-2 text-center transition-all min-h-[70vh]">
      <div className="bg-linkBlue col-span-1 flex gap-10 items-center justify-center align-middle p-20">
        <button
          className="text-blue-700 text-xl hover:text-blue-500 bg-white p-2 h-10 w-10 rounded-full"
          onClick={prevPerson}
        >
          <FaChevronLeft />
        </button>
        <div className="bg-white max-w-2xl rounded-lg p-5">
          <div className="relative w-36 h-36 mx-auto mb-6">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
            <span className="absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-full bg-blue-500 text-white">
              <FaQuoteRight />
            </span>
            <div className="absolute top-0 right-[-8px] w-full h-full rounded-full bg-blue-500 z-[-1]"></div>
          </div>
          <h4 className="mb-2 text-lg font-semibold">{name}</h4>
          <p className="mb-2 uppercase text-sm text-blue-500">{job}</p>
          <p className=" text-gray-600">{text}</p>
        </div>

        <button
          className="text-blue-700 text-xl hover:text-blue-500 bg-white  h-10 w-10 p-2 rounded-full"
          onClick={nextPerson}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="text-center col-span-1 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2">Subscribe</h1>
        <div className="w-24 h-1 bg-[#205092] mx-auto mb-4"></div>

        <div>
          <p className="text-gray-500 mb-6">
            If you want to update with voxfordd Alumniy Association, then you
            need to subscribe by your email
          </p>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full max-w-lg p-3 text-gray-700 border border-[#173257] rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button className="w-full max-w-lg p-3 bg-linkBlue text-white rounded-lg text-lg hover:bg-[#173257] transition-all">
            Subscribe
          </button>

          <p className="text-xs text-gray-400 mt-4">
            Note: Don't Hesited, We Hate Spam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
