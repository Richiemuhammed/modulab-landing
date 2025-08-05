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
    question: "What's the risk of working with you?",
    answer: "We're transparent about being a small team. The risk is we might not be the right fit for massive enterprise projects. But for startups and growing companies, we offer speed, flexibility, and personal attention that big agencies can't match."
  },
  {
    question: "How fast can you ship?",
    answer: "With no-code tools, we can have your MVP live in days, not months. External pages with custom code take 1-2 weeks. The beauty of our approach is you see progress immediately and can iterate based on real user feedback."
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
  