import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="bg-gray-200 p-4 md:p-8 lg:p-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <img
              src="https://thumbs.dreamstime.com/b/indian-doctor-mature-male-medical-standing-isolated-white-background-handsome-model-portrait-31871541.jpg"
              alt="Doctor's Profile"
              className="rounded-full mx-auto w-32 h-32 shadow-lg mb-4"
            />
            <h1 className="text-4xl font-bold">Dr. John Doe</h1>
            <p className="text-lg text-gray-500">Cardiologist</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">About Dr. Doe</h2>
            <p className="mt-2">
              Dr. John Doe is a highly skilled cardiologist with over 15 years
              of experience in treating cardiovascular diseases. He is dedicated
              to providing the best care for his patients.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Specializations</h2>
            <ul className="mt-2 list-disc list-inside">
              <li>Cardiology</li>
              <li>Interventional Cardiology</li>
              <li>Electrophysiology</li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p className="mt-2">
              <strong>Email:</strong> dr.johndoe@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="mt-2 list-disc list-inside">
              <li>Advanced diagnostic tools</li>
              <li>Compassionate patient care</li>
              <li>State-of-the-art facilities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
