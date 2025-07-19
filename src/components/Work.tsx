import React from 'react';
import Card from './ui/Card';



const Work: React.FC = () => {
  return (
    <section id="work" className="">
      <Card className="w-full mx-auto">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-grey-80 leading-tight mb-3 text-center">Projects</h2>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-4xl mb-6 text-grey-40">📁</div>
          <h3 className="text-xl font-semibold text-grey-80 mb-3">Coming Soon</h3>
          <p className="text-grey-60 text-base text-center max-w-md">
            Our first projects are in the works. Get in touch to be one of our first clients!
          </p>
        </div>
      </Card>
    </section>
  );
};

export default Work; 