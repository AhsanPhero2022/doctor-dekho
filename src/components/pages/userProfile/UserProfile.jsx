import React from "react";

const UserProfile = () => {
  return (
    <div>
      <div className="bg-gray-200 p-4 md:p-8 lg:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">
            Welcome to My Responsive Page
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Image 1"
                className="rounded-lg shadow-lg mb-4"
              />
              <p className="text-center">Image 1</p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Image 2"
                className="rounded-lg shadow-lg mb-4"
              />
              <p className="text-center">Image 2</p>
            </div>
          </div>
          <p className="text-center text-xl mt-8">
            This is some text content in the middle of the page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
