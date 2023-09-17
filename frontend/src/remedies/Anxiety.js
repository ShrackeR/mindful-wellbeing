import React from "react";
import Navigation from "../components/Navigation";

function AnxietyRemediesPage() {
  return (
    <>
      <Navigation />
      <div className="bg-gray-100 min-h-screen">
        {/* <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-3xl font-semibold">Anxiety Remedies</h1>
      </header> */}
        <main className="container mx-auto p-4 mt-4 mb-4">
          <section className="mb-8">
            <div className="bg-blue-500 p-4 text-white p-6 rounded-lg shadow-lg flex justify-center items-center">
              <h1 className="text-3xl font-semibold mb-2 text-center">
                ANXIETY REMEDIES
              </h1>
            </div>
          </section>
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://neurosciencenews.com/files/2023/07/depression-anxiety-concept-eurscience.jpg"
                  alt="Therapist"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Seek Professional Help
                </h2>
                <p>
                  The first step in managing anxiety is to seek professional
                  help. Consult with a therapist, counselor, or mental health
                  specialist who can provide guidance and treatment options.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://media.istockphoto.com/id/1300036753/photo/falling-antibiotics-healthcare-background.jpg?s=612x612&w=0&k=20&c=oquxJiLqE33ePw2qML9UtKJgyYUqjkLFwxT84Pr-WPk="
                  alt="Meditation"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Practice Meditation
                </h2>
                <p>
                  Meditation and mindfulness techniques can help reduce anxiety
                  symptoms. Consider incorporating meditation into your daily
                  routine to promote relaxation and mental well-being.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Regular Exercise</h2>
              <p>
                Engaging in regular physical activity can reduce anxiety and
                stress. Aim for at least 30 minutes of exercise each day to
                boost your mood and improve overall mental health.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Deep Breathing Exercises
              </h2>
              <p>
                Deep breathing exercises can calm your nervous system and
                alleviate anxiety. Practice deep, slow breaths to promote
                relaxation and reduce tension.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Social Support</h2>
              <p>
                Stay connected with friends and loved ones. Sharing your
                feelings and concerns with a support network can provide comfort
                and emotional assistance during anxious times.
              </p>
            </div>
          </section>

          {/* Additional sections and points */}
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/020/658/683/large_2x/beautiful-fitness-female-doing-warmup-workout-at-home-fitness-woman-doing-stretch-exercise-stretching-her-legs-quadriceps-fit-girl-living-an-active-lifestyle-photo.jpg"
                  alt="Exercise"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Practice Relaxation Exercises
                </h2>
                <p>
                  Explore relaxation techniques such as progressive muscle
                  relaxation or guided imagery to ease anxiety and stress.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://media.istockphoto.com/id/145152696/photo/dangerous-items.jpg?s=612x612&w=0&k=20&c=pUBSR6RYoTF7RMpy-txoynr9ngcTRBi-YpwhIwuLzkI="
                  alt="Deep Breathing"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Limit Caffeine and Alcohol
                </h2>
                <p>
                  Reduce or avoid caffeine and alcohol consumption as they can
                  exacerbate anxiety symptoms.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Set Realistic Goals
              </h2>
              <p>
                Break tasks into smaller, manageable steps and set achievable
                goals to reduce feelings of overwhelm.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Journaling</h2>
              <p>
                Consider keeping a journal to express your thoughts and
                emotions. It can provide clarity and serve as an emotional
                outlet.
              </p>
            </div>
          </section>
        </main>
        <footer className="bg-blue-500 p-4 text-white text-center">
          <p>
            Disclaimer: This information is for educational purposes only and
            should not replace professional medical advice. Always consult with
            a healthcare provider for personalized guidance.
          </p>
        </footer>
      </div>
    </>
  );
}

export default AnxietyRemediesPage;
