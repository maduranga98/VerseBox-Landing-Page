import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export const metadata = {
  title: "Child Safety Policy - VERSEWING",
  description: "Learn about Child Safety Policy on VERSEWING.",
};

export default function ChildSafety() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ChildSafety />
      </div>
      <Footer />
    </main>
  );
}
