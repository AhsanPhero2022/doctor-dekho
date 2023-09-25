import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/pages/About.jsx";
import Login from "./components/pages/Login.jsx";
import Report from "./components/pages/Report.jsx";
import Feedback from "./components/pages/Feedback.jsx";
import Blog from "./components/pages/Blog.jsx";
import Register from "./components/pages/Register.jsx";
import Dashboard from "./components/pages/profile/Dashboard.jsx";
import DoctorProfile from "./components/pages/profile/DoctorProfile.jsx";
import PatientRegister from "./components/pages/PatientRegister.jsx";
import Achievement from "./components/pages/profile/Achievement.jsx";
import Institute from "./components/pages/profile/Institute.jsx";
import Expertise from "./components/pages/profile/Expertise.jsx";
import SeeDetails from "./components/pages/profile/SeeDetails.jsx";
import UserDashboard from "./components/pages/userProfile/UserDashboard.jsx";
import UserProfile from "./components/pages/userProfile/UserProfile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/patientRegister",
        element: <PatientRegister></PatientRegister>,
      },
      {
        path: "/report",
        element: <Report></Report>,
      },
      {
        path: "/feedback",
        element: <Feedback></Feedback>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/seeDetails",
        element: <SeeDetails></SeeDetails>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "doctorProfile",
        element: <DoctorProfile></DoctorProfile>,
      },
      {
        path: "achievement",
        element: <Achievement></Achievement>,
      },
      {
        path: "institute",
        element: <Institute>s</Institute>,
      },
      {
        path: "expertise",
        element: <Expertise></Expertise>,
      },
      {
        path: "seeDetails/:id",
        element: <SeeDetails></SeeDetails>,
      },
    ],
  },
  {
    path: "userDashboard",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
