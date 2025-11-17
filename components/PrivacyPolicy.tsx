"use client";

import { Shield, Lock, Eye, Database } from "lucide-react";

const privacyPoints = [
  {
    icon: Shield,
    title: "Your Data is Protected",
    description:
      "We implement industry-standard security measures to protect your personal information and creative works.",
  },
  {
    icon: Lock,
    title: "Secure & Encrypted",
    description:
      "All data is encrypted in transit and at rest. Your privacy and security are our top priorities.",
  },
  {
    icon: Eye,
    title: "Transparent Practices",
    description:
      "We clearly communicate what data we collect, how we use it, and never sell your information to third parties.",
  },
  {
    icon: Database,
    title: "You Own Your Content",
    description:
      "Your creative works belong to you. We simply provide the platform to showcase and preserve them.",
  },
];

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="py-20 md:py-32 bg-versebox-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-versebox-text mb-4">
            Privacy Policy
          </h2>
          <p className="text-lg text-versebox-text-secondary max-w-2xl mx-auto">
            Your privacy matters to us. Here's how we protect your data and respect your rights.
          </p>
        </div>

        {/* Privacy Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {privacyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl hover:shadow-versebox transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-versebox-gradient flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-versebox-text mb-3">
                  {point.title}
                </h3>
                <p className="text-versebox-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-versebox-text mb-6">
            Our Commitment to Privacy
          </h3>
          <div className="space-y-4 text-versebox-text-secondary">
            <p>
              At VERSEBOX, we are committed to protecting your privacy and ensuring the security of your personal information and creative works. This Privacy Policy outlines how we collect, use, and safeguard your data.
            </p>
            <p>
              <strong className="text-versebox-text">Information We Collect:</strong> We collect information you provide when creating an account, publishing content, and interacting with our platform. This includes your username, email address, profile information, and the creative works you choose to share.
            </p>
            <p>
              <strong className="text-versebox-text">How We Use Your Information:</strong> We use your data to provide and improve our services, personalize your experience, communicate with you about updates and features, and ensure the security of our platform.
            </p>
            <p>
              <strong className="text-versebox-text">Data Sharing:</strong> We do not sell your personal information to third parties. We may share data with service providers who help us operate our platform, but only to the extent necessary and under strict confidentiality agreements.
            </p>
            <p>
              <strong className="text-versebox-text">Your Rights:</strong> You have the right to access, correct, or delete your personal information at any time. You can also export your creative works and close your account if you choose.
            </p>
            <p className="text-sm pt-4">
              Last updated: January 2025. This policy will be updated as we approach our Q1 2026 launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
