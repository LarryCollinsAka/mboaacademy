"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS_DATA } from "@/data/blog";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Tag, ArrowRight, Star } from "lucide-react";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1 py-14">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights & Blog</span>
          </Link>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <span className="text-amber-400 font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>&bull;</span>
              <span>{post.publishedDate}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/30"
              />
              <div>
                <h3 className="text-sm font-bold text-white">{post.author.name}</h3>
                <p className="text-xs text-zinc-400">{post.author.role}</p>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="mercor-card p-8 sm:p-12 rounded-3xl border border-white/10 text-zinc-300 text-sm sm:text-base leading-relaxed space-y-6">
            <div className="whitespace-pre-line font-sans">
              {post.content}
            </div>

            {/* Tags */}
            <div className="pt-8 border-t border-white/5 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-amber-400" />
              {post.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-zinc-300 border border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Career CTA */}
          <div className="mercor-card p-8 rounded-3xl border border-amber-500/30 text-center space-y-4 bg-gradient-to-r from-amber-500/10 via-black to-emerald-500/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              Next Cohort Starting Soon
            </div>
            <h3 className="text-2xl font-bold text-white">
              Turn These Insights into a Production Engineering Career
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
              Join our on-site labs in Douala or Yaounde, or learn hybrid online with live mentorship and guaranteed portfolio reviews.
            </p>
            <div className="pt-2">
              <Link
                href="/courses"
                className="gold-btn px-6 py-3 rounded-xl text-xs font-bold inline-flex items-center gap-2"
              >
                <span>Explore Open Cohorts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
