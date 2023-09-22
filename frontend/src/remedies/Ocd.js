import React from "react";
import Navigation from "../components/Navigation";

function OCDRemediesPage() {
  return (
    <>
      <Navigation />
      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto p-4 mb-4 mt-4">
          <section className="mb-8">
            <div className="bg-blue-500 p-4 text-white p-6 rounded-lg shadow-lg flex justify-center items-center">
              <h1 className="text-3xl font-semibold mb-2 text-center">
                OCD REMEDIES
              </h1>
            </div>
          </section>
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://thumbs.dreamstime.com/b/troubled-teen-girl-behavioral-problems-doing-emotional-intelligence-test-therapy-session-beautiful-psychologist-246370098.jpg"
                  alt="Therapist"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Consult a Therapist
                </h2>
                <p>
                  OCD often requires professional treatment. A therapist with
                  experience in OCD can provide specialized therapy, such as
                  Exposure and Response Prevention (ERP).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://ggsc.s3.amazonaws.com/images/uploads/GettyImages-1365669010.jpg"
                  alt="Mindfulness"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Practice Mindfulness
                </h2>
                <p>
                  Mindfulness exercises, such as meditation and deep breathing,
                  can help reduce OCD-related anxiety. Mindful awareness can
                  also improve your ability to manage intrusive thoughts.
                </p>
              </div>
            </div>
          </section>

          {/* Add more sections for medication, support groups, and self-help techniques as needed */}
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Medication</h2>
              <p>
                In some cases, medication prescribed by a psychiatrist can be
                helpful in managing OCD symptoms. Consult with a healthcare
                provider for medication options.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">Support Groups</h2>
              <p>
                Joining an OCD support group can provide a sense of community
                and understanding. Sharing experiences with others who have OCD
                can be comforting.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Self-Help Techniques
              </h2>
              <p>
                Learn self-help techniques to manage OCD, such as journaling,
                creating exposure hierarchies, and implementing structured
                routines.
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

export default OCDRemediesPage;
