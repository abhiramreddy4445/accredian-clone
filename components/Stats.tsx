export default function Stats() {
  const stats = [
    { number: "500+", label: "Enterprise Clients" },
    { number: "10K+", label: "Active Learners" },
    { number: "95%", label: "Completion Rate" },
    { number: "50+", label: "Programs Delivered" },
  ];

  return (
    <section
      id="stats"
      className="px-6 md:px-16 py-24 bg-blue-600 text-white"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="uppercase tracking-wide text-blue-100 font-semibold">
          Proven Results
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Trusted by Modern Organizations
        </h2>

        <p className="mt-5 text-blue-100 text-lg">
          Real impact delivered through structured enterprise learning.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10"
          >
            <h3 className="text-4xl font-bold">{item.number}</h3>
            <p className="mt-3 text-blue-100">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}