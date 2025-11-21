"use client";

import { Copyright as CopyrightIcon, Award, FileCheck, Scale } from "lucide-react";

const copyrightPoints = [
  {
    icon: Award,
    title: "You Own Your Work",
    description:
      "All creative content you publish on INKWINGS remains your intellectual property. We never claim ownership of your work.",
  },
  {
    icon: FileCheck,
    title: "Timestamped Records",
    description:
      "Every piece of content is timestamped and archived, providing a permanent record of your creative work.",
  },
  {
    icon: Scale,
    title: "Respect Copyright",
    description:
      "We expect all users to respect copyright laws and only publish original work or content they have rights to share.",
  },
  {
    icon: CopyrightIcon,
    title: "DMCA Compliance",
    description:
      "We comply with DMCA regulations and respond promptly to valid copyright infringement notices.",
  },
];

export default function Copyright() {
  return (
    <section id="copyright" className="py-20 md:py-32 bg-inkwings-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            Copyright Information
          </h2>
          <p className="text-lg text-inkwings-text-secondary max-w-2xl mx-auto">
            Protecting your creative rights and respecting intellectual property
          </p>
        </div>

        {/* Copyright Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {copyrightPoints.map((point, index) => {
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

        {/* Detailed Copyright Info */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-inkwings-text mb-6">
            Copyright Policy
          </h3>
          <div className="space-y-4 text-inkwings-text-secondary">
            <p>
              <strong className="text-inkwings-text">Your Rights as a Creator:</strong> When you publish creative content on INKWINGS, you retain full copyright ownership of your work. By publishing, you grant INKWINGS a non-exclusive license to display and distribute your content on our platform.
            </p>
            <p>
              <strong className="text-inkwings-text">Original Content Only:</strong> All content published on INKWINGS must be original work created by you, or you must have explicit permission to share it. Plagiarism and copyright infringement are strictly prohibited and may result in account termination.
            </p>
            <p>
              <strong className="text-inkwings-text">DMCA Notice and Takedown:</strong> If you believe your copyrighted work has been infringed on INKWINGS, please submit a DMCA takedown notice to our designated copyright agent. We will investigate and take appropriate action in accordance with the Digital Millennium Copyright Act.
            </p>
            <p>
              <strong className="text-inkwings-text">Attribution and Fair Use:</strong> When sharing or referencing other creators' work, always provide proper attribution. Fair use exceptions may apply in certain cases, but when in doubt, seek permission from the original creator.
            </p>
            <p>
              <strong className="text-inkwings-text">Platform Brand Assets:</strong> The INKWINGS name, logo, and brand assets are protected by copyright and trademark laws. Use of our brand assets requires prior written permission.
            </p>
            <div className="bg-inkwings-surface rounded-lg p-6 mt-6">
              <h4 className="font-semibold text-inkwings-text mb-3">Copyright Agent Contact</h4>
              <p className="text-sm">
                For DMCA notices or copyright concerns:<br />
                Email: copyright@inkwings.com<br />
                Subject: DMCA Takedown Request / Copyright Inquiry
              </p>
            </div>
            <p className="text-sm pt-4">
              © 2025 INKWINGS. All rights reserved. Last updated: January 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
