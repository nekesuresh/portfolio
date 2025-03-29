import { useState, useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import AnimatedDots from "@/components/AnimatedDots";
import Header from "@/components/Header";
import NavTabs from "@/components/NavTabs";
import Footer from "@/components/Footer";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";

// Tab types for navigation
type Tab = 'about' | 'experience' | 'projects' | 'education' | 'skills';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about');
  
  // Handle tab change
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  // Render the active section based on tab
  const renderActiveSection = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Animated Dots Background */}
        <AnimatedDots />
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          
          {/* Hero Section */}
          <section className="flex items-center justify-center py-12 md:py-20 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                My React Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8 animate-fade-in">
                Computer Science professional with expertise in Machine Learning, Web Development, and Data Analysis
              </p>
              <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
                <span className="bg-primary/10 text-white px-4 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors">
                  Software Engineer
                </span>
                <span className="bg-green-500/10 text-white px-4 py-2 rounded-full font-medium hover:bg-green-500/20 transition-colors">
                  Data Analyst
                </span>
                <span className="bg-purple-500/10 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-500/20 transition-colors">
                  Machine Learning Developer
                </span>
              </div>
            </div>
          </section>
          
          {/* Navigation Tabs */}
          <NavTabs activeTab={activeTab} onTabChange={handleTabChange} />
          
          {/* Content Section */}
          <main className="flex-grow container mx-auto px-4 py-8">
            {renderActiveSection()}
          </main>
          
          <Footer />
        </div>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
