import { TrendingUp, Users, BarChart3, Headphones } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "50%",
    label: "Customer Satisfaction Increase",
    detail: "Genesys cloud migration at Saudia Airlines",
  },
  {
    icon: BarChart3,
    value: "20% → 86%",
    label: "Service Quality Score",
    detail: "QA-driven coaching across 4 call centers",
  },
  {
    icon: Users,
    value: "170+",
    label: "Associates Coached",
    detail: "7,200+ hours of leadership & sales training",
  },
  {
    icon: Headphones,
    value: "400+",
    label: "Agent Interactions Audited Weekly",
    detail: "Real-time evaluation frameworks & feedback loops",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-4">
            Proven Track Record
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Results That{" "}
            <span className="text-gradient-gold">Speak for Themselves</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="group rounded-xl border border-gold-subtle bg-card p-8 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(40_45%_57%/0.08)]"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <m.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
                {m.value}
              </div>
              <div className="text-sm font-body font-semibold text-foreground mb-2">
                {m.label}
              </div>
              <div className="text-xs font-body text-muted-foreground leading-relaxed">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
