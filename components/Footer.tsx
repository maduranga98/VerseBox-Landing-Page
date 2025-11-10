"use client";

import {
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Heart,
} from "lucide-react";
import VerseboxIcon from "./VerseboxIcon";

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
  resources: [
    { name: "Help Center", href: "#" },
    { name: "Guidelines", href: "#" },
    { name: "API Docs", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Copyright", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/versebox", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://instagram.com/versebox",
    label: "Instagram",
  },
  { icon: Youtube, href: "https://youtube.com/@versebox", label: "YouTube" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/versebox",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-versebox-surface border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <VerseboxIcon size={40} />
              <div>
                <h3 className="text-xl font-bold text-versebox-text">
                  VERSEBOX
                </h3>
                <p className="text-xs text-versebox-text-secondary">
                  Your Creative Archive
                </p>
              </div>
            </div>
            <p className="text-versebox-text-secondary text-sm mb-6 max-w-xs">
              The YouTube of creative writing. Share poetry, stories, lyrics and
              build your audience.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white hover:bg-versebox-gradient flex items-center justify-center transition-all group"
                  >
                    <Icon className="w-5 h-5 text-versebox-text-secondary group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-semibold text-versebox-text mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-versebox-text-secondary hover:text-versebox-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-versebox-text mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-versebox-text-secondary hover:text-versebox-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-versebox-text mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-versebox-text-secondary hover:text-versebox-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-versebox-text mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-versebox-text-secondary hover:text-versebox-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-versebox-text mb-1">
                Stay Updated
              </h4>
              <p className="text-sm text-versebox-text-secondary">
                Get the latest updates, tips, and creative inspiration
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-lg bg-white border border-gray-300 text-versebox-text placeholder-versebox-text-secondary focus:outline-none focus:ring-2 focus:ring-versebox-primary"
              />
              <button className="px-6 py-2.5 bg-versebox-gradient text-white font-semibold rounded-lg hover:shadow-versebox transition-all flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-versebox-text-secondary">
          <div className="flex items-center gap-1">
            <span>© 2025 VERSEBOX. Made with</span>
            <Heart className="w-4 h-4 text-versebox-accent fill-versebox-accent" />
            <span>for creators worldwide • Launching Q1 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-versebox-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-versebox-primary transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-versebox-primary transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
