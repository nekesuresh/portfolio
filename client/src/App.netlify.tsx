import { useState, useEffect, useRef } from 'react';
import { Route, Switch } from 'wouter';
import './index.css';
import NavTabs from './components/NavTabs';
import Header from './components/Header';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from './sections/Skills';
import AnimatedDots from './components/AnimatedDots';
import NotFound from './pages/not-found';

type Tab = 'about' | 'experience' | 'projects' | 'education' | 'skills';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about');
  const sectionRefs = useRef<Record<Tab, HTMLElement | null>>({
    about: null,
    experience: null,
    projects: null,
    education: null,
    skills: null,
  });

  useEffect(() => {
    document.title = "Neketha Suresh - Portfolio";
  }, []);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    sectionRefs.current[tab]?.scrollIntoView({ behavior: 'smooth' });
  };

  const registerRef = (tab: Tab, element: HTMLElement | null) => {
    sectionRefs.current[tab] = element;
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <AnimatedDots />
      
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 z-10 relative">
        <NavTabs activeTab={activeTab} onTabChange={handleTabChange} />

        <Switch>
          <Route path="/">
            <div>
              <div ref={el => registerRef('about', el)}>
                <About />
              </div>
              <div ref={el => registerRef('skills', el)}>
                <Skills />
              </div>
              <div ref={el => registerRef('experience', el)}>
                <Experience />
              </div>
              <div ref={el => registerRef('projects', el)}>
                <Projects />
              </div>
              <div ref={el => registerRef('education', el)}>
                <Education />
              </div>
            </div>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>

      <footer className="py-6 text-center text-white/60 text-sm z-10 relative border-t border-white/10">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Neketha Suresh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;