import React from "react";
import Navigation from "../components/Navigation";

function DepressionRemediesPage() {
  return (
    <>
      <Navigation />
      <div className="bg-gray-100 min-h-screen">
        <main className="container mx-auto p-4 mt-4 mb-4">
          <section className="mb-8">
            <div className="bg-blue-500 p-4 text-white p-6 rounded-lg shadow-lg flex justify-center items-center">
              <h1 className="text-3xl font-semibold mb-2 text-center">
                DEPRESSION REMEDIES
              </h1>
            </div>
          </section>
          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://media.istockphoto.com/id/171347389/photo/young-healthcare-professional-smiling-isolated.jpg?s=612x612&w=0&k=20&c=pDm8u0FXZTrgmkeWlgDLGwfRQqq4inlBDp69O43AXQk= "
                  alt="Therapist"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Seek Professional Help
                </h2>
                <p>
                  The most important step in dealing with depression is to seek
                  professional help. Contact a therapist, counselor, or
                  psychiatrist who can provide the right treatment and support.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881_640.jpg"
                  alt="Medication"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">Medication</h2>
                <p>
                  In some cases, medication prescribed by a healthcare
                  professional can help manage depression symptoms. Always
                  consult a doctor before starting any medication.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://www.thehealthy.com/wp-content/uploads/2019/04/sad.jpg?fit=640%2C427"
                  alt="Therapy"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">Therapy</h2>
                <p>
                  Various forms of therapy, such as cognitive-behavioral therapy
                  (CBT), can be effective in treating depression. Consider
                  individual therapy or support groups.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://img.freepik.com/premium-photo/beautiful-girl-doing-exercise-correct-posture_259464-442.jpg?w=2000"
                  alt="Exercise"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Regular Exercise
                </h2>
                <p>
                  Engage in regular physical activity as it can boost your mood
                  and reduce symptoms of depression. Aim for at least 30 minutes
                  of exercise most days.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex">
              <div className="w-1/2">
                <img
                  src="https://managementweekly.org/wp-content/uploads/2022/03/perfectionism_featured.jpg"
                  alt="Social Support"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-semibold mb-2">Social Support</h2>
                <p>
                  Stay connected with friends and family members. Share your
                  feelings and concerns with trusted individuals who can provide
                  emotional support. Social interactions are essential for
                  well-being.
                </p>
              </div>
            </div>
          </section>

          {/* Add more sections or points as needed */}
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

export default DepressionRemediesPage;
