import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-2 w-full max-w-5xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="rounded-lg p-2 w-1/4">
            <img src={`https://logo.clearbit.com/${job?.logo}}`} alt="logo" className="m-auto"/>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-xl font-semibold text-gray-800">
                {job.jobTitle}
              </h1>
              <div className="flex items-center mt-1 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {job.location}
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <span className="bg-yellow-100 text-nowrap text-yellow-800 font-medium p-1.5 px-3 rounded-full">
                {job.datePosted}
              </span>
              <span className="bg-pink-100 text-nowrap text-pink-800 font-medium p-1.5 px-3 rounded-full">
                {job.jobType}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-4 text-sm">
          <span className="bg-green-100 text-green-800 p-2 px- font-bold rounded-full">
            {job.salaryRange}
          </span>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-2 px-3 rounded-full transition duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
