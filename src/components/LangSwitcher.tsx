import { Languages } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

const LangSwitcher = () => {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className="fixed top-6 end-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full border border-gold-subtle bg-card/80 backdrop-blur-md text-sm font-body font-medium text-primary hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 shadow-lg"
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4" />
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LangSwitcher;
