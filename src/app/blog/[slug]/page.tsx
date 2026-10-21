"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { useI18n } from "@/lib/i18n";
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
  const { t, locale } = useI18n();
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f1] text-[#0d1210] selection:bg-[#ffcd00] selection:text-black">
      <Navbar />

      <main className="flex-1 py-14">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#5f6c65] hover:text-[#047857] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("blog.back", "Back to Insights & Blog")}</span>
          </Link>

          {/* Article Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#5f6c65]">
              <span className="text-[#8a6500] font-bold uppercase tracking-wider">
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

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0d1210] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#4d5953] leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#0d1210]/10">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/30"
              />
              <div>
                <h3 className="text-sm font-bold text-[#0d1210]">{post.author.name}</h3>
                <p className="text-xs text-[#5f6c65]">{post.author.role}</p>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#0d1210]/10 shadow-xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="rounded-3xl border border-[#0d1210]/10 bg-white p-8 sm:p-12 text-[#34403b] shadow-sm text-sm sm:text-base leading-relaxed space-y-6">
            {locale === "fr" && <p className="rounded-lg bg-[#f4efe1] px-4 py-3 text-xs text-[#4d5953]">{t("blog.articleLanguageNote", "This article is currently available in English.")}</p>}
            <div className="whitespace-pre-line font-sans">
              {post.content}
            </div>

            {/* Tags */}
            <div className="pt-8 border-t border-[#0d1210]/10 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-[#8a6500]" />
              {post.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs px-2.5 py-1 rounded-lg bg-[#f4efe1] text-[#34403b] border border-[#0d1210]/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Career CTA */}
          <div className="rounded-3xl border border-[#e6b800]/40 bg-gradient-to-r from-[#fff7cc] via-white to-[#e5f5ec] p-8 text-center text-[#0d1210] shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#fff7cc] text-[#765400]">
              <Star className="w-3.5 h-3.5 fill-current" />
              Explore Learning Paths
            </div>
            <h3 className="text-2xl font-bold text-[#0d1210]">
              Connect learning to practical work.
            </h3>
            <p className="text-xs sm:text-sm text-[#4d5953] max-w-xl mx-auto">
              Explore published programs and check each cohort’s confirmed format, schedule, and support. Practise role-relevant tasks and build work samples you can discuss with employers or clients.
            </p>
            <div className="pt-2">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-[#ffcd00] px-6 py-3 text-xs font-extrabold text-[#0d1210] transition hover:bg-[#f0c000]"
              >
                <span>{t("blog.explore", "Explore Learning Paths")}</span>
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
