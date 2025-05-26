import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import TopSection from "../common/TopSection";
import memberbg from "../../assets/memberbg.jpg";
import MemberShimmer from "../Shimmer/MemberShimmer";
import { memberData } from "../../utils/memberData";
import { Link } from "react-router-dom";
import axios from "axios";
import GenerateURN from "../../utils/generateURN";

const Members = () => {
  const [allMembers, setAllMembers] = useState([]);

  const college = sessionStorage.getItem("CollegeSelected")
    ? JSON.parse(sessionStorage.getItem("CollegeSelected"))
    : null;

  useEffect(() => {
    getAllMembers();
  }, []);
  const getAllMembers = async () => {
    console.log("Fetching all members for college:", college?.collegeId);
    
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/getAllUsers/${
          college?.collegeId
        }`,
        {
          headers: {
            unq: GenerateURN(),
          },
        }
      );

      if (
        response?.data.apiResponseCode == "200" &&
        response?.data.apiResponseMessage == "Success"
      ) {
        setAllMembers(response?.data?.apiResponseData);
      } else {
        toast.error(response.data.apiResponseMessage);
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };
  return (
    <div className=" mx-auto bg-blue-50">
      <TopSection title={"Member Directory"} bgImage={memberbg} />

      <main className="w-full max-w-3xl m-20 mx-auto text-center">
        <h1 className="text-4xl font-bold text-linkBlue mb-4">
          Now We Have {allMembers?.length} Members
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Search Members Profile by name, batch, or branch.
        </p>

        <div className="w-24 h-1 bg-black mx-auto mb-8"></div>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Type Your Key word"
            className="border border-gray-300 outline-none rounded-md px-4 p-2 w-full sm:w-64"
          />
          <button
            type="submit"
            className="bg-linkBlue text-white rounded-md px-6 py-2  transition-colors"
          >
            Search
          </button>
        </form>
      </main>

      <div className="min-h-[32rem] max-w-7xl m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {allMembers.map((user, index) => {
            return (
              <div
                key={index}
                className="flex items-center p-4 rounded-md max-w-xs"
              >
                <img
                  className="w-20 h-20 rounded-lg"
                  src={`https://ui-avatars.com/api/?name=${user?.user_name}&background=random&rounded=true`}
                  alt=""
                />
                <div className="text-left ml-3">
                  <Link to={`#`}>
                    <h2 className="text-linkBlue hover:text-purple-900 text-lg">
                      {user?.user_name}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm">{user?.batch}</p>
                  <p className="text-gray-600 text-sm">{user?.branch}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-auto pb-10">
        <Pagination />
      </div>
    </div>
  );
};

export default Members;
