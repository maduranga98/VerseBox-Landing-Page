"use client";

import { BookOpen, Instagram, TrendingUp, Award } from "lucide-react";

const personas = [
  {
    icon: BookOpen,
    title: "The Passionate Beginner",
    description:
      "You've been writing in secret for years. You have dozens of poems in notebooks, stories on your laptop, lyrics in your phone. You're ready to share but don't know where to start.\n\nINKWINGS welcomes you with open arms. No judgment. Just genuine appreciation and constructive feedback from people who get it.",
    color: "bg-inkwings-primary",
  },
  {
    icon: Instagram,
    title: "The Social Media Refugee",
    description:
      "You're tired of Instagram poems getting three likes. Frustrated by Facebook posts that nobody reads. Done with Twitter threads that disappear.\n\nYou need a platform that treats your work like art, not content. Where readers spend time with your words, not just scroll past them.",
    color: "bg-inkwings-secondary",
  },
  {
    icon: TrendingUp,
    title: "The Developing Writer",
    description:
      "You're actively improving your craft. You experiment with styles, try new forms, practice consistently. But you lack a space to showcase your growth journey.\n\nINKWINGS is your public portfolio. Every piece contributes to your visible evolution as a creator.",
    color: "bg-inkwings-accent",
  },
  {
    icon: Award,
    title: "The Recognition Seeker",
    description:
      "Your work is good—you know it. But somehow, it never gets the recognition it deserves. You're talented but invisible.\n\nINKWINGS levels the playing field. Quality writing gets discovered here. Your talent finally has a chance to shine.",
    color: "bg-inkwings-primary",
  },
];

export default function WhoIsItFor() {
  return (
    <section id="who-is-it-for" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            This Is Your Space{" "}
            <span className="text-gradient">If You're...</span>
          </h2>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-inkwings-surface rounded-2xl hover:shadow-inkwings-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${persona.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-inkwings-text mb-4 text-center group-hover:text-inkwings-primary transition-colors duration-300">
                  {persona.title}
                </h3>
                <div className="text-sm text-inkwings-text-secondary leading-relaxed whitespace-pre-line text-center">
                  {persona.description}
                </div>
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
            Find Your Community - Download Now
          </a>
        </div>
      </div>
    </section>
  );
}
