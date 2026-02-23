import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Lang = "en" | "ar";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<string, Record<Lang, string>> = {
  // Hero
  "hero.name": { en: "Abdulaziz A. Algambar", ar: "عبدالعزيز آل قمبر" },
  "hero.headline1": {
    en: "Stop Losing Revenue to",
    ar: "توقف عن خسارة الإيرادات بسبب",
  },
  "hero.headline2": { en: "Manual Processes.", ar: "العمليات اليدوية." },
  "hero.sub": {
    en: "I help growing Saudi businesses increase revenue, automate operations, and optimize customer experience through smart digital systems.",
    ar: "أساعد الشركات السعودية النامية على زيادة الإيرادات، وأتمتة العمليات، وتحسين تجربة العملاء من خلال أنظمة رقمية ذكية.",
  },
  "hero.cta1": {
    en: "Book a 40-Minute Strategy Call",
    ar: "احجز مكالمة استراتيجية (40 دقيقة)",
  },
  "hero.cta2": { en: "Request Business Audit", ar: "اطلب تدقيقاً لأعمالك" },
  "hero.badge.apex": {
    en: "APEX 5-Star Airline Award Contributor",
    ar: "مساهم في جائزة APEX للطيران 5 نجوم",
  },
  "hero.badge.exp": {
    en: "25+ Years · Saudia Airlines · STC",
    ar: "٢٥+ سنة · الخطوط السعودية · STC",
  },
  "hero.badge.edu": {
    en: "KFUPM Computer Engineering",
    ar: "هندسة حاسب آلي · جامعة الملك فهد للبترول والمعادن",
  },

  // Results
  "results.label": { en: "Proven Track Record", ar: "سجل حافل بالنتائج" },
  "results.title1": { en: "Results That", ar: "نتائج" },
  "results.title2": { en: "Speak for Themselves", ar: "تتحدث عن نفسها" },
  "results.m1.value": { en: "50%", ar: "٥٠٪" },
  "results.m1.label": {
    en: "Customer Satisfaction Increase",
    ar: "زيادة في رضا العملاء",
  },
  "results.m1.detail": {
    en: "Genesys cloud migration at Saudia Airlines",
    ar: "ترقية نظام الى كلاود Genesys الخطوط السعودية",
  },
  "results.m2.value": { en: "20% → 86%", ar: "٢٠٪ ← ٨٦٪" },
  "results.m2.label": { en: "Service Quality Score", ar: "نسبة جودة الخدمة" },
  "results.m2.detail": {
    en: "QA-driven coaching across 4 call centers",
    ar: "تدريب مبني على ضمان الجودة عبر ٤ مراكز اتصال",
  },
  "results.m3.value": { en: "170+", ar: "+١٧٠" },
  "results.m3.label": { en: "Associates Coached", ar: "موظف تم تدريبهم" },
  "results.m3.detail": {
    en: "7,200+ hours of leadership & sales training",
    ar: "+٧٬٢٠٠ ساعة تدريب قيادي وبيعي",
  },
  "results.m4.value": { en: "400+", ar: "+٤٠٠" },
  "results.m4.label": {
    en: "Agent Interactions Audited Weekly",
    ar: "تفاعل وكيل يتم تدقيقه أسبوعياً",
  },
  "results.m4.detail": {
    en: "Real-time evaluation frameworks & feedback loops",
    ar: "أطر تقييم فورية وحلقات تغذية راجعة",
  },

  // Qualification
  "qual.label": { en: "Is This Right For You?", ar: "هل هذا مناسب لك؟" },
  "qual.title1": { en: "Built for Businesses That Are", ar: "مصمّم للشركات" },
  "qual.title2": { en: "Ready to Scale", ar: "المستعدة للنمو" },
  "qual.for": { en: "This is for you if", ar: "هذا مناسب لك إذا" },
  "qual.notfor": { en: "This is NOT for you if", ar: "هذا ليس مناسباً لك إذا" },
  "qual.f1": {
    en: "You have a growing team but manual processes and spreadsheets slow you down",
    ar: "لديك فريق متنامٍ لكن العمليات اليدوية والجداول تبطئكم",
  },
  "qual.f2": {
    en: "You lack performance dashboards, KPIs, and real-time reporting",
    ar: "تفتقر إلى لوحات أداء ومؤشرات قياس وتقارير فورية",
  },
  "qual.f3": {
    en: "Your CRM, call center, or customer handling is inefficient",
    ar: "نظام CRM أو مركز الاتصال أو خدمة العملاء لديك غير فعّال",
  },
  "qual.f4": {
    en: "You want structured automation — not another quick-fix website",
    ar: "تريد أتمتة مهيكلة — وليس موقعاً إلكترونياً سريعاً آخر",
  },
  "qual.f5": {
    en: "You're generating 1M+ SAR annually and need systems to scale",
    ar: "إيراداتك تتجاوز مليون ريال سنوياً وتحتاج أنظمة للتوسع",
  },
  "qual.n1": {
    en: "Very early startups with no revenue or team",
    ar: "شركات ناشئة في بدايتها بدون إيرادات أو فريق",
  },
  "qual.n2": {
    en: "Businesses looking for the cheapest website or logo",
    ar: "شركات تبحث عن أرخص موقع أو شعار",
  },
  "qual.n3": {
    en: "One-time small design or social media projects",
    ar: "مشاريع تصميم صغيرة أو سوشال ميديا لمرة واحدة",
  },

  // Expertise
  "exp.label": { en: "What I Deliver", ar: "ما أقدّمه" },
  "exp.title1": { en: "Strategic Solutions,", ar: "حلول استراتيجية،" },
  "exp.title2": { en: "Not Just Code", ar: "وليست مجرد كود" },
  "exp.s1.title": {
    en: "Contact Center Optimization",
    ar: "تحسين مراكز الاتصال",
  },
  "exp.s1.desc": {
    en: "Genesys & Avaya migration, call routing, escalation models, and real-time KPI dashboards.",
    ar: "ترحيل Genesys و Avaya، توجيه المكالمات، نماذج التصعيد، ولوحات مؤشرات أداء فورية.",
  },
  "exp.s2.title": {
    en: "Business Process Automation",
    ar: "أتمتة العمليات التجارية",
  },
  "exp.s2.desc": {
    en: "Eliminate manual workflows. Automate reporting, CRM pipelines, and operational bottlenecks.",
    ar: "إزالة سير العمل اليدوي. أتمتة التقارير وخطوط CRM واختناقات العمليات.",
  },
  "exp.s3.title": { en: "Performance & Analytics", ar: "الأداء والتحليلات" },
  "exp.s3.desc": {
    en: "Data-driven dashboards using SAP, Amadeus, and custom BI tools to guide executive decisions.",
    ar: "لوحات بيانات باستخدام SAP و Amadeus وأدوات BI مخصصة لتوجيه القرارات التنفيذية.",
  },
  "exp.s4.title": {
    en: "E-commerce & POS Systems",
    ar: "التجارة الإلكترونية وأنظمة نقاط البيع",
  },
  "exp.s4.desc": {
    en: "Full-stack web platforms and POS solutions for retail chains, clinics, and F&B brands.",
    ar: "منصات ويب متكاملة وحلول نقاط بيع لسلاسل التجزئة والعيادات والمطاعم.",
  },
  "exp.s5.title": {
    en: "CRM & CX Strategy",
    ar: "استراتيجية CRM وتجربة العملاء",
  },
  "exp.s5.desc": {
    en: "Customer journey mapping, quality assurance frameworks, and satisfaction improvement programs.",
    ar: "رسم رحلة العميل، أطر ضمان الجودة، وبرامج تحسين الرضا.",
  },
  "exp.s6.title": {
    en: "Team Training & Coaching",
    ar: "تدريب الفرق والتوجيه",
  },
  "exp.s6.desc": {
    en: "Leadership workshops, sales coaching, and onboarding programs — 7,200+ hours delivered.",
    ar: "ورش قيادية، تدريب بيعي، وبرامج تأهيل — أكثر من ٧٬٢٠٠ ساعة تدريبية.",
  },

  // Footer
  "footer.title1": { en: "Ready to", ar: "مستعد" },
  "footer.title2": { en: "Transform Your Operations?", ar: "لتحويل عملياتك؟" },
  "footer.sub": {
    en: "Let's discuss how automation and smart systems can drive measurable growth for your business.",
    ar: "لنناقش كيف يمكن للأتمتة والأنظمة الذكية تحقيق نمو ملموس لأعمالك.",
  },
  "footer.cta": { en: "Book a Strategy Call", ar: "احجز مكالمة استراتيجية" },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) || "en";
  });

  const isRTL = lang === "ar";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
};
