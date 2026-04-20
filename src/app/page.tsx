import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CountriesSection from "../components/CountriesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    
    <div className="min-h-screen flex flex-col items-center">
        <Header />

      <main className="flex-1">
        <Hero />
        <CountriesSection />
      </main>

        <Footer />
    </div>
  );
}
