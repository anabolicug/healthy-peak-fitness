import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPost, getPosts, formatDate } from "@/lib/wordpress";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts(20);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title.rendered.replace(/<[^>]+>/g, ""),
    description: post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const relatedPosts = await getPosts(3);
  const related = relatedPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="bg-[#f8fafc]">
      {/* Hero Image */}
      <div className="relative h-64 md:h-80 bg-[#0f172a]">
        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
          <Image
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={post.title.rendered.replace(/<[^>]+>/g, "")}
            fill
            className="object-cover opacity-60"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <article className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] p-6 md:p-10">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post._embedded?.["wp:term"]?.[0]?.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog?category=${cat.slug}`}
                className="px-3 py-1 bg-[#2563eb] text-white text-xs font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors"
              >
                {cat.name}
              </Link>
            ))}
            <span className="text-sm text-[#64748b]">{formatDate(post.date)}</span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl font-black text-[#0f172a] mb-8 leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Content */}
          <div
            className="prose-wp max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Share */}
          <div className="mt-10 pt-6 border-t border-[#e2e8f0] flex items-center gap-4">
            <span className="text-sm font-semibold text-[#64748b]">Share:</span>
            <button className="px-3 py-1.5 bg-[#f1f5f9] text-[#64748b] text-sm rounded-lg hover:bg-[#2563eb] hover:text-white transition-colors">
              Twitter/X
            </button>
            <button className="px-3 py-1.5 bg-[#f1f5f9] text-[#64748b] text-sm rounded-lg hover:bg-[#2563eb] hover:text-white transition-colors">
              Facebook
            </button>
            <button className="px-3 py-1.5 bg-[#f1f5f9] text-[#64748b] text-sm rounded-lg hover:bg-[#2563eb] hover:text-white transition-colors">
              Copy Link
            </button>
          </div>
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-12 mb-16">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group block">
                  <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative aspect-video bg-[#f1f5f9]">
                      {p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                        <Image
                          src={p._embedded["wp:featuredmedia"][0].source_url}
                          alt={p.title.rendered.replace(/<[^>]+>/g, "")}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-4xl">🏋️</div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3
                        className="text-sm font-bold text-[#0f172a] leading-snug group-hover:text-[#2563eb] transition-colors"
                        dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}