import React, { useState } from 'react';
import Card from './ui/Card';
import Chip from './ui/Chip';
import { IconChevronDown, IconHelp } from '@tabler/icons-react';

const faqs = [
  {
    question: "What is Modulab?",
    answer: "Modulab is a product lab where we build digital products that solve real problems. We're builders who create products we believe in and ship them to the world."
  },
  {
    question: "What kind of products do you build?",
    answer: "We build digital products that solve real problems. We use a lean, iterative approach—starting with no-code MVPs and evolving to custom code when we need more control and scale."
  },
  {
    question: "How do you approach product development?",
    answer: "Every product starts with a real problem we've experienced or observed. We research, validate, build MVPs quickly, and iterate based on user feedback."
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
            Questions about Modulab
          </h2>
          <p className="text-grey-60 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our product lab approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className={`border border-grey-20 rounded-[8px] overflow-hidden transition-colors ${openIndex === index ? 'bg-white' : 'bg-grey-5'}`}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-grey-5 transition-colors focus:outline-none focus:ring-0 focus:border-0 focus:shadow-none"
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