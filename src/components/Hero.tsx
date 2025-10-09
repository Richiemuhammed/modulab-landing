import React from 'react';
import { IconSparkles, IconArrowRight } from '@tabler/icons-react';
import Card from './ui/Card';
import Chip from './ui/Chip';
import Button from './ui/Button';

const Hero: React.FC = () => (
  <section className="w-full">
    {/* Card with two columns: left (text), right (animated feed) */}
    <Card className="w-full max-w-7xl bg-white p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8">
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-start justify-center text-left w-full lg:w-auto">
          <Chip size="xs" className="mb-4 flex items-center gap-1">
            <IconSparkles size={14} />
            <span>Product Lab</span>
          </Chip>
          <h1 className="text-[40px] md:text-[50px] lg:text-[60px] text-black font-semibold leading-tight mb-3 max-w-2xl lg:max-w-3xl">
            Building Digital Products That Matter
          </h1>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-grey-70 max-w-xl mb-6">
            Modulab is a product lab where we build digital products that solve real problems. We ship what works and iterate based on user feedback.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <Button href="#products" variant="primary" size="xs" className="flex items-center gap-2">
              See our products
              <IconArrowRight size={16} />
            </Button>
          </div>
        </div>
        
        {/* Right: Simple Product Preview */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-lg mx-auto">
          <div className="w-full max-w-sm bg-white rounded-[12px] p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-grey-30">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-grey-80 mb-2">Flaire</h3>
              <p className="text-sm text-grey-60 mb-4">Beauty professionals platform</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-grey-60">Live & Growing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </section>
);

export default Hero; 