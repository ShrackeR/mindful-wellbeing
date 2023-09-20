// import React, { useEffect, useState, useRef } from "react";
// import { Chart } from "chart.js/auto";

// const State = () => {
//   // Hardcoded data for multiple Line Charts for males and females
//   const maleChartData = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];

//   const femaleChartData = [
//     {
//       label: "Stress (Female)",
//       data: [65, 62, 81, 68, 79, 85, 78, 82, 69, 74, 80],
//       fill: "origin",
//       backgroundColor: "rgba(255, 0, 0, 0.2)", // Red color for females
//       borderColor: "rgba(255, 0, 0, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Female)",
//       data: [55, 13, 90, 5, 71, 85, 78, 82, 69, 74, 80],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for females
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Female)",
//       data: [28, 44, 70, 27, 35, 56, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for females
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Female)",
//       data: [55, 62, 91, 68, 79, 85, 88, 82, 69, 74, 80],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for females
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Female)",
//       data: [35, 42, 75, 27, 45, 66, 78, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for females
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Female)",
//       data: [68, 43, 24, 27, 51, 69, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 231, 156, 0.2)",
//       borderColor: "rgba(0, 231, 156, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Female)",
//       data: [75, 62, 91, 68, 89, 95, 88, 82, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)",
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Female)",
//       data: [55, 23, 100, 5, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 146, 170, 0.2)", // Blue color for females
//       borderColor: "rgba(0, 146, 170, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for female charts here
//   ];
  

//   const options = {
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100, // Adjust the maximum y-axis value as needed
//       },
//     },
//     legend: {
//       display: false, // Hide legend
//     },
//   };

//   const [activeTab, setActiveTab] = useState(0); // Initialize with the first tab (male)

//   // Use a ref to keep track of the chart instance
//   const chartRef = useRef(null);

//   useEffect(() => {
//     // Initialize the chart when the component mounts or when activeTab changes
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext("2d");

//       // Destroy the previous chart if it exists
//       if (ctx.chart) {
//         ctx.chart.destroy();
//       }

//       // Create a new chart based on the selected activeTab (male or female)
//       const selectedChartData = activeTab === 0 ? maleChartData : femaleChartData;

//       ctx.chart = new Chart(ctx, {
//         type: "line",
//         data: {
//           labels: [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "June",
//             "July",
//             "Aug",
//             "Sept",
//             "Oct",
//             "Nov",
//             "Dec",
//           ],
//           datasets: selectedChartData, // Use the selected dataset (male or female)
//         },
//         options: options,
//       });
//     }
//   }, [activeTab]);

//   return (
//     <div className="container mx-auto mt-6">
//       <div className="flex justify-center space-x-4 mb-4">
//         {/* Buttons to switch between male and female charts */}
//         <button
//           className={`py-2 px-4 rounded-md ${
//             activeTab === 0
//               ? "bg-blue-300 text-blue-1000"
//               : "bg-blue-100 text-blue-1000 hover:bg-blue-200 hover:text-blue-800"
//           }`}
//           onClick={() => setActiveTab(0)}
//         >
//           Male
//         </button>
//         <button
//           className={`py-2 px-4 rounded-md ${
//             activeTab === 1
//               ? "bg-red-300 text-red-1000"
//               : "bg-red-100 text-red-1000 hover:bg-red-200 hover:text-red-800"
//           }`}
//           onClick={() => setActiveTab(1)}
//         >
//           Female
//         </button>
//       </div>
//       <div className="chart mb-6">
//         <canvas ref={chartRef} width={800} height={400}></canvas>
//       </div>
//     </div>
//   );
// };

// export default State;


// import React, { useEffect, useState, useRef } from "react";
// import { Chart } from "chart.js/auto";

// const State = () => {
//   // Hardcoded data for multiple Line Charts for males and females
//   const maleChartData = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];

//   const femaleChartData = [
//     {
//       label: "Stress (Female)",
//       data: [65, 62, 81, 68, 79, 85, 78, 82, 69, 74, 80],
//       fill: "origin",
//       backgroundColor: "rgba(255, 0, 0, 0.2)", // Red color for females
//       borderColor: "rgba(255, 0, 0, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Female)",
//       data: [55, 13, 90, 5, 71, 85, 78, 82, 69, 74, 80],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for females
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Female)",
//       data: [28, 44, 70, 27, 35, 56, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for females
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Female)",
//       data: [55, 62, 91, 68, 79, 85, 88, 82, 69, 74, 80],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for females
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Female)",
//       data: [35, 42, 75, 27, 45, 66, 78, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for females
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Female)",
//       data: [68, 43, 24, 27, 51, 69, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 231, 156, 0.2)",
//       borderColor: "rgba(0, 231, 156, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Female)",
//       data: [75, 62, 91, 68, 89, 95, 88, 82, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)",
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Female)",
//       data: [55, 23, 100, 5, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 146, 170, 0.2)", // Blue color for females
//       borderColor: "rgba(0, 146, 170, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for female charts here
//   ];

//   const zero = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];
  
//   const eighty = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];
//   const twenty = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];
//   const forty = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];
//   const sixty = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];

//   const options = {
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100, // Adjust the maximum y-axis value as needed
//       },
//     },
//     legend: {
//       display: false, // Hide legend
//     },
//   };

//   const [activeTab, setActiveTab] = useState(0); // Initialize with the first tab (male)

//   // Use a ref to keep track of the chart instance
//   const chartRef = useRef(null);

//   useEffect(() => {
//     // Initialize the chart when the component mounts or when activeTab changes
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext("2d");

//       // Destroy the previous chart if it exists
//       if (ctx.chart) {
//         ctx.chart.destroy();
//       }

//       // Create a new chart based on the selected activeTab (male or female)
//       const selectedChartData = activeTab === 0 ? maleChartData : femaleChartData;

//       ctx.chart = new Chart(ctx, {
//         type: "line",
//         data: {
//           labels: [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "June",
//             "July",
//             "Aug",
//             "Sept",
//             "Oct",
//             "Nov",
//             "Dec",
//           ],
//           datasets: selectedChartData, // Use the selected dataset (male or female)
//         },
//         options: options,
//       });
//     }
//   }, [activeTab]);

//   return (
//     <div>
//     <div className="container mx-auto mt-6">
//       <div className="flex justify-center space-x-4 mb-4">
//         {/* Buttons to switch between male and female charts */}
//         <button
//           className={`py-2 px-4 rounded-md ${
//             activeTab === 0
//               ? "bg-blue-300 text-blue-1000"
//               : "bg-blue-100 text-blue-1000 hover:bg-blue-200 hover:text-blue-800"
//           }`}
//           onClick={() => setActiveTab(0)}
//         >
//           Male
//         </button>
//         <button
//           className={`py-2 px-4 rounded-md ${
//             activeTab === 1
//               ? "bg-red-300 text-red-1000"
//               : "bg-red-100 text-red-1000 hover:bg-red-200 hover:text-red-800"
//           }`}
//           onClick={() => setActiveTab(1)}
//         >
//           Female
//         </button>
//       </div>
//       <div className="chart mb-6">
//         <canvas ref={chartRef} width={800} height={400}></canvas>
//       </div>
//     </div>
//     <div className="container mx-auto mt-6">
//       <div className="flex justify-center space-x-4 mb-4">
//         {/* Buttons to switch between male and female charts */}
//         <button
//           className={`py-2 px-4 rounded-md ${
//             activeTab === 0
//               ? "bg-blue-300 text-blue-1000"
//               : "bg-blue-100 text-blue-1000 hover:bg-blue-200 hover:text-blue-800"
//           }`}
//           onClick={() => setActiveTab(0)}
//         >
//           zero
//         </button>
//         <button
//           className={`py-2 px-4 rounded-md ${
//             activeTab === 1
//               ? "bg-red-300 text-red-1000"
//               : "bg-red-100 text-red-1000 hover:bg-red-200 hover:text-red-800"
//           }`}
//           onClick={() => setActiveTab(1)}
//         >
//           twenty
//         </button>
//         <button
//           className={`py-2 px-4 rounded-md ${
//             activeTab === 1
//               ? "bg-red-300 text-red-1000"
//               : "bg-red-100 text-red-1000 hover:bg-red-200 hover:text-red-800"
//           }`}
//           onClick={() => setActiveTab(1)}
//         >
//           forty
//         </button>
//         <button
//           className={`py-2 px-4 rounded-md ${
//             activeTab === 1
//               ? "bg-red-300 text-red-1000"
//               : "bg-red-100 text-red-1000 hover:bg-red-200 hover:text-red-800"
//           }`}
//           onClick={() => setActiveTab(1)}
//         >
//           sixty
//         </button>
//       </div>
//       <div className="chart mb-6">
//         <canvas ref={chartRef} width={800} height={400}></canvas>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default State;

// import React, { useEffect, useState, useRef } from "react";
// import { Chart } from "chart.js/auto";

// const ChartComponent = ({ data, label }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext("2d");

//       if (ctx.chart) {
//         ctx.chart.destroy();
//       }

//       ctx.chart = new Chart(ctx, {
//         type: "line",
//         data: {
//           labels: [
//             "Jan", "Feb", "Mar", "Apr", "May", "June",
//             "July", "Aug", "Sept", "Oct", "Nov", "Dec"
//           ],
//           datasets: data,
//         },
//         options: {
//           maintainAspectRatio: false,
//           scales: {
//             y: {
//               beginAtZero: true,
//               max: 100,
//             },
//           },
//           legend: {
//             display: false,
//           },
//         },
//       });
//     }
//   }, [data]);

//   return (
//     <div className="container mx-auto mt-6">
//       <div className="chart mb-6">
//         <canvas ref={chartRef} width={800} height={400}></canvas>
//       </div>
//     </div>
//   );
// };

// const State = () => {
//     const maleChartData = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];

//   const femaleChartData = [
//     {
//       label: "Stress (Female)",
//       data: [65, 62, 81, 68, 79, 85, 78, 82, 69, 74, 80],
//       fill: "origin",
//       backgroundColor: "rgba(255, 0, 0, 0.2)", // Red color for females
//       borderColor: "rgba(255, 0, 0, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Female)",
//       data: [55, 13, 90, 5, 71, 85, 78, 82, 69, 74, 80],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for females
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Female)",
//       data: [28, 44, 70, 27, 35, 56, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for females
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Female)",
//       data: [55, 62, 91, 68, 79, 85, 88, 82, 69, 74, 80],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for females
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Female)",
//       data: [35, 42, 75, 27, 45, 66, 78, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for females
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Female)",
//       data: [68, 43, 24, 27, 51, 69, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 231, 156, 0.2)",
//       borderColor: "rgba(0, 231, 156, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Female)",
//       data: [75, 62, 91, 68, 89, 95, 88, 82, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)",
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Female)",
//       data: [55, 23, 100, 5, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 146, 170, 0.2)", // Blue color for females
//       borderColor: "rgba(0, 146, 170, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for female charts here
//   ];

//   const zero = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];
  
//   const eighty = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];
//   const twenty = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];
//   const forty = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];
//   const sixty = [
//     {
//       label: "Stress (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(0, 123, 255, 0.2)", // Blue color for males
//       borderColor: "rgba(0, 123, 255, 1)",
//       borderWidth: 3,
//     },
//     {
//       label: "Anxiety (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "OCD (Male)",
//       data: [8, 27, 44, 78, 80, 95, 100, 92, 7, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 159, 64, 0.2)", // Orange color for males
//       borderColor: "rgba(255, 159, 64, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Depression (Male)",
//       data: [75, 2, 100, 56, 81, 95, 88, 45, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(153, 102, 255, 0.2)", // Purple color for males
//       borderColor: "rgba(153, 102, 255, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Phobic Anxiety (Male)",
//       data: [23, 72, 45, 50, 50, 95, 88, 92, 69, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 206, 86, 0.2)", // Yellow color for males
//       borderColor: "rgba(255, 206, 86, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Paranoid Ideation (Male)",
//       data: [78, 23, 24, 7, 81, 9, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(75, 192, 192, 0.2)", // Teal color for males
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Interpersonal Sensitivity (Male)",
//       data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     {
//       label: "Psychoticism (Male)",
//       data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 90],
//       fill: "origin",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 3,
//       hidden: true,
//     },
//     // Add more datasets for male charts here
//   ];
//   return (
//     <div>
//       <div className="container mx-auto mt-6">
//         <div className="flex justify-center space-x-4 mb-4">
//           <button className="py-2 px-4 rounded-md bg-blue-300 text-blue-1000">
//             Male
//           </button>
//           <button className="py-2 px-4 rounded-md bg-red-300 text-red-1000">
//             Female
//           </button>
//         </div>
//       </div>

//       <ChartComponent data={maleChartData} label="Male" />
//       <ChartComponent data={femaleChartData} label="Female" />

//       <div className="container mx-auto mt-6">
//         <div className="flex justify-center space-x-4 mb-4">
//           <button className="py-2 px-4 rounded-md bg-green-300 text-green-1000">
//             Zero
//           </button>
//           <button className="py-2 px-4 rounded-md bg-yellow-300 text-yellow-1000">
//             Twenty
//           </button>
//           <button className="py-2 px-4 rounded-md bg-purple-300 text-purple-1000">
//             Forty
//           </button>
//           <button className="py-2 px-4 rounded-md bg-pink-300 text-pink-1000">
//             Sixty
//           </button>
//         </div>
//       </div>

//       <ChartComponent data={zero} label="Zero" />
//       <ChartComponent data={twenty} label="Twenty" />
//       <ChartComponent data={forty} label="Forty" />
//       <ChartComponent data={sixty} label="Sixty" />
//     </div>
//   );
// };

// export default State;


import React, { useEffect, useState, useRef } from "react";
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
            "Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"
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
    }
    else if (chartType === "Eighty") {
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
    <div>
      <div className="container mx-auto mt-6">
        <div className="flex justify-center space-x-4 mb-4">
          <h2>Gender:</h2>
          <button
            className={`py-2 px-4 rounded-md ${
              activeChart === "Male" ? "bg-green-300 text-blue-1000" : "bg-blue-300 text-gray-700"
            }`}
            onClick={() => handleChartSwitch("Male")}
          >
            Male
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              activeChart === "Female" ? "bg-green-300 text-red-1000" : "bg-blue-300 text-gray-700"
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
              activeChart === "Zero" ? "bg-green-300 text-green-1000" : "bg-blue-300 text-gray-700"
            }`}
            onClick={() => handleChartSwitch("Zero")}
          >
            0-20
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              activeChart === "Twenty" ? "bg-green-300 text-yellow-1000" : "bg-blue-300 text-gray-700"
            }`}
            onClick={() => handleChartSwitch("Twenty")}
          >
            20-40
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              activeChart === "Forty" ? "bg-green-300 text-purple-1000" : "bg-blue-300 text-gray-700"
            }`}
            onClick={() => handleChartSwitch("Forty")}
          >
            40-60
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              activeChart === "Sixty" ? "bg-green-300 text-pink-1000" : "bg-blue-300 text-gray-700"
            }`}
            onClick={() => handleChartSwitch("Sixty")}
          >
            60-80
          </button>
          <button
            className={`py-2 px-4 rounded-md ${
              activeChart === "Eighty" ? "bg-green-300 text-pink-1000" : "bg-blue-300 text-gray-700"
            }`}
            onClick={() => handleChartSwitch("Eighty")}
          >
            80-100
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default State;

