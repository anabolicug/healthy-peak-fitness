import Link from "next/link";
import Image from "next/image";
import { getPosts, getCategories, formatDate } from "@/lib/wordpress";

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(12), getCategories()]);

  return (
    <div className="bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-black text-[#0f172a] mb-2">Fitness Blog</h1>
          <p className="text-[#64748b] text-lg">
            Expert workout guides, nutrition tips, and health advice.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-6">
              {posts.length > 0
                ? posts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                      <article className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden hover:shadow-lg hover:border-[#2563eb]/30 transition-all">
                        <div className="relative aspect-video bg-[#f1f5f9]">
                          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                            <Image
                              src={post._embedded["wp:featuredmedia"][0].source_url}
                              alt={post.title.rendered.replace(/<[^>]+>/g, "")}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-4xl">🏋️</div>
                          )}
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            {post._embedded?.["wp:term"]?.[0]?.[0] && (
                              <span className="px-2 py-0.5 bg-[#2563eb]/10 text-[#2563eb] text-xs font-semibold rounded">
                                {post._embedded["wp:term"][0][0].name}
                              </span>
                            )}
                            <span className="text-xs text-[#64748b]">{formatDate(post.date)}</span>
                          </div>
                          <h2
                            className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#2563eb] transition-colors leading-snug"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                          <p
                            className="text-sm text-[#64748b] line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                          />
                        </div>
                      </article>
                    </Link>
                  ))
                : [1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden">
                      <div className="aspect-video bg-[#f1f5f9]" />
                      <div className="p-5">
                        <div className="h-3 bg-[#f1f5f9] rounded w-1/3 mb-3" />
                        <div className="h-5 bg-[#f1f5f9] rounded w-full mb-2" />
                        <div className="h-5 bg-[#f1f5f9] rounded w-3/4 mb-2" />
                        <div className="h-3 bg-[#f1f5f9] rounded w-full mb-1" />
                        <div className="h-3 bg-[#f1f5f9] rounded w-2/3" />
                      </div>
                    </div>
                  ))}
            </div>
            {posts.length === 0 && (
              <div className="mt-6 p-6 bg-white rounded-xl border border-[#e2e8f0] text-center">
                <p className="text-[#64748b]">
                  Connect WordPress to display posts. Set{" "}
                  <code className="px-1.5 py-0.5 bg-[#f1f5f9] rounded text-[#2563eb] font-mono text-xs">
                    WP_API_URL
                  </code>{" "}
                  in <code className="px-1.5 py-0.5 bg-[#f1f5f9] rounded text-[#2563eb] font-mono text-xs">.env.local</code>
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-64">
            <div className="sticky top-20">
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 mb-4">
                <h3 className="font-bold text-[#0f172a] mb-4">Categories</h3>
                {categories.length > 0 ? (
                  <ul className="space-y-2">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={`/blog?category=${cat.slug}`}
                          className="flex items-center justify-between text-sm text-[#64748b] hover:text-[#2563eb] transition-colors"
                        >
                          <span>{cat.name}</span>
                          <span className="text-xs bg-[#f1f5f9] px-2 py-0.5 rounded">{cat.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-[#64748b]">Categories from WordPress will appear here.</p>
                )}
              </div>
              <div className="bg-gradient-to-br from-[#2563eb] to-[#3b82f6] rounded-xl p-5 text-white">
                <h3 className="font-bold mb-2">Need Help?</h3>
                <p className="text-sm text-zinc-200 mb-4">Get a personalized training plan from our experts.</p>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2 bg-white text-[#2563eb] text-sm font-bold rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  Get Coaching
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}