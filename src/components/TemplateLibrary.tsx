
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Grid, Layout, Check } from 'lucide-react';

interface TemplateProps {
  id: number;
  name: string;
  description: string;
  image: string;
  popularity: 'high' | 'medium' | 'low';
}

// Sample templates data
const templates: TemplateProps[] = [
  {
    id: 1,
    name: "Modern Minimalist",
    description: "Clean, simple design with focus on content",
    image: "/placeholder.svg",
    popularity: "high"
  },
  {
    id: 2,
    name: "Creative Storytelling",
    description: "Narrative-focused layout for engaging stories",
    image: "/placeholder.svg",
    popularity: "medium"
  },
  {
    id: 3,
    name: "Data-Driven",
    description: "Optimized for charts, graphs, and statistics",
    image: "/placeholder.svg",
    popularity: "high"
  },
  {
    id: 4,
    name: "Academic Research",
    description: "Perfect for scholarly articles and papers",
    image: "/placeholder.svg",
    popularity: "medium"
  },
  {
    id: 5,
    name: "Business Report",
    description: "Professional template for corporate use",
    image: "/placeholder.svg",
    popularity: "high"
  },
  {
    id: 6,
    name: "Visual Journey",
    description: "Image-focused layout for visual storytelling",
    image: "/placeholder.svg",
    popularity: "low"
  }
];

const TemplateCard: React.FC<{ template: TemplateProps; isSelected: boolean; onSelect: () => void }> = ({
  template,
  isSelected,
  onSelect
}) => {
  return (
    <Card className={`overflow-hidden border transition-all duration-300 ${
      isSelected 
        ? 'border-purple-light ring-2 ring-purple-light/30' 
        : 'border-gray-200 hover:border-purple-light/50'
    }`}>
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img 
          src={template.image} 
          alt={template.name} 
          className="w-full h-full object-cover"
        />
        {template.popularity === 'high' && (
          <div className="absolute top-2 right-2 bg-orange px-2 py-1 rounded text-xs text-white font-medium">
            Popular
          </div>
        )}
        {isSelected && (
          <div className="absolute inset-0 bg-purple-light/10 flex items-center justify-center">
            <div className="bg-purple-light rounded-full p-2">
              <Check className="h-6 w-6 text-white" />
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h4 className="font-semibold text-navy">{template.name}</h4>
        <p className="text-sm text-gray-500 mt-1 mb-4">{template.description}</p>
        <Button 
          onClick={onSelect}
          variant={isSelected ? "default" : "outline"} 
          className={`w-full ${
            isSelected 
              ? 'bg-purple-light hover:bg-purple text-white' 
              : 'border-gray-200 hover:border-purple-light text-gray-700'
          }`}
        >
          {isSelected ? 'Selected' : 'Select Template'}
        </Button>
      </CardContent>
    </Card>
  );
};

const TemplateLibrary: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = React.useState<number>(1);
  
  return (
    <section id="template-library" className="py-24 px-4 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-purple-light/10">
            <Layout size={16} className="text-purple mr-2" />
            <span className="text-sm font-medium text-navy">Template Library</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Choose Your Visual Style
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select from our library of professionally designed templates to match your content's purpose and style.
            Each template is fully customizable to fit your needs.
          </p>
        </div>
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Grid className="h-5 w-5 text-navy" />
            <h3 className="text-xl font-semibold text-navy">Template Gallery</h3>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
              Filter
            </Button>
            <Button variant="outline" size="sm" className="border-gray-300 text-gray-700">
              Sort
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <TemplateCard 
              key={template.id}
              template={template}
              isSelected={selectedTemplate === template.id}
              onSelect={() => setSelectedTemplate(template.id)}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button
            variant="outline"
            className="border-gray-300 text-navy hover:border-purple-light"
          >
            View More Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateLibrary;
