"use client";

import { Crown, Zap, Award, Users } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Founding Member Badge",
    description: "Exclusive badge displayed on your profile forever",
    color: "bg-versebox-primary",
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Be the first to try new features before anyone else",
    color: "bg-versebox-secondary",
  },
  {
    icon: Award,
    title: "Premium Features",
    description: "Free access to premium features for 1 year",
    color: "bg-versebox-accent",
  },
  {
    icon: Users,
    title: "Direct Influence",
    description: "Shape the platform with your feedback and suggestions",
    color: "bg-versebox-primary",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-versebox-surface rounded-full mb-6">
            <Crown className="w-4 h-4 text-versebox-primary" />
            <span className="text-sm font-medium text-versebox-primary">
              Limited Time Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-versebox-text mb-4">
            Founding Member <span className="text-gradient">Benefits</span>
          </h2>
          <p className="text-lg text-versebox-text-secondary max-w-2xl mx-auto">
            Join the waitlist now and unlock exclusive lifetime perks as a
            founding member
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-4 sm:p-6 md:p-8 bg-versebox-surface rounded-2xl text-center hover:shadow-versebox-lg transition-all duration-500 hover:-translate-y-3 hover:scale-105 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${benefit.color} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-versebox-text mb-2 group-hover:text-versebox-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-versebox-text-secondary">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-versebox-text-secondary mb-6 animate-pulse">
            🔥 Only the first 1,000 members get founding status
          </p>

          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 bg-versebox-gradient text-white font-semibold rounded-full hover:shadow-versebox-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 animate-bounce-in"
          >
            Claim Your Spot Now
          </a>
        </div>
      </div>
    </section>
  );
}
