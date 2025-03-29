
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Share2, MessageSquare, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CollaborationSection: React.FC = () => {
  return (
    <section id="collaboration" className="py-24 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 mb-2 rounded-full bg-purple-light/10">
              <Users size={16} className="text-purple mr-2" />
              <span className="text-sm font-medium text-navy">Collaborative Features</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Create Together in Real-Time
            </h2>
            
            <p className="text-lg text-gray-600">
              Invite team members to collaborate on your infographics. Edit together in real-time, 
              leave comments, and share your creations with the world.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-purple-light/10 p-2 rounded-lg mr-4">
                  <Share2 className="h-5 w-5 text-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy">Seamless Sharing</h4>
                  <p className="text-gray-600">Share your infographics with a simple link or embed them directly on your website.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-light/10 p-2 rounded-lg mr-4">
                  <MessageSquare className="h-5 w-5 text-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy">Real-Time Feedback</h4>
                  <p className="text-gray-600">Comment directly on specific elements to streamline the review process.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-light/10 p-2 rounded-lg mr-4">
                  <Clock className="h-5 w-5 text-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy">Version History</h4>
                  <p className="text-gray-600">Access previous versions and track changes over time.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-purple hover:bg-purple-dark text-white font-medium px-6 py-2 rounded-lg">
                Learn More About Collaboration
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-navy">Climate Change Infographic</h3>
                <Button variant="outline" size="sm" className="h-9">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
              
              <div className="p-6">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium text-navy">Team Members</h4>
                    <Button variant="ghost" size="sm" className="h-8 text-purple-light hover:text-purple">
                      + Invite
                    </Button>
                  </div>
                  
                  <div className="flex -space-x-2 overflow-hidden">
                    <Avatar className="border-2 border-white">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-orange text-white">JD</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-purple-light text-white">SM</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-green-500 text-white">RK</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-blue-500 text-white">+2</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-orange text-white">JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-navy">Jane Doe</span>
                        <span className="text-xs text-gray-500">2 mins ago</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Let's add more data to slide 3 about sea level rise.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-purple-light text-white">SM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between">
                        <span className="font-medium text-navy">Sam Miller</span>
                        <span className="text-xs text-gray-500">Just now</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Good idea! I'll prepare a chart for that.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative mt-6 flex items-center">
                  <input 
                    type="text" 
                    placeholder="Add a comment..." 
                    className="w-full border border-gray-200 rounded-lg py-2 pl-4 pr-24 focus:outline-none focus:border-purple-light"
                  />
                  <Button className="absolute right-1 top-1 h-8 bg-purple-light hover:bg-purple text-white text-sm">
                    Send
                  </Button>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                <div className="text-xs text-gray-500">Last edited 5 minutes ago</div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-700">3 online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
