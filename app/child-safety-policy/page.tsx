import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import ChildSafety from "@/components/ChildSafety";

export const metadata = {
  title: "Child Safety Policy - VERSEWING",
  description: "Learn about Child Safety Policy on VERSEWING.",
};

export default function ChildSafetyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ChildSafety />
      </div>
      <Footer />
      <Copyright />
    </main>
  );
}
