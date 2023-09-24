import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [state, setState] = useState("");

  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Set a delay of 100ms to show the page content after the fade-in effect
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { email, password };

    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setEmail("");
      setPassword("");

      console.log("new workout added:", json);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat bg-picSignUp">
        <div
          className={`bg-white w-[400px] rounded-3xl p-8 shadow-lg transition-opacity duration-1000 ${
            isPageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl text-black font-bold mb-6 text-center align-center">
            Log In
          </h1>
          <form className="space-y-6">
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
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring focus:ring-purple-500 focus:ring-opacity-50 focus:border-purple-500"
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
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring focus:ring-purple-500 focus:ring-opacity-50 focus:border-purple-500"
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
            Don't have an account?
            <Link
              to="/SignUp"
              className="text-purple-violent font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
