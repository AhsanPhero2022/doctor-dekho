import React, { useEffect, useState } from "react";
import DrProfileCard from "./DrProfileCard";

const DoctorProfile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch("https://y-ahsanphero2022.vercel.app/user")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div>
      <div className=" bg-green-50 py-8">
        <h2 className="text-center  text-3xl font-semibold">
          All doctors profiles
        </h2>
      </div>
      <div className="">
        {profile.map((doctor) => (
          <DrProfileCard key={doctor._id} doctor={doctor}></DrProfileCard>
        ))}
      </div>
    </div>
  );
};

export default DoctorProfile;
