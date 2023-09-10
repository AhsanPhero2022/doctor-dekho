import React from 'react';

const Report = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-4">Dr. Awesh's Report</h1>
      <div className="mb-6">
        <p className="text-gray-700 text-lg">
          <strong>Patient Name:</strong> John Doe
        </p>
        <p className="text-gray-700 text-lg">
          <strong>Date:</strong> July 15, 2023
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Medical Summary:</h2>
        <p className="text-gray-700 text-lg">
          Dr. Awesh examined the patient and provided the following medical
          summary...
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Prescription:</h2>
        <p className="text-gray-700 text-lg">
          Dr. Awesh prescribed the following medications...
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Recommendations:</h2>
        <ul className="list-disc pl-4">
          <li className="text-gray-700 text-lg">Get plenty of rest.</li>
          <li className="text-gray-700 text-lg">Drink lots of water.</li>
          <li className="text-gray-700 text-lg">Follow up in one week.</li>
        </ul>
      </div>
    </div>
    );
};

export default Report;