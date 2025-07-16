import Card from './ui/Card';
import Chip from './ui/Chip';

const WhoWeAre = () => (
  <section className="w-full mt-12">
    <Card className="w-full max-w-4xl mx-auto flex flex-col items-start bg-white p-8 md:p-12">
      <Chip size="xs" className="mb-4">Who We Are</Chip>
      <h2 className="text-[32px] md:text-[40px] font-semibold text-grey-80 mb-4">Building, Together.</h2>
      <p className="text-grey-60 text-[18px] max-w-xl mb-4">
        Modulab is a collective of engineers, designers, and builders. We turn ideas into robust products—combining technical depth with creative clarity. From MVP to scale, we’re your partners in building what’s next.
      </p>
      <ul className="list-none pl-0 space-y-2 text-grey-60 text-[16px]">
        <li>• Built by people who care about quality and speed.</li>
        <li>• Trusted by startups and established teams alike.</li>
        <li>• Always hands-on, always shipping.</li>
      </ul>
    </Card>
  </section>
);

export default WhoWeAre; 