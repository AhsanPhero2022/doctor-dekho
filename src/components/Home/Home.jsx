import React from "react";
import { Link } from "react-router-dom";
import OurService from "./extra/OurService";

const Home = () => {
  return (
    <div>
      <div className="w-1/2 space-y-4 absolute transform  -translate-y-1/3 top-1/2   text-white ">
        <h1 className="text-3xl font-bold ">Doctor Awesh</h1>
        <Link to="/dashboard/doctorProfile">
          <button className="btn btn-success normal-case">Get Started</button>
        </Link>
        <Link to="/prDashboard/Profile">
          <button className="btn btn-success normal-case ms-4">
            My Profile
          </button>
        </Link>
        <Link to="/userDashboard/userProfile">
          <button className="ms-4 btn btn-success normal-case">
            User Profile
          </button>
        </Link>
        <p className="text-black text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          repellat eum, excepturi quaerat magni expedita? Accusantium deserunt
          tempore assumenda modi praesentium! Laboriosam minima non dolorum,
          excepturi ab laborum quaerat dolores!
        </p>
      </div>
      <div className="">
        <img
          className="w-full "
          src="https://www.cdc.gov/diabetes/images/library/spotlights/clinic-doctor-image.png?_=45953"
          alt="image loading"
        />
      </div>
      <OurService></OurService>
    </div>
  );
};

export default Home;
