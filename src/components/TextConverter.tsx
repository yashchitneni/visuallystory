
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Wand2 } from 'lucide-react';

const sampleText = `# The Impact of Climate Change

Climate change is one of the most pressing issues of our time. It affects ecosystems, weather patterns, and human societies worldwide. Key factors include:

1. Rising global temperatures
2. Melting ice caps and glaciers
3. Increasing frequency of extreme weather events
4. Sea level rise threatening coastal communities

Recent studies suggest that immediate action is necessary to mitigate these effects through reduced emissions, sustainable practices, and technological innovation.`;

const TextConverter: React.FC = () => {
  const [text, setText] = useState(sampleText);
  const [isConverting, setIsConverting] = useState(false);
  const [converted, setConverted] = useState(false);
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setConverted(false);
  };
  
  const handleConvert = () => {
    setIsConverting(true);
    
    // Simulate conversion process
    setTimeout(() => {
      setIsConverting(false);
      setConverted(true);
      
      // Scroll to infographic editor section
      const editorSection = document.getElementById('infographic-editor');
      if (editorSection) {
        editorSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  };
  
  return (
    <section id="text-converter" className="py-24 px-4 relative overflow-hidden bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 mb-2 rounded-full bg-purple-light/10">
              <FileText size={16} className="text-purple mr-2" />
              <span className="text-sm font-medium text-navy">Text Content Integration</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Start with Your Content
            </h2>
            
            <p className="text-lg text-gray-600">
              Paste your article, research paper, or any text content to convert it into a visually engaging infographic. Our AI analyzes your content and creates the perfect visual representation.
            </p>
            
            <div className="relative">
              <Textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Paste your content here..."
                className="min-h-[240px] p-4 text-sm border-gray-200 rounded-lg focus:ring-purple focus:border-purple"
              />
              
              <Button
                onClick={handleConvert}
                disabled={isConverting || !text || converted}
                className={`mt-4 ${
                  converted 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-purple hover:bg-purple-dark'
                } text-white font-medium px-6 py-2 rounded-lg`}
              >
                {isConverting ? (
                  <>
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Converting...
                  </>
                ) : converted ? (
                  <>Converted</>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Convert Text
                  </>
                )}
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative bg-gradient-to-br from-navy to-purple-dark p-1 rounded-xl shadow-xl">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-xs text-gray-500">Text Analysis</div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-6 bg-gray-100 rounded w-3/4 animate-pulse-soft"></div>
                  <div className="h-6 bg-gray-100 rounded animate-pulse-soft" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-6 bg-gray-100 rounded w-5/6 animate-pulse-soft" style={{ animationDelay: '0.2s' }}></div>
                  
                  <div className="flex gap-2 mt-6">
                    <div className="h-8 w-8 bg-purple-light/20 rounded flex items-center justify-center text-purple">
                      <FileText size={16} />
                    </div>
                    <div className="h-8 bg-gray-100 rounded w-1/3"></div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="h-8 w-8 bg-purple-light/20 rounded flex items-center justify-center text-purple">
                      <FileText size={16} />
                    </div>
                    <div className="h-8 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="h-8 w-8 bg-purple-light/20 rounded flex items-center justify-center text-purple">
                      <FileText size={16} />
                    </div>
                    <div className="h-8 bg-gray-100 rounded w-2/5"></div>
                  </div>
                  
                  <div className="h-32 bg-gray-100 rounded mt-6 flex items-center justify-center">
                    <div className="text-gray-400 flex flex-col items-center">
                      <Wand2 size={32} className="mb-2 text-purple-light" />
                      <span className="text-sm">Processing content...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextConverter;
