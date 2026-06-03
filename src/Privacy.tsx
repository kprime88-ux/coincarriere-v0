import { useState, useEffect } from "react";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("identite");

  const sections = [
    { id: "identite", label: "1. Responsable du traitement" },
    { id: "champ", label: "2. Champ d'application" },
    { id: "collecte", label: "3. Données collectées" },
    { id: "finalites", label: "4. Finalités & Bases légales" },
    { id: "partage", label: "5. Partage des données" },
    { id: "transferts", label: "6. Transferts internationaux" },
    { id: "conservation", label: "7. Durée de conservation" },
    { id: "cookies", label: "8. Cookies & Suivi" },
    { id: "droits", label: "9. Vos droits" },
    { id: "securite", label: "10. Sécurité" },
    { id: "mineurs", label: "11. Protection des mineurs" },
    { id: "incidents", label: "12. Incidents de confidentialité" },
    { id: "modifications", label: "13. Modifications" },
    { id: "contact", label: "14. Contact" },
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
            Protection des Données
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4 drop-shadow">
            Politique de Confidentialité
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Dernière mise à jour : 21 mai 2026 · Comment nous collectons, utilisons et protégeons vos renseignements personnels.
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
              <span className="text-2xl mt-0.5 shrink-0">🔒</span>
              <div>
                <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-1">Engagement de Confidentialité</h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  CoinCarrière s'engage à protéger vos données personnelles conformément aux lois du Québec, du Canada, de l'Union Européenne et du Maroc. Nous ne vendons jamais vos données.
                </p>
              </div>
            </div>

            {/* SECTION 1 */}
            <section id="identite" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">1</span>
                Identité du responsable du traitement
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>Le site coincarriere.com est exploité par :</p>
                <ul className="space-y-2">
                  <li><strong>Raison sociale :</strong> 9558-9321 Quebec inc., faisant affaire sous le nom CoinCarrière</li>
                  <li><strong>NEQ :</strong> 1181724304</li>
                  <li><strong>Siège social :</strong> Quebec, QC, Canada</li>
                  <li><strong>Courriel :</strong> <a href="mailto:contact@coincarriere.com" className="text-[#0077B6] underline">contact@coincarriere.com</a></li>
                  <li><strong>Site web :</strong> <a href="https://coincarriere.com" className="text-[#0077B6] underline">https://coincarriere.com</a></li>
                </ul>
                <p className="text-sm italic">Le responsable de la protection des renseignements personnels est le plus haut dirigeant de l'entreprise.</p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="champ" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">2</span>
                Champ d'application
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>
                  La présente politique s'applique à tous les utilisateurs de la Plateforme (candidats, recruteurs, employeurs ou visiteurs), quel que soit leur lieu de résidence.
                </p>
                <p>CoinCarrière se conforme aux lois suivantes :</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25).</li>
                  <li>LPRPDE du Canada.</li>
                  <li>RGPD de l'Union européenne.</li>
                  <li>Loi n° 09-08 du Maroc.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="collecte" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">3</span>
                Renseignements personnels collectés
              </h2>
              <div className="text-slate-600 space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">3.1 Fournis directement</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Identification : prénom, nom, adresse courriel, téléphone.</li>
                    <li>Professionnels : CV, lettre de motivation, expériences, formations, certifications.</li>
                    <li>Profil : ville, pays, lien LinkedIn, site web.</li>
                    <li>Compte : identifiants, mot de passe (chiffré), préférences.</li>
                    <li>Correspondances : messages échangés via la plateforme.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">3.2 Collectés automatiquement</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Données techniques : IP, navigateur, système d'exploitation, résolution.</li>
                    <li>Navigation : pages consultées, durée, parcours.</li>
                    <li>Témoins (cookies) : session, analytiques, publicitaires.</li>
                    <li>Localisation : pays et région déduits de l'IP.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">3.3 Reçus de tiers</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Informations transmises par un employeur créant un profil candidat.</li>
                    <li>Sources publiques (offres d'emploi publiées sur sites tiers).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="finalites" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">4</span>
                Finalités et bases légales
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600 border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold">
                      <th className="p-3 border border-slate-200 rounded-tl-lg">Finalité</th>
                      <th className="p-3 border border-slate-200 rounded-tr-lg">Base légale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-3 border border-slate-200">Services de recrutement</td><td className="p-3 border border-slate-200">Exécution du contrat</td></tr>
                    <tr><td className="p-3 border border-slate-200">Gestion des comptes</td><td className="p-3 border border-slate-200">Exécution du contrat</td></tr>
                    <tr><td className="p-3 border border-slate-200">Dépôt et consultation de CV</td><td className="p-3 border border-slate-200">Consentement</td></tr>
                    <tr><td className="p-3 border border-slate-200">Transmission des candidatures</td><td className="p-3 border border-slate-200">Consentement</td></tr>
                    <tr><td className="p-3 border border-slate-200">Notifications de candidatures</td><td className="p-3 border border-slate-200">Exécution du contrat</td></tr>
                    <tr><td className="p-3 border border-slate-200">Marketing et newsletters</td><td className="p-3 border border-slate-200">Consentement</td></tr>
                    <tr><td className="p-3 border border-slate-200">Analyse et amélioration</td><td className="p-3 border border-slate-200">Intérêt légitime</td></tr>
                    <tr><td className="p-3 border border-slate-200">Sécurité et prévention fraude</td><td className="p-3 border border-slate-200">Intérêt légitime</td></tr>
                    <tr><td className="p-3 border border-slate-200">Obligations légales</td><td className="p-3 border border-slate-200">Obligation légale</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="partage" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">5</span>
                Partage et communication
              </h2>
              <div className="text-slate-600 space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">5.1 Employeurs et recruteurs</h4>
                  <p className="text-sm">Vos informations professionnelles sont transmises aux employeurs concernés lors d'une candidature. Ils sont tenus au secret professionnel.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">5.2 Sous-traitants techniques</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Cloudflare, Inc.</strong> (Hébergement, R2, D1, CDN)</li>
                    <li><strong>Google LLC</strong> (Analytics, Ads)</li>
                    <li><strong>Meta Platforms, Inc.</strong> (Facebook Ads)</li>
                    <li><strong>Amazon Web Services</strong> (SES Courriels)</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-red-800 text-sm font-medium">
                  ⚠️ Nous ne vendons, ne louons et n'échangeons jamais vos renseignements personnels à des tiers.
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="transferts" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">6</span>
                Transferts hors Québec et Canada
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>Certains sous-traitants étant situés aux États-Unis, vos données peuvent y être traitées. Conformément à la Loi 25, nous réalisons une <strong>Évaluation des facteurs relatifs à la vie privée (EFVP)</strong> pour garantir un niveau de protection adéquat.</p>
                <p className="text-sm">Pour l'UE, ces transferts sont encadrés par des clauses contractuelles types approuvées par la Commission européenne.</p>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="conservation" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">7</span>
                Conservation des renseignements
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600 border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold">
                      <th className="p-3 border border-slate-200 rounded-tl-lg">Type de données</th>
                      <th className="p-3 border border-slate-200 rounded-tr-lg">Durée de conservation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-3 border border-slate-200">CV déposés</td><td className="p-3 border border-slate-200">5 ans (depuis dépôt/MAJ)</td></tr>
                    <tr><td className="p-3 border border-slate-200">Comptes candidats</td><td className="p-3 border border-slate-200">5 ans après dernière connexion</td></tr>
                    <tr><td className="p-3 border border-slate-200">Comptes employeurs</td><td className="p-3 border border-slate-200">Relation contractuelle + 3 ans</td></tr>
                    <tr><td className="p-3 border border-slate-200">Données de candidature</td><td className="p-3 border border-slate-200">5 ans après clôture du poste</td></tr>
                    <tr><td className="p-3 border border-slate-200">Journaux d'audit</td><td className="p-3 border border-slate-200">3 ans</td></tr>
                    <tr><td className="p-3 border border-slate-200">Données analytiques</td><td className="p-3 border border-slate-200">26 mois (anonymisées)</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="cookies" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">8</span>
                Témoins (Cookies) et suivi
              </h2>
              <div className="text-slate-600 space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-slate-600 border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 font-bold">
                        <th className="p-3 border border-slate-200 rounded-tl-lg">Catégorie</th>
                        <th className="p-3 border border-slate-200">Finalité</th>
                        <th className="p-3 border border-slate-200 rounded-tr-lg">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-3 border border-slate-200">Essentiels</td><td className="p-3 border border-slate-200">Sécurité, authentification</td><td className="p-3 border border-slate-200">Session/7j</td></tr>
                      <tr><td className="p-3 border border-slate-200">Analytiques</td><td className="p-3 border border-slate-200">Mesure d'audience</td><td className="p-3 border border-slate-200">26 mois</td></tr>
                      <tr><td className="p-3 border border-slate-200">Publicitaires</td><td className="p-3 border border-slate-200">Performance pub</td><td className="p-3 border border-slate-200">90 jours</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm">Vous pouvez gérer vos préférences via les paramètres de votre navigateur ou via les outils de désactivation de Google Analytics et Meta Ads.</p>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="droits" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">9</span>
                Vos droits
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-slate-600">
                <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                  <h4 className="font-bold text-slate-800 mb-3">Québec / Canada</h4>
                  <ul className="text-xs space-y-2">
                    <li>• Droit d'accès & rectification</li>
                    <li>• Droit de suppression</li>
                    <li>• Retrait du consentement</li>
                    <li>• Désindexation / Portabilité</li>
                  </ul>
                </div>
                <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                  <h4 className="font-bold text-slate-800 mb-3">UE / EEE (RGPD)</h4>
                  <ul className="text-xs space-y-2">
                    <li>• Droit d'opposition</li>
                    <li>• Limitation du traitement</li>
                    <li>• Réclamation auprès de la CNIL</li>
                  </ul>
                </div>
                <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
                  <h4 className="font-bold text-slate-800 mb-3">Maroc (Loi 09-08)</h4>
                  <ul className="text-xs space-y-2">
                    <li>• Opposition pour motifs légitimes</li>
                    <li>• Réclamation auprès de la CNDP</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl text-sm text-slate-600">
                <strong>Comment exercer vos droits ?</strong> Envoyez une demande à <a href="mailto:contact@coincarriere.com" className="text-[#0077B6] underline font-bold">contact@coincarriere.com</a>. Nous répondrons sous 30 jours.
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="securite" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">10</span>
                Sécurité des renseignements
              </h2>
              <div className="text-slate-600 grid sm:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Chiffrement des mots de passe (hachage)</li>
                  <li>Communications HTTPS/TLS</li>
                  <li>Jetons sécurisés (JWT)</li>
                  <li>Isolation multi-tenant</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Contrôle d'accès RBAC</li>
                  <li>Journaux d'audit</li>
                  <li>Rate limiting des requêtes</li>
                  <li>Sauvegardes régulières</li>
                </ul>
              </div>
            </section>

            {/* SECTION 11 */}
            <section id="mineurs" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">11</span>
                Protection des mineurs
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>La Plateforme est destinée aux personnes âgées de <strong>16 ans et plus</strong>. Nous ne collectons pas sciemment de données auprès de mineurs. Tout renseignement collecté par erreur sera supprimé immédiatement.</p>
              </div>
            </section>

            {/* SECTION 12 */}
            <section id="incidents" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">12</span>
                Incident de confidentialité
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>En cas d'incident présentant un risque de préjudice sérieux, nous nous engageons à :</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Réduire les risques et prévenir de nouveaux incidents.</li>
                  <li>Aviser la Commission d'accès à l'information du Québec (CAI).</li>
                  <li>Aviser les personnes concernées.</li>
                  <li>Tenir un registre détaillé de l'incident.</li>
                </ul>
              </div>
            </section>

            {/* SECTION 13 */}
            <section id="modifications" className="mb-12 scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">13</span>
                Modifications
              </h2>
              <div className="text-slate-600 space-y-4">
                <p>Nous pouvons mettre à jour cette politique périodiquement. En cas de modification substantielle, vous serez informé par courriel ou par un avis visible sur la Plateforme.</p>
              </div>
            </section>

            {/* SECTION 14 */}
            <section id="contact" className="scroll-mt-28">
              <h2 className="text-2xl font-black text-[#003a57] border-b border-slate-100 pb-3 mb-5 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-[#0077B6] text-sm font-bold">14</span>
                Contact
              </h2>
              <div className="text-slate-600 space-y-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="mb-1"><strong>Courriel :</strong> contact@coincarriere.com</p>
                  <p className="mb-1"><strong>Entreprise :</strong> 9558-9321 Quebec inc. (CoinCarrière)</p>
                  <p><strong>Siège social :</strong> Quebec, QC, Canada</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-3">Plaintes et autorités de contrôle :</h4>
                  <ul className="grid sm:grid-cols-2 gap-4 text-xs">
                    <li className="p-3 rounded-lg bg-white border border-slate-100"><strong>Québec :</strong> <a href="https://cai.gouv.qc.ca/" className="text-[#0077B6] underline">CAI</a></li>
                    <li className="p-3 rounded-lg bg-white border border-slate-100"><strong>Canada :</strong> <a href="https://priv.gc.ca/" className="text-[#0077B6] underline">Commissariat Vie Privée</a></li>
                    <li className="p-3 rounded-lg bg-white border border-slate-100"><strong>Maroc :</strong> <a href="https://cndp.ma/" className="text-[#0077B6] underline">CNDP</a></li>
                    <li className="p-3 rounded-lg bg-white border border-slate-100"><strong>UE :</strong> Autorité de votre pays de résidence</li>
                  </ul>
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
            © {new Date().getFullYear()} CoinCarrière · Tous droits réservés · Maroc & Canada
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-white hover:text-white/80 text-sm transition-colors font-semibold">Confidentialité</a>
            <a href="/terms" className="text-white/40 hover:text-white/80 text-sm transition-colors">CGU</a>
            <a href="/" className="text-white/40 hover:text-white/80 text-sm transition-colors">Accueil</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
