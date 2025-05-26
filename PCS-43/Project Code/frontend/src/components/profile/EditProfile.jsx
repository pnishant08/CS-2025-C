import React, { useState } from "react";
import TopSection from "../common/TopSection";
import profilebg from "../../assets/profilebg.jpg";

const EditProfile = () => {
  // Define state for each editable section
  const [userData, setUserData] = useState({
    profileImage: "https://randomuser.me/api/portraits/women/46.jpg",
    name: "John Doe",
    title: "Full-Stack Designer",
    email: "john.doe@gmail.com",
    website: "https://www.luckymedia.dev",
    phone: "(+30) 333 0123 765",
    location: "Los Angeles, California",
    socials: {
      instagram: "@luckymedia.dev",
      dribbble: "@luckymedia.dev",
      twitter: "@luckymedia.dev",
      linkedin: "@luckymedia.dev",
    },
    languages: [
      { language: "Italian", level: "Native" },
      { language: "Greek", level: "Native" },
      { language: "English", level: "Professional working" },
      { language: "Spanish", level: "Elementary" },
    ],
    hobbies: "Skiing, Football, Basketball",
    experience: [
      {
        company: "Cupertino",
        role: "Product Designer",
        duration: "July 2021 - January 2022",
        description:
          "Ornare nonnisi nonnulla netus, itur sit sodales. Aut fugiat vitae ilum vitae lobortis elit eleifend sed malesu tudia.",
      },
      {
        company: "Microsoft",
        role: "UX Designer",
        duration: "July 2020 - December 2020",
        description:
          "Ornare nonnisi nonnulla netus, itur sit sodales. Aut fugiat vitae ilum vitae lobortis elit eleifend sed malesu tudia.",
      },
    ],
    education: [
      {
        institution: "University of Columbia",
        degree: "Business & IT",
        duration: "2016 - 2019",
      },
      {
        institution: "Berkeley California",
        degree: "High School",
        duration: "2012 - 2016",
      },
    ],
    projects: [
      {
        name: "Powerful Design System",
        description:
          "Figma UX/UI Design System featuring a wide variety of well-organized components.",
      },
    ],
    skills: [
      "User Experience",
      "Graphic Design",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Web Development",
      "Mobile Apps",
      "React.js",
      "React Native",
    ],
    courses: [
      {
        name: "Intro to Graphic Design",
        institution: "Udemy Education Center",
        duration: "Oct 2021 - Nov 2021",
      },
      {
        name: "Responsive Web Design",
        institution: "freeCodeCamp",
        duration: "Jun 2021",
      },
      {
        name: "React: From zero to hero!",
        institution: "Udemy",
        duration: "May 2021",
      },
    ],
  });

  // Handle input change for each field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      socials: {
        ...userData.socials,
        [name]: value,
      },
    });
  };

  const handleLanguagesChange = (e, index) => {
    const { name, value } = e.target;
    const updatedLanguages = [...userData.languages];
    updatedLanguages[index][name] = value;
    setUserData({
      ...userData,
      languages: updatedLanguages,
    });
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...userData.experience];
    updatedExperience[index][name] = value;
    setUserData({
      ...userData,
      experience: updatedExperience,
    });
  };

  const handleAddExperience = () => {
    setUserData({
      ...userData,
      experience: [
        ...userData.experience,
        { company: "", role: "", duration: "", description: "" },
      ],
    });
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = userData.experience.filter(
      (exp, i) => i !== index
    );
    setUserData({
      ...userData,
      experience: updatedExperience,
    });
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...userData.education];
    updatedEducation[index][name] = value;
    setUserData({
      ...userData,
      education: updatedEducation,
    });
  };

  const handleAddEducation = () => {
    setUserData({
      ...userData,
      education: [
        ...userData.education,
        { institution: "", degree: "", duration: "" },
      ],
    });
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = userData.education.filter((edu, i) => i !== index);
    setUserData({
      ...userData,
      education: updatedEducation,
    });
  };

  const handleProjectChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = [...userData.projects];
    updatedProjects[index][name] = value;
    setUserData({
      ...userData,
      projects: updatedProjects,
    });
  };

  const handleAddProject = () => {
    setUserData({
      ...userData,
      projects: [...userData.projects, { name: "", description: "" }],
    });
  };

  const handleRemoveProject = (index) => {
    const updatedProjects = userData.projects.filter(
      (project, i) => i !== index
    );
    setUserData({
      ...userData,
      projects: updatedProjects,
    });
  };

  const handleCourseChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCourses = [...userData.courses];
    updatedCourses[index][name] = value;
    setUserData({
      ...userData,
      courses: updatedCourses,
    });
  };

  const handleAddCourse = () => {
    setUserData({
      ...userData,
      courses: [
        ...userData.courses,
        { name: "", institution: "", duration: "" },
      ],
    });
  };

  const handleRemoveCourse = (index) => {
    const updatedCourses = userData.courses.filter((course, i) => i !== index);
    setUserData({
      ...userData,
      courses: updatedCourses,
    });
  };

  return (
    <div>
      <TopSection title={"Edit Profile"} bgImage={profilebg} />
      <div className="container flex gap-10 mx-auto px-4 py-8 max-w-5xl">
        <div className="">
          <header className="flex flex-col items-center mb-8">
            <div>
              <img
                src={userData.profileImage}
                alt="John Doe"
                className="w-40 h-40 rounded-xl object-cover mb-4 md:mb-0 md:mr-8"
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="text-xl mb-2 border-2 px-2"
                placeholder="Name"
              />
              <input
                type="text"
                name="title"
                value={userData.title}
                onChange={handleInputChange}
                className="text-xl border-2 px-2"
                placeholder="Title"
              />
            </div>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="fas fa-envelope w-6 text-gray-500"></i>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  className=" border-2 px-2 ml-2"
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center">
                <i className="fas fa-globe w-6 text-gray-500"></i>
                <input
                  type="url"
                  name="website"
                  value={userData.website}
                  onChange={handleInputChange}
                  className=" border-2 px-2 ml-2"
                  placeholder="Website"
                />
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone w-6 text-gray-500"></i>
                <input
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputChange}
                  className=" border-2 px-2 ml-2"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt w-6 text-gray-500"></i>
                <input
                  type="text"
                  name="location"
                  value={userData.location}
                  onChange={handleInputChange}
                  className=" border-2 px-2 ml-2"
                  placeholder="location"
                />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Socials</h2>
            <div className="space-y-2">
              {Object.keys(userData.socials).map((social, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="text"
                    name={social}
                    value={userData.socials[social]}
                    onChange={handleSocialChange}
                    className="border-2 px-2 ml-2"
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Languages</h2>
            {userData.languages.map((language, index) => (
              <div key={index} className="flex items-center space-x-4 mt-2">
                <input
                  type="text"
                  name="language"
                  value={language.language}
                  onChange={(e) => handleLanguagesChange(e, index)}
                  className="border-2 px-2"
                  placeholder="Language"
                />
                <select className="p-1">
                  <option>Native</option>
                  <option>Elementary</option>
                  <option>Professional</option>
                </select>
              </div>
            ))}
          </section>
        </div>

        <main className="md:col-span-2">
          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <ul className="space-y-6">
              {userData.experience.map((experience) => (
                <li>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex">
                      <img
                        src={`https://logo.clearbit.com/${experience.company}.com`}
                        alt="Cupertino logo"
                        className="w-8 h-8 mr-2"
                      />
                      <h3 className="text-xl font-semibold">{experience.role}</h3>
                    </div>
                    <div className="text-white flex gap-4">
                      <button className="bg-linkBlue rounded px-2">Edit</button>
                      <button className="bg-red-500 rounded px-2">
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">
                    {experience.duration} | {experience.company}
                  </p>
                  <p>{experience.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section className="mb-8">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <button className="bg-linkBlue rounded px-2 h-7 text-white">
                Edit
              </button>
            </div>
            <div className="flex flex-col justify-between gap-5">
              {userData.education.map((education) => (
                <div>
                  <div className="flex justify-between w-full">
                    <h3 className="text-xl font-semibold">
                      {education.institution}
                    </h3>
                    <p className="text-gray-600 my-auto font-semibold">
                      {education.duration}
                    </p>
                  </div>
                  <p className="text-gray-600">{education.degree}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <button
                onClick={handleAddProject}
                className="bg-linkBlue text-white rounded h-8 px-1 text-sm"
              >
                Add Project
              </button>
            </div>
            {userData.projects.map((project, index) => (
              <div key={index} className="mb-6">
                <input
                  type="text"
                  name="name"
                  value={project.name}
                  onChange={(e) => handleProjectChange(e, index)}
                  placeholder="Project Name"
                  className="border-b-2"
                />
                <textarea
                  name="description"
                  value={project.description}
                  onChange={(e) => handleProjectChange(e, index)}
                  placeholder="Project Description"
                  className="border-2 rounded p-2 w-full mt-2"
                ></textarea>
                <button
                  onClick={() => handleRemoveProject(index)}
                  className="mt-2 text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 rounded-full px-3 py-1">
                User Experience
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                Graphic Design
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                Adobe Illustrator
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                Adobe After Effects
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                Web Development
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                Mobile Apps
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1">React.js</span>
              <span className="bg-gray-200 rounded-full px-3 py-1">
                React Native
              </span>
            </div>
          </section>

          {/* Courses */}
          <section className="mb-8">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold mb-4">Cources</h2>
              <button
                onClick={handleAddProject}
                className="bg-linkBlue text-white rounded h-8 px-1 text-sm"
              >
                Add Project
              </button>
            </div>
            {userData.courses.map((course, index) => (
              <div key={index} className="mb-6">
                <input
                  type="text"
                  name="name"
                  value={course.name}
                  onChange={(e) => handleCourseChange(e, index)}
                  placeholder="Course Name"
                  className="border-b-2"
                />
                <input
                  type="text"
                  name="institution"
                  value={course.institution}
                  onChange={(e) => handleCourseChange(e, index)}
                  placeholder="Institution"
                  className="border-b-2 ml-2"
                />
                <input
                  type="text"
                  name="duration"
                  value={course.duration}
                  onChange={(e) => handleCourseChange(e, index)}
                  placeholder="Duration"
                  className="border-b-2 ml-2"
                />
                <button
                  onClick={() => handleRemoveCourse(index)}
                  className="mt-2 text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={handleAddCourse}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Course
            </button>
          </section>
        </main>
      </div>
      <div className="w-3/5 m-auto flex justify-end space-x-10 mb-10">
        <button className="bg-red-500 hover:bg-red-700 p-2 px-4 text-white">
          Cancel
        </button>
        <button className="bg-linkBlue hover:bg-blue-600 p-2 px-4 text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
