import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import HomePage from "./HomePage.jsx";
import FeatureSection from "./FeatureSection.jsx";
import PricePage from "./PricePage.jsx";
import FeedBack from "./FeedBack"
import FAQ from "./FAQ"
import Footer from "./Footer.jsx"

export default function MainPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Animated gradient blobs */}
        <div className={`absolute w-[600px] h-[600px] -top-48 -left-48 bg-gradient-to-r from-violet-600/30 to-purple-500/30 rounded-full blur-[100px] transition-transform duration-1000 ${mounted ? 'translate-x-0 translate-y-0' : '-translate-x-20 -translate-y-20'}`}></div>
        
        <div className={`absolute w-[500px] h-[500px] -top-64 -right-64 bg-gradient-to-r from-emerald-500/20 to-cyan-400/20 rounded-full blur-[100px] transition-transform duration-1000 delay-200 ${mounted ? 'translate-x-0 translate-y-0' : 'translate-x-20 -translate-y-20'}`}></div>
        
        {/* Particle overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-10 mix-blend-overlay"></div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 backdrop-blur-[2px]">


        <Header />

        <HomePage />

        <FeatureSection />

        <PricePage />

        <FeedBack />

        <FAQ />

        <Footer />



      </div>

      {/* Subtle animated border gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 border-[1px] border-white/5 rounded-none transition-all duration-1000"></div>
      </div>
    </div>
  );
}