import React from "react";

function ParanoidIdeationRemediesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-3xl font-semibold">Paranoid Ideation Remedies</h1>
      </header>
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex">
            <div className="w-1/2">
              <img
                src='https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2021/09/head-wires-paranoia-anxiety-thumb-1-732x549.jpg'
                alt="Therapist"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-6">
              <h2 className="text-2xl font-semibold mb-2">Consult a Therapist</h2>
              <p>
                If you experience paranoid ideation, it's important to consult a
                therapist or mental health professional. They can provide therapy
                and support to address your thoughts and concerns.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex">
            <div className="w-1/2">
              <img
                src='https://cdn.wallpapersafari.com/64/46/ZIesAc.jpg'
                alt="Mindfulness"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-6">
              <h2 className="text-2xl font-semibold mb-2">Practice Mindfulness</h2>
              <p>
                Mindfulness exercises, such as meditation and deep breathing, can help
                you manage paranoid thoughts and reduce anxiety. Mindfulness promotes
                self-awareness and a sense of calm.
              </p>
            </div>
          </div>
        </section>

        {/* Add more sections and points as needed */}
        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Medication</h2>
            <p>
              In some cases, medication prescribed by a psychiatrist can help
              manage symptoms of paranoid ideation. Consult with a healthcare provider
              for medication options.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Support Systems</h2>
            <p>
              Lean on your support system, including friends and family members.
              Sharing your feelings and concerns with trusted individuals can provide
              emotional support and reassurance.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Self-Care</h2>
            <p>
              Prioritize self-care practices, such as a balanced diet, regular exercise,
              and adequate sleep. Taking care of your physical and mental well-being is
              essential.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Limit Exposure to Triggers</h2>
            <p>
              Identify and limit your exposure to situations or media that trigger
              paranoid thoughts. Reducing exposure can help reduce anxiety.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Keep a Thought Journal</h2>
            <p>
              Maintain a thought journal to track and analyze your paranoid thoughts.
              This can help you gain insight and discuss them with your therapist.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        <p>
          Disclaimer: This information is for educational purposes only and should
          not replace professional advice. Consult with a therapist or healthcare
          provider for personalized guidance.
        </p>
      </footer>
    </div>
  );
}

export default ParanoidIdeationRemediesPage;
