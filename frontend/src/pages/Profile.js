import React, { useEffect, useState, useRef } from "react";
import { Chart } from "chart.js/auto";
import Navigation from "../components/Navigation";

const Profile = () => {
  // Hardcoded data for multiple Line Charts
  let email = localStorage.getItem("token");
  const [chartDataArray, setDataArray] = useState([{
    label: "Overall",
    data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 92, 90],
    fill: "origin",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 3,
  }, {
    label: "Stress",
    data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 92, 90],
    fill: "origin",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 3,
  },
  {
    label: "OCD",
    data: [2, 24, 90, 7, 35, 56, 88, 92, 79, 84, 92, 90],
    fill: "origin",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 3,
  },
  {
    label: "Inter - personal Sensitivity",
    data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 92, 90],
    fill: "origin",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 3,
  },
  {
    label: "Depression",
    data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 92, 90],
    fill: "origin",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 3,
  },
  {
    label: "Anxiety",
    data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 92, 90],
    fill: "origin",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 3,
  },
  {
    label: "Hostility",
    data: [75, 23, 100, 7, 81, 95, 88, 92, 79, 84, 92, 90],
    fill: "origin",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 3,
  },
  {
    label: "Phobic Anxiety",
    data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 92, 90],
    fill: "origin",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 3,
  },
  {
    label: "Paranoid Ideation",
    data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 92, 90],
    fill: "origin",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 3,
  },
  {
    label: "Psychotic",
    data: [85, 72, 91, 78, 89, 95, 88, 92, 79, 84, 92, 90],
    fill: "origin",
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    borderWidth: 3,
  },]);
  const [name, setName] = useState("Your Name");
  const [age, setAge] = useState(18);
  const [state, setState] = useState("Your State");
  const [gender, setGender] = useState("Male");
  const [fetchdone, setFetchdone] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // Initialize with the first tab
  if (!fetchdone) {
    const formData = new FormData();
    formData.append("email", email);
    fetch("http://localhost:80/profile", {
      mode: "cors",
      method: "POST",
      body: formData,
    }).then(async (response) => {
      let res = await response.json();
      if (!response.ok) {
        console.error("Error Response Status:", response.status);
        // setError("An error occurred during login.");
        return;
      }
      if (res.success === true) {
        setName(res.name);
        setAge(res.age);
        setState(res.state);
        setGender(res.gender);
        let rep = [];
        res.reports.forEach(element => {
          // console.log(element)
          rep.push(JSON.parse(element));
        });
        console.log(rep)
        const chartData = [
          {
            label: "Overall",
            data: [rep[0][10] , rep[1][10] , rep[2][10] , rep[3][10] , rep[4][10] , rep[5][10] , rep[6][10] , rep[7][10] , rep[8][10] , rep[9][10] , rep[10][10] , rep[11][10] ],
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
          }, {
            label: "Stress",
            data: [rep[0][0] , rep[1][0] , rep[2][0] , rep[3][0] , rep[4][0] , rep[5][0] , rep[6][0] , rep[7][0] , rep[8][0] , rep[9][0] , rep[10][0] , rep[11][0] ],
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
          },
          {
            label: "OCD",
            data: [rep[0][1] , rep[1][1] , rep[2][1] , rep[3][1] , rep[4][1] , rep[5][1] , rep[6][1] , rep[7][1] , rep[8][1] , rep[9][1] , rep[10][1] , rep[11][1] ],
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
          },
          {
            label: "Inter - personal Sensitivity",
            data: [rep[0][2] , rep[1][2] , rep[2][2] , rep[3][2] , rep[4][2] , rep[5][2] , rep[6][2] , rep[7][2] , rep[8][2] , rep[9][2] , rep[10][2] , rep[11][2] ],
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
          },
          {
            label: "Depression",
            data: [rep[0][3] , rep[1][3] , rep[2][3] , rep[3][3] , rep[4][3] , rep[5][3] , rep[6][3] , rep[7][3] , rep[8][3] , rep[9][3] , rep[10][3] , rep[11][3] ],
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
          },
          {
            label: "Anxiety",
            data: [rep[0][4] , rep[1][4] , rep[2][4] , rep[3][4] , rep[4][4] , rep[5][4] , rep[6][4] , rep[7][4] , rep[8][4] , rep[9][4] , rep[10][4] , rep[11][4] ],
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
          },
          {
            label: "Hostility",
            data: [rep[0][5] , rep[1][5] , rep[2][5] , rep[3][5] , rep[4][5] , rep[5][5] , rep[6][5] , rep[7][5] , rep[8][5] , rep[9][5] , rep[10][5] , rep[11][5] ],
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
          },
          {
            label: "Phobic Anxiety",
            data: [rep[0][6] , rep[1][6] , rep[2][6] , rep[3][6] , rep[4][6] , rep[5][6] , rep[6][6] , rep[7][6] , rep[8][6] , rep[9][6] , rep[10][6] , rep[11][6] ],
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
          },
          {
            label: "Paranoid Ideation",
            data: [rep[0][7] , rep[1][7] , rep[2][7] , rep[3][7] , rep[4][7] , rep[5][7] , rep[6][7] , rep[7][7] , rep[8][7] , rep[9][7] , rep[10][7] , rep[11][7] ],
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
          },
          {
            label: "Psychotic",
            data: [rep[0][8] , rep[1][8] , rep[2][8] , rep[3][8] , rep[4][8] , rep[5][8] , rep[6][8] , rep[7][8] , rep[8][8] , rep[9][8] , rep[10][8] , rep[11][8] ],
            fill: "origin",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 3,
          },
          // Add more datasets here for additional charts
        ];
        if(!fetchdone){
        setDataArray(chartData);
        setFetchdone(true);
        }
      }

    });
  }
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



  // Use a ref to keep track of the chart instance
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart when the component mounts or when activeTab changes
    if (fetchdone) {
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
    }
  }, [activeTab, chartDataArray]);
  return (
    <>
      <Navigation />
      <div className="container mx-auto mt-6 ">
        <div className="flex">
          {/* Profile Section */}
          <div className="w-1/3 text-left">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <div className="mb-2">
              <strong>Name:</strong> {name}
            </div>
            <div className="mb-2">
              <strong>Age:</strong> {age}
            </div>
            <div className="mb-2">
              <strong>State:</strong> {state}
            </div>
            <div className="mb-2">
              <strong>Gender:</strong> {gender}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {email}
            </div>
          </div>
          {/* Chart Section */}
          <div className="w-2/3">
            <div className="chart mb-6">
              <canvas ref={chartRef} width={800} height={400}></canvas>
            </div>
            {/* Tabs to switch between charts */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {chartDataArray.map((chartData, index) => (
                <button
                  key={index}
                  className={`py-2 px-6 rounded-md center-align items-center text-center ${activeTab === index
                    ? "bg-blue-300 text-blue-1000"
                    : "bg-blue-100 text-blue-1000 hover:bg-blue-200 hover:text-blue-800"
                    }`}
                  onClick={() => setActiveTab(index)}
                >
                  {chartData.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
