"use client";

import { FileText, Zap, TrendingUp, Users, Award } from "lucide-react";

const timeline = [
  {
    icon: FileText,
    period: "Day 1",
    title: "Your First Publish",
    description:
      "Experience the rush of sharing your first piece with a community that actually cares. Get your first genuine comment. Feel seen.",
    color: "bg-inkwings-primary",
  },
  {
    icon: Zap,
    period: "Week 1",
    title: "Finding Your Rhythm",
    description:
      "Discover your publishing frequency. Explore different genres. Connect with creators whose work resonates. Start building relationships.",
    color: "bg-inkwings-secondary",
  },
  {
    icon: TrendingUp,
    period: "Month 1",
    title: "Building Momentum",
    description:
      "Your follower count grows organically. Readers anticipate your next piece. You've found your niche within the community.",
    color: "bg-inkwings-accent",
  },
  {
    icon: Users,
    period: "Month 3",
    title: "Established Creator",
    description:
      "Your archive showcases your evolution. You're part of conversations. Your feedback helps other creators. You belong.",
    color: "bg-inkwings-primary",
  },
  {
    icon: Award,
    period: "Year 1",
    title: "Your Creative Legacy",
    description:
      "Looking back at your first pieces shows how far you've come. Your audience is invested in your journey. Your work has a permanent home.",
    color: "bg-inkwings-secondary",
  },
];

export default function BenefitsOverTime() {
  return (
    <section id="benefits-over-time" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            The Platform That{" "}
            <span className="text-gradient">Grows With You</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for mobile/tablet */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-inkwings-primary via-inkwings-secondary to-inkwings-accent lg:hidden" />

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 lg:gap-12 animate-scale-in ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon for mobile/tablet */}
                  <div
                    className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg shrink-0 lg:hidden`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 lg:w-5/12">
                    <div
                      className={`group p-6 md:p-8 bg-inkwings-surface rounded-2xl hover:shadow-inkwings-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                        isEven ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4 lg:justify-end">
                        <span className="text-2xl font-bold text-inkwings-primary">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-inkwings-text mb-3 group-hover:text-inkwings-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-base text-inkwings-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center icon for desktop */}
                  <div className="hidden lg:flex lg:w-2/12 justify-center">
                    <div
                      className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center shadow-lg z-10`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block lg:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-inkwings-gradient text-white font-semibold rounded-full hover:shadow-inkwings-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
