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
    <section id="download" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-versebox-gradient rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16">
            {/* Left Column */}
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Be Among the First Creators
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Join our exclusive waitlist and get early access when we launch.
                Plus, founding members get special perks and lifetime benefits!
              </p>

              {/* Features list */}
              <ul className="space-y-4 mb-8">
                {[
                  "Early access before public launch",
                  "Founding member badge & benefits",
                  "Priority support for first 1000 users",
                  "Shape the platform with your feedback",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="group px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl cursor-not-allowed flex items-center justify-center gap-2">
                  <Apple className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-75">Coming Soon to</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </div>
                <div className="group px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl cursor-not-allowed flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs opacity-75">Coming Soon to</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/60 mt-4 text-center">
                Expected Launch: Q1 2026
              </p>
            </div>

            {/* Right Column - Email signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Join 5,000+ Creators
                </h3>
                <p className="text-white/80">
                  Get early access + exclusive founding member benefits
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white text-versebox-text placeholder-versebox-text-secondary focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full px-6 py-4 bg-white text-versebox-primary font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitted ? (
                    "✓ You're on the list!"
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 space-y-2 text-center">
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
        <div className="text-center mt-12">
          <p className="text-versebox-text-secondary">
            Available on iOS and Android • Coming soon to Web
          </p>
        </div>
      </div>
    </section>
  );
}
