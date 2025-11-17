"use client";

import { FileText, Users, AlertCircle, CheckCircle } from "lucide-react";

const termsHighlights = [
  {
    icon: FileText,
    title: "Content Guidelines",
    description:
      "Share original creative works. Respect intellectual property rights and community standards.",
  },
  {
    icon: Users,
    title: "Community Standards",
    description:
      "Be respectful, supportive, and constructive. We foster a positive environment for all creators.",
  },
  {
    icon: AlertCircle,
    title: "Prohibited Content",
    description:
      "No hate speech, harassment, spam, or illegal content. Violations may result in account suspension.",
  },
  {
    icon: CheckCircle,
    title: "Your Responsibilities",
    description:
      "Maintain account security, follow community guidelines, and respect other creators' rights.",
  },
];

export default function TermsOfService() {
  return (
    <section id="terms" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-versebox-text mb-4">
            Terms of Service
          </h2>
          <p className="text-lg text-versebox-text-secondary max-w-2xl mx-auto">
            Guidelines and agreements for using VERSEBOX platform
          </p>
        </div>

        {/* Terms Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {termsHighlights.map((term, index) => {
            const Icon = term.icon;
            return (
              <div
                key={index}
                className="p-8 bg-versebox-surface rounded-2xl hover:shadow-versebox transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-versebox-gradient flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-versebox-text mb-3">
                  {term.title}
                </h3>
                <p className="text-versebox-text-secondary leading-relaxed">
                  {term.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Terms */}
        <div className="bg-versebox-surface rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-versebox-text mb-6">
            Terms and Conditions
          </h3>
          <div className="space-y-6 text-versebox-text-secondary">
            <div>
              <h4 className="font-semibold text-versebox-text mb-2">1. Acceptance of Terms</h4>
              <p>
                By accessing or using VERSEBOX, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-versebox-text mb-2">2. User Account</h4>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 13 years old to create an account.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-versebox-text mb-2">3. Content Ownership and Rights</h4>
              <p>
                You retain all rights to the creative works you publish on VERSEBOX. By publishing content, you grant us a license to display, distribute, and promote your work on our platform. You represent that you have the right to publish all content you share.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-versebox-text mb-2">4. Acceptable Use</h4>
              <p>
                You agree to use VERSEBOX only for lawful purposes. Prohibited activities include but are not limited to: posting plagiarized content, harassing other users, distributing malware, or attempting to compromise platform security.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-versebox-text mb-2">5. Content Moderation</h4>
              <p>
                We reserve the right to remove content that violates our community guidelines or these Terms of Service. Repeated violations may result in account suspension or termination.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-versebox-text mb-2">6. Limitation of Liability</h4>
              <p>
                VERSEBOX is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the platform or inability to access your content.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-versebox-text mb-2">7. Changes to Terms</h4>
              <p>
                We may update these Terms of Service from time to time. We will notify users of significant changes via email or platform notifications.
              </p>
            </div>

            <p className="text-sm pt-4">
              Last updated: January 2025. These terms will be finalized before our Q1 2026 launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
