<<<<<<< Updated upstream
import React, { useState } from 'react';
=======
import React, { useEffect, useState, useRef } from "react";
import { Chart } from "chart.js/auto";
import Navigation from "../components/Navigation";
>>>>>>> Stashed changes

const Profile = () => {
  const [fullName, setFullName] = useState('Dev');
  const [email, setEmail] = useState('dev@example.com');
  const [registrationId, setRegistrationId] = useState('12345');
  const [phoneNumber, setPhoneNumber] = useState('555-555-5555');
  const [profileIcon, setProfileIcon] = useState('default-profile.jpg'); // Set a default image URL

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileIcon(URL.createObjectURL(file)); // Store the URL of the selected image
  };

  const saveProfile = () => {
    // Handle saving the user's profile data, e.g., send data to the server
    // You can access the values from the state variables (fullName, email, etc.)
    // You may also want to handle the profile icon separately
  };

  return (
<<<<<<< Updated upstream
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <span>{fullName}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <span>{email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="registrationId">Registration ID:</label>
          <span>{registrationId}</span>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <span>{phoneNumber}</span>
        </div>
      </div>
      </div>
     
=======
    <>
      <Navigation />
      <div className="container mx-auto mt-6">
        <div className="chart mb-6">
          <canvas ref={chartRef} width={800} height={400}></canvas>
        </div>
        {/* Tabs to switch between charts */}
        <div className="flex justify-center mt-4 space-x-4">
          {chartDataArray.map((chartData, index) => (
            <button
              key={index}
              className={`py-2 px-4 rounded-md mt-4 ${
                activeTab === index
                  ? "bg-blue-300 text-blue-1000"
                  : "bg-blue-100 text-blue-1000 hover:bg-blue-200 hover:text-blue-800"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {chartData.label}
            </button>
          ))}
        </div>
      </div>
    </>
>>>>>>> Stashed changes
  );
};

export default Profile;
