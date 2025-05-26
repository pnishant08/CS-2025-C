import React, { useState } from "react";

const Gallery = () => {
  const [selected, setSelected] = useState();

  return (
    <div className="mx-auto mt-20 max-w-7xl mb-20">
      <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Sidebar */}
        <div className=" text-white px-4 rounded-md">
          <h2 className="text-xl font-semibold mb-1 border-b bg-linkBlue p-3 py-4 rounded-t-md">
            Categories
          </h2>
          <ul className="space-y-2 bg-linkBlue">
            <li className="p-3 font-medium cursor-pointer hover:bg-black pl-5">
              Epoque
            </li>
            <li className="p-3 font-medium cursor-pointer hover:bg-black pl-5">
              Prastuti
            </li>
            <li className="p-3 font-medium cursor-pointer hover:bg-black pl-5">
              Campus Life
            </li>
            <li className="p-3 font-medium cursor-pointer hover:bg-black pl-5">
              Campus Sports (RANN)
            </li>
            <li className="p-3 font-medium cursor-pointer hover:bg-black pl-5">
              Get Together
            </li>
            <li className="p-3 font-medium cursor-pointer hover:bg-black pl-5">
              Anual Tour
            </li>
            <li className="p-3 font-medium cursor-pointer hover:bg-black pl-5">
              Historical
            </li>
            <li className="p-3 font-medium cursor-pointer hover:bg-black pl-5">
              Scolership
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
          <img
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3"
            alt="Woman working on laptop"
            className="object-cover h-48 rounded-lg aspect-video"
          />

          <img
            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919"
            alt="Man with beard"
            className="object-cover h-48 rounded-lg aspect-video"
          />

          <img
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3"
            alt="Woman working on laptop"
            className="object-cover h-48 rounded-lg aspect-video"
          />

          <img
            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919"
            alt="Man with beard"
            className="object-cover h-48 rounded-lg aspect-video"
          />

          <img
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3"
            alt="Woman working on laptop"
            className="object-cover h-48 rounded-lg aspect-video"
          />

          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
            alt="City skyline at night"
            className="object-cover h-48 rounded-lg aspect-video"
          />

          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
            alt="City skyline at night"
            className="object-cover h-48 rounded-lg aspect-video"
          />

          <img
            src="https://images.unsplash.com/photo-1531384441138-2736e62e0919"
            alt="Man with beard"
            className="object-cover h-48 rounded-lg aspect-video"
          />

          <img
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3"
            alt="Woman working on laptop"
            className="object-cover h-48 rounded-lg aspect-video"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
