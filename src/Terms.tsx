import { useState, useEffect } from "react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("definitions");

  const sections = [
    { id: "definitions", label: "1. Définitions" },
    { id: "inscription", label: "2. Inscription & Compte" },
    { id: "services", label: "3. Services proposés" },
    { id: "obligations", label: "4. Obligations" },
    { id: "contenu", label: "5. Contenu Utilisateur" },
    { id: "propriete", label: "6. Propriété Intellectuelle" },
    { id: "responsabilite", label: "7. Limitation Responsabilité" },
    { id: "resiliation", label: "8. Suspension & Résiliation" },
    { id: "donnees", label: "9. Protection Données" },
    { id: "tiers", label: "10. Liens sites tiers" },
    { id: "modifications", label: "11. Modifications" },
    { id: "loi", label: "12. Droit & Juridiction" },
    { id: "divers", label: "13-15. Dispositions diverses" },
    { id: "contact", label: "16. Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="font-[Inter,sans-serif] bg-slate-50 text-slate-800 min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/coincarriere.webp"
              alt="CoinCarrière Logo"
              className="h-11 w-auto object-contain cursor-pointer"
              onClick={() => window.location.href = "/"}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/coincarriere-logo.webp";
              }}
            />
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0077B6] hover:text-[#005a8e] transition-colors bg-blue-50 hover:bg-blue-100/80 px-4 py-2 rounded-xl"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Retour à l'accueil
          </a>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003a57] via-[#005a8e] to-[#0077B6] text-white py-16 sm:py-20 px-4">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-[#b4dc02]/10 blur-3xl" />
        <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#b4dc02] mb-4">
            Espace Juridique
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 drop-shadow">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Dernière mise à jour : 21 mai 2026 · Règlement régissant l'accès et l'utilisation de la plateforme CoinCarrière.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* STICKY SIDEBAR */}
          <aside className="lg:w-64 shrink-0 lg:sticky lg:top-24 h-fit max-lg:bg-white max-lg:p-4 max-lg:rounded-2xl max-lg:border max-lg:border-slate-100 max-lg:shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 max-lg:hidden">Table des matières</h3>
            <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scrollbar-none scroll-smooth">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`text-left text-sm font-semibold py-2 px-3 lg:px-4 rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer select-none ${activeSection === s.id
                    ? "bg-[#0077B6] text-white shadow-md shadow-blue-100 lg:-translate-r-1"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                    }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* LEGAL TEXT CONTENT */}
          <article className="flex-1 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-10 md:p-12 leading-relaxed">

            <div className="bg-[#f0f8ff] border-l-4 border-[#0077B6] rounded-r-2xl p-5 mb-10 flex gap-4">
              <span className="text-2xl mt-0.5 shrink-0">⚖️</span>
              <div>
                <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Contrat d'Utilisation</h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  L'utilisation de coincarriere.com est régie par les présentes CGU. En accédant à la plateforme, vous acceptez sans réserve ces conditions.
                </p>
              </div>
            </div>

            {/* SECTION 1 */}
            <section id="definitions" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">1</span>
                Définitions
              </h2>
              <div className="text-slate-600 space-y-4">
                <ul className="space-y-3">
                  <li><strong className="text-slate-800">Plateforme :</strong> le site web coincarriere.com et l'ensemble des services associés.</li>
                  <li><strong className="text-slate-800">Utilisateur :</strong> toute personne accédant à la Plateforme, qu'elle soit inscrite ou non.</li>
                  <li><strong className="text-slate-800">Candidat :</strong> Utilisateur inscrit recherchant un emploi, déposant un CV ou postulant.</li>
                  <li><strong className="text-slate-800">Employeur :</strong> personne morale ou physique publiant des offres d'emploi.</li>
                  <li><strong className="text-slate-800">Recruteur :</strong> utilisateur agissant pour le compte d'un Employeur.</li>
                  <li><strong className="text-slate-800">Contenu :</strong> tout texte, image, fichier, CV ou offre publié sur la Plateforme.</li>
                  <li><strong className="text-slate-800">Services :</strong> fonctionnalités de publication, dépôt de CV, gestion de candidatures et entretiens.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="inscription" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">2</span>
                Inscription et compte utilisateur
              </h2>
              <div className="text-slate-600 space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">2.1 Création de compte</h4>
                  <p className="mb-3">Lors de l'inscription, vous vous engagez à :</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Fournir des informations exactes, complètes et à jour.</li>
                    <li>Maintenir la confidentialité de vos identifiants de connexion.</li>
                    <li>Informer immédiatement CoinCarrière de toute utilisation non autorisée.</li>
                    <li>Ne pas créer plusieurs comptes pour une même personne.</li>
                  </ul>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">2.2 Âge minimum</h4>
                    <p className="text-xs">Vous devez être âgé d'au moins 16 ans pour utiliser la Plateforme.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">2.3 Responsabilité</h4>
                    <p className="text-xs">Vous êtes seul responsable de toutes les activités effectuées sous votre compte.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="services" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">3</span>
                Services proposés
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-slate-600">
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0077B6]"></span> Pour les Candidats
                  </h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Consultation d'offres et dépôt de CV.</li>
                    <li>Candidatures en ligne et suivi d'avancement.</li>
                    <li>Gestion des entretiens planifiés.</li>
                    <li>Notifications en temps réel.</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0077B6]"></span> Pour les Employeurs
                  </h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Publication et gestion d'offres d'emploi.</li>
                    <li>Gestion du pipeline de recrutement.</li>
                    <li>Consultation des profils et planification d'entretiens.</li>
                    <li>Outils d'analyse et reporting.</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-xs italic text-slate-400">Note : CoinCarrière s'efforce d'assurer une disponibilité 24h/24, 7j/7, hors périodes de maintenance.</p>
            </section>

            {/* SECTION 4 */}
            <section id="obligations" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">4</span>
                Obligations des Utilisateurs
              </h2>
              <div className="text-slate-600 space-y-6">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-2 text-sm">4.1 Obligations générales</h4>
                  <p className="text-xs mb-3">Interdiction formelle de publier du contenu illicite, discriminatoire ou haineux, d'utiliser des robots/scrapers pour collecter des données, ou de perturber le fonctionnement technique du site.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-slate-100 rounded-2xl">
                    <h4 className="font-bold text-slate-800 text-sm mb-2">Candidats</h4>
                    <ul className="list-disc pl-4 text-xs space-y-1">
                      <li>Informations véridiques dans le CV.</li>
                      <li>Pas de candidatures abusives.</li>
                      <li>Confidentialité des processus.</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-slate-100 rounded-2xl">
                    <h4 className="font-bold text-slate-800 text-sm mb-2">Employeurs</h4>
                    <ul className="list-disc pl-4 text-xs space-y-1">
                      <li>Offres réelles et non discriminatoires.</li>
                      <li>Respect de la législation du travail.</li>
                      <li>Usage exclusif des données pour le recrutement.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="contenu" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">5</span>
                Contenu publié par les Utilisateurs
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>
                  Vous conservez la propriété intellectuelle de vos contenus. En les publiant, vous accordez à <strong className="text-slate-800">CoinCarrière</strong> une licence non exclusive et gratuite pour utiliser et distribuer ce contenu dans le cadre des Services.
                </p>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-orange-800 text-sm">
                  <strong>Modération :</strong> Nous nous réservons le droit de supprimer tout contenu contrevenant aux CGU ou aux lois en vigueur, sans préavis.
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="propriete" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">6</span>
                Propriété Intellectuelle
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>
                  L'ensemble des éléments de la Plateforme (design, logos, textes, code source, bases de données) est la propriété exclusive de <strong className="text-slate-800">9558-9321 Quebec inc.</strong>.
                </p>
                <p>
                  Toute reproduction ou exploitation non autorisée est strictement interdite. Le nom « CoinCarrière » et son logo sont des marques déposées.
                </p>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="responsabilite" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">7</span>
                Limitation de responsabilité
              </h2>
              <div className="text-slate-600 space-y-4">
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-slate-800 mb-2">Rôle d'intermédiaire</h4>
                  <p className="text-sm">CoinCarrière est un intermédiaire technique. Nous ne sommes pas partie aux contrats de travail, ne garantissons pas l'embauche, ni la qualité des profils.</p>
                </div>
                <p className="text-sm italic">
                  La responsabilité totale de CoinCarrière est limitée au montant des frais versés durant les 12 derniers mois, ou à 100 $ CAD en l'absence de frais.
                </p>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="resiliation" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">8</span>
                Suspension et résiliation
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>
                  Vous pouvez demander la suppression de votre compte via <a href="mailto:contact@coincarriere.com" className="text-[#0077B6] underline">contact@coincarriere.com</a>.
                </p>
                <p>
                  CoinCarrière peut suspendre votre accès sans préavis en cas de violation des CGU, comportement frauduleux, ou atteinte à la sécurité de la Plateforme.
                </p>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="donnees" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">9</span>
                Protection des renseignements personnels
              </h2>
              <div className="text-slate-600">
                <p>
                  La collecte et le traitement de vos données sont régis par notre <a href="/privacy" className="text-[#0077B6] font-bold underline">Politique de confidentialité</a>, qui fait partie intégrante des présentes CGU.
                </p>
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="tiers" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">10</span>
                Liens vers des sites tiers
              </h2>
              <div className="text-slate-600">
                <p>
                  Nous ne sommes pas responsables du contenu, des pratiques de confidentialité ou de la disponibilité des sites tiers accessibles via des liens sur notre Plateforme.
                </p>
              </div>
            </section>

            {/* SECTION 11 */}
            <section id="modifications" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">11</span>
                Modifications des CGU
              </h2>
              <div className="text-slate-600">
                <p>
                  CoinCarrière se réserve le droit de modifier ces CGU. En cas de modification substantielle, vous serez informé par courriel ou via un avis sur le site.
                </p>
              </div>
            </section>

            {/* SECTION 12 */}
            <section id="loi" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">12</span>
                Droit applicable et juridiction
              </h2>
              <div className="text-slate-600">
                <p>
                  Les présentes CGU sont régies par les lois de la province de <strong className="text-slate-800">Québec</strong> et les lois fédérales du <strong className="text-slate-800">Canada</strong>. Les tribunaux du district judiciaire de Québec sont seuls compétents.
                </p>
              </div>
            </section>

            {/* SECTION 13-15 */}
            <section id="divers" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">13</span>
                Dispositions Diverses
              </h2>
              <div className="text-slate-600 space-y-4 text-sm">
                <p><strong>Divisibilité :</strong> Si une disposition est jugée invalide, les autres demeurent en vigueur.</p>
                <p><strong>Renonciation :</strong> Le défaut d'exercer un droit ne constitue pas une renonciation à ce droit.</p>
                <p><strong>Intégralité :</strong> Ces CGU et la Politique de confidentialité constituent l'intégralité de l'accord entre vous et CoinCarrière.</p>
              </div>
            </section>

            {/* SECTION 16 */}
            <section id="contact" className="scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">16</span>
                Contact
              </h2>
              <div className="text-slate-600 space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="mb-1"><strong className="text-slate-800">Courriel :</strong> contact@coincarriere.com</p>
                  <p className="mb-1"><strong className="text-slate-800">Entreprise :</strong> 9558-9321 Quebec inc. (CoinCarrière)</p>
                  <p><strong className="text-slate-800">Siège social :</strong> Québec, QC, Canada</p>
                </div>
              </div>
            </section>

          </article>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#003a57] py-8 mt-auto border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center" onClick={() => window.location.href = "/"}>
            <img src="/images/coincarriere-logo-white.webp" alt="CoinCarrière Logo" className="h-11 w-auto object-contain cursor-pointer" />
          </div>
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} CoinCarrière · Tous droits réservés · Québec & Maroc
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-white/40 hover:text-white/80 text-sm transition-colors">Confidentialité</a>
            <a href="/terms" className="text-white hover:text-white/80 text-sm transition-colors font-semibold">CGU</a>
            <a href="/" className="text-white/40 hover:text-white/80 text-sm transition-colors">Accueil</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
