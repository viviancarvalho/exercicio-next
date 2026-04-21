import Hero from "../components/Hero";
import CountriesSection from "../components/CountriesSection";

export default function Home() {
  return (
    
    <div className="min-h-screen flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <CountriesSection />
      </main>
    </div>
  );
}
