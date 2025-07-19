import Header from '../components/Header';
import Hero from '../components/Hero';
import ProcessFlow from '../components/ProcessFlow';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import Content from '../components/Content';
import SEO from '../components/SEO';

// FAQ data for SEO
const faqData = [
  {
    question: "Can I actually trust AI to build my product?",
    answer: "Not by itself. But with us? Yeah. We don't just press a button and pray. We use AI to speed things up, then step in — checking, fixing, refining. It's human-led, AI-assisted. The tech helps, but the vision? That's us."
  },
  {
    question: "What if I need changes later or something breaks?",
    answer: "You're good. Everything we build is clean, readable code — not some cursed AI mess no dev wants to touch. Whether it's us or someone else, your project's future-proof."
  },
  {
    question: "Is this faster than hiring a dev shop?",
    answer: "By miles. Traditional agencies move like molasses. We move like caffeine. AI helps us skip the grunt work and focus on what matters — clean builds, shipped fast, without cutting corners."
  },
  {
    question: "If AI is involved, how do you make sure it's actually good?",
    answer: "Because we don't trust AI blindly. We test. We tweak. We use judgment. We're not just engineers — we're builders. We know when something's off, and we don't ship trash."
  },
  {
    question: "So this isn't no-code?",
    answer: "Nope. This is post-code. No-code is clicking boxes. We write real code — we just do it faster, with AI in our corner. It's code with vibes, not limits."
  },
  {
    question: "Who's behind all this — AI or you?",
    answer: "Both. But we're in charge. Think of AI like a fast assistant. We give it direction, clean up the results, and ship products that feel human. 'Cause they are."
  }
];

function LandingPage() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen font-sans text-grey-80">
      <SEO
        title="Modulab – Build Smarter"
        description="Modulab is your creative space for building tools, AI workflows, and client projects. No limits. Just launch."
        image="/preview.png"
        faqData={faqData}
      />
      <Header />
      <div className="flex flex-col border-l border-r border-grey-30 max-w-[1320px] mx-auto min-h-screen">
        <main className="flex-1 pb-16">
          <Content>
            <Hero />
            <div className="flex flex-col gap-3">
              <ProcessFlow />
              <FAQ />
            </div>
            <FinalCTA />
            <Footer />
          </Content>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
  