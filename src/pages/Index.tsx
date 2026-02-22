import HeroSection from "@/components/HeroSection";
import QualificationSection from "@/components/QualificationSection";
import ResultsSection from "@/components/ResultsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ResultsSection />
      <QualificationSection />
      <ExpertiseSection />
      <Footer />
    </main>
  );
};

export default Index;
