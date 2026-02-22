import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(40 45% 57% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(40 45% 57% / 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Credibility badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-gold-subtle bg-gold-subtle font-body text-sm tracking-wide text-primary opacity-0 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary" />
            25+ Years Enterprise Experience &nbsp;|&nbsp; Former Leader at Saudia Airlines
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Stop Losing Revenue to{" "}
            <span className="text-gradient-gold">Manual Processes.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl font-body font-light text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Helping SMEs improve operational efficiency, customer satisfaction, and measurable growth through automation and performance systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-light font-body font-semibold px-8 py-6 text-base tracking-wide rounded-md transition-all duration-300 hover:shadow-[0_0_30px_hsl(40_45%_57%/0.3)]">
              <Calendar className="mr-2 h-5 w-5" />
              Book a 30-Minute Strategy Call
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 font-body font-medium px-8 py-6 text-base tracking-wide rounded-md transition-all duration-300">
              Request Business Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust line */}
          <div className="mt-16 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="divider-gold mx-auto max-w-md mb-6" />
            <p className="text-sm font-body text-muted-foreground tracking-widest uppercase">
              Trusted by retail chains · clinics · contact centers · ecommerce brands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
