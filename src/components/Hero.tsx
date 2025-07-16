import React from 'react';
import Card from './ui/Card';
import Chip from './ui/Chip';
import Button from './ui/Button';
import AnimatedProjectFeed from './AnimatedProjectFeed';

const Hero: React.FC = () => (
  <section className="w-full">
    {/* Card with two columns: left (text), right (animated feed) */}
    <Card className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-8 bg-white p-8 md:p-12">
      {/* Left: Text, now flex-1 to stretch */}
      <div className="flex-1 flex flex-col items-start justify-center text-left">
        <Chip size="xs" className="mb-4">Built by Modulab</Chip>
        <h1 className="text-[40px] md:text-[48px] font-semibold text-grey-80 leading-tight mb-3 max-w-3xl">
          Product Engineering, Done Right.
        </h1>
        <p className="text-[18px] text-grey-60 max-w-xl mb-6">
          From zero to one, MVP to scale — we design, build, and ship.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
          <Button href="https://cal.com/" variant="primary" size="sm">Book a Call</Button>
          <Button href="#work" variant="outline" size="sm">See Our Work</Button>
        </div>
      </div>
      {/* Right: Animated Project Feed, now flex-1 to stretch */}
      <div className="flex-1 flex items-center justify-center w-full">
        <AnimatedProjectFeed />
      </div>
    </Card>
  </section>
);

export default Hero; 