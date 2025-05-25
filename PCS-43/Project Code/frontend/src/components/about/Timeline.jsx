import React from "react";

const Timeline = () => {
  const timeLine = [
    {
      year: "1823",
      title: "We start this for first time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      year: "1850",
      title: "We start this for first time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      year: "1955",
      title: "We start this for first time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      year: "2007",
      title: "We start this for first time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
  ];

  return (
    <div className="relative wrap overflow-hidden p-10 h-full max-w-6xl m-auto mb-10">
      <div className="border-2-2 absolute left-1/2 border-opacity-20 border-[#0059ff] h-full border"></div>

      {timeLine.map((item, index) =>
        index % 2 == 0 ? (
          <div className="mb-8 flex justify-between items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-linkBlue shadow-xl w-12 h-12 rounded-full relative">
              <h1 className="mx-auto font-semibold text-lg text-white">{index+1}</h1>
              <div className="absolute right-10 w-32 p-1 rounded-l-full bg-linkBlue">
                <p className="text-center text-white font-medium">{item?.year}</p>
              </div>
            </div>
            <div className="order-1 border rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-semibold text-linkBlue text-xl">
                {item?.title}
              </h3>
              <p className="text-sm leading-snug tracking-wide text-opacity-100">
                {item?.description}
              </p>
            </div>
          </div>
        ) : (
          <div className="mb-8 flex justify-between text-black flex-row-reverse items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 text-white bg-linkBlue shadow-xl w-12 h-12 rounded-full relative">
              <h1 className="mx-auto font-semibold text-lg">{index+1}</h1>
              <div className="absolute left-10 w-32 p-1 rounded-r-full bg-linkBlue">
                <p className="text-center  font-medium">{item?.year}</p>
              </div>
            </div>
            <div className="order-1 border rounded-lg shadow-xl text-right w-5/12 px-6 py-4">
              <h3 className="mb-3 font-semibold text-linkBlue text-xl">
                {item?.title}
              </h3>
              <p className="text-sm leading-snug tracking-wide text-opacity-100">
                {item?.description}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Timeline;
