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
    <section id="community" className="py-20 md:py-32 bg-versebox-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-versebox-text mb-4">
            What Early Supporters{" "}
            <span className="text-gradient">Are Saying</span>
          </h2>
          <p className="text-lg text-versebox-text-secondary max-w-2xl mx-auto">
            Join thousands of writers, poets, and storytellers eagerly waiting
            for launch.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-white rounded-2xl hover:shadow-versebox transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-versebox-accent mb-4 opacity-50" />
              <p className="text-versebox-text mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-versebox-text">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-versebox-text-secondary">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-versebox-primary mb-2">
              5,000+
            </div>
            <div className="text-versebox-text-secondary">
              Waitlist Sign-ups
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-versebox-secondary mb-2">
              150+
            </div>
            <div className="text-versebox-text-secondary">
              Countries Represented
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-versebox-accent mb-2">
              Q1 2026
            </div>
            <div className="text-versebox-text-secondary">Expected Launch</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-versebox-primary mb-2">
              100%
            </div>
            <div className="text-versebox-text-secondary">Free Forever</div>
          </div>
        </div>
      </div>
    </section>
  );
}
