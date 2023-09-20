import { useState } from "react";
// import "./Quiz.css";
import Navigation from "../components/Navigation";
import home from "../assets/bg.jpg";

const Quiz = () => {
  const choice = [
    "Not at all",
    "A little bit",
    "Moderately",
    "Quite a bit",
    "Extremely",
  ];

  const quiz = {
    questions: [
      // Existing questions
      {
        number: 1,
        question:
          "For the past week, how much were you bothered by Nervousness or shakiness inside?",
        choices: choice,
      },
      {
        number: 2,
        question:
          "For the past week, how much were you bothered by Faintness or dizziness?",
        choices: choice,
      },
      {
        number: 3,
        question:
          "For the past week, how much were you bothered by The idea that someone else can control your thoughts?",
        choices: choice,
      },
      {
        number: 4,
        question:
          "For the past week, how much were you bothered by Feeling others are to blame for most of your troubles?",
        choices: choice,
      },
      {
        number: 5,
        question:
          "For the past week, how much were you bothered by Trouble remembering things?",
        choices: choice,
      },
      {
        number: 6,
        question:
          "For the past week, how much were you bothered by Feeling easily annoyed or irritated?",
        choices: choice,
      },
      {
        number: 7,
        question:
          "For the past week, how much were you bothered by Pains in heart or chest?",
        choices: choice,
      },
      {
        number: 8,
        question:
          "For the past week, how much were you bothered by Feeling afraid in open spaces or on the streets?",
        choices: choice,
      },
      {
        number: 9,
        question:
          "For the past week, how much were you bothered by Thoughts of ending your life?",
        choices: choice,
      },
      {
        number: 10,
        question:
          "For the past week, how much were you bothered by Feeling that most people cannot be trusted?",
        choices: choice,
      },
      // Additional questions
      {
        number: 11,
        question:
          "For the past week, how much were you bothered by Poor appetite?",
        choices: choice,
      },
      {
        number: 12,
        question:
          "For the past week, how much were you bothered by Suddenly scared for no reason?",
        choices: choice,
      },
      {
        number: 13,
        question:
          "For the past week, how much were you bothered by Temper outbursts that you could not control?",
        choices: choice,
      },
      {
        number: 14,
        question:
          "For the past week, how much were you bothered by Feeling blocked in getting things done?",
        choices: choice,
      },
      {
        number: 15,
        question:
          "For the past week, how much were you bothered by Feeling lonely?",
        choices: choice,
      },
      {
        number: 16,
        question:
          "For the past week, how much were you bothered by Feeling blue?",
        choices: choice,
      },
      {
        number: 17,
        question:
          "For the past week, how much were you bothered by Feeling no interest in things?",
        choices: choice,
      },
      {
        number: 18,
        question:
          "For the past week, how much were you bothered by Feeling fearful?",
        choices: choice,
      },
      {
        number: 19,
        question:
          "For the past week, how much were you bothered by Your feelings being easily hurt?",
        choices: choice,
      },
      {
        number: 20,
        question:
          "For the past week, how much were you bothered by Feeling that people are unfriendly or dislike you?",
        choices: choice,
      },
      {
        number: 21,
        question:
          "For the past week, how much were you bothered by Nausea or upset stomach?",
        choices: choice,
      },
      {
        number: 22,
        question:
          "For the past week, how much were you bothered by Feeling inferior to others?",
        choices: choice,
      },
      {
        number: 23,
        question:
          "For the past week, how much were you bothered by Feeling that you are watched or talked about by others?",
        choices: choice,
      },
      {
        number: 24,
        question:
          "For the past week, how much were you bothered by Trouble falling asleep?",
        choices: choice,
      },
      {
        number: 25,
        question:
          "For the past week, how much were you bothered by Having to check and double-check what you do?",
        choices: choice,
      },
      {
        number: 26,
        question:
          "For the past week, how much were you bothered by Difficulty making decisions?",
        choices: choice,
      },
      {
        number: 27,
        question:
          "For the past week, how much were you bothered by Feeling afraid to travel on buses, subways, or trains?",
        choices: choice,
      },
      {
        number: 28,
        question:
          "For the past week, how much were you bothered by Trouble getting your breath?",
        choices: choice,
      },
      {
        number: 29,
        question:
          "For the past week, how much were you bothered by Hot or cold spells?",
        choices: choice,
      },
      {
        number: 30,
        question:
          "For the past week, how much were you bothered by Having to avoid certain things, places, or activities because they frighten you?",
        choices: choice,
      },
      {
        number: 31,
        question:
          "For the past week, how much were you bothered by Your mind going blank?",
        choices: choice,
      },
      {
        number: 32,
        question:
          "For the past week, how much were you bothered by Numbness or tingling in parts of your body?",
        choices: choice,
      },
      {
        number: 33,
        question:
          "For the past week, how much were you bothered by Feeling hopeless about the future?",
        choices: choice,
      },
      {
        number: 34,
        question:
          "For the past week, how much were you bothered by Trouble concentrating?",
        choices: choice,
      },
      {
        number: 35,
        question:
          "For the past week, how much were you bothered by Feeling weak in parts of your body?",
        choices: choice,
      },
      {
        number: 36,
        question:
          "For the past week, how much were you bothered by Feeling tense or keyed up?",
        choices: choice,
      },
      {
        number: 37,
        question:
          "For the past week, how much were you bothered by Thoughts of death or dying?",
        choices: choice,
      },
      {
        number: 38,
        question:
          "For the past week, how much were you bothered by Having urges to beat, injure, or harm someone?",
        choices: choice,
      },
      {
        number: 39,
        question:
          "For the past week, how much were you bothered by Having urges to break or smash things?",
        choices: choice,
      },
      {
        number: 40,
        question:
          "For the past week, how much were you bothered by Feeling very self-conscious with others?",
        choices: choice,
      },
      {
        number: 41,
        question:
          "For the past week, how much were you bothered by Feeling uneasy in crowds, such as shopping or at a movie?",
        choices: choice,
      },
      {
        number: 42,
        question:
          "For the past week, how much were you bothered by Spells of terror or panic?",
        choices: choice,
      },
      {
        number: 43,
        question:
          "For the past week, how much were you bothered by Getting into frequent arguments?",
        choices: choice,
      },
      {
        number: 44,
        question:
          "For the past week, how much were you bothered by Feeling nervous when you are left alone?",
        choices: choice,
      },
      {
        number: 45,
        question:
          "For the past week, how much were you bothered by Others not giving you proper credit for your achievements?",
        choices: choice,
      },
      {
        number: 46,
        question:
          "For the past week, how much were you bothered by Feeling lonely even when you are with people?",
        choices: choice,
      },
      {
        number: 47,
        question:
          "For the past week, how much were you bothered by Feeling so restless you couldn't sit still?",
        choices: choice,
      },
      {
        number: 48,
        question:
          "For the past week, how much were you bothered by Feelings of worthlessness?",
        choices: choice,
      },
      {
        number: 49,
        question:
          "For the past week, how much were you bothered by Feeling that people will take advantage of you if you let them?",
        choices: choice,
      },
      {
        number: 50,
        question:
          "For the past week, how much were you bothered by The idea that you should be punished for your sins?",
        choices: choice,
      },
      {
        number: 51,
        question:
          "For the past week, how much were you bothered by Never feeling close to another person?",
        choices: choice,
      },
      {
        number: 52,
        question:
          "For the past week, how much were you bothered by Feelings of guilt?",
        choices: choice,
      },
      {
        number: 53,
        question:
          "For the past week, how much were you bothered by The idea that something is wrong with your mind?",
        choices: choice,
      },
      // Add more questions here if needed
    ],
  };

  const [userResponses, setUserResponses] = useState(
    Array(quiz.questions.length).fill(0)
  );
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [postResponse, setPostResponse] = useState(null); // To store the POST response //***

  const { questions } = quiz;
  const { question, choices } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);

      // Send a POST request to "/mental" with userResponses
      const userResponsesString = userResponses.join(",");
      fetch("/mental", {
        method: "POST",
        body: userResponsesString,
      })
        // .then((response) => {
        //   // Handle the response as needed
        // })
        .then((response) => response.json()) // Assuming the response is JSON
        .then((data) => {
          setPostResponse(data); // Store the response data
        })
        .catch((error) => {
          console.error("Error sending POST request:", error);
        });
    }
  };

  const onAnswerSelected = (index) => {
    setSelectedAnswerIndex(index);
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[activeQuestion] = index; // Store the selected answer index
      return updatedResponses;
    });
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
                      onClick={() => onAnswerSelected(index)}
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
                    className={`bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600`}
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
                  User Responses:{" "}
                  <span className="font-semibold">
                    {userResponses.join(", ")}
                  </span>
                </p>
                {/* Display the POST response here */}
                {postResponse && (
                  <div>
                    <p className="text-lg">
                      POST Response:{" "}
                      <span className="font-semibold">
                        {JSON.stringify(postResponse)}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
