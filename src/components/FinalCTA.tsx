import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const FinalCTA: React.FC = () => (
  <section className="w-full">
    <Card className="w-full max-w-7xl mx-auto bg-white p-6 md:p-8 lg:p-12">
      <div className="text-center">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-grey-80 mb-4 leading-tight">
          Follow Our Product Journey
        </h2>
        <p className="text-grey-60 text-[16px] md:text-[18px] max-w-2xl mx-auto mb-8 leading-relaxed">
          Stay updated on the products we're building and the problems we're solving. Join our community of builders and innovators.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="https://twitter.com/modulab" variant="primary" size="xs" style={{ minWidth: '200px' }}>
            Follow on Twitter
          </Button>
          <Button href="mailto:hello@modulab.com" variant="outline" size="xs" style={{ minWidth: '200px' }}>
            Get in Touch
          </Button>
        </div>
        <p className="text-grey-50 text-[14px] mt-6">
          We're always excited to connect with fellow builders and product enthusiasts.
        </p>
      </div>
    </Card>
  </section>
);

export default FinalCTA; 