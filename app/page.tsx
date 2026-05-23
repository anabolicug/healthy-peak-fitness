import Link from "next/link";
import Image from "next/image";
import { getPosts, formatDate } from "@/lib/wordpress";

export default async function Home() {
  const posts = await getPosts(6);
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2563eb] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-[#2563eb]/30 border border-[#2563eb]/50 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Fitness Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Train Smart.<br />Reach Your Peak.
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8">
              Expert-backed fitness advice, workout programs, and nutrition guides to help you build strength,
              shred fat, and perform at your best.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/blog"
                className="px-6 py-3 bg-white text-[#0f172a] font-bold rounded-lg hover:bg-zinc-100 transition-colors"
              >
                Read the Blog
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Coaching
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Blog Posts" },
              { value: "50+", label: "Workout Guides" },
              { value: "10k+", label: "Readers" },
              { value: "Expert", label: "Backed" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-black text-[#2563eb]">{value}</div>
                <div className="text-sm text-[#64748b] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#2563eb] mb-8">Latest Article</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={featuredPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/hero-fitness.jpg"}
                  alt={featuredPost.title.rendered.replace(/<[^>]+>/g, "")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {featuredPost._embedded?.["wp:term"]?.[0]?.map((cat) => (
                    <span key={cat.id} className="px-2 py-0.5 bg-[#2563eb]/10 text-[#2563eb] text-xs font-semibold rounded">
                      {cat.name}
                    </span>
                  ))}
                  <span className="text-xs text-[#64748b]">{formatDate(featuredPost.date)}</span>
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4 leading-snug"
                  dangerouslySetInnerHTML={{ __html: featuredPost.title.rendered }}
                />
                <p
                  className="text-[#64748b] mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: featuredPost.excerpt.rendered }}
                />
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] text-white text-sm font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Posts Grid */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-[#0f172a]">Latest Posts</h2>
            <Link href="/blog" className="text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-[#f1f5f9]">
                  {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                    <Image
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">🏋️</div>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {post._embedded?.["wp:term"]?.[0]?.[0] && (
                    <span className="px-2 py-0.5 bg-[#2563eb]/10 text-[#2563eb] text-xs font-semibold rounded">
                      {post._embedded["wp:term"][0][0].name}
                    </span>
                  )}
                  <span className="text-xs text-[#64748b]">{formatDate(post.date)}</span>
                </div>
                <h3
                  className="text-lg font-bold text-[#0f172a] mb-1 group-hover:text-[#2563eb] transition-colors leading-snug"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p
                  className="text-sm text-[#64748b] line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </Link>
            ))}
            {latestPosts.length === 0 && (
              <>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border border-[#e2e8f0] rounded-xl p-0 overflow-hidden">
                    <div className="aspect-video bg-[#f1f5f9]" />
                    <div className="p-5">
                      <div className="h-4 bg-[#f1f5f9] rounded w-1/3 mb-3" />
                      <div className="h-6 bg-[#f1f5f9] rounded w-full mb-2" />
                      <div className="h-4 bg-[#f1f5f9] rounded w-2/3" />
                    </div>
                  </div>
                ))}
                <div className="md:col-span-3 text-center py-4">
                  <p className="text-[#64748b] text-sm">
                    Connect WordPress to display live posts. Set{" "}
                    <code className="px-1.5 py-0.5 bg-[#f1f5f9] rounded text-[#2563eb] font-mono text-xs">
                      WP_API_URL
                    </code>{" "}
                    in your .env.local
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Transform?</h2>
          <p className="text-lg text-zinc-200 mb-8 max-w-lg mx-auto">
            Get personalized coaching and training plans tailored to your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-white text-[#2563eb] font-bold rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}