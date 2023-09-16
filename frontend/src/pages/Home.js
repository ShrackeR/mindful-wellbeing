import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import "./Home.css";
import { Link } from "react-router-dom";
//import railwayVideo2 from "./assets/railwayVideo2.mp4";

function Home() {
  

  return (
    <div>
      {/* <section className="dark:bg-gray-900 "> */}

      <section className="bg-vid">
        <div className="center-rectangle1">
          {/* <div className="rectangle"> */}
          <div
            className={`gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl 
            `}
          >

            <div className="rectangle1">
              {/* <div className="box"> */}
              <div
                className="py-8 px-8 mx-auto max-w-screen-xl "
                style={{ backgroundColor: "black", opacity: 1 }}
              >
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-200 text-center text-justify">
                  <h2 className="mb-4 text-l tracking-tight font-extrabold text-gray-900 dark:text-white">
                   Let's Test Your Mental Health!
                  </h2>
                  <Link to="/quiz"> 
        <button>Start Test</button>
      </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`bg-gray-200 flex flex-col justify-center items-center space-y-10 `}
      >
        <p className="bg-black text-white text-4xl font-bond mt-5 p-4">
          Mumbai Railway System
        </p>
        <img
          src="https://erail.in/images/net-map/mumbai-local-trains.jpg"
          className="rounded-2xl my-8 h-[600px] w-[600px] pb-3 "
          alt=""
        ></img>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
