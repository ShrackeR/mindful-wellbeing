import React from "react";
import Navigation from "../components/Navigation";

function StressRemediesPage() {
  return (
    <>
      <Navigation />
      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto p-4 mt-4 mb-4">
          <section className="mb-8">
            <div className="bg-blue-500 p-4 text-white p-6 rounded-lg shadow-lg flex justify-center items-center">
              <h1 className="text-3xl font-semibold mb-2 text-center">
                STRESS REMEDIES
              </h1>
            </div>
          </section>
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321450/stressed-woman-at-work.jpg"
                  alt="Therapist"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Seek Professional Help
                </h2>
                <p>
                  If stress is overwhelming, consider seeking support from a
                  therapist or counselor. Professional guidance can help you
                  manage stress and develop coping strategies.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://media.istockphoto.com/id/1329754453/video/mixed-race-blond-woman-doing-yoga-fitness-exercise-at-home-for-contortion-and-flexibility.jpg?s=640x640&k=20&c=A69eAr7_Wi4O-aRwzinpIcMQwtjmdiIVViEtCOdQODE="
                  alt="Yoga"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">Practice Yoga</h2>
                <p>
                  Yoga combines physical postures, breathing exercises, and
                  meditation to reduce stress and promote relaxation.
                  Incorporate yoga into your routine for mental and physical
                  well-being.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Relaxation Techniques
              </h2>
              <p>
                Learn and practice relaxation techniques like deep breathing,
                progressive muscle relaxation, and mindfulness to calm your mind
                and reduce stress.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Time Management</h2>
              <p>
                Effective time management can reduce stress by helping you
                prioritize tasks, set realistic goals, and create a balanced
                daily schedule.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Self-Care</h2>
              <p>
                Prioritize self-care activities such as adequate sleep, a
                healthy diet, and engaging in hobbies you enjoy. Taking care of
                yourself is essential for stress management.
              </p>
            </div>
          </section>

          {/* Additional sections and points */}
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://static4.depositphotos.com/1008939/339/i/950/depositphotos_3390235-stock-photo-relax.jpg"
                  alt="Relaxation"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Mindfulness Meditation
                </h2>
                <p>
                  Practice mindfulness meditation to stay present and reduce
                  stress caused by worrying about the future or ruminating on
                  the past.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Proven_Time_Management_Tips_and_Strategies_for_students.jpg"
                  alt="Time Management"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Connect with Nature
                </h2>
                <p>
                  Spend time outdoors, connect with nature, and enjoy activities
                  like hiking or gardening to reduce stress levels.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-blue-500 p-4 text-white text-center">
          <p>
            Disclaimer: This information is for educational purposes only and
            should not replace professional advice. Consult with a healthcare
            provider or therapist for personalized guidance.
          </p>
        </footer>
      </div>
    </>
  );
}

export default StressRemediesPage;
