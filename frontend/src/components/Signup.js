import React from "react";
import "./SignUp.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [name, setFirstName] = useState("");
  const [age, setage] = useState("");
  const [phnNumber, setphnNumber] = useState("");
  const [error, setError] = useState(false);
  const [latestError, setLatestError] = useState("");
  const [message, setMessage] = useState("");

  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Set a delay of 100ms to show the page content after the fade-in effect
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat bg-picSignUp">
        <div
          className={`bg-white w-[400px] rounded-3xl p-8 shadow-lg transition-opacity duration-1000 ${
            isPageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl text-black font-bold mb-6 text-center align-center">
            Sign Up
          </h1>
          <form className="space-y-6">
            <div className="space-y-1">
              <label
                htmlFor="firstName"
                className="text-lg text-purple-violent font-semibold"
              >
                Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={name}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring focus:ring-purple-500 focus:ring-opacity-50 focus:border-purple-500"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-lg text-purple-violent font-semibold"
              >
                Email ID:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring focus:ring-purple-500 focus:ring-opacity-50 focus:border-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-lg text-purple-violent font-semibold"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring focus:ring-purple-500 focus:ring-opacity-50 focus:border-purple-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="confirmPassword"
                className="text-lg text-purple-violent font-semibold"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmpassword}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring focus:ring-purple-500 focus:ring-opacity-50 focus:border-purple-500"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-violent text-white font-semibold py-2 rounded-full hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
          <div className="mt-4 text-l text-black">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-violent font-semibold hover:underline"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
