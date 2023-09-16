import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Api.css';

const Api = () => {
  const [exercises, setExercises] = useState([]);
  const [activity, setActivity] = useState('');
  const [level, setLevel] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Activity:', activity);
    console.log('Selected Level:', level);

    if (activity && level) {
      setSubmitted(true);
      fetchData();
    }
  };

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: {
        type: activity,
        difficulty: level,
      },
      headers: {
        'X-RapidAPI-Key': '830abd8e42msh8137e948f0b199fp1b45ecjsn13fdaf90a884',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setExercises(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewInstructions = (exercise) => {
    setSelectedExercise((prevSelectedExercise) =>
      prevSelectedExercise === exercise ? null : exercise
    );
  };

  return (
    <div className="page-container">
    <div className="container">
      <h2>Exercise Finder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="activity">Select an Activity:</label>
          <select
            id="activity"
            name="activity"
            className="form-control"
            value={activity}
            onChange={handleActivityChange}
          >
            <option value="">Select an activity</option>
            <option value="cardio">Cardio</option>
            <option value="olympic_weightlifting">Olympic Weightlifting</option>
            <option value="plyometrics">Plyometrics</option>
            <option value="powerlifting">Powerlifting</option>
            <option value="strength">Strength</option>
            <option value="stretching">Stretching</option>
            <option value="strongman">Strongman</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="level">Select a Level:</label>
          <select
            id="level"
            name="level"
            className="form-control"
            value={level}
            onChange={handleLevelChange}
          >
            <option value="">Select a level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {submitted && (
        <div>
          <h3>Exercise Details</h3>
          <div className="exercise-cards">
            {exercises.map((exercise, index) => (
              <div className="exercise-card" key={index}>
                <h4>{exercise.name}</h4>
                <p>
                  <strong>Type:</strong> {exercise.type}
                </p>
                <p>
                  <strong>Difficulty:</strong> {exercise.difficulty}
                </p>
                <p>
                  <strong>Equipment:</strong> {exercise.equipment}
                </p>
                <p>
                <strong>Muscle:</strong> {exercise.muscle}
                </p>
                <button
  className={`button-view-instructions ${
    selectedExercise === exercise ? 'active' : ''
  }`}
  onClick={() => handleViewInstructions(exercise)}
>
  {selectedExercise === exercise ? 'Hide Instructions' : 'View Instructions'}
</button>

                {selectedExercise === exercise && (
                  <div className="instructions">
                    <p>
                      <strong>Instructions:</strong> {exercise.instructions}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Api;
