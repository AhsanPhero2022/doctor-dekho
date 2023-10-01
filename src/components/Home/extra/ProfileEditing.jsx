import React, { useState } from "react";

const ProfileEditing = () => {
  const [name, setName] = useState("John Doe");
  const [licenseNumber, setLicenseNumber] = useState("1234567890");
  const [profileImage, setProfileImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLicenseNumberChange = (e) => {
    setLicenseNumber(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Profile updated (frontend only):\nName: " +
        name +
        "\nLicense Number: " +
        licenseNumber
    );
  };

  return (
    <div className="bg-gray-200 p-4 md:p-8 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="licenseNumber"
              className="block text-lg font-semibold mb-2"
            >
              License Number
            </label>
            <input
              type="text"
              id="licenseNumber"
              value={licenseNumber}
              onChange={handleLicenseNumberChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="profileImage"
              className="block text-lg font-semibold mb-2"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleProfileImageChange}
            />
          </div>
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditing;
