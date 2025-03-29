import { Card } from "@/components/ui/card";

type Tab = 'about' | 'experience' | 'projects' | 'education' | 'skills';

interface NavTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const NavTabs = ({ activeTab, onTabChange }: NavTabsProps) => {
  const tabs: { id: Tab; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <div className="w-full bg-black/50 backdrop-blur-sm sticky top-0 z-10 border-b border-white/5">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center md:justify-start space-x-1 md:space-x-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                px-4 py-2 transition-all duration-200 hover:text-primary
                ${activeTab === tab.id 
                  ? 'border-b-2 border-primary text-white font-medium' 
                  : 'text-white/70'}
              `}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
