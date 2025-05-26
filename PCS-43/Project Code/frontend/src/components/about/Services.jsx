import React from "react";
import data from "./utils/serviceData";
const Services = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 m-auto">
            <h1 className="text-4xl font-bold text-linkBlue mb-6">
              Actually What are we doing now?
            </h1>
            <p className="text-gray-700 mb-4">
              Fusce molestie varius lorem a tempor. Phasellus ut dapibus sapien.
              Pellentesque ac fermentum leo, eget convallis mi. Proin in mi
              finibus, pellentesque lorem quis, tempor ante. Quisque eget
              finibus enim. Etiam sagittis justo nec lectus laoreet placerat.
              Nulla facilisi. Nam cursus efficitur aliquet.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div className="bg-white rounded-lg shadow-[7px_7px_3px_-3px] shadow-linkBlue p-6 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-3">{item?.title}</h3>
                <p className="text-gray-600 mb-4">{item?.description}</p>
                <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  Know More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
