import React, { useState } from "react";

const PatientRegister = () => {
  const [selectedCategory, setSelectedCategory] = useState({});

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  if (selectedCategory == "doctor") {
    window.location.href = "/register";
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <div className="flex">
            <label className="mr-4">
              <input
                required
                type="radio"
                name="category"
                value="doctor"
                checked={selectedCategory == "doctor"}
                onChange={handleCategoryChange}
              />
              Doctor
            </label>
            <label>
              <input
                type="radio"
                required
                name="category"
                value="patient"
                checked={selectedCategory == "patient"}
                onChange={handleCategoryChange}
              />
              Patient
            </label>
          </div>
        </div>

        {/* category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name patient
          </label>
          <input
            type="text"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientRegister;
