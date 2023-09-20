import React from "react";
import stress from "../assets/stress.jpg";
import emotion from "../assets/emotion.jpeg";
import self from "../assets/self.avif";
import reln from "../assets/reln.jpg";
function MentalHealthCards() {
  const mentalHealthTopics = [
    {
      title: "Mindfulness",
      description:
        "Practice mindfulness to stay present, reduce stress, and improve your mental well-being.",
      imageSrc: stress, // Replace with the actual image path
    },
    {
      title: "Emotional Well-being",
      description:
        "Embrace your emotions, seek support when needed, and prioritize your emotional health.",
      imageSrc: emotion, // Replace with the actual image path
    },
    {
      title: "Self-Care",
      description:
        "Take time for self-care activities such as exercise, meditation, and hobbies.",
      imageSrc: self, // Replace with the actual image path
    },
    {
      title: "Healthy Relationships",
      description:
        "Nurture healthy relationships with friends and family for emotional support.",
      imageSrc: reln, // Replace with the actual image path
    },
  ];

  return (
    <section className="bg-blue-50 flex items-center justify-center h-screen bg-blue-200">
      <div className="container mx-auto text-center bg-blue-300">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 mx-auto bg-blue-300">
          Importance of Mental Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white">
          {mentalHealthTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-blue-300 shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={topic.imageSrc}
                alt={topic.title}
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentalHealthCards;
