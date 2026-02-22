import { Headphones, BarChart3, ShoppingCart, Cog, Monitor, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Contact Center Optimization",
    desc: "Genesys & Avaya migration, call routing, escalation models, and real-time KPI dashboards.",
  },
  {
    icon: Cog,
    title: "Business Process Automation",
    desc: "Eliminate manual workflows. Automate reporting, CRM pipelines, and operational bottlenecks.",
  },
  {
    icon: BarChart3,
    title: "Performance & Analytics",
    desc: "Data-driven dashboards using SAP, Amadeus, and custom BI tools to guide executive decisions.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & POS Systems",
    desc: "Full-stack web platforms and POS solutions for retail chains, clinics, and F&B brands.",
  },
  {
    icon: Monitor,
    title: "CRM & CX Strategy",
    desc: "Customer journey mapping, quality assurance frameworks, and satisfaction improvement programs.",
  },
  {
    icon: GraduationCap,
    title: "Team Training & Coaching",
    desc: "Leadership workshops, sales coaching, and onboarding programs — 7,200+ hours delivered.",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-4">
            What I Deliver
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Strategic Solutions,{" "}
            <span className="text-gradient-gold">Not Just Code</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card/60 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
