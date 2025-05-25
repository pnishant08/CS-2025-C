import React, { useState, useEffect } from "react";

const videoData = [
  {
    src: "https://tecdn.b-cdn.net/img/video/Tropical.mp4",
  },
  {
    src: "https://tecdn.b-cdn.net/img/video/forest.mp4",
  },
  {
    src: "https://tecdn.b-cdn.net/img/video/Agua-natural.mp4",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle auto-slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videoData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] m-10 mx-auto">
      {/* Carousel Videos */}
      <div className="relative w-full h-96 overflow-hidden">
        {videoData.map((video, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              className="w-11/12 h-3/4 m-auto object-cover"
              autoPlay
              loop
              muted
            >
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className=" mx-auto  mt-10 flex list-none justify-center space-x-3">
        {videoData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-[10px] w-[10px] rounded-full bg-black transition-all duration-300 ${
              index === currentIndex ? "transform scale-125" : "opacity-50"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
