"use client";

import { Feather, Users, Shield, Zap, Globe, Heart } from "lucide-react";

const features = [
  {
    icon: Feather,
    title: "Rich Text Editor",
    description:
      "Create beautiful poetry, stories, and lyrics with our intuitive formatting tools.",
    color: "bg-versebox-primary",
  },
  {
    icon: Users,
    title: "Build Your Audience",
    description:
      "Connect with readers and writers worldwide. Grow your following organically.",
    color: "bg-versebox-secondary",
  },
  {
    icon: Shield,
    title: "Forever Preserved",
    description:
      "Your creative works are safely archived and accessible forever. Never lose your art.",
    color: "bg-versebox-accent",
  },
  {
    icon: Zap,
    title: "Instant Publishing",
    description:
      "Share your work instantly with the world. No waiting, no gatekeepers.",
    color: "bg-versebox-primary",
  },
  {
    icon: Globe,
    title: "Global Community",
    description:
      "Join writers from 150+ countries. Multiple languages supported.",
    color: "bg-versebox-secondary",
  },
  {
    icon: Heart,
    title: "Engage & Discover",
    description:
      "Like, comment, and share. Discover amazing creative works from around the world.",
    color: "bg-versebox-accent",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-versebox-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-versebox-text mb-4">
            Everything You Need to
            <br />
            <span className="text-gradient">Share Your Creativity</span>
          </h2>
          <p className="text-lg text-versebox-text-secondary max-w-2xl mx-auto">
            Powerful features designed for writers, poets, and storytellers of
            all levels.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl hover:shadow-versebox transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-versebox-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-versebox-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-versebox-gradient text-white font-semibold rounded-full hover:shadow-versebox-lg transition-all"
          >
            Start Creating Today
          </a>
        </div>
      </div>
    </section>
  );
}
