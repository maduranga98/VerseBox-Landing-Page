"use client";

import {
  Feather,
  Users,
  TrendingUp,
  Archive,
  ChevronRight,
  Star,
  Zap,
  BadgeCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Feather,
    title: "A Stage Built Only for Writers",
    description:
      "Imagine a platform where everyone is here for one reason: to read, write, and appreciate creative work. No influencers selling products. No political rants. No random content stealing attention.\n\nINKWINGS is that rare space - 100% focused on creative writing. Your poetry shares space with poetry. Your stories sit alongside stories. Your audience is here specifically to discover work like yours.",
    color: "bg-gradient-to-br from-indigo-500 to-purple-500",
    highlights: ["Pure creative focus", "Dedicated writers", "No distractions"],
  },
  {
    icon: Users,
    title: "Every Creation Deserves Recognition",
    description:
      "Stop self-censoring. Stop hiding your 'not quite ready' pieces. On INKWINGS, every poem, story, and lyric you publish adds to your creative journey.\n\nReaders can see your evolution. Fellow creators offer genuine feedback. And your experimental work often resonates more than you expect. Nothing gets buried-everything stays accessible, forever.",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    highlights: ["Show your journey", "Genuine feedback", "Always accessible"],
  },
  {
    icon: TrendingUp,
    title: "Built-in Audience Discovery",
    description:
      "No follower count required. INKWINGS' discovery system connects your work with readers who actually want to find it. Through genre tags, curated collections, and a community that actively explores, new creators get seen.\n\nYour first poem has the same chance of being discovered as your hundredth. Fresh voices are celebrated here.",
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
    highlights: ["Smart discovery", "Genre matching", "Equal opportunity"],
  },
  {
    icon: Archive,
    title: "Forever Preserved, Always Accessible",
    description:
      "Your creative work isn't temporary content-it's your legacy. INKWINGS archives everything permanently. Five years from now, readers can still discover your early poems. Ten years later, your stories remain accessible.\n\nThink of it as your personal creative museum that the world can visit anytime.",
    color: "bg-gradient-to-br from-rose-500 to-orange-500",
    highlights: ["Permanent archive", "Your legacy", "Timeless access"],
  },
];

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-inkwings-surface relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-lg">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">
              Why Choose INKWINGS
            </span>
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            INKWINGS: Where Your Creative Work
            <br />
            <span className="text-gradient">Finally Gets Its Own Home</span>
          </h2>
          <p className="text-lg text-inkwings-text-secondary max-w-3xl mx-auto">
            No algorithms. No distractions. No competing with viral videos. Just
            pure creative expression in a community that actually reads.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`group relative bg-white rounded-3xl hover:shadow-2xl transition-all duration-700 cursor-pointer border-2 border-transparent hover:border-purple-200 overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${feature.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />

                <div className="p-6 md:p-8">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div
                      className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Badge effect on hover */}
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <BadgeCheck className="w-5 h-5 text-green-500 fill-green-500 animate-pulse" />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-inkwings-text mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {feature.title}
                  </h3>

                  <div className="text-base text-inkwings-text-secondary leading-relaxed whitespace-pre-line mb-6">
                    {feature.description}
                  </div>

                  {/* Highlight pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1.5 rounded-full text-sm transform group-hover:scale-105 transition-transform"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <Zap className="w-3.5 h-3.5 text-purple-600" />
                        <span className="text-purple-900 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <div className="flex items-center gap-2 text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm">Learn more</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Decorative corner glow */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 ${feature.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#download"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95"
          >
            <Feather className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
            Start Your Creative Journey
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
