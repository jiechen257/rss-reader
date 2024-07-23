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
    <div className="w-64 bg-white h-full shadow-md flex flex-col">
    <div className="p-4 flex-grow">
      <nav>
        <ul className="space-y-2">
          <li><a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100">仪表盘</a></li>
          <li><a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100">稍后阅读</a></li>
          <li><a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100">资料库</a></li>
          <li><a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100">团队</a></li>
        </ul>
      </nav>
    </div>
    <div className="p-4 border-t">
      <h3 className="font-semibold mb-2 text-sm text-gray-500">订阅源</h3>
      <ul className="space-y-2">
        <li><a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100">全部文章</a></li>
        <li><a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 pl-8">tech</a></li>
        <li><a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 pl-8">阮一峰的网络日志</a></li>
      </ul>
    </div>
  </div>
  );
};

export default Sidebar;