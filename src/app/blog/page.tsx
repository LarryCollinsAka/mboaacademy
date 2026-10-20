import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS_DATA } from "@/data/blog";
import Link from "next/link";
import { Newspaper, Clock, ArrowRight, Tag, Star } from "lucide-react";

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210] selection:bg-[#ffcd00] selection:text-black">
      <Navbar />

      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Newspaper className="w-3.5 h-3.5" />
              Practical Work & Learning Insights
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Insights on <span className="gold-gradient-text">Work, Skills & Value Chains</span>
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed">
              Practical articles on role expectations, work quality, collaboration, value chains, capability evidence, and how people can grow across different kinds of work.
            </p>
          </div>

          {/* Featured Post (Hero) */}
          {BLOG_POSTS_DATA[0] && (
            <div className="rounded-3xl overflow-hidden border border-[#0d1210]/10 bg-white shadow-sm grid grid-cols-1 lg:grid-cols-2 group hover:border-amber-500/50 transition-all">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={BLOG_POSTS_DATA[0].coverImage}
                  alt={BLOG_POSTS_DATA[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-black">
                    Featured Article
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    <span className="text-amber-400 font-semibold">{BLOG_POSTS_DATA[0].category}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {BLOG_POSTS_DATA[0].readTime}
                    </span>
                    <span>&bull;</span>
                    <span>{BLOG_POSTS_DATA[0].publishedDate}</span>
                  </div>

                  <Link href={`/blog/${BLOG_POSTS_DATA[0].slug}`}>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                      {BLOG_POSTS_DATA[0].title}
                    </h2>
                  </Link>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {BLOG_POSTS_DATA[0].excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <img
                      src={BLOG_POSTS_DATA[0].author.avatar}
                      alt={BLOG_POSTS_DATA[0].author.name}
                      className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white">{BLOG_POSTS_DATA[0].author.name}</h4>
                      <p className="text-[10px] text-zinc-400">{BLOG_POSTS_DATA[0].author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${BLOG_POSTS_DATA[0].slug}`}
                    className="gold-btn px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS_DATA.slice(1).map((post) => (
              <div
                key={post.id}
                className="mercor-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-amber-500/40 transition-all"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/30">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {post.readTime}
                      </span>
                      <span>&bull;</span>
                      <span>{post.publishedDate}</span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-amber-500/20"
                    />
                    <span className="text-[11px] text-zinc-300 font-medium">{post.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
