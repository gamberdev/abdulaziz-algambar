import { Check, X } from "lucide-react";

const forYouItems = [
  "You have a growing team but manual processes slow you down",
  "You lack performance dashboards and clear KPIs",
  "Your CRM or call handling is inefficient",
  "You want structured automation instead of chaos",
];

const notForYouItems = [
  "Very early startups with no revenue",
  "Businesses looking for the cheapest website",
  "One-time small design projects",
];

const QualificationSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-4">
            Is This Right For You?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Built for Businesses That Are{" "}
            <span className="text-gradient-gold">Ready to Scale</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* This is for you */}
          <div className="rounded-xl border border-gold-subtle bg-card p-8 md:p-10 transition-all duration-300 hover:border-primary/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                This is for you if
              </h3>
            </div>
            <ul className="space-y-5">
              {forYouItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex-shrink-0 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-body text-secondary-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is NOT for you */}
          <div className="rounded-xl border border-border bg-card/50 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <X className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                This is NOT for you if
              </h3>
            </div>
            <ul className="space-y-5">
              {notForYouItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-muted flex-shrink-0 flex items-center justify-center">
                    <X className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <span className="font-body text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
