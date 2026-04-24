"use client";

import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setMessage("Submitted successfully!");
      setForm({ name: "", email: "", company: "" });
    }
  };

  return (
    <section className="px-6 md:px-16 py-20 bg-white">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gray-900 text-white p-8 md:p-12 shadow-2xl">
        <div className="text-center">
          <p className="uppercase tracking-wide text-blue-400 font-semibold">
            Get Started
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Book a Free Demo
          </h2>

          <p className="text-gray-400 mt-4">
            Tell us about your team and we’ll reach out shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-3 gap-4 mt-10"
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="h-14 px-4 rounded-xl bg-white text-black"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="h-14 px-4 rounded-xl bg-white text-black"
            required
          />

          <input
            type="text"
            placeholder="Company"
            value={form.company}
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
            className="h-14 px-4 rounded-xl bg-white text-black"
            required
          />

          <button
            type="submit"
            className="md:col-span-3 h-14 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Submit Inquiry
          </button>
        </form>

        {message && (
          <p className="text-center mt-5 text-green-400">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}