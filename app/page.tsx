import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Countdown />
      <Features />
      <Benefits />
      <HowItWorks />
      <Community />
      <CTA />
      <Footer />
    </main>
  );
}
