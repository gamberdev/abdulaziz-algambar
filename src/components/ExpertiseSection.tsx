import { Headphones, BarChart3, ShoppingCart, Cog, Monitor, GraduationCap } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const ExpertiseSection = () => {
  const { t } = useLang();

  const services = [
    { icon: Headphones, title: t("exp.s1.title"), desc: t("exp.s1.desc") },
    { icon: Cog, title: t("exp.s2.title"), desc: t("exp.s2.desc") },
    { icon: BarChart3, title: t("exp.s3.title"), desc: t("exp.s3.desc") },
    { icon: ShoppingCart, title: t("exp.s4.title"), desc: t("exp.s4.desc") },
    { icon: Monitor, title: t("exp.s5.title"), desc: t("exp.s5.desc") },
    { icon: GraduationCap, title: t("exp.s6.title"), desc: t("exp.s6.desc") },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-body tracking-[0.3em] uppercase text-primary mb-4">{t("exp.label")}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            {t("exp.title1")}{" "}
            <span className="text-gradient-gold">{t("exp.title2")}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="group rounded-xl border border-border bg-card/60 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
