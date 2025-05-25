import React from "react";
import bgHome from "../../assets/about_bg.jpg";
import Carousel from "./Carousel";
import Services from "./Services";
import stats from "../../utils/stats";
import Timeline from "./Timeline";
import "@lottiefiles/lottie-player";
import about2 from "../../assets/about2.png";
import TopSection from "../common/TopSection";
const About = () => {
  return (
    <div>
      <TopSection bgImage={bgHome} title={"About Us"}/>
      <div className="max-w-5xl m-auto leading-7 text-lg mt-10">
        
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          ratione ex exercitationem iure earum molestiae itaque consequatur
          fuga, perferendis aperiam sint dolore impedit assumenda voluptatem
          mollitia nam? Modi beatae, sapiente, consequatur laudantium ullam
          recusandae explicabo deserunt enim eos possimus, fugiat adipisci
          deleniti nisi fugit quas. Architecto illo alias ab est consequatur
          expedita, ipsum perferendis delectus ad aliquid, molestias eum
          necessitatibus maiores veritatis animi velit quo in autem odio id,
          doloribus neque? Incidunt illo quam hic rerum quod unde excepturi quis
          error vero dolorem, minus iste eum, omnis aperiam est esse reiciendis
          molestias molestiae impedit odit explicabo ullam eius eveniet
          adipisci?
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          numquam asperiores sit qui eius repellendus veritatis quia fugiat. Sit
          explicabo corporis voluptatum illo facilis, nobis adipisci porro
          eligendi nam rem.
        </p>

        <Carousel />
      </div>
      <Services />
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
      <Timeline />
      <div className="bg-blue-50">
        <div className="container  mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-purple-600 mb-4">
            Our Members From Whole The World
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>

          <div className="flex justify-evenly">
            <div className="relative w-1/3">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_yd8fbnml.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              />
            </div>
            <img src={about2} alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
