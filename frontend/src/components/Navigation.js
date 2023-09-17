import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="dark:bg-blue-100">
      <nav className="flex flex-row items-center h-16 px-4">
        <Link
          to="/"
          className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
        >
          Home
        </Link>
        <>
          <Link
            to="/ApplicationForm"
            className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
          >
            Application Form
          </Link>
          <Link
            to="/ApplicationFormEdit"
            className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
          >
            Edit Form
          </Link>
          <Link
            to="/renewal"
            className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein"
          >
            Renew Application
          </Link>
          <button className="text-black font-semibold hover:dark:bg-gray-900 hover:text-white rounded-lg px-4 py-2 animate-fadein">
            Logout
          </button>
        </>

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
      </nav>
    </div>
  );
}

export default Navigation;
