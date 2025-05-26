import React, { useState } from "react";
import { Select } from "antd";
import { useNavigate, Link } from "react-router-dom";
import defaultbg from "../../assets/homePng.png";
import axios from "axios";
import GenerateURN from "../../utils/generateURN";
const SelectCollege = () => {
  const [selectedCollege, setSelecedCollege] = useState("");
  const nagivate = useNavigate();
  const [colleges, setColleges] = useState([]);
  const [CollegesDetail, setCollegesDetails] = useState([]);
  const handelNagigate = () => {
    
    const selectedCollegeData = CollegesDetail.find(
      (college) => college?.collegeId === selectedCollege
    );

    if (selectedCollegeData) {
      sessionStorage.setItem(
        "CollegeSelected",
        JSON.stringify(selectedCollegeData)
      );
    }

    nagivate("/login");
  };

  const fetchColleges = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/colleges/allColleges/All`,
        {
          headers: {
            "Content-Type": "application/json",
            unq: GenerateURN(),
          },
        }
      );

      console.log("Colleges fetched:", response.data);

      setCollegesDetails(response.data.apiResponseData);
      const collegeData = response.data.apiResponseData.map((college) => ({
        value: college.collegeId,
        label: college.collegeName,
      }));
      setColleges(collegeData);
    } catch (error) {
      console.error("Error fetching colleges:", error);
      setColleges([]);
    }
  };

  return (
    <div className=" w-full h-full shadow-xl flex rounded-md overflow-hidden z-20">
      <div className="w-1/2 bg-[#97e5f09d] h-full p-20">
        <img src={defaultbg} alt="default" className="w-full h-full" />
      </div>
      <div className="w-1/2 relative p-20 text-black bg-white flex flex-col align-middle items-center justify-center h-full">
        <h1 className="text-4xl relative font-bold text-center mb-12">
          Welcome to GradCircle!
        </h1>
        <p className="text-center mb-6">
          Your journey continues here
          <br />
          where connections create opportunities and success.
        </p>

        <div className="relative mb-4 gap-5 flex justify-center items-center flex-col">
          <Select
            showSearch
            placeholder="Select Your Institute"
            value={selectedCollege || undefined}
            onChange={(value) => setSelecedCollege(value)}
            className="w-96 h-10 "
            size="large"
            options={colleges}
            allowClear="true"
            required
            onClick={fetchColleges}
            loading={true}
            filterOption={(input, option) =>
              option.label.toLowerCase().includes(input.toLowerCase())
            }
            notFoundContent="No colleges found"
          />

          <button
            disabled={!selectedCollege}
            onClick={handelNagigate}
            className="disabled:bg-opacity-90 md:w-32 w-full bg-linkBlue text-white font-semibold py-2 px-4 rounded"
          >
            Continue
          </button>
        </div>
        <div className="space-x-2 absolute bottom-10 right-10 text-sm">
          <span>Register Your College</span>
          <Link
            className="text-blue-500 hover:underline text-center"
            to={"support"}
          >
            Click Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectCollege;
