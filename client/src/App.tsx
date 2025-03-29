import { useState, useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from "framer-motion";
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
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for a more dramatic entrance effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
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
        
        {/* Loading Screen */}
        <AnimatePresence>
          {loading && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="futuristic-title text-4xl mb-4">Neketha Suresh</h1>
                <div className="flex space-x-2 justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Main Content */}
        <motion.div 
          className="relative z-10 flex flex-col min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Header />
          
          {/* Hero Section */}
          <section className="flex items-center justify-center py-8 md:py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h1 
                className="futuristic-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Portfolio
              </motion.h1>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <p className="futuristic-subtitle text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
                  Computer Science professional with expertise in Machine Learning, 
                  Web Development, and Data Analysis
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <span className="tech-card px-5 py-2 rounded-md neon-border font-medium">
                  Software Engineer
                </span>
                <span className="tech-card px-5 py-2 rounded-md neon-border font-medium">
                  Data Analyst
                </span>
                <span className="tech-card px-5 py-2 rounded-md neon-border font-medium">
                  Machine Learning Developer
                </span>
              </motion.div>
              
              {/* Hero decorative elements */}
              <div className="mt-12 relative h-8">
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent"></div>
              </div>
            </div>
          </section>
          
          {/* Navigation Tabs */}
          <NavTabs activeTab={activeTab} onTabChange={handleTabChange} />
          
          {/* Content Section */}
          <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderActiveSection()}
              </motion.div>
            </AnimatePresence>
          </main>
          
          <Footer />
        </motion.div>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
