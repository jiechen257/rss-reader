import React from 'react';
import { Home, Rss, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button"

interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text }) => (
  <Button variant="ghost" className="w-full justify-start">
    <Icon className="mr-2 h-4 w-4" />
    {text}
  </Button>
);

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-background h-full border-r">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">RSS Reader</h1>
        <nav>
          <div className="space-y-1">
            <SidebarItem icon={Home} text="Home" />
            <SidebarItem icon={Rss} text="Feeds" />
            <SidebarItem icon={Settings} text="Settings" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;