"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Early Access Tester",
    role: "Poet from New York",
    avatar: "👩‍🎨",
    content:
      "The concept is brilliant! Finally, a platform that treats creative writing with the respect it deserves. Can't wait for launch!",
  },
  {
    name: "Beta Program Member",
    role: "Storyteller from London",
    avatar: "👨‍💼",
    content:
      "The demo showed incredible potential. The rich text editor is exactly what writers need. This will change everything.",
  },
  {
    name: "Waitlist Member #127",
    role: "Lyricist from LA",
    avatar: "👩‍🎤",
    content:
      "I've been waiting for something like this! A permanent home for my lyrics where I can also build an audience? Sign me up!",
  },
  {
    name: "Creative Writing Community",
    role: "Writing Group Leader",
    avatar: "👨‍💻",
    content:
      "Our entire writing group joined the waitlist. We're excited about having a professional platform for our work.",
  },
  {
    name: "Poetry Enthusiast",
    role: "College Student",
    avatar: "👩",
    content:
      'The "forever preserved" concept really resonates with me. My poetry deserves a permanent home, not just social media posts.',
  },
  {
    name: "Aspiring Author",
    role: "First-Time Writer",
    avatar: "👨‍🦱",
    content:
      "This feels like the platform I've been dreaming of. Can't wait to share my first story when it launches!",
  },
];

export default function Community() {
  return (
    <section id="community" className="py-20 md:py-32 bg-inkwings-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            What Early Supporters{" "}
            <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="text-lg text-inkwings-text-secondary max-w-2xl mx-auto">
            Join thousands of writers, poets, and storytellers eagerly waiting
            for launch.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-4 sm:p-6 md:p-8 bg-white rounded-2xl hover:shadow-inkwings-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-scale-in border-2 border-transparent hover:border-inkwings-accent/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-inkwings-accent mb-3 sm:mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform" />
              <p className="text-sm sm:text-base text-inkwings-text mb-4 sm:mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-3xl sm:text-4xl transform group-hover:scale-125 transition-transform duration-300 flex-shrink-0">{testimonial.avatar}</div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm sm:text-base text-inkwings-text group-hover:text-inkwings-primary transition-colors duration-300 truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-inkwings-text-secondary truncate">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="text-center group cursor-pointer animate-fade-in p-3 sm:p-4" style={{ animationDelay: "0.6s" }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-primary mb-1 sm:mb-2 transform group-hover:scale-110 transition-all duration-300">
              5,000+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-inkwings-text-secondary group-hover:text-inkwings-text transition-colors duration-300">
              Waitlist Sign-ups
            </div>
          </div>
          <div className="text-center group cursor-pointer animate-fade-in p-3 sm:p-4" style={{ animationDelay: "0.7s" }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-secondary mb-1 sm:mb-2 transform group-hover:scale-110 transition-all duration-300">
              150+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-inkwings-text-secondary group-hover:text-inkwings-text transition-colors duration-300">
              Countries Represented
            </div>
          </div>
          <div className="text-center group cursor-pointer animate-fade-in p-3 sm:p-4" style={{ animationDelay: "0.8s" }}>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-inkwings-accent mb-1 sm:mb-2 transform group-hover:scale-110 transition-all duration-300">
              Q1 2026
            </div>
            <div className="text-xs sm:text-sm md:text-base text-inkwings-text-secondary group-hover:text-inkwings-text transition-colors duration-300">Expected Launch</div>
          </div>
          <div className="text-center group cursor-pointer animate-fade-in p-3 sm:p-4" style={{ animationDelay: "0.9s" }}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-primary mb-1 sm:mb-2 transform group-hover:scale-110 transition-all duration-300">
              100%
            </div>
            <div className="text-xs sm:text-sm md:text-base text-inkwings-text-secondary group-hover:text-inkwings-text transition-colors duration-300">Free Forever</div>
          </div>
        </div>
      </div>
    </section>
  );
}
