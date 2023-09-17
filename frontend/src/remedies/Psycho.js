import React from "react";


function PsychoticismRemediesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-3xl font-semibold">Psychoticism Remedies</h1>
      </header>
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex">
            <div className="w-1/2">
              <img
                src='https://media.istockphoto.com/id/662267552/photo/closeup-portrait-angry-child.jpg?s=612x612&w=0&k=20&c=pyhlwATXgv4R8jEUa82ug2oUg1bpgd873o7lFILHuBg='
                alt="Therapist"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-6">
              <h2 className="text-2xl font-semibold mb-2">Consult a Therapist</h2>
              <p>
                If you experience psychoticism symptoms, it's crucial to consult
                with a mental health professional or therapist. They can provide
                assessment and appropriate treatment options.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex">
            <div className="w-1/2">
              <img
                src='https://as2.ftcdn.net/v2/jpg/05/30/95/41/1000_F_530954133_1dYtdLDPYqmykbYHve7V2jKX2eq9nMJH.jpg'
                alt="Grounding Techniques"
                className="w-full rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-6">
              <h2 className="text-2xl font-semibold mb-2">Practice Grounding Techniques</h2>
              <p>
                Grounding techniques can help you stay connected to reality. Try
                techniques like deep breathing, focusing on sensory experiences, or
                using grounding exercises recommended by a therapist.
              </p>
            </div>
          </div>
        </section>

        {/* Add more sections for medication, psychotherapy, self-care, and support systems as needed */}
        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Medication</h2>
            <p>
              In some cases, medication prescribed by a psychiatrist may be
              necessary to manage psychotic symptoms. Consult with a healthcare
              provider for medication options.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Psychotherapy</h2>
            <p>
              Psychotherapy, such as cognitive-behavioral therapy (CBT) or
              dialectical-behavior therapy (DBT), can help individuals with
              psychoticism symptoms manage their thoughts and behaviors.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Self-Care</h2>
            <p>
              Prioritize self-care practices, including a consistent sleep schedule,
              a balanced diet, and stress reduction techniques. Self-care supports
              overall well-being.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Build a Support System</h2>
            <p>
              Build a strong support system that includes family, friends, and
              support groups. Sharing your experiences with others can provide
              understanding and encouragement.
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

export default PsychoticismRemediesPage;
