export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white px-6 md:px-16 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wide">
            Enterprise Learning Solutions
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Transform Your Workforce With{" "}
            <span className="text-blue-600">
              Industry Programs
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Empower employees with world-class upskilling programs,
            certifications, and career growth opportunities tailored for
            modern organizations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 shadow-lg transition">
              Get Started
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          <div className="mt-8 flex gap-8 text-sm text-gray-500">
            <div>
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p>Enterprise Clients</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">10K+</p>
              <p>Learners</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-900">95%</p>
              <p>Success Rate</p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border">
          <h2 className="text-2xl font-bold text-gray-900">
            Why Leading Companies Choose Us
          </h2>

          <div className="mt-8 space-y-4">
            <div className="p-4 rounded-xl bg-blue-50">
              <h3 className="font-semibold text-blue-700">
                Customized Programs
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Learning paths aligned with company goals.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50">
              <h3 className="font-semibold text-blue-700">
                Dedicated Support
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                End-to-end onboarding and learner success.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50">
              <h3 className="font-semibold text-blue-700">
                Measurable ROI
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Track engagement, progress, and impact.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}