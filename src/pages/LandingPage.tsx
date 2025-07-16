import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Footer from '../components/Footer';
import Content from '../components/Content';
import SEO from '../components/SEO';

function LandingPage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen font-sans text-grey-80">
      <SEO
        title="Modulab – Build Smarter"
        description="Modulab is your creative space for building tools, AI workflows, and client projects. No limits. Just launch."
        image="/preview.png"
      />
      <Header />
      <div className="flex flex-col border-l border-r border-grey-30 max-w-[1320px] mx-auto min-h-screen">
        <main className="flex-1 pb-16">
          <Content>
            <Hero />
            <About />
            <Work />
            <Footer />
          </Content>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
  