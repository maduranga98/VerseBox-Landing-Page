"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import VerseboxIcon from "./VerseboxIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <VerseboxIcon size={40} />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-versebox-text">
                VERSEBOX
              </h1>
              <p className="text-xs text-versebox-text-secondary hidden sm:block">
                Your Creative Archive
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-versebox-text-secondary hover:text-versebox-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-versebox-text-secondary hover:text-versebox-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#community"
              className="text-versebox-text-secondary hover:text-versebox-primary transition-colors"
            >
              Community
            </a>
            <a
              href="#download"
              className="px-6 py-2.5 bg-versebox-gradient text-white font-semibold rounded-full hover:shadow-versebox transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-versebox-text"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#features"
              className="block py-2 text-versebox-text-secondary hover:text-versebox-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block py-2 text-versebox-text-secondary hover:text-versebox-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#community"
              className="block py-2 text-versebox-text-secondary hover:text-versebox-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community
            </a>
            <a
              href="#download"
              className="block py-3 px-6 bg-versebox-gradient text-white font-semibold rounded-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
