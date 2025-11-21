"use client";

import { AlertCircle, FolderX, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "The Social Media Trap",
    content:
      "You pour your heart into a poem. You spend hours perfecting a story. Then you post it on social media... and it gets 12 likes before vanishing into the void. That's not validation—that's invisibility.\n\nYour creative work isn't content. It's art. And art deserves better than a 24-hour shelf life.",
    color: "bg-red-500",
  },
  {
    icon: FolderX,
    title: "The Hidden Portfolio Problem",
    content:
      "Professional writers only publish their best work. But what about everything else? Those experimental pieces, early drafts, practice poems, and exploratory stories? They sit in notebooks or buried in folders, never seeing daylight.\n\nEvery creation has value—even the ones you don't think are \"ready.\" Each piece is a step in your journey, deserving of its own space and appreciation.",
    color: "bg-orange-500",
  },
  {
    icon: HelpCircle,
    title: "The New Creator Struggle",
    content:
      "If you're just starting out, the traditional path feels impossible. Where do you publish without connections? How do you build an audience from zero? How do you know if your work is any good?\n\nYou need a space that welcomes beginners, celebrates growth, and provides genuine feedback—not just empty likes.",
    color: "bg-amber-500",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            Are Your Creations Getting the{" "}
            <span className="text-gradient">Recognition They Deserve?</span>
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group p-6 md:p-8 bg-inkwings-surface rounded-2xl hover:shadow-inkwings-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${problem.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-inkwings-text mb-4 group-hover:text-inkwings-primary transition-colors duration-300">
                  {problem.title}
                </h3>
                <div className="text-base text-inkwings-text-secondary leading-relaxed whitespace-pre-line">
                  {problem.content}
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
            Download INKWINGS - Built for Creators Like You
          </a>
        </div>
      </div>
    </section>
  );
}
