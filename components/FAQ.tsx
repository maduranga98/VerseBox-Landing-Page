"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is INKWINGS really free?",
    answer:
      "Yes, completely free. No subscriptions, no paywalls, no hidden costs. We're building a community first, monetization later (and when we do, creators will benefit directly).",
  },
  {
    question: "What types of creative writing can I share?",
    answer:
      "Poetry, short stories, microfiction, song lyrics, prose, creative essays, flash fiction-if you wrote it and it's creative, it belongs on INKWINGS.",
  },
  {
    question: "Do I need to be a professional writer?",
    answer:
      "Absolutely not! INKWINGS welcomes all skill levels. Beginners, hobbyists, and professionals all have a place here. It's about the journey, not just the destination.",
  },
  {
    question: "Who owns my content?",
    answer:
      "You do, 100%. You retain all rights to your work. INKWINGS simply has permission to display it on our platform. You can delete your work anytime.",
  },
  {
    question: "How is this different from social media?",
    answer:
      "Social media is about scrolling. INKWINGS is about reading. There are no distractions, no ads, no competing content types. Just writers and readers who appreciate the craft.",
  },
  {
    question: "Can I publish work I've already shared elsewhere?",
    answer:
      "Yes! Your work can exist in multiple places. If you've published on social media, blogs, or other platforms, you can still share it on INKWINGS.",
  },
  {
    question: "What if I'm not confident in my writing yet?",
    answer:
      "Perfect! INKWINGS is designed to help you grow. The community is supportive, feedback is constructive, and everyone remembers being a beginner. Start wherever you are.",
  },
  {
    question: "How do I get discovered?",
    answer:
      "Through genre tags, community exploration, and our discovery features. Unlike social media where you need followers first, INKWINGS lets quality work get found by interested readers naturally.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-inkwings-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            Questions? <span className="text-gradient">We've Got Answers</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-inkwings-surface/50 transition-colors"
              >
                <span className="text-lg font-semibold text-inkwings-text pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-inkwings-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-base text-inkwings-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
