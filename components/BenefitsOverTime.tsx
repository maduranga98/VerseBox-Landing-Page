"use client";

import { FileText, Zap, TrendingUp, Users, Award, Sparkles } from "lucide-react";
import { useState } from "react";

const timeline = [
  {
    icon: FileText,
    period: "Day 1",
    title: "Your First Publish",
    description:
      "Experience the rush of sharing your first piece with a community that actually cares. Get your first genuine comment. Feel seen.",
    gradient: "from-indigo-500 to-purple-500",
    glowColor: "shadow-indigo-500/50",
  },
  {
    icon: Zap,
    period: "Week 1",
    title: "Finding Your Rhythm",
    description:
      "Discover your publishing frequency. Explore different genres. Connect with creators whose work resonates. Start building relationships.",
    gradient: "from-purple-500 to-pink-500",
    glowColor: "shadow-purple-500/50",
  },
  {
    icon: TrendingUp,
    period: "Month 1",
    title: "Building Momentum",
    description:
      "Your follower count grows organically. Readers anticipate your next piece. You've found your niche within the community.",
    gradient: "from-pink-500 to-rose-500",
    glowColor: "shadow-pink-500/50",
  },
  {
    icon: Users,
    period: "Month 3",
    title: "Established Creator",
    description:
      "Your archive showcases your evolution. You're part of conversations. Your feedback helps other creators. You belong.",
    gradient: "from-rose-500 to-orange-500",
    glowColor: "shadow-rose-500/50",
  },
  {
    icon: Award,
    period: "Year 1",
    title: "Your Creative Legacy",
    description:
      "Looking back at your first pieces shows how far you've come. Your audience is invested in your journey. Your work has a permanent home.",
    gradient: "from-orange-500 to-amber-500",
    glowColor: "shadow-orange-500/50",
  },
];

export default function BenefitsOverTime() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="benefits-over-time" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              Your Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-inkwings-text mb-6">
            The Platform That{" "}
            <span className="text-gradient">Grows With You</span>
          </h2>
          <p className="text-lg text-inkwings-text-secondary max-w-2xl mx-auto">
            Every great creator starts somewhere. Watch how INKWINGS evolves with your creative journey.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200 opacity-30" />
            <div
              className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 animate-timeline-fill"
              style={{ animation: "timeline-fill 2s ease-out forwards" }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Mobile/Tablet Layout */}
                  <div className="flex items-start gap-6 md:hidden w-full">
                    {/* Icon Circle */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg ${item.glowColor} transition-all duration-500 ${
                          isHovered ? "scale-110 shadow-2xl" : ""
                        }`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Pulse Effect */}
                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 ${
                          isHovered ? "animate-ping opacity-75" : ""
                        }`}
                      />
                    </div>

                    {/* Content Card */}
                    <div className="flex-1">
                      <div
                        className={`group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                          isHovered ? "-translate-y-2" : ""
                        }`}
                      >
                        {/* Period Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} mb-4`}>
                          <span className="text-xs font-bold text-white uppercase tracking-wider">
                            {item.period}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-inkwings-text mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base text-inkwings-text-secondary leading-relaxed">
                          {item.description}
                        </p>

                        {/* Decorative Corner */}
                        <div className={`absolute -top-1 -right-1 w-20 h-20 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center w-full">
                    {/* Content Card - Left or Right */}
                    <div className={`w-5/12 ${isLeft ? "pr-12 text-right" : "pl-12 text-left order-3"}`}>
                      <div
                        className={`group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                          isHovered ? "-translate-y-2 scale-105" : ""
                        }`}
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        {/* Period Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} mb-4`}>
                          <span className="text-sm font-bold text-white uppercase tracking-wider">
                            {item.period}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-inkwings-text mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base text-inkwings-text-secondary leading-relaxed">
                          {item.description}
                        </p>

                        {/* Arrow Pointer */}
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 ${
                            isLeft ? "-right-6" : "-left-6"
                          }`}
                        >
                          <div className={`w-12 h-0.5 bg-gradient-to-r ${item.gradient} opacity-50`} />
                        </div>

                        {/* Decorative Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                      </div>
                    </div>

                    {/* Center Icon Circle */}
                    <div className="w-2/12 flex justify-center order-2">
                      <div className="relative">
                        {/* Outer Ring */}
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 scale-150 transition-all duration-500 ${
                            isHovered ? "scale-[2] opacity-30" : ""
                          }`}
                        />

                        {/* Main Icon Circle */}
                        <div
                          className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl ${item.glowColor} transition-all duration-500 ${
                            isHovered ? "scale-125 shadow-2xl rotate-12" : ""
                          }`}
                        >
                          <Icon className="w-10 h-10 text-white relative z-10" />

                          {/* Inner Glow */}
                          <div className="absolute inset-2 rounded-full bg-white/20 blur-sm" />
                        </div>

                        {/* Pulse Animation on Hover */}
                        {isHovered && (
                          <div
                            className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} animate-ping opacity-75`}
                          />
                        )}

                        {/* Connection Dots */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${item.gradient} absolute -top-32`} />
                          {index < timeline.length - 1 && (
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${item.gradient} absolute top-32`} />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className={`w-5/12 ${isLeft ? "order-3" : "order-1"}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-300" />
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-300" />
            </div>

            <a
              href="#download"
              className="group relative inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <span className="relative z-10 text-lg">Start Your Journey Today</span>
              <Award className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            </a>

            <p className="text-sm text-inkwings-text-secondary">
              Join thousands of creators building their legacy
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes timeline-fill {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
