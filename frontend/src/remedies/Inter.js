import React from "react";
import Navigation from "../components/Navigation";

function InterpersonalSensitivityRemediesPage() {
  return (
    <>
      <Navigation />
      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto p-4 mb-4 mt-4">
          <section className="mb-8">
            <div className="bg-blue-500 p-4 text-white p-6 rounded-lg shadow-lg flex justify-center items-center">
              <h1 className="text-3xl font-semibold mb-2 text-center">
                INTERPERSONAL SENSITIVITY REMEDIES
              </h1>
            </div>
          </section>
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://p0.pxfuel.com/preview/907/402/504/attractive-beautiful-crying-dark-royalty-free-thumbnail.jpg"
                  alt="Therapist"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Consult a Therapist
                </h2>
                <p>
                  If you struggle with interpersonal sensitivity, consider
                  consulting with a therapist or counselor. They can help you
                  explore your feelings and develop strategies for healthier
                  relationships.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://assets-global.website-files.com/61766c42e8e50c99a04fbd4b/62bf38493c10d5bd2a6f5bec_shutterstock_1151217977.jpg"
                  alt="Communication"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Improve Communication
                </h2>
                <p>
                  Effective communication is key to healthy relationships. Work
                  on improving your communication skills, such as active
                  listening and expressing your thoughts and feelings clearly.
                </p>
              </div>
            </div>
          </section>

          {/* Add more sections for empathy, self-awareness, and self-care as needed */}
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Empathy Building</h2>
              <p>
                Practice empathy by putting yourself in others' shoes and
                understanding their perspectives. Empathy can strengthen
                connections with others.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Self-Awareness</h2>
              <p>
                Reflect on your own thoughts and behaviors. Increased
                self-awareness can help you identify patterns and make positive
                changes in your interactions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Self-Care</h2>
              <p>
                Prioritize self-care practices, including stress management,
                relaxation, and maintaining a healthy work-life balance.
                Self-care supports overall well-being.
              </p>
            </div>
          </section>
        </main>
        <footer className="bg-blue-500 p-4 text-white text-center">
          <p>
            Disclaimer: This information is for educational purposes only and
            should not replace professional advice. Consult with a therapist or
            counselor for personalized guidance.
          </p>
        </footer>
      </div>
    </>
  );
}

export default InterpersonalSensitivityRemediesPage;
