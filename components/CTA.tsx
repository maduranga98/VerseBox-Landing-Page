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
        <div className="bg-inkwings-gradient rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 p-6 sm:p-8 md:p-12 lg:p-16">
            {/* Left Column */}
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Your Creative Work Has Been Waiting for This Moment
              </h2>
              <div className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed space-y-4">
                <p>
                  Every poem sitting in your notes app. Every story draft on your laptop. Every lyric in your phone. They're all waiting to find their audience.
                </p>
                <p>
                  INKWINGS is that audience. We're that community. This is that moment.
                </p>
                <p>
                  Stop hiding your creativity. Stop letting social media dictate your worth. Stop waiting for permission to share your art.
                </p>
                <p className="font-semibold">
                  Download INKWINGS today and become one of the founding creators who help build the world's premier creative writing platform. Your first piece could be published in the next 10 minutes. Your audience is waiting to discover you.
                </p>
              </div>

              {/* Primary CTA Buttons */}
              <div className="space-y-4 mb-6">
                <p className="text-white font-semibold text-lg">Primary CTA:</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="#waitlist"
                    className="group px-6 py-4 bg-white text-inkwings-primary font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Smartphone className="w-5 h-5" />
                    Download for Android
                  </a>
                  <a
                    href="#waitlist"
                    className="group px-6 py-4 bg-white text-inkwings-primary font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Apple className="w-5 h-5" />
                    Download for iOS
                  </a>
                </div>
                <p className="text-white/80 text-sm">
                  Available now on Google Play and App Store. No credit card required. No hidden fees. Just pure creative freedom.
                </p>
              </div>

              {/* Trust signals */}
              <div className="space-y-2">
                <p className="text-white font-semibold mb-3">Trust signals:</p>
                <ul className="space-y-2">
                  {[
                    "✓ Free forever",
                    "✓ No ads, ever",
                    "✓ Your content, your rights",
                    "✓ No follower count needed to start",
                    "✓ All skill levels welcome",
                  ].map((feature, index) => (
                    <li key={index} className="text-sm text-white/90">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
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
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-xl bg-white text-inkwings-text placeholder-inkwings-text-secondary focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-white text-inkwings-primary font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
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
          <p className="text-sm sm:text-base text-inkwings-text-secondary px-4">
            Available on iOS and Android • Coming soon to Web
          </p>
        </div>
      </div>
    </section>
  );
}
