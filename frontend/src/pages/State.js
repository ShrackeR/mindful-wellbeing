
import React, { useEffect, useState, useRef } from "react";
import { Chart } from "chart.js/auto";
import Navigation from "../components/Navigation";

const ChartComponent = ({ data, label }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx.chart) {
        ctx.chart.destroy();
      }

      ctx.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: data,
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
          legend: {
            display: false,
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="container mx-auto mt-6">
      <div className="chart mb-6">
        <canvas ref={chartRef} width={800} height={400}></canvas>
      </div>
    </div>
  );
};

const State = () => {
  const [chartData, setChartData] = useState([
    // Initial chart data (Male or Female)
  ]);

  const [activeChart, setActiveChart] = useState("Male"); // Initially set to "Male"

  const handleChartSwitch = (chartType) => {
    if (chartType === "Male") {
      setChartData([
        // Male chart data
        {
          label: "Stress (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (Male)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (Male)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (Male)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (Male)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("Male");
    } else if (chartType === "Female") {
      setChartData([
        // Female chart data
        {
          label: "Stress (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (Male)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (Male)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (Male)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (Male)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("Female");
    } else if (chartType === "Zero") {
      setChartData([
        // Zero chart data
        {
          label: "Stress (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (Male)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (Male)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (Male)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (Male)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("Zero");
    } else if (chartType === "Twenty") {
      setChartData([
        // Twenty chart data
        {
          label: "Stress (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (Male)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (Male)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (Male)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (Male)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("Twenty");
    } else if (chartType === "Forty") {
      setChartData([
        // Forty chart data
        {
          label: "Stress (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (Male)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (Male)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (Male)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (Male)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("Forty");
    } else if (chartType === "Sixty") {
      setChartData([
        // Sixty chart data
        {
          label: "Stress (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (Male)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (Male)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (Male)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (Male)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("Sixty");
    } else if (chartType === "Eighty") {
      setChartData([
        // Sixty chart data
        {
          label: "Stress (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (Male)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (Male)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (Male)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (Male)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (Male)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (Male)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("Eighty");
    }
  };

  return (
    <>
      <Navigation />
      <div>
        <div className="container mx-auto mt-6">
          {/* Dropdown menu for Indian states */}
          <div className="flex justify-center space-x-4 mb-4">
            <label htmlFor="stateSelect">Select a State:</label>
            <select
              id="stateSelect"
              className="py-2 px-4 rounded-md bg-blue-100 text-gray-700"
              // value={selectedState}
              // onChange={handleStateSelect}
            >
              <option value="">--Select State--</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>

              {/* Add all Indian states as options */}
              {/* You can generate this list dynamically from your data if needed */}
            </select>
            <button
              className="py-2 px-4 rounded-md bg-blue-100 text-blue-1000"
              // onClick={() => {
              //   // Handle the select button click here
              //   console.log(`Selected State: ${selectedState}`);
              // }}
            >
              Select
            </button>
          </div>
        </div>

        {/* ChartComponent and age buttons */}
        <div className="container mx-auto mt-6">
          <div className="flex justify-center space-x-4 mb-4">
            <h2>Gender:</h2>
            <button
              className={`py-2 px-4 rounded-md ${
                activeChart === "Male"
                  ? "bg-green-300 text-blue-1000"
                  : "bg-blue-300 text-gray-700"
              }`}
              onClick={() => handleChartSwitch("Male")}
            >
              Male
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeChart === "Female"
                  ? "bg-green-300 text-red-1000"
                  : "bg-blue-300 text-gray-700"
              }`}
              onClick={() => handleChartSwitch("Female")}
            >
              Female
            </button>
          </div>
        </div>

        <ChartComponent data={chartData} label={activeChart} />

        <div className="container mx-auto mt-6">
          <div className="flex justify-center space-x-4 mb-4">
            <h2>Age:</h2>
            <button
              className={`py-2 px-4 rounded-md ${
                activeChart === "Zero"
                  ? "bg-green-300 text-green-1000"
                  : "bg-blue-300 text-gray-700"
              }`}
              onClick={() => handleChartSwitch("Zero")}
            >
              0-20
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeChart === "Twenty"
                  ? "bg-green-300 text-yellow-1000"
                  : "bg-blue-300 text-gray-700"
              }`}
              onClick={() => handleChartSwitch("Twenty")}
            >
              20-40
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeChart === "Forty"
                  ? "bg-green-300 text-purple-1000"
                  : "bg-blue-300 text-gray-700"
              }`}
              onClick={() => handleChartSwitch("Forty")}
            >
              40-60
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeChart === "Sixty"
                  ? "bg-green-300 text-pink-1000"
                  : "bg-blue-300 text-gray-700"
              }`}
              onClick={() => handleChartSwitch("Sixty")}
            >
              60-80
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeChart === "Eighty"
                  ? "bg-green-300 text-pink-1000"
                  : "bg-blue-300 text-gray-700"
              }`}
              onClick={() => handleChartSwitch("Eighty")}
            >
              80-100
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default State;
