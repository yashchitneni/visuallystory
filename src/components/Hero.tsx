
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Waveform, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [animateTransform, setAnimateTransform] = useState(false);
  
  useEffect(() => {
    // Start the transform animation after a delay
    const timer = setTimeout(() => {
      setAnimateTransform(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
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
      <div className="container max-w-7xl relative z-10 space-y-8">
        <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mx-auto">
          <Zap size={16} className="text-orange-light mr-2" />
          <span className="text-sm font-medium text-white/80">Revolutionizing Content Creation</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight text-center">
          Transform Audio & Video into 
          <span className="text-gradient block mt-2">Stunning Infographics</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-center">
          Convert your multimedia content into engaging, shareable visual stories with our AI-powered platform.
        </p>
        
        {/* Split Screen Transformation Demo */}
        <div className="w-full max-w-5xl mx-auto mt-12 mb-8 flex flex-col lg:flex-row rounded-xl overflow-hidden">
          {/* Left side - Source Media */}
          <div className={`w-full lg:w-1/2 bg-navy/80 backdrop-blur-sm p-6 rounded-l-xl transform transition-all duration-1000 ease-in-out ${animateTransform ? 'scale-95 opacity-90' : 'scale-100 opacity-100'}`}>
            <div className="relative aspect-video bg-navy rounded-lg overflow-hidden mb-4 shadow-lg border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <Play size={24} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center">
                  <Waveform size={18} className="text-purple-light mr-2" />
                  <div className="space-y-1 w-full">
                    <div className="h-1 bg-gradient-to-r from-purple-light to-orange-light rounded-full" />
                    <div className="flex space-x-1 justify-between">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i} 
                          className="h-6 w-1 rounded-full bg-white/70" 
                          style={{
                            height: `${Math.sin(i/2) * 16 + 8}px`,
                            opacity: animateTransform ? '0.4' : '0.7',
                            transition: 'height 0.5s ease, opacity 0.5s ease'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Raw Media Content</h3>
            <p className="text-white/70 text-sm">Your original audio and video files</p>
          </div>
          
          {/* Animated Transform Arrow */}
          <div className="hidden lg:flex items-center justify-center relative z-10 -mx-4 pointer-events-none">
            <div className={`bg-white/10 backdrop-blur-md rounded-full p-3 transform transition-all duration-1000 ${animateTransform ? 'animate-pulse-soft scale-110' : ''}`}>
              <ArrowRight size={24} className="text-white" />
            </div>
          </div>
          
          {/* Right side - Generated Infographic */}
          <div className={`w-full lg:w-1/2 bg-gradient-to-br from-purple-dark/80 to-navy/80 backdrop-blur-sm p-6 rounded-r-xl transform transition-all duration-1000 ease-in-out ${animateTransform ? 'scale-105 opacity-100' : 'scale-100 opacity-90'}`}>
            <div className="aspect-video bg-gradient-to-br from-purple/10 to-orange/5 backdrop-blur-sm rounded-lg overflow-hidden mb-4 shadow-lg border border-white/10">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full p-3">
                <div className={`bg-white/10 rounded-lg p-3 transform transition-all duration-700 delay-300 ${animateTransform ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="h-2 w-16 bg-purple-light rounded-full mb-2" />
                  <div className="h-8 w-full bg-white/20 rounded-lg" />
                </div>
                <div className={`bg-white/10 rounded-lg p-3 transform transition-all duration-700 delay-500 ${animateTransform ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-orange to-purple-light/50 flex items-center justify-center">
                    <div className="h-1/2 w-1/2 border-4 border-white/30 rounded-full" />
                  </div>
                </div>
                <div className={`bg-white/10 rounded-lg p-3 transform transition-all duration-700 delay-700 ${animateTransform ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="flex space-x-1 h-full items-end">
                    {[40, 65, 30, 80, 55].map((height, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-purple-light to-orange-light/70 rounded-t-sm"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className={`bg-white/10 rounded-lg p-3 transform transition-all duration-700 delay-900 ${animateTransform ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <div className="h-2 w-12 bg-orange-light rounded-full mb-2" />
                  <div className="space-y-1">
                    <div className="h-1.5 w-full bg-white/20 rounded-full" />
                    <div className="h-1.5 w-3/4 bg-white/20 rounded-full" />
                    <div className="h-1.5 w-5/6 bg-white/20 rounded-full" />
                    <div className="h-1.5 w-2/3 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Visual Infographic</h3>
            <p className="text-white/70 text-sm">Transformed into engaging visuals</p>
          </div>
        </div>
        
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
      </div>
    </div>
  );
};

export default Hero;
