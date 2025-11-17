"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-versebox-accent opacity-20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-white opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-versebox-secondary opacity-20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Creative writing background"
          fill
          className="object-cover"
          priority
          quality={75}
        />
        {/* Overlay gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-versebox-primary/90 via-versebox-secondary/85 to-versebox-accent/80" /> */}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-slide-down">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">
              The YouTube of Creative Writing
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Your Creative
            <br />
            <span className="text-versebox-accent">Archive Forever</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Share poetry, stories, lyrics, and creative writing.
            <br className="hidden sm:block" />
            Build your audience. Preserve your words forever.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#waitlist"
              className="group px-8 py-4 bg-white text-versebox-primary font-semibold rounded-full hover:shadow-versebox-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Join the Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => {
                /* Add your demo video handler */
              }}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Play className="w-5 h-5" />
              Watch Teaser
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                2,500+
              </div>
              <div className="text-white/80 text-xs sm:text-sm">Waitlist Sign-ups</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                Coming Soon
              </div>
              <div className="text-white/80 text-xs sm:text-sm">iOS & Android</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                150+
              </div>
              <div className="text-white/80 text-xs sm:text-sm">Countries Interested</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                Q1 2026
              </div>
              <div className="text-white/80 text-xs sm:text-sm">Launch Date</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
