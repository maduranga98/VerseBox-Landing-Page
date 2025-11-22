"use client";

import {
  UserPlus,
  PenTool,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Download,
  BookOpen,
  Heart,
  FileText,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download & Create Your Profile",
    description:
      "Get started in minutes! Download INKWINGS from your app store and create your unique creative profile. Choose your username, add a bio, and personalize your space.",
    color: "from-indigo-500 to-purple-500",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
    features: ["2-minute setup", "Personalized profile", "No waiting period"],
  },
  {
    icon: PenTool,
    step: "02",
    title: "Publish Your First Piece",
    description:
      "Use our beautiful, distraction-free editor designed specifically for creative writing. Format your poetry, stories, or lyrics exactly how you envision them.",
    color: "from-purple-500 to-pink-500",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    features: [
      "Distraction-free editor",
      "Perfect formatting",
      "Instant publishing",
    ],
  },
  {
    icon: Users,
    step: "03",
    title: "Connect with Your Community",
    description:
      "Discover fellow creators, explore works in your genres, and engage with meaningful comments. Build genuine connections with readers who appreciate your craft.",
    color: "from-pink-500 to-rose-500",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
    features: [
      "Genre-based discovery",
      "Meaningful engagement",
      "No follower barriers",
    ],
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Grow Your Audience Naturally",
    description:
      "Watch your readership expand as you share consistently. Our discovery system ensures your work reaches readers who love your style, organically building your fanbase.",
    color: "from-rose-500 to-orange-500",
    iconBg: "bg-gradient-to-br from-rose-500 to-orange-500",
    features: [
      "Smart discovery",
      "Organic growth",
      "Engaged readers",
    ],
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white via-inkwings-surface to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div
          className="absolute top-40 -right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <FileText className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-900">
              Simple 4-Step Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-inkwings-text mb-6">
            From Download to{" "}
            <span className="text-gradient">Published Artist</span>
          </h2>
          <p className="text-xl text-inkwings-text-secondary max-w-3xl mx-auto">
            Join thousands of creators who found their audience on INKWINGS
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200" />
            {/* Animated progress indicator */}
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 rounded-full"
              style={{
                height: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      isEven ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div
                      className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-purple-200 ${
                        activeStep === index
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-70"
                      } hover:scale-105 hover:opacity-100`}
                    >
                      {/* Floating badge */}
                      <div
                        className={`absolute -top-4 ${
                          isEven ? "lg:right-8 right-8" : "lg:left-8 left-8"
                        } bg-gradient-to-r ${step.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
                      >
                        Step {step.step}
                      </div>

                      <div
                        className={`flex items-start gap-4 ${
                          isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                        } flex-row mb-6`}
                      >
                        <div
                          className={`${step.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className={isEven ? "lg:text-right" : ""}>
                          <h3 className="text-2xl font-bold text-inkwings-text mb-2">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-inkwings-text-secondary leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Feature highlights */}
                      <div
                        className={`flex flex-wrap gap-2 ${
                          isEven ? "lg:justify-end" : "lg:justify-start"
                        }`}
                      >
                        {step.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1 bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1.5 rounded-full text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-purple-600" />
                            <span className="text-purple-900 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Decorative corner accent */}
                      <div
                        className={`absolute ${
                          isEven ? "top-0 right-0" : "top-0 left-0"
                        } w-20 h-20 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity rounded-full -z-10`}
                      />
                    </div>
                  </div>

                  {/* Center Circle - Timeline Node */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div
                      className={`relative w-20 h-20 rounded-full bg-white border-4 transition-all duration-500 shadow-lg ${
                        activeStep === index
                          ? `border-purple-500 scale-110 shadow-purple-300`
                          : "border-gray-300 scale-100"
                      }`}
                    >
                      <div
                        className={`absolute inset-2 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center transition-transform ${
                          activeStep === index ? "scale-100" : "scale-75"
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 text-white ${
                            activeStep === index ? "animate-pulse" : ""
                          }`}
                        />
                      </div>
                      {/* Ripple effect */}
                      {activeStep === index && (
                        <div className="absolute inset-0 rounded-full border-4 border-purple-400 animate-ping opacity-75" />
                      )}
                    </div>
                  </div>

                  {/* Spacer for even layout */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-3xl border-2 border-purple-100">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-pink-500 fill-pink-500 animate-pulse" />
              <span className="text-lg font-semibold text-gray-700">
                Join 10,000+ Creative Writers
              </span>
              <Heart className="w-6 h-6 text-pink-500 fill-pink-500 animate-pulse" />
            </div>
            <a
              href="#download"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95 text-lg"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Start Your Creative Journey
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-600">
              Free to download • No credit card required • Android available now • iOS coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
