import React from "react";

const Sidebar = () => {
  return (
    <div className="sticky top-10 space-y-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="bg-white text-black">
        <h3 className="font-bold mb-2 bg-linkBlue p-2 text-white">
          DEPARTMENT
        </h3>
        <ul className="space-y-2 p-2">
          <li className="flex justify-between">
            <div className="space-x-2">
              <input
                type="checkbox"
                name="business"
                id="business"
                className="cursor-pointer"
              />
              <span>Business</span>
            </div>
            <span>(14)</span>
          </li>
          <li className="flex justify-between">
            <div className="space-x-2">
              <input
                type="checkbox"
                name="business"
                id="business"
                className="cursor-pointer"
              />
              <span>Computer Science</span>
            </div>
            <span>(08)</span>
          </li>
          <li className="flex justify-between">
            <div className="space-x-2">
              <input
                type="checkbox"
                name="business"
                id="business"
                className="cursor-pointer"
              />
              <span>Social Work</span>
            </div>
            <span>(05)</span>
          </li>
          <li className="flex justify-between">
            <div className="space-x-2">
              <input
                type="checkbox"
                name="business"
                id="business"
                className="cursor-pointer"
              />
              <span>Hackthon</span>
            </div>
            <span>(20)</span>
          </li>
          <li className="flex justify-between">
            <div className="space-x-2">
              <input
                type="checkbox"
                name="business"
                id="business"
                className="cursor-pointer"
              />
              <span>Musical</span>
            </div>
            <span>(02)</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="font-bold mb-2">RECENT UPDATES</h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-2">
            <img
              src="https://randomuser.me/api/portraits/men/50.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">
                The day has come when the real thing...
              </p>
              <p className="text-sm text-gray-500">June 12, 2023</p>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <img
              src="https://randomuser.me/api/portraits/men/22.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">
                The day has come when the real thing...
              </p>
              <p className="text-sm text-gray-500">June 12, 2023</p>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <img
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">
                The day has come when the real thing...
              </p>
              <p className="text-sm text-gray-500">June 12, 2023</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
