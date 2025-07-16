import React from 'react';
import Card from './ui/Card';

const workItems = [
  { title: 'Startup Launchpad', blurb: 'Rapid MVPs for founders and teams.' },
  { title: 'AI Playground', blurb: 'Experimenting with the latest in machine learning.' },
  { title: 'Open Source Tools', blurb: 'Building for the community, by the community.' },
  { title: 'Rapid MVPs', blurb: 'From idea to prototype in record time.' },
  { title: 'Community Building', blurb: 'Connecting innovators and creators.' },
];

const Work: React.FC = () => (
  <section id="work" className="">
    <Card className="w-full mx-auto">
      <h2 className="text-[40px] md:text-[64px] font-semibold text-grey-80 leading-tight mb-3 text-center">What We’ve Built</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {workItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold text-grey-80 mb-2">{item.title}</h3>
            <p className="text-grey-60 text-base">{item.blurb}</p>
          </div>
        ))}
      </div>
    </Card>
  </section>
);

export default Work; 