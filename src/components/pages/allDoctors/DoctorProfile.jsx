import React, { useEffect, useState } from "react";
import DrProfileCard from "./DrProfileCard";
import { DotWave } from "@uiball/loaders";

const DoctorProfile = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://y-ahsanphero2022.vercel.app/user")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className=" bg-green-50 py-8">
        <h2 className="text-center  text-3xl font-semibold">
          All doctors profiles
        </h2>
      </div>

      <div>
        {loading ? (
          <>
            <div className="flex">
              <p>Loading</p>

              <DotWave size={47} speed={1} color="black" />
            </div>
          </>
        ) : (
          <div className="">
            {profile.map((doctor) => (
              <DrProfileCard key={doctor._id} doctor={doctor}></DrProfileCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;
