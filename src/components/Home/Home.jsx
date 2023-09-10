import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="  ">
      <div className="w-1/2 space-y-4 absolute transform  -translate-y-1/3 top-1/2   text-white ">
        <h1 className="text-3xl font-bold ">Doctor Awesh</h1>
        <Link to="/dashboard/doctorProfile">
          <button className="btn btn-success normal-case">Get Started</button>
        </Link>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          repellat eum, excepturi quaerat magni expedita? Accusantium deserunt
          tempore assumenda modi praesentium! Laboriosam minima non dolorum,
          excepturi ab laborum quaerat dolores!
        </p>
      </div>
      <div>
        <img
          className="w-full"
          src="https://img.freepik.com/free-photo/portrait-happy-male-doctor-dressed-uniform_171337-1486.jpg?size=626&ext=jpg"
          alt="image loading"
        />
      </div>
    </div>
  );
};

export default Home;
