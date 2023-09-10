import React from 'react';

const About = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">About Dr. Awesh</h1>
        <img
          src="doctor-image.jpg"
          alt="Dr. Awesh"
          className="rounded-full w-40 h-40 mx-auto mb-6"
        />
        <p className="text-gray-700 text-lg">
          Dr. Awesh is a highly experienced and compassionate doctor specializing
          in [specialty]. With [number] years of practice, Dr. Awesh is dedicated
          to providing the best healthcare services to patients.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pellentesque nisl nec ex faucibus, at tristique elit vehicula.
          Suspendisse potenti.
        </p>
      </div>
    );
};

export default About;