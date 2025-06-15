import React from "react";
import Result from "./Result";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Result1 = () => {
  const traitsMapping = {
    A: {
      trait: "Overall",
      explanation:
        "Overall mental health represents your general psychological well-being and encompasses various aspects of your emotional and cognitive state.",
      remedyLink: "/remedies",
    },
    B: {
      trait: "Somatization",
      explanation:
        "Somatization refers to the tendency to experience and express emotional distress through physical symptoms, such as headaches or stomachaches.",
      remedyLink: "/somatization",
    },
    C: {
      trait: "Obsessive Compulsive Disorder",
      explanation:
        "Obsessive Compulsive Disorder (OCD) involves unwanted, repetitive thoughts (obsessions) and behaviors (compulsions) to alleviate distress.",
      remedyLink: "/ocd",
    },
    D: {
      trait: "Interpersonal Sensitivity",
      explanation:
        "Interpersonal Sensitivity relates to how attuned and responsive you are to the feelings and behaviors of others in social interactions.",
      remedyLink: "/inter",
    },
    E: {
      trait: "Depression",
      explanation:
        "Depression is a mood disorder characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in daily activities.",
      remedyLink: "/depression",
    },
    F: {
      trait: "Anxiety",
      explanation:
        "Anxiety involves excessive worry, fear, or apprehension about future events or situations, often accompanied by physical symptoms like rapid heartbeat and sweating.",
      remedyLink: "/anxiety",
    },
    G: {
      trait: "Hostility",
      explanation:
        "Hostility refers to a pattern of anger, cynicism, and aggression, often displayed in interactions with others.",
      remedyLink: "/hostility",
    },
    H: {
      trait: "Phobic Anxiety",
      explanation:
        "Phobic Anxiety is characterized by intense and irrational fears or avoidance of specific objects or situations.",
      remedyLink: "/phobic",
    },
    I: {
      trait: "Paranoid Ideation",
      explanation:
        "Paranoid Ideation involves unfounded beliefs that others are plotting against you or seeking to harm you.",
      remedyLink: "/paranoid",
    },
    J: {
      trait: "Psychoticism",
      explanation:
        "Psychoticism relates to a range of unusual and irrational thoughts and behaviors that may indicate a disconnect from reality.",
      remedyLink: "/psycho",
    },
  };
  return (
    <>
      <Navigation />
      <div className="flex">
        <div className="w-1/3 p-4">
          <Result />
        </div>
        <div className="w-2/3 p-4">
          <div className="p-2 rounded-lg shadow-md text-center">
          <Link
              to="/chatbot"
              >
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4">
              Talk to AI Therapist
            </button>
            </Link>
            <div className="grid grid-cols-2 gap-1 p-1">
              {Object.keys(traitsMapping).map((letter) => (
                <div key={letter} className="border p-2">
                  <h2 className="text-lg font-semibold">
                    {letter} - {traitsMapping[letter].trait}
                  </h2>
                  <p className="text-sm">{traitsMapping[letter].explanation}</p>
                  <Link
                    to={traitsMapping[letter].remedyLink}
                    className="text-blue-500 hover:underline"
                  >
                    Click for Remedies
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result1;
