import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy - INKWINGS",
  description: "Learn how INKWINGS protects your privacy and handles your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <PrivacyPolicy />
      </div>
      <Footer />
    </main>
  );
}
