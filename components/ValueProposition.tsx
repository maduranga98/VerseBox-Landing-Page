"use client";

import { Eye, MessageCircle, Shield } from "lucide-react";

const valueProps = [
  {
    icon: Eye,
    title: "No More Invisibility",
    description:
      "Your work doesn't disappear after 24 hours. It stays accessible forever. New readers can discover your first poem years after publication. Your creative legacy builds over time, not resets daily.",
    color: "bg-inkwings-primary",
  },
  {
    icon: MessageCircle,
    title: "Real Engagement, Not Vanity Metrics",
    description:
      "Forget like counts. INKWINGS shows you who's actually reading, how long they spend with your work, and genuine comments from people who absorbed your words. Quality attention over quantity.",
    color: "bg-inkwings-secondary",
  },
  {
    icon: Shield,
    title: "Your Rights, Always Protected",
    description:
      "You own 100% of your creative work. INKWINGS never claims rights to your poetry, stories, or lyrics. We're just the stage—you're the artist. Publish freely, knowing your intellectual property remains yours.",
    color: "bg-inkwings-accent",
  },
];

export default function ValueProposition() {
  return (
    <section id="value-proposition" className="py-20 md:py-32 bg-inkwings-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            Why INKWINGS{" "}
            <span className="text-gradient">Changes Everything for Creators</span>
          </h2>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl hover:shadow-inkwings-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-scale-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${prop.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-inkwings-text mb-4 group-hover:text-inkwings-primary transition-colors duration-300">
                  {prop.title}
                </h3>
                <p className="text-base text-inkwings-text-secondary leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-inkwings-gradient text-white font-semibold rounded-full hover:shadow-inkwings-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95"
          >
            Claim Your Space - Download INKWINGS
          </a>
        </div>
      </div>
    </section>
  );
}
