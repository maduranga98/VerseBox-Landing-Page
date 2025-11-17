import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

export const metadata = {
  title: "Copyright Information - VERSEBOX",
  description: "Learn about copyright policies and protections on VERSEBOX.",
};

export default function CopyrightPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Copyright />
      </div>
      <Footer />
    </main>
  );
}
