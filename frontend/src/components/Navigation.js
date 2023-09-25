import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  // Function to check if a token exists in local storage
  const isUserAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token; // Convert to a boolean
  };
  return (
    <div className="bg-blue-400">
      <nav className="flex flex-row items-center h-16 px-4">
        <Link
          to="/"
          className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
        >
          Home
        </Link>
        <Link
          to="/api"
          className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
        >
          Exercise
        </Link>
        <Link
          to="/remedies"
          className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
        >
          Remedies
        </Link>
        {isUserAuthenticated() ? ( // Check if the user is authenticated
          <>
            <Link
              to="/profile"
              className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
            >
              Profile
            </Link>
            <button
              onClick={() => {
                // Handle logout here (clear the token from local storage)
                localStorage.removeItem("token");
                navigate("/");
                // You can also redirect the user to the login page or perform any other logout-related actions.
              }}
              className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/SignUp"
              className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
            >
              Sign Up
            </Link>
            <Link
              to="/Login"
              className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
            >
              Sign In
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
