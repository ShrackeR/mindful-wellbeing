import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation.js";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Import the useUser hook

function Login() {
  const { setUserEmail } = useUser(); // Get the userEmail from the context
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [state, setState] = useState("");
  const { userEmail } = useUser();

  const [isPageLoaded, setPageLoaded] = useState(false);

  function signUpSuccess() {
    localStorage.setItem("token", email);
    console.log("This is a function without parameters.");
  }

  useEffect(() => {
    // Set a delay of 100ms to show the page content after the fade-in effect
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate("/");
    const formData = new FormData();
    formData.append("email", email);
    formData.append("passwd", password);

    try {
      const response = await fetch("http://127.0.0.1/login", {
        mode: "cors",
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error("Error Response Status:", response.status);
        setError("An error occurred during login.");
        return;
      }

      const jsonResponse = await response.json();

      if (jsonResponse.success === true) {
        setUserEmail(email); // Store the email in the context
        signUpSuccess()
        navigate("/"); // Navigate to the desired location if success is true
        console.log("Login successful", userEmail);
      } else {
        setError("Login failed. Please check your credentials.");
        console.log("Wrong");
      }
    } catch (error) {
      console.error("An error occurred:", error);
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
          <label style={{ color: "red" }}>{error}</label>
          <form className="space-y-6" onSubmit={handleSubmit}>
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
