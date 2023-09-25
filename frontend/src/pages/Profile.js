import React, { useEffect, useState, useRef } from "react";
import { Chart } from "chart.js/auto";
import Navigation from "../components/Navigation";

const Profile = () => {
  // Hardcoded data for multiple Line Charts
  const chartDataArray = [
    {
      label: "Stress",
      data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
      fill: "origin",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 3,
    },
    {
      label: "Anxiety",
      data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
      fill: "origin",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 3,
    },
    {
      label: "OCD",
      data: [2, 24, 90, 7, 35, 56, 88, 92, 79, 84, 90],
      fill: "origin",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 3,
    },
    {
      label: "Depression",
      data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
      fill: "origin",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 3,
    },
    {
      label: "Phobic Anxiety",
      data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
      fill: "origin",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 3,
    },
    {
      label: "Paranoid Ideation",
      data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
      fill: "origin",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 3,
    },
    {
      label: "Interpersonal Sensitivity",
      data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
      fill: "origin",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 3,
    },
    {
      label: "Psychoticism",
      data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
      fill: "origin",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 3,
    },
    // Add more datasets here for additional charts
  ];

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Adjust the maximum y-axis value as needed
      },
    },
    legend: {
      display: false, // Hide legend
    },
  };

  const [activeTab, setActiveTab] = useState(0); // Initialize with the first tab

  // Use a ref to keep track of the chart instance
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart when the component mounts or when activeTab changes
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy the previous chart if it exists
      if (ctx.chart) {
        ctx.chart.destroy();
      }

      // Create a new chart based on the selected activeTab
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
          datasets: [chartDataArray[activeTab]], // Use the selected dataset
        },
        options: options,
      });
    }
  }, [activeTab]);

  // Assuming chartDataArray contains your chart data
  const rowsOfButtons = [];
  for (let i = 0; i < chartDataArray.length; i += 4) {
    const row = chartDataArray.slice(i, i + 4);
    rowsOfButtons.push(row);
  }

  return (
    <>
      <Navigation />
      <div className="container mx-auto mt-6">
        <div className="flex flex-col md:flex-row">
          {/* Profile Section */}
          <div className="md:w-1/3 text-left mb-4">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <div className="mb-2">
              <strong>Name:</strong> Dev
            </div>
            <div className="mb-2">
              <strong>Age:</strong> 20
            </div>
            <div className="mb-2">
              <strong>State:</strong> Maharashtra
            </div>
            <div className="mb-2">
              <strong>Gender:</strong> Male
            </div>
            <div className="mb-2">
              <strong>Email:</strong> devbbhuva@gmail.com
            </div>
          </div>
          {/* Chart Section */}
          <div className="md:w-2/3">
            <div className="chart mb-6">
              <canvas ref={chartRef} width={800} height={400}></canvas>
            </div>
            {/* Tabs to switch between charts */}
            <div className="flex flex-wrap justify-center mt-4">
              {rowsOfButtons.map((row, rowIndex) => (
                <div key={rowIndex} className="flex space-x-4">
                  {row.map((chartData, index) => (
                    <button
                      key={index}
                      className={`py-2 px-4 rounded-md ${
                        activeTab === chartData.index
                          ? "bg-blue-300 text-blue-1000"
                          : "bg-blue-100 text-blue-1000 hover:bg-blue-200 hover:text-blue-800"
                      }`}
                      onClick={() => setActiveTab(chartData.index)}
                    >
                      {chartData.label}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
