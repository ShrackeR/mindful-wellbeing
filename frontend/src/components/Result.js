import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navigation from "./Navigation";

const ProgressBar = ({ percentage, className, index1 }) => {
  // Define a class based on the percentage
  const colorStyles = buildStyles({
    textColor: percentage > 50 ? "red" : "blue",
    pathColor: percentage > 50 ? "red" : "blue",
  });

  return (
    <div className={className}>
      <CircularProgressbar
        value={percentage}
        text={`${index1}-${percentage}%`}
        strokeWidth={8}
        styles={colorStyles} // Apply the color class here
      />
    </div>
  );
};

function Result() {
  let percentage = localStorage.getItem("result");//[35, 20, 45, 60, 75, 90, 15, 30, 55, 70];
  percentage=percentage.split(",");
  console.log(typeof(percentage));
  console.log(percentage);
  let overall = percentage[10];
  percentage.splice(9,2);
  const characteristics = [
    "Overall",
    "Somatization",
    "Obsessive Compulsive Disorder",
    "Interpersonal Sensitivity",
    "Depression",
    "Anxiety",
    "Hostility",
    "Phobic Anxiety",
    "Paranoid Ideation",
    "Psychoticism",
  ];
  let index1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <>
      <div className=" flex items-center justify-center">
        <div className="flex flex-col items-center mt-2 bg-blue-100 items-center lg-shadow justify-center h-[650px] w-[400px]">
          {/* Large progress bar at the top center */}
          <ProgressBar
            percentage={overall}
            className="w-32 h-32 mt-2 mt-[-520px]"
            index1={index1[0]}
          />

          {/* 3x3 grid of smaller progress bars */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {percentage.slice(1).map((percentage, index) => (
              <ProgressBar
                key={index}
                percentage={percentage}
                className="w-18 h-16 mt-[70px]"
                index1={index1[index + 1]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
