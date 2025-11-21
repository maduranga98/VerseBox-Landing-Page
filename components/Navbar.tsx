"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronUp } from "lucide-react";
import InkwingsIcon from "./InkwingsIcon";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#community", label: "Community" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      setShowBackToTop(window.scrollY > 500);

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled_percentage = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled_percentage);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/30 z-[60]">
        <div
          className="h-full bg-inkwings-gradient transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-inkwings-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <InkwingsIcon size={40} />
              </div>
              <div className="transform transition-all duration-300 group-hover:translate-x-1">
                <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-inkwings-text" : "text-white"
                }`}>
                  INKWINGS
                </h1>
                <p className={`text-xs hidden sm:block transition-colors duration-300 ${
                  isScrolled ? "text-inkwings-text-secondary" : "text-white/80"
                }`}>
                  Your Creative Archive
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                    activeSection === item.href
                      ? isScrolled
                        ? "text-inkwings-primary"
                        : "text-white"
                      : isScrolled
                        ? "text-inkwings-text-secondary hover:text-inkwings-primary"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Animated underline */}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-inkwings-primary" : "bg-white"
                  }`} />

                  {/* Hover background */}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                    isScrolled ? "bg-inkwings-primary/5" : "bg-white/10"
                  }`} />

                  {/* Active indicator */}
                  {activeSection === item.href && (
                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full animate-pulse ${
                      isScrolled ? "bg-inkwings-primary" : "bg-white"
                    }`} />
                  )}
                </a>
              ))}

              <a
                href="#download"
                className="ml-4 px-6 py-2.5 bg-inkwings-gradient text-white font-semibold rounded-full hover:shadow-inkwings-lg transform hover:scale-105 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? "text-inkwings-text hover:bg-inkwings-primary/10" : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 transform ${
                    activeSection === item.href
                      ? "text-inkwings-primary bg-inkwings-primary/10 translate-x-2"
                      : "text-inkwings-text-secondary hover:text-inkwings-primary hover:bg-inkwings-primary/5 hover:translate-x-2"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#download"
                className="block mt-4 py-3 px-6 bg-inkwings-gradient text-white font-semibold rounded-full text-center transform hover:scale-105 transition-all duration-300 active:scale-95"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-inkwings-gradient text-white rounded-full shadow-inkwings-lg hover:shadow-inkwings transform hover:scale-110 transition-all duration-300 animate-slide-up hover:-translate-y-1 active:scale-95"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  );
}
