export default function Features() {
  const features = [
    {
      title: "Industry-Relevant Programs",
      desc: "Designed with top universities and hiring partners to meet real business needs.",
    },
    {
      title: "Employee Upskilling",
      desc: "Build future-ready teams through structured learning journeys.",
    },
    {
      title: "Scalable for Teams",
      desc: "From startups to enterprises, train teams at any scale.",
    },
    {
      title: "Dedicated Success Managers",
      desc: "Get onboarding, reporting, and continuous support.",
    },
    {
      title: "Trackable Outcomes",
      desc: "Measure learner engagement, progress, and ROI.",
    },
    {
      title: "Flexible Delivery",
      desc: "Live sessions, self-paced modules, and hybrid learning formats.",
    },
  ];

  return (
    <section
      id="features"
      className="px-6 md:px-16 py-24 bg-gray-50"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-blue-600 font-semibold uppercase tracking-wide">
          Why Choose Us
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
          Enterprise Learning Built for Growth
        </h2>

        <p className="text-gray-600 mt-5 text-lg">
          Everything your company needs to upskill talent, improve retention,
          and create measurable workforce impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-7 rounded-2xl border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold mt-5 text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}