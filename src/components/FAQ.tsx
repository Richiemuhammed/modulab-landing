import React, { useState } from 'react';
import Card from './ui/Card';
import Chip from './ui/Chip';
import { IconChevronDown, IconHelp } from '@tabler/icons-react';

const faqs = [
  {
    question: "What is vibe coding?",
    answer: "Vibe coding is our approach to building software that feels effortless and natural. We focus on clean, modern code using the right tools and techniques - not just the latest trends. It's about creating solutions that work beautifully and scale smoothly."
  },
  {
    question: "What's the risk of working with you?",
    answer: "We're transparent about being a small team. The risk is we might not be the right fit for massive enterprise projects. But for startups and growing companies, we offer speed, flexibility, and personal attention that big agencies can't match."
  },
  {
    question: "How do you actually build projects?",
    answer: "We start with no-code tools for complex projects to get you to market fast. Then we build coded, SEO-optimized external pages. Finally, we can take your app piece by piece into custom code if you want to scale further. It's a gradual evolution approach."
  },
  {
    question: "No-code first, then real code?",
    answer: "Exactly. We use no-code for speed and validation, then migrate to custom code for performance and scale. This approach lets you launch quickly, validate your idea, and then invest in the right technical foundation."
  },
  {
    question: "How fast can you ship?",
    answer: "With no-code tools, we can have your MVP live in days, not months. External pages with custom code take 1-2 weeks. The beauty of our approach is you see progress immediately and can iterate based on real user feedback."
  },
  {
    question: "What if I want to scale beyond no-code?",
    answer: "Perfect! That's exactly our sweet spot. We can gradually migrate your app from no-code to custom code, piece by piece. This gives you the best of both worlds - speed to market and the flexibility to scale when you're ready."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full">
      <Card className="w-full max-w-7xl mx-auto bg-white p-6 md:p-8 lg:p-12">
        <div className="text-center mb-6">
          <Chip size="xs" className="mb-4 flex items-center gap-1">
            <IconHelp size={14} />
            <span>FAQS</span>
          </Chip>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-grey-80 mb-4 leading-tight">
            Questions we get asked
          </h2>
          <p className="text-grey-60 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
            The stuff founders actually want to know about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-grey-20 rounded-[8px] overflow-hidden transition-colors bg-white">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-grey-5 transition-colors focus:outline-none focus:ring-0 focus:border-0 focus:shadow-none bg-transparent"
                style={{ outline: 'none', border: 'none' }}
              >
                <h3 className="text-grey-80 text-[16px] font-semibold pr-4">
                  {faq.question}
                </h3>
                <IconChevronDown 
                  size={20} 
                  className={`text-grey-60 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 pt-0">
                  <p className="text-grey-60 text-[14px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default FAQ; 