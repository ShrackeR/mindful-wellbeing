import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  // Check if "temp" is present in localStorage
  const isTempInLocalStorage = localStorage.getItem("temp");

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
        <Link
          to="/MapCharts"
          className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
        >
          Analysis
        </Link>

        {isTempInLocalStorage ? (
          // Show the "Logout" button if "temp" is in localStorage
          <>
            <Link
              to="/profile"
              className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
            >
              My Profile
            </Link>
            <Link
              to="/"
              className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
            >
              Logout
            </Link>
          </>
        ) : (
          // Show the "Login/Signup" buttons if "temp" is not in localStorage
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
