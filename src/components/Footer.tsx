import { Mail, Phone, Linkedin, MapPin, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-background" />

      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        {/* CTA Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to{" "}
            <span className="text-gradient-gold">Transform Your Operations?</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how automation and smart systems can drive measurable growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-light font-body font-semibold px-8 py-6 text-base rounded-md transition-all duration-300 hover:shadow-[0_0_30px_hsl(40_45%_57%/0.3)]">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 font-body font-medium px-8 py-6 text-base rounded-md transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              azizalgambar@gmail.com
            </Button>
          </div>
        </div>

        <div className="divider-gold mx-auto max-w-2xl mb-12" />

        {/* Contact details */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-body text-muted-foreground mb-8">
          <a href="tel:+966504997836" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            +966 50 499 7836
          </a>
          <a href="https://linkedin.com/in/abdulaziz-algambar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Dammam, Saudi Arabia
          </span>
        </div>

        <p className="text-center text-xs font-body text-muted-foreground/60">
          © {new Date().getFullYear()} Abdulaziz Algambar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
