
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  Edit3, 
  Image, 
  BarChart, 
  PieChart,
  Share2
} from 'lucide-react';

interface SlideProps {
  id: number;
  title: string;
  content: string;
  type: 'chart' | 'image' | 'text';
}

const slides: SlideProps[] = [
  {
    id: 1,
    title: "The Impact of Climate Change",
    content: "Climate change affects ecosystems, weather patterns, and human societies worldwide.",
    type: "text"
  },
  {
    id: 2,
    title: "Key Factors",
    content: "Rising global temperatures and melting ice caps are major concerns.",
    type: "chart"
  },
  {
    id: 3,
    title: "Extreme Weather Events",
    content: "Increasing frequency of hurricanes, floods, and droughts worldwide.",
    type: "image"
  },
  {
    id: 4,
    title: "Solutions",
    content: "Reduced emissions, sustainable practices, and technological innovation.",
    type: "chart"
  }
];

const InfographicEditor: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [editing, setEditing] = useState<boolean>(false);
  
  useEffect(() => {
    // Simulate loading effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };
  
  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };
  
  return (
    <section id="infographic-editor" className="py-24 px-4 relative overflow-hidden gradient-bg">
      <div className="shapes-bg">
        <div className="shape shape-2" style={{ opacity: 0.05 }}></div>
        <div className="shape shape-3" style={{ opacity: 0.05 }}></div>
      </div>
      
      <div className="grid-dots absolute inset-0 opacity-10"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-sm">
            <Edit3 size={16} className="text-orange-light mr-2" />
            <span className="text-sm font-medium text-white/80">Interactive Editor</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interactive Infographic Editor
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Edit, customize, and refine your infographics with our intuitive editor.
            Each slide visually represents key points from your content.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            
            <div className="space-x-2">
              <Button 
                variant="outline"  
                size="sm" 
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
                onClick={() => setEditing(!editing)}
              >
                {editing ? "Preview" : "Edit"}
                {editing ? null : <Edit3 className="ml-2 h-4 w-4" />}
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
              >
                Share
                <Share2 className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {isLoading ? (
            <div className="h-80 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-purple-light border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-white/70">Generating your infographic...</p>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 border-white/20 hover:bg-white/20 rounded-full h-10 w-10 -ml-5 z-10"
                  onClick={handlePrevSlide}
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/10 border-white/20 hover:bg-white/20 rounded-full h-10 w-10 -mr-5 z-10"
                  onClick={handleNextSlide}
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </Button>
              </div>
              
              <div className="overflow-hidden relative h-[500px]">
                <div 
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {slides.map((slide) => (
                    <div
                      key={slide.id}
                      className="min-w-full p-4 flex items-center justify-center"
                    >
                      <Card className="w-full max-w-lg bg-white shadow-lg overflow-hidden">
                        <div className="bg-gray-50 p-4 flex justify-between items-center">
                          <h3 className="font-bold text-navy">{slide.title}</h3>
                          {editing && (
                            <Button size="sm" variant="ghost" className="h-8 text-gray-500 hover:text-navy">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="p-6 space-y-4">
                          <div className="editor-highlight rounded-lg p-4 bg-gray-50">
                            <p className={`text-gray-700 ${editing ? "border-dashed border border-gray-300 p-2 rounded" : ""}`}>
                              {slide.content}
                            </p>
                          </div>
                          
                          <div className="h-40 flex items-center justify-center bg-gray-100 rounded-lg editor-highlight">
                            {slide.type === 'chart' && (
                              <div className="text-center">
                                {slide.id % 2 === 0 ? (
                                  <BarChart size={64} className="mx-auto text-purple-light" />
                                ) : (
                                  <PieChart size={64} className="mx-auto text-purple" />
                                )}
                                <p className="mt-2 text-sm text-gray-500">Interactive Chart Visualization</p>
                              </div>
                            )}
                            
                            {slide.type === 'image' && (
                              <div className="text-center">
                                <Image size={64} className="mx-auto text-purple-light" />
                                <p className="mt-2 text-sm text-gray-500">Custom Image</p>
                              </div>
                            )}
                            
                            {slide.type === 'text' && (
                              <div className="w-full px-6">
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {editing && (
                          <div className="border-t border-gray-100 p-4 bg-gray-50 flex justify-between items-center">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="h-8 text-gray-500 hover:text-navy">
                                <Image className="h-4 w-4 mr-1" />
                                <span>Image</span>
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 text-gray-500 hover:text-navy">
                                <BarChart className="h-4 w-4 mr-1" />
                                <span>Chart</span>
                              </Button>
                            </div>
                            <Button size="sm" className="h-8 bg-purple-light hover:bg-purple text-white">
                              Save
                            </Button>
                          </div>
                        )}
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      activeSlide === index ? "bg-white" : "bg-white/30"
                    }`}
                    onClick={() => setActiveSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfographicEditor;
