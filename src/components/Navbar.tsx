import React from 'react';
import { Search, Sun } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Navbar: React.FC = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-semibold">RSS Reader</span>
            </div>
            <div className="ml-6 flex items-center">
              <div className="max-w-lg w-full lg:max-w-xs">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <Input
                    type="search"
                    placeholder="Search"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <Button variant="ghost" size="icon">
              <Sun className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;