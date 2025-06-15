import React from "react";
import Navigation from "../components/Navigation";

function PhobicAnxietyRemediesPage() {
  return (
    <>
      <Navigation />
      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto p-4 mt-4 mb-4">
          <section className="mb-8">
            <div className="bg-blue-500 p-4 text-white p-6 rounded-lg shadow-lg flex justify-center items-center">
              <h1 className="text-3xl font-semibold mb-2 text-center">
                PHOBIC ANXIETY REMEDIES
              </h1>
            </div>
          </section>
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://thumbs.dreamstime.com/b/caring-female-psychiatrist-listening-to-patient-portrait-beautiful-young-women-making-notes-consulting-therapy-97879321.jpg"
                  alt="Therapist"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Consult a Therapist
                </h2>
                <p>
                  If phobic anxiety is affecting your life, consider consulting
                  with a therapist. Cognitive-behavioral therapy (CBT) and
                  exposure therapy are effective treatments for phobias.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://www.sandstonecare.com/wp-content/uploads/2021/08/Ways-Exposure-Therapy-are-helpful.png"
                  alt="Exposure Therapy"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Exposure Therapy
                </h2>
                <p>
                  Exposure therapy involves gradual and controlled exposure to
                  the phobic trigger. Over time, this can reduce anxiety
                  responses and help you confront your fears.
                </p>
              </div>
            </div>
          </section>

          {/* Add more sections for medication, relaxation techniques, and self-help strategies as needed */}
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Medication</h2>
              <p>
                In some cases, medication prescribed by a psychiatrist can help
                manage severe phobic anxiety symptoms. Consult with a healthcare
                provider for medication options.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Relaxation Techniques
              </h2>
              <p>
                Practice relaxation techniques, such as deep breathing exercises
                and progressive muscle relaxation, to reduce anxiety and stress
                related to phobias.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Self-Help Strategies
              </h2>
              <p>
                Learn self-help strategies like creating a fear hierarchy,
                setting achievable goals, and tracking your progress in
                overcoming phobias.
              </p>
            </div>
          </section>
        </main>
        <footer className="bg-blue-500 p-4 text-white text-center">
          <p>
            Disclaimer: This information is for educational purposes only and
            should not replace professional advice. Consult with a therapist or
            healthcare provider for personalized guidance.
          </p>
        </footer>
      </div>
    </>
  );
}

export default PhobicAnxietyRemediesPage;
