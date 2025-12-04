"use client";

import {
  Shield,
  AlertTriangle,
  Flag,
  Users,
  Lock,
  FileWarning,
} from "lucide-react";

const safetyPoints = [
  {
    icon: Shield,
    title: "Zero Tolerance Policy",
    description:
      "VerseWing has absolute zero tolerance for Child Sexual Abuse and Exploitation (CSAE). Any violations result in immediate account termination and law enforcement notification.",
  },
  {
    icon: AlertTriangle,
    title: "Prohibited Content",
    description:
      "Content that sexualizes, grooms, exploits, or endangers minors is strictly forbidden. This includes any suggestive or inappropriate content involving children.",
  },
  {
    icon: Flag,
    title: "Easy Reporting",
    description:
      "Report concerning content immediately through our in-app reporting feature. All reports are reviewed within 24 hours, with urgent cases prioritized.",
  },
  {
    icon: Users,
    title: "Age Verification",
    description:
      "Users must be 13 years or older to create an account. We implement age-appropriate content filtering and parental guidance for younger users.",
  },
  {
    icon: Lock,
    title: "Proactive Moderation",
    description:
      "Our content moderation system actively monitors for inappropriate content. User-generated content is subject to review and removal if it violates safety standards.",
  },
  {
    icon: FileWarning,
    title: "Law Enforcement Cooperation",
    description:
      "We fully cooperate with law enforcement agencies in investigating and prosecuting cases of child exploitation and abuse.",
  },
];

export default function ChildSafety() {
  return (
    <section id="child-safety" className="py-20 md:py-32 bg-inkwings-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            Child Safety Policy
          </h2>
          <p className="text-lg text-inkwings-text-secondary max-w-2xl mx-auto">
            Our commitment to protecting children and maintaining a safe
            creative community
          </p>
        </div>

        {/* Safety Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {safetyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl hover:shadow-inkwings transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-inkwings-gradient flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-inkwings-text mb-3">
                  {point.title}
                </h3>
                <p className="text-inkwings-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Safety Policy */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-8">
          <h3 className="text-2xl font-bold text-inkwings-text mb-6">
            Comprehensive Child Safety Standards
          </h3>
          <div className="space-y-6 text-inkwings-text-secondary">
            <div>
              <h4 className="font-semibold text-inkwings-text mb-2">
                Our Commitment to Child Safety
              </h4>
              <p>
                VerseWing, operated by Lumora Ventures (PVT) LTD, is committed
                to providing a safe environment for all users, especially minors
                under the age of 18. We have established comprehensive standards
                to prevent, detect, and eliminate Child Sexual Abuse and
                Exploitation (CSAE) on our platform.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-inkwings-text mb-2">
                Strictly Prohibited Content
              </h4>
              <p>
                The following content is absolutely prohibited on VerseWing:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Child Sexual Abuse Material (CSAM)</li>
                <li>Content that sexualizes minors in any form</li>
                <li>
                  Content depicting minors in sexual, suggestive, or
                  inappropriate contexts
                </li>
                <li>
                  Content that facilitates, encourages, or glorifies child
                  grooming
                </li>
                <li>Content that exploits, endangers, or harms children</li>
                <li>
                  Content that facilitates contact between adults and minors for
                  inappropriate purposes
                </li>
                <li>
                  Any content that violates child protection laws in any
                  jurisdiction
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-inkwings-text mb-2">
                Content Moderation and Detection
              </h4>
              <p>
                VerseWing employs multiple layers of protection to ensure child
                safety:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Automated content scanning and filtering systems</li>
                <li>Manual review of flagged content by trained moderators</li>
                <li>User reporting mechanisms available throughout the app</li>
                <li>Proactive monitoring of content for policy violations</li>
                <li>Regular audits of moderation processes and policies</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-inkwings-text mb-2">
                Reporting Mechanism
              </h4>
              <p>
                If you encounter content that violates our child safety
                standards, report it immediately:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>
                  <strong>In-App Reporting:</strong> Use the report button on
                  any content or profile
                </li>
                <li>
                  <strong>Email:</strong> safety@versewing.com (for urgent child
                  safety concerns)
                </li>
                <li>
                  <strong>Response Time:</strong> Child safety reports are
                  prioritized and reviewed immediately, with action taken within
                  24 hours
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-inkwings-text mb-2">
                Enforcement Actions
              </h4>
              <p>
                Violations of our child safety policy result in immediate and
                severe consequences:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Immediate removal of violating content</li>
                <li>Permanent account suspension without warning</li>
                <li>Preservation of evidence for law enforcement</li>
                <li>
                  Reporting to National Center for Missing & Exploited Children
                  (NCMEC) and appropriate authorities
                </li>
                <li>Full cooperation with criminal investigations</li>
                <li>
                  IP bans and device fingerprinting to prevent re-registration
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-inkwings-text mb-2">
                Age Requirements and Verification
              </h4>
              <p>To use VerseWing, you must meet our age requirements:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>
                  Minimum age: 13 years old (or applicable age in your
                  jurisdiction)
                </li>
                <li>Age verification during account creation</li>
                <li>
                  Parental consent required for users under 18 where legally
                  mandated
                </li>
                <li>
                  Age-appropriate content filtering enabled by default for
                  younger users
                </li>
                <li>Enhanced privacy protections for minor users</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-inkwings-text mb-2">
                Law Enforcement Cooperation
              </h4>
              <p>
                VerseWing works closely with law enforcement agencies worldwide
                to combat CSAE:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Immediate reporting of CSAM to authorities</li>
                <li>
                  Preservation of evidence and user data for investigations
                </li>
                <li>Cooperation with international law enforcement requests</li>
                <li>Participation in industry-wide child safety initiatives</li>
                <li>
                  Regular consultation with child protection organizations
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-inkwings-text mb-2">
                User Responsibilities
              </h4>
              <p>All VerseWing users are expected to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Report any concerning content immediately</li>
                <li>
                  Never share or engage with inappropriate content involving
                  minors
                </li>
                <li>Respect age restrictions and community guidelines</li>
                <li>Protect personal information of minors</li>
                <li>Foster a safe and respectful creative community</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Emergency Reporting
              </h4>
              <p className="text-red-700 text-sm">
                If you believe a child is in immediate danger, contact your
                local emergency services immediately. For non-emergency child
                safety concerns on VerseWing, contact us at:
              </p>
              <div className="mt-3 text-red-800">
                <p className="font-semibold">Email: safety@versewing.com</p>
                <p className="font-semibold">
                  Subject: URGENT - Child Safety Concern
                </p>
                <p className="text-sm mt-2">
                  Include: Content link, description of violation, and any
                  relevant screenshots
                </p>
              </div>
            </div>

            <div className="bg-inkwings-surface rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-inkwings-text mb-3">
                Contact Information
              </h4>
              <p className="text-sm">
                <strong>Child Safety Officer</strong>
                <br />
                Lumora Ventures (PVT) LTD
                <br />
                Email: safety@versewing.com
                <br />
                App: VerseWing (Available on Google Play Store)
                <br />
                Location: Sri Lanka
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200 mt-8">
              <p className="text-sm">
                <strong className="text-inkwings-text">Policy Scope:</strong>{" "}
                This Child Safety Policy applies to the VerseWing mobile
                application available on Google Play Store, operated by Lumora
                Ventures (PVT) LTD. This policy is part of our broader Terms of
                Service and Community Guidelines.
              </p>
              <p className="text-sm mt-4">
                <strong className="text-inkwings-text">Policy Updates:</strong>{" "}
                We regularly review and update our child safety standards to
                reflect best practices and legal requirements. Continued use of
                VerseWing constitutes acceptance of these standards.
              </p>
            </div>

            <p className="text-sm pt-6 text-inkwings-text font-semibold">
              © 2025 VerseWing by Lumora Ventures (PVT) LTD. All rights
              reserved.
              <br />
              Effective Date: December 2025 | Last Updated: December 4, 2025
            </p>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6">
            <h4 className="font-semibold text-inkwings-text mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-inkwings-accent" />
              For Parents and Guardians
            </h4>
            <p className="text-sm text-inkwings-text-secondary">
              We recommend parents and guardians actively monitor their
              children's online activities. VerseWing provides tools for
              age-appropriate content filtering. For questions about keeping
              your child safe, contact us at safety@versewing.com.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <h4 className="font-semibold text-inkwings-text mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-inkwings-accent" />
              Community Partnership
            </h4>
            <p className="text-sm text-inkwings-text-secondary">
              Child safety is a shared responsibility. Every user plays a role
              in maintaining a safe platform. Thank you for helping us protect
              the creative community and especially our youngest members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
