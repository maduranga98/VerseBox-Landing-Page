"use client";

import { Crown, Zap, Award, Users } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Founding Creator Badge",
    description: "Display your status as one of the original community members. Your badge shows you were here from day one, helping build the platform.",
    color: "bg-inkwings-primary",
  },
  {
    icon: Users,
    title: "Shape the Platform",
    description: "Your feedback directly influences features. As a founding member, you have a voice in what we build next. Help create the platform you've always wanted.",
    color: "bg-inkwings-secondary",
  },
  {
    icon: Zap,
    title: "Early Feature Access",
    description: "Test new features before anyone else. Be the first to try innovative tools, format options, and community features as we roll them out.",
    color: "bg-inkwings-accent",
  },
  {
    icon: Award,
    title: "Lifetime Recognition",
    description: "Your founding member status is permanent. Years from now, new creators will see you helped build this community from the beginning.",
    color: "bg-inkwings-primary",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            Be a Founding Creator -{" "}
            <span className="text-gradient">Launch with Us</span>
          </h2>
          <p className="text-lg text-inkwings-text-secondary max-w-2xl mx-auto">
            The first creators to join INKWINGS get special recognition forever
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-4 sm:p-6 md:p-8 bg-inkwings-surface rounded-2xl text-center hover:shadow-inkwings-lg transition-all duration-500 hover:-translate-y-3 hover:scale-105 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${benefit.color} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-inkwings-text mb-2 group-hover:text-inkwings-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-inkwings-text-secondary">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-inkwings-gradient text-white font-semibold rounded-full hover:shadow-inkwings-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 animate-bounce-in"
          >
            Become a Founding Creator
          </a>
        </div>
      </div>
    </section>
  );
}
