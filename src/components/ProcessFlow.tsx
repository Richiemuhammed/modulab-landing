import React from 'react';
import Chip from './ui/Chip';
import Button from './ui/Button';
import { IconSparkles, IconArrowRight } from '@tabler/icons-react';

const ProcessFlow: React.FC = () => {
  return (
  <section id="process" className="w-full bg-grey-5 pt-12 pb-0">
    <div className="w-full max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="text-center mb-12">
        <Chip size="xs" className="mb-4 flex items-center gap-1">
          <IconSparkles size={14} />
          <span>Our Products</span>
        </Chip>
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-grey-80 mb-4 leading-tight">
          What We're Building
        </h2>
        <p className="text-grey-60 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed mb-8">
          From Flaire to Lyra and beyond — we're building digital products that solve real problems.
        </p>
        <Button href="#products" variant="primary" size="xs" className="flex items-center gap-2">
          See our products
          <IconArrowRight size={16} />
        </Button>
      </div>

      {/* Three Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
        {/* Card 1: Flaire */}
        <div className="bg-white rounded-[12px] p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-grey-30 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-shadow">
          <div className="text-grey-60 text-[14px] font-semibold font-mono mb-4">01</div>
          <h3 className="text-xl font-semibold text-grey-80 mb-3">Flaire</h3>
          <p className="text-grey-60 text-[14px] leading-relaxed mb-6">
            All-in-one platform for beauty professionals. Built to solve the fragmented tools problem in the beauty industry.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-grey-80">Status: Live</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-grey-60">Features: Booking, payments, client management</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-grey-60">Growing active user base</span>
            </div>
          </div>
        </div>

        {/* Card 2: Lyra */}
        <div className="bg-white rounded-[12px] p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-grey-30 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-shadow">
          <div className="text-grey-60 text-[14px] font-semibold font-mono mb-4">02</div>
          <h3 className="text-xl font-semibold text-grey-80 mb-3">Lyra</h3>
          <p className="text-grey-60 text-[14px] leading-relaxed mb-6">
            Next-generation platform in development. Currently in research phase, exploring new frontiers in digital product design.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-grey-80">Status: In Development</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-grey-60">Phase: Research & Ideation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-grey-60">Exploring new frontiers</span>
            </div>
          </div>
        </div>

        {/* Card 3: What's Next */}
        <div className="bg-white rounded-[12px] p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-grey-30 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-shadow">
          <div className="text-grey-60 text-[14px] font-semibold font-mono mb-4">03</div>
          <h3 className="text-xl font-semibold text-grey-80 mb-3">What's Next</h3>
          <p className="text-grey-60 text-[14px] leading-relaxed mb-6">
            We're exploring new frontiers — from healthcare tools to better learning platforms. More products coming soon.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-grey-80">Healthcare Tools</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-grey-60">Learning Platforms</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-grey-60">More products coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ProcessFlow; 