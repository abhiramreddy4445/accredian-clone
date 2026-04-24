export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "HR Director",
      text: "Accredian helped our teams upskill faster with measurable outcomes."
    },
    {
      name: "Priya Reddy",
      role: "L&D Manager",
      text: "Smooth onboarding, great support, and excellent learning programs."
    },
    {
      name: "Ankit Verma",
      role: "Founder",
      text: "Our employee retention improved after implementing their programs."
    }
  ];

  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">What Clients Say</h2>
        <p className="text-gray-600 mt-3">
          Trusted by growing teams and enterprises.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-700">“{item.text}”</p>
            <div className="mt-6">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}