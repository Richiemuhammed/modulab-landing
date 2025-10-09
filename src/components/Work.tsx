import React from 'react';
import Card from './ui/Card';
import Chip from './ui/Chip';

const Work: React.FC = () => {
  return (
    <section id="products" className="">
      <Card className="w-full mx-auto">
        <div className="text-center mb-12">
          <Chip size="xs" className="mb-4">Our Products</Chip>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-grey-80 leading-tight mb-3">What We're Building</h2>
          <p className="text-grey-60 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
            These are the digital products we're passionate about building and shipping to solve real problems.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-4xl mb-6 text-grey-40">🚀</div>
          <h3 className="text-xl font-semibold text-grey-80 mb-3">Products Coming Soon</h3>
          <p className="text-grey-60 text-base text-center max-w-md">
            We're currently building our first products. Follow our journey as we ship solutions to real problems we've identified.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default Work; 