import Card from './ui/Card';
import Chip from './ui/Chip';

const WhoWeAre = () => (
  <section className="w-full">
    <Card className="w-full max-w-7xl mx-auto bg-white p-6 md:p-8 lg:p-12">
      <div className="flex flex-col items-start justify-center text-left w-full max-w-4xl mx-auto">
        <Chip size="xs" className="mb-4">Who We Are</Chip>
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-grey-80 mb-4 leading-tight">
          Building, Together.
        </h2>
        <p className="text-grey-60 text-[16px] md:text-[18px] mb-8 leading-relaxed">
          We're a vibe coding and no-code studio that believes in the power of rapid iteration and collaborative creation. We don't just build products—we craft experiences that feel effortless and magical.
        </p>
        <ul className="list-none pl-0 space-y-3 text-grey-60 text-[14px] md:text-[16px]">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#242424] rounded-full"></div>
            Built by people who care about quality and speed.
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#242424] rounded-full"></div>
            Trusted by startups and established teams alike.
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#242424] rounded-full"></div>
            Always hands-on, always shipping.
          </li>
        </ul>
      </div>
    </Card>
  </section>
);

export default WhoWeAre; 