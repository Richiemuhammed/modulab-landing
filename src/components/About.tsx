import React from 'react';
import Card from './ui/Card';

const paragraphs = [
  'Modulab is a collective of builders, designers, and technologists passionate about turning bold ideas into reality.',
  'We believe in rapid prototyping, creative exploration, and a relentless pursuit of quality.',
  'Our mission is to empower founders and teams to launch, learn, and iterate faster than ever.'
];

const About: React.FC = () => (
  <section id="about" className="">
    <Card className="w-full mx-auto">
      <h2 className="text-[40px] md:text-[64px] font-semibold text-grey-80 leading-tight mb-3">Who We Are</h2>
      <div className="space-y-4 mb-6">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[18px] text-grey-60 max-w-2xl">{p}</p>
        ))}
      </div>
      <blockquote className="italic text-[18px] text-grey-60 border-l-4 border-grey-30 pl-6 md:pl-8 max-w-md">“The best way to predict the future is to invent it.”</blockquote>
    </Card>
  </section>
);

export default About; 