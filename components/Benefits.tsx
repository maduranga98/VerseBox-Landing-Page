"use client";

import {
  Crown,
  Zap,
  Award,
  Users,
  ArrowRight,
  Star,
  BadgeCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    icon: Crown,
    title: "Founding Creator Badge",
    description:
      "Display your status as one of the original community members. Your badge shows you were here from day one, helping build the platform.",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    highlight: "Exclusive",
  },
  {
    icon: Users,
    title: "Shape the Platform",
    description:
      "Your feedback directly influences features. As a founding member, you have a voice in what we build next. Help create the platform you've always wanted.",
    color: "bg-gradient-to-br from-indigo-500 to-purple-500",
    highlight: "Influential",
  },
  {
    icon: Zap,
    title: "Early Feature Access",
    description:
      "Test new features before anyone else. Be the first to try innovative tools, format options, and community features as we roll them out.",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    highlight: "First Access",
  },
  {
    icon: Award,
    title: "Lifetime Recognition",
    description:
      "Your founding member status is permanent. Years from now, new creators will see you helped build this community from the beginning.",
    color: "bg-gradient-to-br from-pink-500 to-rose-500",
    highlight: "Forever",
  },
];

export default function Benefits() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="benefits"
      className="py-20 md:py-32 bg-gradient-to-b from-white via-amber-50 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
            <span className="text-sm font-semibold text-yellow-900">
              Limited Time Offer
            </span>
            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            Be a Founding Creator -{" "}
            <span className="text-gradient">Launch with Us</span>
          </h2>
          <p className="text-lg text-inkwings-text-secondary max-w-2xl mx-auto">
            The first creators to join INKWINGS get special recognition forever
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Highlight badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3" />
                    {benefit.highlight}
                  </div>
                </div>

                <div className="relative p-8 bg-white rounded-3xl text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-2 border-transparent hover:border-yellow-200 overflow-hidden h-full flex flex-col">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center flex-grow">
                    <div
                      className={`${benefit.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-xl`}
                    >
                      <Icon className="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-inkwings-text mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 transition-all duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-inkwings-text-secondary leading-relaxed flex-grow">
                      {benefit.description}
                    </p>

                    {/* Animated arrow on hover */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="inline-flex items-center gap-1 text-orange-600 font-semibold text-sm">
                        <span>Claim yours</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner glow */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <a
              href="#download"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 text-lg"
            >
              <Crown className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Become a Founding Creator
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-500" />
            </a>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full font-semibold animate-pulse">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Limited spots remaining
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
