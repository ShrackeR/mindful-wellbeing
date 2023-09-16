import React, { useState } from 'react';

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
     
  );
};

export default Profile;
