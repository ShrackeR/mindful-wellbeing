import React from "react";
import DatamapsIndia from "react-datamaps-india";
import "./MapCharts.css";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const MapChart = () => {
  return (
    <>
      <Navigation />

      <div className="grid grid-cols-2 gap-4">
        {/* First Column */}
        <div className="grid grid-cols-2 gap-2 ">
          <div className="col-span-1">
            <div style={{ position: "relative" }}>
              <DatamapsIndia
                style={{ postion: "relative", left: "25%" }}
                regionData={{
                  "Andaman & Nicobar Island": {
                    value: 150,
                  },
                  "Andhra Pradesh": {
                    value: 470,
                  },
                  "Arunanchal Pradesh": {
                    value: 248,
                  },
                  Assam: {
                    value: 528,
                  },
                  Bihar: {
                    value: 755,
                  },
                  Chandigarh: {
                    value: 95,
                  },
                  Chhattisgarh: {
                    value: 1700,
                  },
                  Delhi: {
                    value: 1823,
                  },
                  Goa: {
                    value: 508,
                  },
                  Gujarat: {
                    value: 624,
                  },
                  Haryana: {
                    value: 1244,
                  },
                  "Himachal Pradesh": {
                    value: 640,
                  },
                  "Jammu & Kashmir": {
                    value: 566,
                  },
                  Jharkhand: {
                    value: 814,
                  },
                  Karnataka: {
                    value: 2482,
                  },
                  Kerala: {
                    value: 899,
                  },
                  Lakshadweep: {
                    value: 15,
                  },
                  "Madhya Pradesh": {
                    value: 1176,
                  },
                  Maharashtra: {
                    value: 727,
                  },
                  Manipur: {
                    value: 314,
                  },
                  Meghalaya: {
                    value: 273,
                  },
                  Mizoram: {
                    value: 306,
                  },
                  Nagaland: {
                    value: 374,
                  },
                  Odisha: {
                    value: 395,
                  },
                  Puducherry: {
                    value: 245,
                  },
                  Punjab: {
                    value: 786,
                  },
                  Rajasthan: {
                    value: 1819,
                  },
                  Sikkim: {
                    value: 152,
                  },
                  "Tamil Nadu": {
                    value: 2296,
                  },
                  Telangana: {
                    value: 467,
                  },
                  Tripura: {
                    value: 194,
                  },
                  "Uttar Pradesh": {
                    value: 2944,
                  },
                  Uttarakhand: {
                    value: 1439,
                  },
                  "West Bengal": {
                    value: 1321,
                  },
                  // ... (your region data here)
                }}
                hoverComponent={({ value }) => {
                  return (
                    <div>
                      <div>
                        {value.name}: {value.value} applied
                      </div>
                    </div>
                  );
                }}
                mapLayout={{
                  // title: "Statewise Analysis for Mental Health",
                  legendTitle: "Number of applicants",
                  startColor: "#b3d1ff",
                  endColor: "#005ce6",
                  hoverTitle: "Count",
                  noDataColor: "#f5f5f5",
                  borderColor: "#8D8D8D",
                  hoverColor: "blue",
                  hoverBorderColor: "green",
                  height: 10,
                  weight: 50,
                }}
              />
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-1 flex justify-center items-center mt-10 mr-10 ">
          <div className="p-4  rounded-lg shadow-md text-center ">
            <h2 className="text-2xl bg-blue-500 font-semibold mb-4">
              India Analysis
            </h2>
            <p>
              India's mental health landscape, represented via a choropleth map,
              provides crucial insights into mental well-being. It leverages
              extensive data, including location, gender, and age, offering a
              diverse view of mental health challenges.
            </p>
            <p>
              The map visually showcases the distribution of mental health data,
              highlighting variations across states. It identifies regions with
              varying mental health prevalence, aiding targeted interventions.
            </p>
            <br />
            <p></p> <br />
            <h2 className="text-2xl bg-blue-500 font-semibold mb-4">
              Statewise Analysis Graphs
            </h2>
            <p>
              For a comprehensive analysis of mental health trends, delve into{" "}
              per state analysis. Explore insightful graphs that break down
              mental health data by gender and age group, offering a deeper
              understanding of the challenges individuals face. These
              visualizations enable better-informed decisions and targeted
              interventions.
            </p>
            <br />
            <Link
              to="/state"
              className="text-black bg-blue-300 border-blue-900 border-2 font-semibold hover:bg-white hover:text-black rounded-lg px-4 py-2 animate-fadein"
            >
              Graph Analysis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapChart;
