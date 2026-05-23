export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2563eb] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6">About Healthy Peak Fitness</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            We're on a mission to make expert fitness guidance accessible to everyone — from gym beginners
            to seasoned athletes.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Our Story</h2>
          <div className="prose-wp text-[#64748b] leading-relaxed">
            <p>
              Healthy Peak Fitness was founded with a simple belief: everyone deserves access to
              evidence-based fitness information, not just those who can afford personal trainers.
            </p>
            <p>
              Our team of certified coaches, sports scientists, and passionate fitness enthusiasts
              work together to bring you the latest research-backed training methods, nutrition
              strategies, and recovery protocols.
            </p>
            <p>
              Whether you're looking to lose fat, build muscle, improve your athletic performance,
              or simply feel better in your body — we've got the content to guide you there.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f8fafc] border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-10 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔬",
                title: "Evidence-Based",
                desc: "Every article is backed by peer-reviewed research and real-world coaching experience.",
              },
              {
                icon: "💬",
                title: "Community First",
                desc: "We believe fitness is better together. Join thousands of readers supporting each other.",
              },
              {
                icon: "🎯",
                title: "Results Focused",
                desc: "No fluff, no fads. Just practical strategies that deliver measurable progress.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-6 bg-white rounded-xl border border-[#e2e8f0]">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2563eb] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Start?</h2>
          <p className="text-zinc-200 mb-8">Browse our blog for expert advice, or get in touch for coaching.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog"
              className="px-6 py-3 bg-white text-[#2563eb] font-bold rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Read the Blog
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-white/30 font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}