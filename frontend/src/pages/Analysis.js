import React from "react";
import DatamapsIndia from "react-datamaps-india";
import "./MapCharts.css";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import State from "./State";
import { useEffect, useState, useRef } from "react";
import { Chart } from "chart.js/auto";

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
        <canvas ref={chartRef} width={600} height={400}></canvas>
      </div>
    </div>
  );
};

const Analysis = () => {
  const [chartData, setChartData] = useState([
    // Initial chart data (Male or Female)
  ]);

  const [activeChart, setActiveChart] = useState(null);

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
          label: "Stress (Female)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for Females
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (Female)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (Female)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for Females
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (Female)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for Females
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (Female)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for Females
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (Female)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for Females
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (Female)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (Female)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("Female");
    } else if (chartType === "All") {
      setChartData([
        // All chart data
        {
          label: "Stress (All)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for Alls
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (All)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (All)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for Alls
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (All)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for Alls
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (All)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for Alls
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (All)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for Alls
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (All)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (All)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("All");
    } else if (chartType === "Zero") {
      setChartData([
        // Zero chart data
        {
          label: "Stress (0-20)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for 0-20s
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (0-20)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (0-20)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for 0-20s
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (0-20)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for 0-20s
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (0-20)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for 0-20s
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (0-20)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for 0-20s
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (0-20)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (0-20)",
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
          label: "Stress (20-40)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for 20-40s
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (20-40)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (20-40)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for 20-40s
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (20-40)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for 20-40s
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (20-40)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for 20-40s
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (20-40)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for 20-40s
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (20-40)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (20-40)",
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
          label: "Stress (40-60)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for 40-60s
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (40-60)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (40-60)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for 40-60s
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (40-60)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for 40-60s
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (40-60)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for 40-60s
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (40-60)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for 40-60s
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (40-60)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (40-60)",
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
          label: "Stress (60-80)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for 60-80s
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (60-80)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (60-80)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for 60-80s
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (60-80)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for 60-80s
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (60-80)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for 60-80s
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (60-80)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for 60-80s
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (60-80)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (60-80)",
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
          label: "Stress (80-100)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for 80-100s
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (80-100)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (80-100)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for 80-100s
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (80-100)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for 80-100s
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (80-100)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for 80-100s
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (80-100)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for 80-100s
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (80-100)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (80-100)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("Eighty");
    } else if (chartType === "AllAge") {
      setChartData([
        // Sixty chart data
        {
          label: "Stress (All Ages)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for All Agess
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 3,
        },
        {
          label: "Anxiety (All Ages)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "OCD (All Ages)",
          data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for All Agess
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Depression (All Ages)",
          data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for All Agess
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Phobic Anxiety (All Ages)",
          data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for All Agess
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Paranoid Ideation (All Ages)",
          data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for All Agess
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Interpersonal Sensitivity (All Ages)",
          data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
        {
          label: "Psychoticism (All Ages)",
          data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
          fill: "origin",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 3,
          hidden: true,
        },
      ]);
      setActiveChart("AllAge");
    }
  };
  // const [selectedState, setSelectedState] = useState("");

  // const handleStateClick = (stateName) => {
  //   // Handle the state click here
  //   console.log(`Selected State: ${stateName}`);
  //   // You can perform additional actions based on the selected state
  //   setSelectedState(stateName);
  // };
  // State to store the value.name
  const [selectedState, setSelectedState] = useState(null);
  const [finalSelectedState, setFinalSelectedState] = useState(null);

  const handleClick = () => {
    // Your click event logic goes here
    // console.log("Div clicked!");
    setFinalSelectedState(selectedState); // Assuming finalSelectedState is a local variable
  };

  return (
    <>
      <Navigation />

      <div className="grid grid-cols-2 gap-4">
        <div>
          {/* First Column */}
          <div className="grid grid-cols-2 gap-2 ">
            <div className="col-span-1">
              <div style={{ position: "relative" }} onClick={handleClick}>
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
                    // console.log(value.value);
                    setSelectedState(value.name);
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
        </div>

        {/* Second Column */}
        <div className="col-span-1 flex justify-center items-center mt-1000 mr-10 ">
          <div className="p-4  rounded-lg shadow-md text-center ">
            {/* ChartComponent and age buttons */}
            <div className="container mx-auto mt-6">
              {/* Dropdown menu for Indian states */}
              <div className="flex justify-center space-x-4 mb-4">
                <label id="stateSelect" className="py-2 px-4 text-gray-700">
                  Selected State:
                </label>
                <label
                  id="stateSelect"
                  className="py-2 px-4 rounded-md bg-blue-100 text-gray-700"
                >
                  {finalSelectedState || "No state selected"}
                </label>
              </div>
              <div className="flex justify-center space-x-4 mb-4">
                <h2>Gender:</h2>
                <button
                  className={`py-2 px-4 rounded-md ${
                    activeChart === "All"
                      ? "bg-green-300 text-blue-1000"
                      : "bg-blue-300 text-gray-700"
                  }`}
                  onClick={() => handleChartSwitch("All")}
                >
                  All
                </button>
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
                    activeChart === "AllAge"
                      ? "bg-green-300 text-green-1000"
                      : "bg-blue-300 text-gray-700"
                  }`}
                  onClick={() => handleChartSwitch("AllAge")}
                >
                  All
                </button>
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
        </div>
      </div>
    </>
  );
};

export default Analysis;