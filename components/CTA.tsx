"use client";

import {
  Apple,
  Smartphone,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Download,
  Rocket,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission (integrate with your backend)
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const trustSignals = [
    { icon: CheckCircle2, text: "Free forever" },
    { icon: CheckCircle2, text: "No ads, ever" },
    { icon: CheckCircle2, text: "Your content, your rights" },
    { icon: CheckCircle2, text: "No follower count needed" },
    { icon: CheckCircle2, text: "All skill levels welcome" },
  ];

  return (
    <section
      id="download"
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-white via-purple-50 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div
          className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 p-6 sm:p-8 md:p-12 lg:p-16 relative">
            {/* Animated stars background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Sparkles className="absolute top-10 left-10 w-6 h-6 text-white/30 animate-pulse" />
              <Sparkles
                className="absolute top-20 right-20 w-4 h-4 text-white/20 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <Sparkles
                className="absolute bottom-20 left-1/3 w-5 h-5 text-white/25 animate-pulse"
                style={{ animationDelay: "2s" }}
              />
            </div>

            {/* Left Column */}
            <div className="text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Rocket className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold">
                  Launch Your Creative Journey
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Your Creative Work Has Been Waiting for This Moment
              </h2>

              <div className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed space-y-4">
                <p>
                  Every poem sitting in your notes app. Every story draft on
                  your laptop. Every lyric in your phone. They're all waiting to
                  find their audience.
                </p>
                <p className="font-semibold text-white">
                  Download INKWINGS today and become one of the founding
                  creators. Your first piece could be published in the next 10
                  minutes. Your audience is waiting to discover you.
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="#waitlist"
                    className="group px-6 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
                  >
                    <div>
                      <svg viewBox="0 0 128 128" className="w-5 h-5">
                        <path
                          fill="currentColor"
                          d="M21.004 43.005c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736a7.338 7.338 0 007.342 7.343 7.33 7.33 0 007.338-7.342V50.342a7.345 7.345 0 00-7.346-7.337m59.192-27.602l5.123-9.355a1.023 1.023 0 00-.401-1.388 1.022 1.022 0 00-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019-5.142-.005-10.013 1.078-14.349 3.005l-5.181-9.429a1.01 1.01 0 00-1.378-.406 1.007 1.007 0 00-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.003-11.351-6.789-21.221-16.845-26.427M48.94 29.86a2.772 2.772 0 01.003-5.545 2.78 2.78 0 012.775 2.774 2.775 2.775 0 01-2.778 2.771m30.107-.006a2.77 2.77 0 01-2.772-2.771 2.793 2.793 0 012.773-2.778 2.79 2.79 0 012.767 2.779 2.767 2.767 0 01-2.768 2.77M31.193 44.392l.011 47.635a7.822 7.822 0 007.832 7.831l5.333.002.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342 4.056 0 7.342-3.295 7.343-7.347l-.004-16.26 9.909-.003.004 16.263c0 4.047 3.293 7.346 7.338 7.338 4.056.003 7.344-3.292 7.343-7.344l-.005-16.259 5.352-.004a7.835 7.835 0 007.836-7.834l-.009-47.635-65.624.011zm83.134 5.943a7.338 7.338 0 00-7.341-7.339c-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738a7.334 7.334 0 007.339 7.339 7.337 7.337 0 007.338-7.343l-.005-30.737z"
                        ></path>
                      </svg>
                    </div>
                    <span>Download for Android</span>
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                  </a>
                  <a
                    href="#waitlist"
                    className="group px-6 py-4 bg-white text-purple-600 font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
                  >
                    <div>
                      <svg viewBox="0 0 128 128" className="w-5 h-5">
                        <path
                          fill="currentColor"
                          d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"
                        ></path>
                      </svg>
                    </div>
                    <span>Download for iOS</span>
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                  </a>
                </div>
                <p className="text-white/80 text-sm text-center sm:text-left">
                  Available now on Google Play and App Store • Free forever
                </p>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {trustSignals.map((signal, index) => {
                  const Icon = signal.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-white/90"
                    >
                      <Icon className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span className="text-sm font-medium">{signal.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Email signup */}
            <div className="relative z-10">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mb-4">
                    <Mail className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Join 10,000+ Creators
                  </h3>
                  <p className="text-base text-gray-600">
                    Get early access + exclusive founding member benefits
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-4 text-base rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all border-2 border-transparent focus:border-purple-200"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full px-6 py-4 text-base bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 hover:scale-105 active:scale-95 group"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        You're on the list!
                      </>
                    ) : (
                      <>
                        Get Early Access
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                    <Sparkles className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                    <p className="text-sm text-yellow-900 font-semibold">
                      First 1,000 members get lifetime founding status
                    </p>
                  </div>
                  <p className="text-xs text-center text-gray-500">
                    No spam. Unsubscribe anytime. We respect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12">
          <p className="text-base text-gray-600 px-4">
            Available on iOS and Android • Coming soon to Web
          </p>
        </div>
      </div>
    </section>
  );
}
