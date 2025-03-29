
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      const shape1 = heroRef.current.querySelector('.shape-1') as HTMLElement;
      const shape2 = heroRef.current.querySelector('.shape-2') as HTMLElement;
      const shape3 = heroRef.current.querySelector('.shape-3') as HTMLElement;
      
      if (shape1 && shape2 && shape3) {
        shape1.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        shape2.style.transform = `translate(${-x * 15}px, ${-y * 15}px)`;
        shape3.style.transform = `translate(${-x * 10}px, ${y * 10}px)`;
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 gradient-bg overflow-hidden"
    >
      {/* Abstract shapes */}
      <div className="shapes-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-dots opacity-20"></div>
      
      {/* Content */}
      <div className="container max-w-5xl relative z-10 space-y-8 text-center">
        <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <Zap size={16} className="text-orange-light mr-2" />
          <span className="text-sm font-medium text-white/80">Revolutionizing Content Creation</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          Transform Your Text into 
          <span className="text-gradient block mt-2">Visual Stories</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Effortlessly convert your articles, research, and reports into stunning, interactive infographics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button size="lg" className="bg-purple-light hover:bg-purple text-white font-medium rounded-lg px-8 py-6 text-lg">
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-medium rounded-lg px-8 py-6 text-lg"
          >
            View Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="hidden sm:block absolute -bottom-56 left-1/2 transform -translate-x-1/2 w-full max-w-4xl mx-auto">
          <div className="glass-effect rounded-t-2xl p-4 shadow-xl animate-float">
            <img 
              src="/placeholder.svg" 
              alt="Editor Interface Preview" 
              className="w-full h-auto rounded-lg opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
