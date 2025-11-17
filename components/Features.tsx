"use client";

import { Feather, Users, Shield, Zap, Globe, Heart } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Feather,
    image: "/features/rich-editor.png",
    title: "Rich Text Editor",
    description:
      "Create beautiful poetry, stories, and lyrics with our intuitive formatting tools.",
    color: "bg-versebox-primary",
  },
  {
    icon: Users,
    image: "/features/audience.png",
    title: "Build Your Audience",
    description:
      "Connect with readers and writers worldwide. Grow your following organically.",
    color: "bg-versebox-secondary",
  },
  {
    icon: Shield,
    image: "/features/preserved.png",
    title: "Forever Preserved",
    description:
      "Your creative works are safely archived and accessible forever. Never lose your art.",
    color: "bg-versebox-accent",
  },
  {
    icon: Zap,
    image: "/features/publishing.png",
    title: "Instant Publishing",
    description:
      "Share your work instantly with the world. No waiting, no gatekeepers.",
    color: "bg-versebox-primary",
  },
  {
    icon: Globe,
    image: "/features/global.png",
    title: "Global Community",
    description:
      "Join writers from 150+ countries. Multiple languages supported.",
    color: "bg-versebox-secondary",
  },
  {
    icon: Heart,
    image: "/features/engage.png",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-4 sm:p-6 md:p-8 bg-white rounded-2xl hover:shadow-versebox-lg transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-scale-in border-2 border-transparent hover:border-versebox-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with color background */}
                {/* <div
                  className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div> */}

                {/* Optional: Feature Image (if you have images) */}
                {/* Uncomment this block when you have images ready */}
                <div className="relative w-full h-40 sm:h-48 md:h-52 mb-4 sm:mb-6 rounded-xl overflow-hidden bg-versebox-surface group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-versebox-text mb-2 sm:mb-3 group-hover:text-versebox-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-versebox-text-secondary leading-relaxed group-hover:text-versebox-text transition-colors duration-300">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-versebox-gradient text-white font-semibold rounded-full hover:shadow-versebox-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95"
          >
            Start Creating Today
          </a>
        </div>
      </div>
    </section>
  );
}
