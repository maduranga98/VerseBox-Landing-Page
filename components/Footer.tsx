"use client";

import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Heart,
} from "lucide-react";
import InkwingsIcon from "./InkwingsIcon";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Community", href: "#community" },
    { name: "Pricing", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Copyright", href: "/copyright" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/inkwings", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://instagram.com/inkwings",
    label: "Instagram",
  },
  { icon: Youtube, href: "https://youtube.com/@inkwings", label: "YouTube" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/inkwings",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-inkwings-surface border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand column */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <InkwingsIcon size={40} />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-inkwings-text">
                  INKWINGS
                </h3>
                <p className="text-xs text-inkwings-text-secondary">
                  Your Creative Archive
                </p>
              </div>
            </div>
            <p className="text-inkwings-text-secondary text-sm mb-6 max-w-xs">
              The YouTube of creative writing. Share poetry, stories, lyrics and
              build your audience.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-inkwings-gradient flex items-center justify-center transition-all group"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-inkwings-text-secondary group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-inkwings-text mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-inkwings-text-secondary hover:text-inkwings-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-inkwings-text mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-inkwings-text-secondary hover:text-inkwings-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-inkwings-text mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-inkwings-text-secondary hover:text-inkwings-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-inkwings-text mb-1 text-sm sm:text-base">
                Stay Updated
              </h4>
              <p className="text-xs sm:text-sm text-inkwings-text-secondary">
                Get the latest updates, tips, and creative inspiration
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-3 sm:px-4 py-2 sm:py-2.5 text-sm rounded-lg bg-white border border-gray-300 text-inkwings-text placeholder-inkwings-text-secondary focus:outline-none focus:ring-2 focus:ring-inkwings-primary"
              />
              <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-inkwings-gradient text-white font-semibold rounded-lg hover:shadow-inkwings transition-all flex items-center justify-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-inkwings-text-secondary">
          <div className="flex flex-col sm:flex-row items-center gap-1 text-center sm:text-left">
            <span className="flex items-center gap-1">
              © 2025 INKWINGS. Made with
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-inkwings-accent fill-inkwings-accent" />
              for creators
            </span>
            <span className="hidden sm:inline">worldwide • Launching Q1 2026</span>
            <span className="sm:hidden">worldwide</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="/privacy-policy"
              className="hover:text-inkwings-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-inkwings-primary transition-colors"
            >
              Terms
            </a>
            <a
              href="/copyright"
              className="hover:text-inkwings-primary transition-colors"
            >
              Copyright
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
