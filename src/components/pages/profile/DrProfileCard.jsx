import React, { useState } from "react";
import { Link } from "react-router-dom";

const DrProfileCard = ({ doctor }) => {
  const { _id, name, image, specialist, rating, status } = doctor;

  return (
    <div className="my-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-[300px]" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <div className="relative inline-block ">
            <div
              className={` flex items-center flex-row-reverse  w-3 h-3 bg-${
                status == "online" ? "red" : "green"
              }-500 rounded-full absolute top-0 right-0 border-2 border-white `}
            >
              <span className="text-gray-700 me-5 text-xs">
                {status == "offline" ? "Online" : "Offline"}
              </span>
            </div>
          </div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Specialist: {specialist}</p>
          <p>Ratings: {rating}</p>
          <div className="card-actions justify-end">
            <a href={`/dashboard/seeDetails/${_id}`}>
              <button className="btn btn-success">See Details</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrProfileCard;
