import React from "react";
import JobCard from "./JobCard";
import jobbg from "../../assets/jobbg.jpg";
import Sidebar from "./Sidebar";
import TopSection from "../common/TopSection";
import Pagination from "../common/Pagination";

// Sample Job Data (can be expanded further)
const jobPosts = [
  {
    id: 1,
    company: "Infosys",
    logo: "Infosys.com",
    jobTitle: "Full Stack Developer",
    location: "Bengaluru, Karnataka",
    datePosted: "24 Feb, 2021",
    jobType: "Full Time",
    salaryRange: "9.30 LPA",
  },
  {
    id: 2,
    company: "Tata Consultancy Services",
    logo: "tcs.com",
    jobTitle: "Java Developer",
    location: "Chennai, Tamil Nadu",
    datePosted: "15 Mar, 2021",
    jobType: "Part Time",
    salaryRange: "7 LPA",
  },
  {
    id: 3,
    company: "Wipro",
    logo: "wipro.com",
    jobTitle: "DevOps Engineer",
    location: "Pune, Maharashtra",
    datePosted: "5 Jan, 2021",
    jobType: "Full Time",
    salaryRange: "4-5 LPA",
  },
  {
    id: 4,
    company: "HCL Technologies",
    logo: "hcl.com",
    jobTitle: "Data Scientist",
    location: "Noida, Uttar Pradesh",
    datePosted: "10 Dec, 2020",
    jobType: "Internship",
    salaryRange: "12k/mo",
  },
  {
    id: 5,
    company: "Tech Mahindra",
    logo: "mahindra.com",
    jobTitle: "AI/ML Engineer",
    location: "Hyderabad, Telangana",
    datePosted: "2 Jan, 2021",
    jobType: "Full Time",
    salaryRange: "16k/mo",
  },
];

const JobSection = () => {
  return (
    <div>
      <TopSection title={"Recent Job Posting"} bgImage={jobbg} />
      <div className="bg-blue-50 relative">
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl gap-6 pb-10">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {jobPosts.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            <Pagination />
          </div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default JobSection;
