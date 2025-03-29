
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Database,
  Headphones,
  Layers,
  ChevronRight,
  Code,
  FileJson,
  Share
} from 'lucide-react';

const ApiIntegration: React.FC = () => {
  return (
    <section id="api-integration" className="py-24 px-4 bg-gray-50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-purple-light/10">
            <Code size={16} className="text-purple mr-2" />
            <span className="text-sm font-medium text-navy">API Integration</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Powerful Backend Services
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leverage cutting-edge technologies and seamless integrations for an enhanced user experience.
            Our platform connects with the tools you already use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 border-2 border-dashed border-purple-light/20 bg-white relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-light/5 rounded-full"></div>
            <div className="absolute right-12 bottom-8 w-16 h-16 bg-purple-light/5 rounded-full"></div>
            
            <div className="bg-purple-light/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Database className="h-6 w-6 text-purple" />
            </div>
            
            <h3 className="text-xl font-semibold text-navy mb-2">Supabase Integration</h3>
            
            <p className="text-gray-600 mb-6">
              User authentication, data storage, and real-time collaboration powered by Supabase.
              Keep your content secure and always available.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-purple-light mr-2" />
                <span className="text-gray-700">User Authentication</span>
              </div>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-purple-light mr-2" />
                <span className="text-gray-700">Database Storage</span>
              </div>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-purple-light mr-2" />
                <span className="text-gray-700">Real-time Updates</span>
              </div>
            </div>
            
            <Button className="mt-6 bg-purple-light hover:bg-purple text-white">
              Learn About Supabase
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
            
            <div className="absolute bottom-4 right-4 opacity-20">
              <FileJson className="h-16 w-16 text-purple-light" />
            </div>
          </Card>
          
          <Card className="p-6 border-2 border-dashed border-orange/20 bg-white relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-orange/5 rounded-full"></div>
            <div className="absolute right-12 bottom-8 w-16 h-16 bg-orange/5 rounded-full"></div>
            
            <div className="bg-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Headphones className="h-6 w-6 text-orange" />
            </div>
            
            <h3 className="text-xl font-semibold text-navy mb-2">ElevenLabs Integration</h3>
            
            <p className="text-gray-600 mb-6">
              Add powerful audio narration to your infographics with ElevenLabs' advanced text-to-speech.
              Perfect for multimedia presentations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-orange mr-2" />
                <span className="text-gray-700">Text-to-Speech Conversion</span>
              </div>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-orange mr-2" />
                <span className="text-gray-700">Multiple Voice Options</span>
              </div>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-orange mr-2" />
                <span className="text-gray-700">Audio Embedding</span>
              </div>
            </div>
            
            <Button 
              className="mt-6 bg-orange hover:bg-orange/80 text-white"
            >
              Learn About ElevenLabs
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
            
            <div className="absolute bottom-4 right-4 opacity-20">
              <Headphones className="h-16 w-16 text-orange" />
            </div>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-navy mb-4">Additional Integrations</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:border-purple-light">
              <Layers className="h-4 w-4 mr-2" />
              Google Drive
            </Button>
            
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:border-purple-light">
              <Share className="h-4 w-4 mr-2" />
              Social Media
            </Button>
            
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:border-purple-light">
              <Code className="h-4 w-4 mr-2" />
              Webhooks
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiIntegration;
