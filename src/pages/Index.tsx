
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TextConverter from '@/components/TextConverter';
import InfographicEditor from '@/components/InfographicEditor';
import TemplateLibrary from '@/components/TemplateLibrary';
import CollaborationSection from '@/components/CollaborationSection';
import ApiIntegration from '@/components/ApiIntegration';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <TextConverter />
      <InfographicEditor />
      <TemplateLibrary />
      <CollaborationSection />
      <ApiIntegration />
      <Footer />
    </div>
  );
};

export default Index;
