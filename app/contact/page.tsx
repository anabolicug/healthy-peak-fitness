"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Form submission will be wired to WordPress or an email API later
    setSubmitted(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2563eb] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Get in Touch</h1>
          <p className="text-xl text-zinc-300 max-w-lg mx-auto">
            Have a question? Want coaching? Interested in a collaboration? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Let's Connect</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "📧",
                    title: "Email",
                    value: "contact@healthypeakfitness.com",
                  },
                  {
                    icon: "💬",
                    title: "Social",
                    value: "@healthypeakfitness",
                  },
                  {
                    icon: "🏋️",
                    title: "Coaching",
                    value: "Available — fill in the form",
                  },
                ].map(({ icon, title, value }) => (
                  <div key={title} className="flex items-start gap-4">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-[#64748b] uppercase tracking-wider">{title}</div>
                      <div className="text-[#0f172a] font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-white rounded-xl border border-[#e2e8f0]">
                <h3 className="font-bold text-[#0f172a] mb-3">Coaching Services</h3>
                <p className="text-sm text-[#64748b] mb-4 leading-relaxed">
                  We offer personalized training programs, nutrition plans, and one-on-one coaching
                  tailored to your specific goals.
                </p>
                <ul className="space-y-2">
                  {["Custom Training Plans", "Nutrition Guidance", "Weekly Check-ins", "Progress Tracking"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#64748b]">
                        <span className="text-[#2563eb]">✓</span> {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Message Sent!</h3>
                    <p className="text-[#64748b]">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-[#0f172a] mb-6">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-[#64748b] mb-1.5">Full Name</label>
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[#0f172a] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#64748b] mb-1.5">Email</label>
                          <input
                            required
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[#0f172a] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#64748b] mb-1.5">Subject</label>
                        <select className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[#64748b] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent">
                          <option>General Inquiry</option>
                          <option>Coaching Request</option>
                          <option>Collaboration</option>
                          <option>Feedback</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#64748b] mb-1.5">Message</label>
                        <textarea
                          required
                          rows={5}
                          placeholder="Tell us how we can help..."
                          className="w-full px-4 py-2.5 border border-[#e2e8f0] rounded-lg text-[#0f172a] text-sm focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-[#2563eb] text-white font-bold rounded-lg hover:bg-[#1d4ed8] transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}