import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const FinalCTA: React.FC = () => (
  <section className="w-full">
    <Card className="w-full max-w-7xl mx-auto bg-white p-6 md:p-8 lg:p-12">
      <div className="text-center">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-grey-80 mb-4 leading-tight">
          Have an idea? We'll bring it to life.
        </h2>
        <p className="text-grey-60 text-[16px] md:text-[18px] max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether it's vibe coding, no-code, or a mix of both—let's build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="https://cal.com/richie-muhammed-vwayuh" variant="primary" size="md" style={{ minWidth: '200px' }}>
            Book a Call
          </Button>
                      <Button href="https://cal.com/richie-muhammed-vwayuh" variant="outline" size="md" style={{ minWidth: '200px' }}>
            Send a Message
          </Button>
        </div>
        <p className="text-grey-50 text-[14px] mt-6">
          No pressure, no sales pitch. Just a conversation about your project.
        </p>
      </div>
    </Card>
  </section>
);

export default FinalCTA; 