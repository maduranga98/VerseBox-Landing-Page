"use client";

import { UserPlus, PenTool, Share2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description:
      "Sign up in seconds and set up your creative profile. Choose your username and start building your digital archive.",
    color: "bg-versebox-primary",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Write & Format",
    description:
      "Use our rich text editor to craft your poetry, stories, or lyrics. Format with ease and make your work shine.",
    color: "bg-versebox-secondary",
  },
  {
    icon: Share2,
    step: "03",
    title: "Publish Instantly",
    description:
      "Share your creative work with the world instantly. No waiting for approval, no gatekeepers between you and your audience.",
    color: "bg-versebox-accent",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Grow Your Audience",
    description:
      "Engage with readers, get feedback, and build a following. Track your growth and connect with fellow creators worldwide.",
    color: "bg-versebox-primary",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-versebox-text mb-4">
            How It Works
          </h2>
          <p className="text-lg text-versebox-text-secondary max-w-2xl mx-auto">
            Get started in four simple steps and join a global community of
            creators
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-versebox-gradient rounded-2xl flex items-center justify-center shadow-versebox-lg z-10">
                  <span className="text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>

                {/* Card */}
                <div className="p-8 pt-12 bg-versebox-surface rounded-2xl hover:shadow-versebox transition-all duration-300 h-full border-2 border-transparent hover:border-versebox-primary/20">
                  <div
                    className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-versebox-text mb-3">
                    {item.title}
                  </h3>
                  <p className="text-versebox-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Connector Line (hidden on mobile, shown on desktop except for last item in each row) */}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-versebox-primary to-versebox-secondary ${
                      index % 2 === 1 ? "lg:hidden" : ""
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-versebox-gradient text-white font-semibold rounded-full hover:shadow-versebox-lg transition-all"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
}
