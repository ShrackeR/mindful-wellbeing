import React from "react";
import { Link } from "react-router-dom";
import depression from "../assets/home.jpg";
import anxiety from "../assets/home.jpg";
import stress from "../assets/home.jpg";
import psycho from "../assets/home.jpg";
import ocd from "../assets/home.jpg";
import phobic from "../assets/home.jpg";
import paranoid from "../assets/home.jpg";
import inter from "../assets/home.jpg";
import Navigation from "../components/Navigation";

const Remedies = () => {
  const remedyData = [
    {
      title: "Depression",
      description: "Explore remedies for depression",
      imagePath: depression,
      link: "/depression",
    },
    {
      title: "Anxiety",
      description: "Explore remedies for anxiety",
      imagePath: anxiety,
      link: "/anxiety",
    },
    {
      title: "Stress",
      description: "Explore remedies for stress",
      imagePath: stress,
      link: "/stress",
    },
    {
      title: "Psychoticism",
      description: "Explore remedies for psychoticism",
      imagePath: psycho,
      link: "/psycho",
    },
    {
      title: "Obsessive–compulsive disorder",
      description: "Explore remedies for OCD",
      imagePath: ocd,
      link: "/ocd",
    },
    {
      title: "Phobic Anxiety",
      description: "Explore remedies for phobic anxiety",
      imagePath: phobic,
      link: "/phobic",
    },
    {
      title: "Paranoid Ideation",
      description: "Explore remedies for paranoid ideation",
      imagePath: paranoid,
      link: "/paranoid",
    },
    {
      title: "Interpersonal Sensitivity",
      description: "Explore remedies for interpersonal sensitivity",
      imagePath: inter,
      link: "/inter",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="bg-blue-100 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-blue-800 mb-8 text-center">
            Explore Remedies
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {remedyData.map((remedy, index) => (
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                key={index}
              >
                <img
                  src={remedy.imagePath}
                  alt={remedy.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex flex-col justify-between h-72">
                  <div className="h-20">
                    <h2 className="text-xl font-semibold text-blue-800 h-8 overflow-hidden">
                      {remedy.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 h-10 overflow-hidden">
                      {remedy.description}
                    </p>
                  </div>
                  <Link to={remedy.link}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full h-12">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Remedies;
