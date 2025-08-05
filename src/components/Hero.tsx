import React from 'react';
import { IconSparkles, IconArrowRight } from '@tabler/icons-react';
import Card from './ui/Card';
import Chip from './ui/Chip';
import Button from './ui/Button';
import HeroAnimations from './heroAnimations';

const Hero: React.FC = () => (
  <section className="w-full">
    {/* Card with two columns: left (text), right (animated feed) */}
    <Card className="w-full max-w-7xl bg-white p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8">
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-start justify-center text-left w-full lg:w-auto">
          <Chip size="xs" className="mb-4 flex items-center gap-1">
            <IconSparkles size={14} />
            <span>Built with Modulab</span>
          </Chip>
          <h1 className="text-[40px] md:text-[50px] lg:text-[60px] text-black font-semibold leading-tight mb-3 max-w-2xl lg:max-w-3xl">
            Vibe Coding & No-Code Studio
          </h1>
          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-grey-70 max-w-xl mb-6">
            We build modern frontends with vibe coding and no-code solutions for fast-moving teams.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <Button href="https://cal.com/richie-muhammed-vwayuh" variant="primary" size="sm" className="flex items-center gap-2">
              Start your project
              <IconArrowRight size={16} />
            </Button>
          </div>
        </div>
        
        {/* Right: Animated Project Feed */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md lg:max-w-lg mx-auto">
          <HeroAnimations />
        </div>
      </div>
    </Card>
  </section>
);

export default Hero; 