import { useState } from "react";
// import "./Quiz.css";
import Navigation from "../components/Navigation";
import home from "../assets/home7.jpg";

const Quiz = () => {
  const quiz = {
    questions: [
      {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Mars",
      },
      // Add more questions here
    ],
  };

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <>
      <Navigation />
      <div
        className="flex items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
          <div className="quiz-container bg-blue-100 p-4 rounded-lg shadow-lg">
            {!showResult ? (
              <div>
                <div>
                  <span className="active-question-no text-blue-500 font-semibold">
                    {addLeadingZero(activeQuestion + 1)}
                  </span>
                  <span className="total-question text-blue-500 font-semibold">
                    /{addLeadingZero(questions.length)}
                  </span>
                </div>
                <h2 className="text-xl text-blue-800 font-semibold mb-4">
                  {question}
                </h2>
                <ul>
                  {choices.map((answer, index) => (
                    <li
                      onClick={() => onAnswerSelected(answer, index)}
                      key={answer}
                      className={`text-blue-700 cursor-pointer transition duration-300 ease-in-out ${
                        selectedAnswerIndex === index
                          ? "selected-answer bg-blue-500 text-white"
                          : "bg-blue-200"
                      } hover:bg-blue-400 hover:text-white rounded-md py-2 px-4 mb-2`}
                    >
                      {answer}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={onClickNext}
                    disabled={selectedAnswerIndex === null}
                    className={`bg-blue-500 text-white font-semibold px-4 py-2 rounded-md ${
                      selectedAnswerIndex === null
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-blue-600"
                    }`}
                  >
                    {activeQuestion === questions.length - 1
                      ? "Finish"
                      : "Next"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="result text-blue-800">
                <h3 className="text-2xl font-semibold">Result</h3>
                <p className="text-lg">
                  Total Question:{" "}
                  <span className="font-semibold">{questions.length}</span>
                </p>
                <p className="text-lg">
                  Total Score:{" "}
                  <span className="font-semibold">{result.score}</span>
                </p>
                <p className="text-lg">
                  Correct Answers:{" "}
                  <span className="font-semibold">{result.correctAnswers}</span>
                </p>
                <p className="text-lg">
                  Wrong Answers:{" "}
                  <span className="font-semibold">{result.wrongAnswers}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
