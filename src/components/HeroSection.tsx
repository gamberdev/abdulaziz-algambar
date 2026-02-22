import { ArrowRight, Calendar, Award, Building2, Code2 } from "lucide-react";
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
          {/* Name */}
          <p className="text-sm font-body tracking-[0.4em] uppercase text-primary mb-6 opacity-0 animate-fade-up">
            Abdulaziz A. Algambar
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Stop Losing Revenue to{" "}
            <span className="text-gradient-gold">Manual Processes.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl font-body font-light text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            I help growing Saudi businesses increase revenue, automate operations, and optimize customer experience through smart digital systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-light font-body font-semibold px-8 py-6 text-base tracking-wide rounded-md transition-all duration-300 hover:shadow-[0_0_30px_hsl(40_45%_57%/0.3)]">
              <Calendar className="mr-2 h-5 w-5" />
              Book a 30-Minute Strategy Call
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 font-body font-medium px-8 py-6 text-base tracking-wide rounded-md transition-all duration-300">
              Request Business Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Credibility badges */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.55s' }}>
            <div className="divider-gold mx-auto max-w-lg mb-8" />
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-body text-muted-foreground">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                APEX 5-Star Airline Award Contributor
              </span>
              <span className="hidden md:inline text-border">|</span>
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                25+ Years · Saudia Airlines · STC
              </span>
              <span className="hidden md:inline text-border">|</span>
              <span className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" />
                KFUPM Computer Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
