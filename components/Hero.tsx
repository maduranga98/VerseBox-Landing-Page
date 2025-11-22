"use client";

import { ArrowRight, Play } from "lucide-react";
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
          {/* CTA Buttons */}
          <div
            className="flex flex-col items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#download"
                className="group px-8 py-4 bg-white text-inkwings-primary font-semibold rounded-full hover:shadow-inkwings-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <svg viewBox="0 0 128 128" className="w-5 h-5">
                  <path
                    fill="currentColor"
                    d="M21.004 43.005c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736a7.338 7.338 0 007.342 7.343 7.33 7.33 0 007.338-7.342V50.342a7.345 7.345 0 00-7.346-7.337m59.192-27.602l5.123-9.355a1.023 1.023 0 00-.401-1.388 1.022 1.022 0 00-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019-5.142-.005-10.013 1.078-14.349 3.005l-5.181-9.429a1.01 1.01 0 00-1.378-.406 1.007 1.007 0 00-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.003-11.351-6.789-21.221-16.845-26.427M48.94 29.86a2.772 2.772 0 01.003-5.545 2.78 2.78 0 012.775 2.774 2.775 2.775 0 01-2.778 2.771m30.107-.006a2.77 2.77 0 01-2.772-2.771 2.793 2.793 0 012.773-2.778 2.79 2.79 0 012.767 2.779 2.767 2.767 0 01-2.768 2.77M31.193 44.392l.011 47.635a7.822 7.822 0 007.832 7.831l5.333.002.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342 4.056 0 7.342-3.295 7.343-7.347l-.004-16.26 9.909-.003.004 16.263c0 4.047 3.293 7.346 7.338 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.352-.004a7.835 7.835 0 007.836-7.834l-.009-47.635-65.624.011zm83.134 5.943a7.338 7.338 0 00-7.341-7.339c-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738a7.334 7.334 0 007.339 7.339 7.337 7.337 0 007.338-7.343l-.005-30.737z"
                  ></path>
                </svg>
                Download for Android
              </a>
              <div className="relative group">
                <a
                  href="#download"
                  className="px-8 py-4 bg-white/50 text-inkwings-primary/50 font-semibold rounded-full transition-all flex items-center gap-2 w-full sm:w-auto justify-center cursor-not-allowed"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg viewBox="0 0 128 128" className="w-5 h-5">
                    <path
                      fill="currentColor"
                      d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"
                    ></path>
                  </svg>
                  Download for iOS
                </a>
                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                    Releasing Soon
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                  </div>
                </div>
              </div>
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
