import React from 'react';
import Card from './ui/Card';
import Chip from './ui/Chip';

const testimonials = [
  {
    quote: "These guys got my product live in 3 weeks. I cried.",
    author: "Julian",
    company: "Nowhere AI",
    role: "Founder"
  },
  {
    quote: "Vibe coding is real. They built my dashboard in 2 days with zero bugs.",
    author: "Sarah",
    company: "Flow Metrics",
    role: "CTO"
  },
  {
    quote: "From idea to no-code prototype in a week. Mind-blowing speed.",
    author: "Alex",
    company: "LaunchPad",
    role: "Product Manager"
  }
];

const Testimonials: React.FC = () => (
  <section className="w-full">
    <Card className="w-full max-w-7xl mx-auto bg-white p-6 md:p-8 lg:p-12">
      <div className="text-center mb-12">
        <Chip size="xs" className="mb-4">Testimonials</Chip>
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-grey-80 mb-4 leading-tight">
          Real feedback from real projects
        </h2>
        <p className="text-grey-60 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
          Don't just take our word for it. Here's what our clients say about working with Modulab.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-grey-5 rounded-[12px] p-6 md:p-8 border border-grey-20">
            <div className="flex items-start mb-4">
              <div className="text-2xl mr-3">✨</div>
              <div className="flex-1">
                <p className="text-grey-80 text-[16px] md:text-[18px] font-medium leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#242424] rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-grey-80 font-medium text-[14px]">{testimonial.author}</p>
                    <p className="text-grey-60 text-[12px]">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  </section>
);

export default Testimonials; 