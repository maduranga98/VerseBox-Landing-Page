import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import Problem from "@/components/Problem";
import WhoIsItFor from "@/components/WhoIsItFor";
import ValueProposition from "@/components/ValueProposition";
import BenefitsOverTime from "@/components/BenefitsOverTime";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <WhoIsItFor />
      <HowItWorks />
      <ValueProposition />
      <BenefitsOverTime />
      <Benefits />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
