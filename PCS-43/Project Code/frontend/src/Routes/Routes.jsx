import React from "react";
import About from "../components/about/About";
import Home from "../components/home/Home";
import Event from "../components/event/Event";
import ContactUs from "../components/contact Us/ContactUs";
import JobSection from "../components/job/JobSection";
import Members from "../components/members/Members";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";
import Profile from "../components/profile/Profile";
import EditProfile from "../components/profile/EditProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import DefaultPage from "../components/Login/DefaultPage";
import SelectCollege from "../components/Login/SelectCollege";
import SupportPage from "../components/Login/SupportPage";
import RegisterCollege from "../components/college/RegisterCollege";
import ChatSupport from "../components/chatSupport/ChatSupport";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="" element={<SelectCollege />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="registerCollege" element={<RegisterCollege />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="event" element={<Event />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="job" element={<JobSection />} />
          <Route path="member" element={<Members />} />
          <Route path="profile" element={<Profile />} />
          <Route path="editprofile" element={<EditProfile />} />
        </Route>
      </Routes>
      
    </Router>
  );
};

export default AppRoutes;
