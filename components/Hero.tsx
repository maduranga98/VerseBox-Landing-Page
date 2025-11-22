"use client";

import { ArrowRight, Play, Sparkles, Smartphone, Apple } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-inkwings-accent opacity-20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-white opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-inkwings-secondary opacity-20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
      {/* Background with gradient fallback and optimized loading */}
      <div className="absolute inset-0">
        {/* Gradient fallback that shows immediately */}
        <div className="absolute inset-0 bg-gradient-to-br from-inkwings-primary via-inkwings-secondary to-inkwings-accent" />
        {/* Image overlay with fade-in effect */}
        <Image
          src="/hero.png"
          alt="Creative writing background"
          fill
          className={`object-cover transition-opacity duration-700 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          priority
          quality={60}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-slide-down">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">
              creative writing platform, poetry app, story sharing, writing
              community
            </span>
          </div>
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Your Creative Work
            <br />
            <span className="text-inkwings-accent">Deserves Its Own Stage</span>
          </h1>
          {/* Subheading */}
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Stop letting your poetry, stories, and lyrics get lost in social
            media noise. INKWINGS is the dedicated platform where your creative
            writing lives forever, gets discovered, and builds you a real
            audience.
          </p>
          {/* Body Copy */}
          <div
            className="text-base sm:text-lg text-white/80 max-w-4xl mx-auto mb-4 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.15s" }}
          >
            <p className="mb-4">
              Social media wasn't built for creators like you. Your carefully
              crafted poems disappear in endless feeds. Your stories compete
              with memes. Your lyrics get buried under cat videos.
            </p>
            <p>
              INKWINGS changes everything. It's a distraction-free sanctuary
              built exclusively for writers, poets, and storytellers. Here, your
              work doesn't just exist-it thrives, gets appreciated, and finds
              the audience it deserves.
            </p>
          </div>
          s{/* CTA Buttons */}
          <div
            className="flex flex-col items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#download"
                className="group px-8 py-4 bg-white text-inkwings-primary font-semibold rounded-full hover:shadow-inkwings-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Smartphone className="w-5 h-5" />
                Download for Android
              </a>
              <a
                href="#download"
                className="group px-8 py-4 bg-white text-inkwings-primary font-semibold rounded-full hover:shadow-inkwings-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Apple className="w-5 h-5" />
                Download for iOS
              </a>
            </div>
            <a
              href="#download"
              className="text-white/90 text-sm hover:text-white transition-all underline underline-offset-4"
            >
              Be Among the First Creators
            </a>
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
