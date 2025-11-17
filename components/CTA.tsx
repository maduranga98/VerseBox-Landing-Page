"use client";

import { Apple, Smartphone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <section id="download" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-versebox-gradient rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Left Column */}
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Be Among the First Creators
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Join our exclusive waitlist and get early access when we launch.
                Plus, founding members get special perks and lifetime benefits!
              </p>

              {/* Features list */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Early access before public launch",
                  "Founding member badge & benefits",
                  "Priority support for first 1000 users",
                  "Shape the platform with your feedback",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-sm sm:text-base text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl cursor-not-allowed flex items-center justify-center gap-2">
                  <Apple className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-75">Coming Soon to</div>
                    <div className="text-xs sm:text-sm font-bold">App Store</div>
                  </div>
                </div>
                <div className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl cursor-not-allowed flex items-center justify-center gap-2">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-75">Coming Soon to</div>
                    <div className="text-xs sm:text-sm font-bold">Google Play</div>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/60 mt-3 sm:mt-4 text-center sm:text-left">
                Expected Launch: Q1 2026
              </p>
            </div>

            {/* Right Column - Email signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full mb-3 sm:mb-4">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Join 5,000+ Creators
                </h3>
                <p className="text-sm sm:text-base text-white/80">
                  Get early access + exclusive founding member benefits
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-xl bg-white text-versebox-text placeholder-versebox-text-secondary focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-white text-versebox-primary font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitted ? (
                    "✓ You're on the list!"
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2 text-center">
                <p className="text-xs text-white/60">
                  🎁 First 1,000 members get lifetime founding member status
                </p>
                <p className="text-xs text-white/60">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-versebox-text-secondary px-4">
            Available on iOS and Android • Coming soon to Web
          </p>
        </div>
      </div>
    </section>
  );
}
