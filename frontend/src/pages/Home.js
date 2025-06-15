import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "./Home.css";
import { Link } from "react-router-dom";
//import railwayVideo2 from "./assets/railwayVideo2.mp4";
import home from "../assets/home2.jpg";
import Navigation from "../components/Navigation";
import MentalHealthCards from "../components/MentalHealthCards";

function Home() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Set a delay of 500ms to show the page content after the fade-in effect
    setTimeout(() => {
      setPageLoaded(true);
    }, 100);
  }, []);

  const handleStartTestClick = () => {
    // Use window.location to navigate to "/quiz"
    window.location.href = "/quiz";
  };

  return (
    <div>
      <Navigation />
      {/* <section className="dark:bg-gray-900 "> */}

      <section>
        <div
          className="center-rectangle1 border-blue-100 border-2 shadow-black"
          style={{
            backgroundImage: `url(${home})`, // Set the image as the background
            backgroundSize: "cover", // Adjust the background size as needed
            backgroundPosition: "center", // Center the background image
            // opacity: 0.5,
          }}
        >
          <div
            className={`gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl transition-opacity duration-1000 bg-transparent  ${
              isPageLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* <img
              src={home}
              
              className="fullscreen-video"
            ></img> */}

            <div className="rectangle1 bg-transparent">
              <div
                className="py-8 px-8 mx-auto max-w-screen-xl bg-transparent border-white border-2"
                // style={{ backgroundColor: "black", opacity: 1 }}
              >
                <div className="font-light text-blue-500 sm:text-lg dark:text-blue-200 justify-center items-center text-center text-justify bg-transparent">
                  <h2 className="mb-4 text-xl tracking-tight font-extrabold text-blue-900 dark:text-blue-800 text-center bg-transparent">
                    Test Your Mental Health
                  </h2>
                  <p className="mb-4 text-md justify-center text-blue-900">
                    Welcome to the Mental Health Assessment Portal, where your
                    well-being is our priority.
                  </p>
                  <p className="mb-4 text-md text-blue-900">
                    Take our mental health test to gain insights into your
                    emotional well-being and discover ways to improve your
                    mental health. Your mental health matters!
                  </p>
                  <p className="mb-4 text-md text-blue-900">
                    "Your mind is a powerful thing. When you fill it with
                    positive thoughts, your life will start to change."
                  </p>
                  <div className="text-center">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mx-auto"
                      onClick={handleStartTestClick}
                    >
                      Start the Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MentalHealthCards />
      <Footer />
    </div>
  );
}

export default Home;
