import React, { useState, useEffect } from 'react';
import Chip from './ui/Chip';
import Button from './ui/Button';
import { IconSparkles, IconArrowRight } from '@tabler/icons-react';
import julianPng from '../assets/julian.png';
import mimiPng from '../assets/mimi.png';

const ProcessFlow: React.FC = () => {
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setChatStep((prev) => (prev < 2 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
  <section id="process" className="w-full bg-grey-5 pt-12 pb-0">
    <div className="w-full max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="text-center mb-12">
        <Chip size="xs" className="mb-4 flex items-center gap-1">
          <IconSparkles size={14} />
          <span>Process</span>
        </Chip>
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-grey-80 mb-4 leading-tight">
          From idea to launch in record time
        </h2>
        <p className="text-grey-60 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed mb-8">
          Our streamlined process combines vibe coding and no-code tools to turn your vision into a polished product, fast.
        </p>
        <Button href="https://cal.com/" variant="primary" size="sm" className="flex items-center gap-2">
          Start your project
          <IconArrowRight size={16} />
        </Button>
      </div>

      {/* Three Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
        {/* Card 1: Share your vision */}
        <div className="bg-white rounded-[12px] p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-grey-30 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-shadow">
          <div className="text-grey-60 text-[14px] font-semibold font-mono mb-4">01</div>
          <h3 className="text-xl font-semibold text-grey-80 mb-3">Share your vision</h3>
          <p className="text-grey-60 text-[14px] leading-relaxed mb-6">
            Tell us about your idea, goals, and timeline. We'll map out the perfect solution using vibe coding and no-code approaches.
          </p>
          {/* Chat interface */}
          <div className="space-y-4">
            <div className={`flex items-start gap-3 transition-opacity duration-500 ${chatStep >= 0 ? 'opacity-100' : 'opacity-0'}`}>
              <img src={julianPng} alt="Julian" className="w-6 h-6 rounded-full object-cover" />
              <div className="bg-grey-5 rounded-[6px] p-2 flex-1 border border-grey-20">
                <div className="text-xs text-grey-80 font-medium mb-1">Julian Chen</div>
                <div className="text-xs text-grey-80">I need a landing page for my startup...</div>
              </div>
            </div>
            <div className={`flex items-start gap-3 justify-end transition-opacity duration-500 ${chatStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-[#242424] rounded-[6px] p-2 max-w-[80%]">
                <div className="text-xs text-white font-medium mb-1">Mimi Rodriguez</div>
                <div className="text-xs text-white">Got it! Let's build something amazing together.</div>
              </div>
              <img src={mimiPng} alt="Mimi" className="w-6 h-6 rounded-full object-cover" />
            </div>
            <div className={`flex items-start gap-3 transition-opacity duration-500 ${chatStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              <img src={julianPng} alt="Julian" className="w-6 h-6 rounded-full object-cover" />
              <div className="bg-grey-5 rounded-[6px] p-2 flex-1 border border-grey-20">
                <div className="text-xs text-grey-80 font-medium mb-1">Julian Chen</div>
                <div className="text-xs text-grey-80">Perfect! When can we start?</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Rapid prototyping */}
        <div className="bg-white rounded-[12px] p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-grey-30 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-shadow">
          <div className="text-grey-60 text-[14px] font-semibold font-mono mb-4">02</div>
          <h3 className="text-xl font-semibold text-grey-80 mb-3">Rapid prototyping</h3>
          <p className="text-grey-60 text-[14px] leading-relaxed mb-6">
            We create clickable prototypes and MVPs using no-code tools first, then evolve to custom code when needed.
          </p>
          {/* Prototype interface */}
          <div className="space-y-3">
            <div className="bg-white border border-grey-20 rounded-[8px] p-3">
              {/* Header tabs */}
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${chatStep === 0 ? 'bg-[#242424]' : 'bg-grey-20'}`}></div>
                <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${chatStep === 1 ? 'bg-[#242424]' : 'bg-grey-20'}`}></div>
                <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${chatStep === 2 ? 'bg-[#242424]' : 'bg-grey-20'}`}></div>
                <div className="flex-1"></div>
                <div className="text-xs text-grey-60 font-medium">Prototype</div>
              </div>
              
              {/* Content area */}
              <div className="space-y-2">
                <div className={`h-2 bg-grey-20 rounded transition-all duration-500 ${chatStep === 0 ? 'w-full' : 'w-3/4'}`}></div>
                <div className={`h-2 bg-grey-20 rounded transition-all duration-500 ${chatStep === 1 ? 'w-full' : 'w-1/2'}`}></div>
                <div className={`h-2 bg-grey-20 rounded transition-all duration-500 ${chatStep === 2 ? 'w-full' : 'w-2/3'}`}></div>
              </div>
              
              {/* Progress indicator */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 bg-grey-20 rounded-full h-1">
                  <div className={`bg-[#242424] h-1 rounded-full transition-all duration-500 ${chatStep === 0 ? 'w-1/3' : chatStep === 1 ? 'w-2/3' : 'w-full'}`}></div>
                </div>
                <div className="text-xs text-grey-60 font-mono">
                  {chatStep === 0 ? '33%' : chatStep === 1 ? '66%' : '100%'}
                </div>
              </div>
            </div>
            
            {/* Tool icons */}
            <div className="flex gap-2">
              <div className={`w-6 h-6 rounded flex items-center justify-center transition-colors duration-500 ${chatStep >= 1 ? 'bg-[#242424]' : 'bg-grey-20'}`}>
                <span className={`text-xs transition-colors duration-500 ${chatStep >= 1 ? 'text-white' : 'text-grey-60'}`}>⚡</span>
              </div>
              <div className={`w-6 h-6 rounded flex items-center justify-center transition-colors duration-500 ${chatStep >= 2 ? 'bg-[#242424]' : 'bg-grey-20'}`}>
                <span className={`text-xs transition-colors duration-500 ${chatStep >= 2 ? 'text-white' : 'text-grey-60'}`}>🎨</span>
              </div>
              <div className="w-6 h-6 bg-grey-20 rounded flex items-center justify-center">
                <span className="text-xs text-grey-60">📱</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Launch & scale */}
        <div className="bg-white rounded-[12px] p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-grey-30 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-shadow">
          <div className="text-grey-60 text-[14px] font-semibold font-mono mb-4">03</div>
          <h3 className="text-xl font-semibold text-grey-80 mb-3">Launch & scale</h3>
          <p className="text-grey-60 text-[14px] leading-relaxed mb-6">
            Deploy with confidence. We handle hosting, monitoring, and ongoing support so you can focus on growing your business.
          </p>
          {/* Launch interface */}
          <div className="space-y-4">
            {/* Main success indicator */}
            <div className="flex items-center justify-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 ${chatStep >= 1 ? 'bg-green-100 scale-110' : 'bg-grey-20 scale-100'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-700 ${chatStep >= 1 ? 'bg-green-500' : 'bg-grey-40'}`}>
                  <span className={`text-white text-lg font-bold transition-all duration-700 ${chatStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>✓</span>
                </div>
              </div>
            </div>
            
            {/* Status dashboard */}
            <div className="bg-white border border-grey-20 rounded-[8px] p-3 space-y-2">
              <div className={`flex items-center gap-3 transition-all duration-500 ${chatStep >= 0 ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${chatStep >= 0 ? 'bg-green-500' : 'bg-grey-20'}`}></div>
                <span className="text-sm text-grey-80">Deployed</span>
                <div className="flex-1"></div>
                <span className="text-xs text-grey-60 font-mono">Live</span>
              </div>
              <div className={`flex items-center gap-3 transition-all duration-500 ${chatStep >= 1 ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${chatStep >= 1 ? 'bg-green-500' : 'bg-grey-20'}`}></div>
                <span className="text-sm text-grey-80">Monitoring</span>
                <div className="flex-1"></div>
                <span className="text-xs text-grey-60 font-mono">Active</span>
              </div>
              <div className={`flex items-center gap-3 transition-all duration-500 ${chatStep >= 2 ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-3 h-3 rounded-full transition-all duration-500 ${chatStep >= 2 ? 'bg-green-500' : 'bg-grey-20'}`}></div>
                <span className="text-sm text-grey-80">Ready to scale</span>
                <div className="flex-1"></div>
                <span className="text-xs text-grey-60 font-mono">Ready</span>
              </div>
            </div>
            
            {/* Performance bar */}
            <div className={`transition-all duration-500 ${chatStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-grey-5 rounded-[6px] p-2 border border-grey-20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-grey-60">Performance</span>
                  <span className="text-xs text-grey-80 font-mono">99.9%</span>
                </div>
                <div className="w-full bg-grey-20 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full transition-all duration-1000 w-full"></div>
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

export default ProcessFlow; 