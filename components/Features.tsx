"use client";

import { Feather, Users, TrendingUp, Archive } from "lucide-react";

const features = [
  {
    icon: Feather,
    title: "A Stage Built Only for Writers",
    description:
      "Imagine a platform where everyone is here for one reason: to read, write, and appreciate creative work. No influencers selling products. No political rants. No random content stealing attention.\n\nINKWINGS is that rare space - 100% focused on creative writing. Your poetry shares space with poetry. Your stories sit alongside stories. Your audience is here specifically to discover work like yours.",
    color: "bg-inkwings-primary",
  },
  {
    icon: Users,
    title: "Every Creation Deserves Recognition",
    description:
      "Stop self-censoring. Stop hiding your 'not quite ready' pieces. On INKWINGS, every poem, story, and lyric you publish adds to your creative journey.\n\nReaders can see your evolution. Fellow creators offer genuine feedback. And your experimental work often resonates more than you expect. Nothing gets buried-everything stays accessible, forever.",
    color: "bg-inkwings-secondary",
  },
  {
    icon: TrendingUp,
    title: "Built-in Audience Discovery",
    description:
      "No follower count required. INKWINGS' discovery system connects your work with readers who actually want to find it. Through genre tags, curated collections, and a community that actively explores, new creators get seen.\n\nYour first poem has the same chance of being discovered as your hundredth. Fresh voices are celebrated here.",
    color: "bg-inkwings-accent",
  },
  {
    icon: Archive,
    title: "Forever Preserved, Always Accessible",
    description:
      "Your creative work isn't temporary content-it's your legacy. INKWINGS archives everything permanently. Five years from now, readers can still discover your early poems. Ten years later, your stories remain accessible.\n\nThink of it as your personal creative museum that the world can visit anytime.",
    color: "bg-inkwings-primary",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-inkwings-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-inkwings-text mb-4">
            INKWINGS: Where Your Creative Work
            <br />
            <span className="text-gradient">Finally Gets Its Own Home</span>
          </h2>
          <p className="text-lg text-inkwings-text-secondary max-w-3xl mx-auto">
            No algorithms. No distractions. No competing with viral videos. Just
            pure creative expression in a community that actually reads.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 md:p-8 bg-white rounded-2xl hover:shadow-inkwings-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-scale-in border-2 border-transparent hover:border-inkwings-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with color background */}
                <div
                  className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-inkwings-text mb-4 group-hover:text-inkwings-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <div className="text-base text-inkwings-text-secondary leading-relaxed whitespace-pre-line">
                  {feature.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-inkwings-gradient text-white font-semibold rounded-full hover:shadow-inkwings-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95"
          >
            Start Your Creative Journey
          </a>
        </div>
      </div>
    </section>
  );
}
