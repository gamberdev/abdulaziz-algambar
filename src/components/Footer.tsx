import { Mail, Phone, Linkedin, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LangContext";
import { useState, useEffect, useRef } from "react";
import { PopupModal } from "react-calendly";

const Footer = () => {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    rootRef.current = document.getElementById("root") as HTMLDivElement;
  }, []);
  return (
    <footer className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-background" />
      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("footer.title1")}{" "}
            <span className="text-gradient-gold">{t("footer.title2")}</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            {t("footer.sub")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => setIsOpen(true)}
              className="bg-primary text-primary-foreground hover:bg-gold-light font-body font-semibold px-8 py-6 text-base rounded-md transition-all duration-300 hover:shadow-[0_0_30px_hsl(40_45%_57%/0.3)]"
            >
              <Calendar className="h-5 w-5 me-2" />
              {t("footer.cta")}
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 font-body font-medium px-8 py-6 text-base rounded-md transition-all duration-300"
            >
              <a href="mailto:azizalgambar@gmail.com?subject=Booking Inquiry">
                <Mail className="h-5 w-5 me-2" />
                azizalgambar@gmail.com
              </a>
            </Button>
          </div>
        </div>

        <div className="divider-gold mx-auto max-w-2xl mb-12" />

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-body text-muted-foreground mb-8">
          <a
            href="tel:+966504997836"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            +966 50 499 7836
          </a>
          <a
            href="https://linkedin.com/in/abdulaziz-algambar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {t("hero.name").includes("عبد")
              ? "الدمام، المملكة العربية السعودية"
              : "Dammam, Saudi Arabia"}
          </span>
        </div>

        <p className="text-center text-xs font-body text-muted-foreground/60">
          © {new Date().getFullYear()} {t("hero.name")}. {t("footer.rights")}
        </p>
      </div>
      {rootRef.current && (
        <PopupModal
          url="https://calendly.com/azizalgambar"
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
          rootElement={rootRef.current}
        />
      )}
    </footer>
  );
};

export default Footer;
