
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-navy/90 backdrop-blur-lg shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-white font-bold text-xl">VisuallyStory</a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#text-converter" className="text-white/80 hover:text-white transition-colors">How It Works</a>
            <a href="#template-library" className="text-white/80 hover:text-white transition-colors">Templates</a>
            <a href="#collaboration" className="text-white/80 hover:text-white transition-colors">Collaboration</a>
            <a href="#api-integration" className="text-white/80 hover:text-white transition-colors">API</a>
            <Button className="bg-purple-light hover:bg-purple text-white font-medium">
              Join Waitlist
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button 
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#text-converter" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#template-library" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </a>
            <a 
              href="#collaboration" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collaboration
            </a>
            <a 
              href="#api-integration" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              API
            </a>
            <Button className="bg-purple-light hover:bg-purple text-white font-medium w-full">
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
