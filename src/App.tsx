import { useEffect, useRef, useState } from "react";

const CTA_LINK = "https://coincarriere.com/register?type=company";

const trackLead = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
};

// ── Utility: simple intersection-observer hook for animations ──
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Ticker logos data ──
const PARTNER_LOGOS = [
  { name: "Sofitel Marrakech", logo: "https://sofitel.accor.com/content/dam/brands/sof/global-marketing/brand-identity/logos/new-logo/Sofitel_CL_Gold.svg" },
  { name: "Hyatt Regency Casablanca", logo: "https://www.hyatt.com/t/favicons/apple-touch-icon.png" },
  { name: "Radisson Blu Rabat", logo: "https://www.radissonhotels.com/statics/webextras/public/favicons/apple-touch-icon.png" },
  { name: "Four Seasons Marrakech", logo: "https://www.fourseasons.com/alt/fshr/design3/images/favicon/apple-touch-icon.png" },
  { name: "Riu Palace Tikida Agadir", logo: "https://www.riu.com/hotel/assets/favicon/apple-touch-icon.png" },
  { name: "Kenzi Hotels", logo: "https://image-tc.galaxy.tf/wisvg-9lk4xzde55nno9mupujx82hxf/kenzitowerhotel-scroll.svg" },
  { name: "Ibis Casablanca", logo: "https://all.accor.com/fact-sheet/assets/icons/brands/icons/color/ibh.svg" },
  { name: "Fes Marriott Hotel Jnane Palace", logo: "https://cache.marriott.com/content/dam/marriott-digital/mc/global-property-shared/en_us/logo/assets/mc-logo-econfo.png" },
];

// ── Steps data ──
const STEPS = [
  {
    num: "01",
    title: "Publiez",
    desc: "Décrivez votre offre saisonnière en quelques minutes avec notre formulaire guidé.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Recevez",
    desc: "Les candidats qualifiés et vérifiés postulent directement sur votre annonce.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Évaluez",
    desc: "Utilisez notre pipeline visuel pour noter les profils et planifier vos entretiens.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Embauchez",
    desc: "Envoyez votre offre et suivez vos recrutements en temps réel depuis votre mobile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

// ── Benefits data ──
const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
      </svg>
    ),
    title: "Pipeline Visuel",
    desc: "Suivez chaque candidature d'un coup d'œil sans vous perdre dans les emails. Tout est centralisé.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Profils Vérifiés",
    desc: "Fini les faux profils. Nous filtrons et vérifions les candidats spécialement pour votre secteur.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Entretiens Intégrés",
    desc: "Planifiez vos rendez-vous directement depuis votre mobile. Notifications automatiques envoyées.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Accompagnement Dédié",
    desc: "Un conseiller expert vous aide à trouver le profil rare en moins de 48h. Toujours à vos côtés.",
  },
];

// ── Stats data ──
const STATS = [
  { value: "48H", label: "Temps moyen pour recevoir un premier profil qualifié" },
  { value: "−60%", label: "Temps de gestion du recrutement économisé" },
  { value: "95%", label: "Taux de satisfaction des gérants partenaires" },
];

// ── CTA Button Component ──
function CTAButton({ size = "lg", className = "" }: { size?: "sm" | "lg"; className?: string }) {
  return (
    <a
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackLead}
      className={`
        inline-flex items-center justify-center gap-2 font-bold rounded-xl
        bg-[#b4dc02] text-[#003a57]
        hover:bg-[#c8f002] hover:scale-[1.03] active:scale-[0.98]
        transition-all duration-200 cursor-pointer select-none
        ${size === "lg" ? "text-base sm:text-lg px-6 sm:px-8 py-4 w-full sm:w-auto sm:min-w-[320px]" : "text-base px-6 py-3"}
        ${className}
      `}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
      Publier votre annonce maintenant
    </a>
  );
}

// ── Logo ──
function Logo({ variant = 'default', className = "" }: { variant?: 'default' | 'white'; className?: string } = {}) {
  const src = variant === 'white' ? "/images/coincarriere-logo-white.webp" : "/images/coincarriere-logo.webp";
  return (
    <div className={`flex items-center ${className}`}>
      <img src={src} alt="CoinCarrière Logo" className="h-11 w-auto object-contain" width="220" height="44" decoding="async" />
    </div>
  );
}

// ── Partner Logo Card ──
function PartnerBadge({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 rounded-xl border bg-white border-slate-100 shrink-0 shadow-sm">
      <div className="w-8 h-8 flex items-center justify-center shrink-0">
        <img src={logo} alt={`Logo ${name}`} className="w-full h-full object-contain rounded-sm" loading="lazy" decoding="async" />
      </div>
      <span className="text-sm font-semibold whitespace-nowrap text-slate-700">{name}</span>
    </div>
  );
}

// ── Scrolling Ticker ──
function LogoTicker() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f0f8ff] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f0f8ff] to-transparent z-10 pointer-events-none" />
      <div className="flex gap-4 animate-ticker w-max">
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, i) => (
          <PartnerBadge key={i} name={partner.name} logo={partner.logo} />
        ))}
      </div>
    </div>
  );
}

// ── Step Card ──
function StepCard({ step, idx }: { step: typeof STEPS[0]; idx: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${idx * 120}ms` }}
    >
      {/* Connector line (desktop) */}
      {idx < STEPS.length - 1 && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] right-[-50%] h-0.5 bg-gradient-to-r from-[#0077B6]/30 to-transparent z-0" />
      )}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#005a8e] text-white flex items-center justify-center shadow-lg shadow-blue-200 mb-4">
        {step.icon}
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#b4dc02] text-[#3a4700] text-xs font-black flex items-center justify-center shadow">
          {idx + 1}
        </span>
      </div>
      <h3 className="text-xl font-bold text-[#0077B6] mb-2">{step.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
    </div>
  );
}

// ── Benefit Card ──
function BenefitCard({ benefit, idx }: { benefit: typeof BENEFITS[0]; idx: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`flex flex-col gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${idx * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-[#e8f4fd] text-[#0077B6] flex items-center justify-center">
        {benefit.icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-1">{benefit.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
      </div>
      <div className="mt-auto pt-2">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0077B6]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Inclus dans votre compte
        </span>
      </div>
    </div>
  );
}

// ── Stat Card ──
function StatCard({ stat, idx }: { stat: typeof STATS[0]; idx: number }) {
  const { ref, visible } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      <div className="text-5xl md:text-6xl font-black text-[#b4dc02] mb-3">{stat.value}</div>
      <p className="text-white/80 text-sm leading-relaxed max-w-[180px]">{stat.label}</p>
    </div>
  );
}

// ══════════════════════════════════════════
//  MAIN APP
// ══════════════════════════════════════════
export default function App() {
  const heroInView = useInView(0.05);

  return (
    <div className="font-[Inter,sans-serif] bg-white text-slate-800 overflow-x-hidden">

      {/* ── STICKY TOP BAR ── */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLead}
            className="inline-flex items-center gap-1.5 bg-[#0077B6] text-white font-bold rounded-lg px-4 py-2 text-sm hover:bg-[#005a8e] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            Commencer gratuitement
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO (full-bleed background image)
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">

        {/* ── Full-bleed background image ── */}
        <img
          src="/images/hero-hotel.webp"
          alt="Gérant d'hôtel satisfait utilisant CoinCarrière"
          className="absolute inset-0 w-full h-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
        />

        {/* ── Multi-layer dark overlay for legibility ── */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002d45]/90 via-[#003a57]/75 to-[#0077B6]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/80 via-transparent to-[#001e2e]/30" />

        {/* ── Subtle grid texture ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-[#b4dc02]/10 blur-3xl" />
          <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-[#0077B6]/20 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* ── Content (single column, centered on mobile / left-aligned on desktop) ── */}
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-8 py-24 md:py-32">
          <div
            ref={heroInView.ref}
            className={`flex flex-col gap-7 max-w-2xl transition-all duration-1000 ${heroInView.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 self-start bg-white/10 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#b4dc02] animate-pulse shrink-0" />
              <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                Hôtellerie & Restauration — Maroc
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] drop-shadow-lg">
              Hôtels & Restaurants :{" "}
              <span className="text-[#b4dc02]">recrutez le bon&nbsp;profil,</span>{" "}
              plus vite
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl drop-shadow">
              Ne perdez plus de temps avec les candidats{" "}
              <em className="not-italic font-semibold text-white">"fantômes"</em>. Accédez au premier vivier de talents qualifiés et vérifiés pour l'hôtellerie au Maroc.
            </p>

            {/* CTA block */}
            <div className="flex flex-col items-stretch sm:items-start gap-2 pt-1">
              <CTAButton size="lg" className="w-full sm:w-auto" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-white/70 text-sm font-medium mt-1">
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#b4dc02" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Gratuit pour commencer
                </span>
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#b4dc02" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Aucune carte bancaire requise
                </span>
              </div>
            </div>

            {/* Social proof row */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                {PARTNER_LOGOS.slice(0, 4).map((partner, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white/60 flex items-center justify-center bg-white overflow-hidden shadow-md p-0.5"
                    title={partner.name}
                  >
                    <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" decoding="async" />
                  </div>
                ))}
              </div>
              <p className="text-white/80 text-sm">
                <strong className="text-white">+451 entreprises</strong> recrutent déjà sur CoinCarrière
              </p>
            </div>
          </div>

          {/* Floating notification card — bottom-right on desktop */}
          <div className="hidden lg:flex absolute bottom-16 right-8 items-center gap-3 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl border border-white/60 w-72">
            <div className="w-10 h-10 rounded-full bg-[#b4dc02] flex items-center justify-center shrink-0 shadow">
              <svg viewBox="0 0 24 24" fill="none" stroke="#3a4700" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-slate-500">Nouveau candidat reçu</p>
              <p className="text-sm font-bold text-slate-800 truncate">Chef de rang · Marrakech</p>
            </div>
            <span className="text-xs font-semibold text-[#0077B6] bg-blue-50 px-2 py-1 rounded-full whitespace-nowrap">il y a 3 min</span>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — SOCIAL PROOF
      ══════════════════════════════════════════ */}
      <section className="py-16 bg-[#f0f8ff]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Big number */}
          <div className="text-center mb-10">
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-3">Ils nous font confiance</p>
            <div className="inline-flex items-baseline gap-2">
              <span className="text-5xl font-black text-[#0077B6]">+451</span>
              <span className="text-xl font-semibold text-slate-600">entreprises recrutent déjà sur CoinCarrière</span>
            </div>
          </div>

          {/* Scrolling logos */}
          <LogoTicker />

          {/* Testimonial */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 relative">
              {/* Quote icon */}
              <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-[#b4dc02] flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" fill="#3a4700" className="w-5 h-5">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} viewBox="0 0 24 24" fill="#b4dc02" className="w-5 h-5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 text-lg leading-relaxed font-medium italic mb-6">
                "Depuis que nous utilisons CoinCarrière, nous recevons <strong className="text-[#0077B6] not-italic">3x plus de candidatures qualifiées</strong> pour notre service en salle. Le pipeline visuel nous fait gagner un temps précieux."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-[#e0f0fb]">
                  <img src="/images/testimonial-mk.webp" alt="Mohammed K." className="w-full h-full object-cover object-top" loading="lazy" decoding="async" width="40" height="40" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Mohammed K.</p>
                  <p className="text-slate-500 text-xs">Gérant de restaurant · Marrakech</p>
                </div>
                <div className="ml-auto shrink-0">
                  <span className="bg-[#e8f4fd] text-[#0077B6] text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Client vérifié</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — PROCESSUS
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#e8f4fd] text-[#0077B6] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">La simplicité en 4 étapes</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
              Recruter n'a jamais été aussi <span className="text-[#0077B6]">simple</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              De la publication à l'embauche, tout est conçu pour vous faire gagner du temps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative">
            {STEPS.map((step, idx) => (
              <StepCard key={idx} step={step} idx={idx} />
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton size="lg" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — AVANTAGES
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-[#f7fbff] to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#f0ffd0] text-[#5a6e00] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Vos douleurs, nos solutions</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
              Tout ce dont vous avez besoin pour <span className="text-[#0077B6]">recruter efficacement</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Des outils pensés par des experts du secteur hôtelier pour des recruteurs comme vous.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <BenefitCard key={idx} benefit={benefit} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — VIDÉO
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-[#e8f4fd] text-[#0077B6] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Démonstration</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
              Découvrez comment <span className="text-[#0077B6]">ça marche</span>
            </h2>
            <p className="text-slate-500">Voyez CoinCarrière en action en moins de 2 minutes.</p>
          </div>

          {/* Video placeholder */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#003a57] to-[#0077B6] aspect-video flex items-center justify-center group cursor-pointer border-4 border-[#b4dc02]/30">
            <img
              src="/images/dashboard-preview.webp"
              alt="Aperçu de la plateforme CoinCarrière"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
              loading="lazy"
              decoding="async"
            />
            {/* Play button */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#b4dc02] flex items-center justify-center shadow-2xl shadow-lime-400/40 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 24 24" fill="#3a4700" className="w-8 h-8 ml-1">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-lg">Voir la démo en direct</p>
                <p className="text-white/60 text-sm">Durée : 1 min 45 sec</p>
              </div>
            </div>
            {/* Corner badge */}
            <div className="absolute top-4 right-4 bg-[#b4dc02] text-[#3a4700] text-xs font-bold px-3 py-1 rounded-full">
              GRATUIT
            </div>
          </div>

          {/* Feature highlights below video */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { icon: "⚡", label: "Mise en ligne en 5 min" },
              { icon: "📱", label: "100% mobile-friendly" },
              { icon: "🔒", label: "Données sécurisées" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 rounded-xl bg-[#f7fbff] border border-[#e0f0fb]">
                <span className="text-2xl mb-2">{item.icon}</span>
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — STATISTIQUES
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-[#003a57] via-[#0077B6] to-[#00a8e8] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#b4dc02]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-white/10 border border-white/20 text-white/90 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Chiffres prouvés</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Des résultats mesurables,{" "}
              <span className="text-[#b4dc02]">dès le premier jour</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STATS.map((stat, idx) => (
              <StatCard key={idx} stat={stat} idx={idx} />
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton size="lg" />
            <p className="text-white/50 text-sm mt-3">Rejoignez +451 entreprises qui font confiance à CoinCarrière</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7 — CTA FINAL
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative lime accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077B6] via-[#b4dc02] to-[#0077B6]" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f0f8ff] blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          {/* Icon */}
          <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#005a8e] items-center justify-center shadow-xl shadow-blue-200 mb-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="#b4dc02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-5">
            Votre prochain recrutement{" "}
            <span className="text-[#0077B6]">commence ici</span>
          </h2>

          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Publiez votre première annonce en moins de <strong className="text-[#0077B6]">5 minutes</strong>. Sans carte bancaire. Sans engagement.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3">
            <CTAButton size="lg" />
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-slate-500 text-sm mt-1">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="#b4dc02" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Gratuit pour commencer
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="#b4dc02" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Configuration en 5 minutes
              </span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12 pt-8 border-t border-slate-100">
            {[
              { icon: "🔒", text: "Données sécurisées SSL" },
              { icon: "✅", text: "Candidats vérifiés" },
              { icon: "🇲🇦", text: "100% Maroc" },
              { icon: "⭐", text: "Support 7j/7" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#003a57] py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo variant="white" />
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} CoinCarrière · Tous droits réservés · Maroc
          </p>
          <div className="flex gap-4">
            {[
              { label: "Confidentialité", href: "#" },
              { label: "CGU", href: "#" },
              { label: "Contact", href: "#" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-white/40 hover:text-white/80 text-sm transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
