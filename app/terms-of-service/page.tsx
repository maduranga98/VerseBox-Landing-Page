import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsOfService from "@/components/TermsOfService";

export const metadata = {
  title: "Terms of Service - INKWINGS",
  description: "Read the Terms of Service for using the INKWINGS platform.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <TermsOfService />
      </div>
      <Footer />
    </main>
  );
}
