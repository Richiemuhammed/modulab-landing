import Card from './ui/Card';
import Chip from './ui/Chip';

const WhoWeAre = () => (
  <section className="w-full">
    <Card className="w-full max-w-7xl mx-auto bg-white p-6 md:p-8 lg:p-12">
      <div className="flex flex-col items-start justify-center text-left w-full max-w-4xl">
        <Chip size="xs" className="mb-4">What We Are</Chip>
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-grey-80 mb-4 leading-tight">
          A Product Lab
        </h2>
        <p className="text-grey-60 text-[16px] md:text-[18px] mb-8 leading-relaxed">
          Modulab is a product lab where we build digital products that solve real problems. We're builders who create products we believe in and ship them to the world.
        </p>
        <ul className="list-none pl-0 space-y-3 text-grey-60 text-[14px] md:text-[16px]">
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#242424] rounded-full"></div>
            We build products we're passionate about and believe in.
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#242424] rounded-full"></div>
            Every product starts with a real problem we want to solve.
          </li>
          <li className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#242424] rounded-full"></div>
            We ship fast, iterate quickly, and build what works.
          </li>
        </ul>
      </div>
    </Card>
  </section>
);

export default WhoWeAre; 