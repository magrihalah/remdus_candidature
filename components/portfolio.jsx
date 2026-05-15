const { useState: usePortfolioState } = React;

/* Chaque réalisation : titre, contexte/explication, et une ou plusieurs images.
   Le layout est volontairement direct (pas de filtres par catégorie). */
const WORKS = [
{
  id: "respo",
  num: "01",
  year: "2020",
  title: "Cellule Conception — Comité Sport",
  role: "Direction artistique · Communication",
  desc: "Annonce officielle de ma nomination à la cellule conception du Comité Sport des Olympiades Mines-Rabat. Palette violet / noir, identité Olympiades cohérente avec le reste de la saison.",
  context: "Comité Sport Mines-Rabat · publication Facebook officielle.",
  link: { href: "https://www.facebook.com/share/p/1ChCZmErkM/", label: "Voir la publication complète →" },
  images: [
  { src: "assets/respo-conception.jpg", caption: "Cellule Conception — annonce officielle" }],

  layout: "feature"
},
{
  id: "qhiwa",
  num: "02",
  year: "2020",
  title: "Lives sportifs — Qhiwa m3a sportif",
  role: "Conception graphique · Série",
  desc: "Pendant la période COVID, le Comité Sport organisait des lives Facebook autour de thèmes sportifs avec des invités. J'ai conçu la série de visuels d'annonce — un gabarit modulaire portrait + paysage, décliné pour chaque épisode.",
  context: "Série de visuels Facebook · Comité Sport Mines-Rabat, 2020.",
  images: [
  { src: "assets/qhiwa.jpg", caption: "Épisode 1 — Mustapha Lakhsem (Champion du monde)" },
  { src: "assets/qhiwa_2.jpg", caption: "Épisode 2 — Ayoub Koutar (Outdooors)" },
  { src: "assets/qhiwa_3.jpg", caption: "Visuel teaser arabe — fond gris" }],

  layout: "grid-3"
},
{
  id: "hoodie",
  num: "03",
  year: "2020",
  title: "Hoodie officiel du Comité",
  role: "Design produit · Identité",
  desc: "Hoodie officiel des Olympiades Mines-Rabat, entièrement conçu par moi. Photo de groupe portée par toute l'équipe lors de la saison.",
  context: "Comité Sport Mines-Rabat · merchandising officiel.",
  images: [
  { src: "assets/hoodie.jpg", caption: "Olympiades Mines-Rabat — équipe en hoodie officiel" }],

  layout: "wide"
},
{
  id: "theme",
  num: "04",
  year: "2020",
  title: "Thème de l'édition — visuel d'ouverture",
  role: "Direction artistique",
  desc: "Visuel-thème de l'édition XIVᵉ des Olympiades Mines-Rabat : « Le sport au cœur de la révolution digitale ». ",
  context: "Olympiades Mines-Rabat 2020 · visuel de communication globale.",
  images: [
  { src: "assets/theme-evenement.jpg", caption: "Visuel-thème — édition digitale" }],

  layout: "wide"
},
{
  id: "soiree",
  num: "05",
  year: "2020",
  title: "Soirée OMR — affiche officielle",
  role: "Affiche événementielle",
  desc: "Affiche de la soirée de clôture des Olympiades. ",
  context: "Soirée OMR · 15 février 2020 · ENSMR.",
  images: [
  { src: "assets/soiree-omr.jpg", caption: "Affiche A2 — Soirée OMR" }],

  layout: "tall"
},
{
  id: "flyer",
  num: "06",
  year: "2020",
  title: "Flyer conférence d'ouverture",
  role: "Conception graphique",
  desc: "Flyer de la conférence d'ouverture « Le sport au cœur de la révolution digitale », organisée à l'ENSMR. Décliné à partir du visuel-thème pour garder la cohérence de la saison.",
  context: "Conférence d'ouverture OMR · 14 février 2020.",
  images: [
  { src: "assets/flyer.jpg", caption: "Flyer conférence — ENSMR" }],

  layout: "wide"
},
{
  id: "tickets",
  num: "07",
  year: "2020",
  title: "Billets & e-tickets",
  role: "Conception graphique",
  desc: "Conception graphique des billets et e-tickets pour les événements des Olympiades : grille de billet imprimé classique, QR code, plan d'accès et hiérarchie d'information optimisée pour le contrôle en entrée.",
  context: "Olympiades Mines-Rabat · billetterie événementielle.",
  images: [
  { src: "assets/ticket-1.jpg", caption: "Ticket — visuel principal" },
  { src: "assets/ticket-2.jpg", caption: "E-ticket — plan d'accès + QR code" }],

  layout: "grid-2"
},
{
  id: "examen",
  num: "08",
  year: "2024",
  title: "Présentations académiques",
  role: "Mise en page · Présentations",
  desc: "Dans le cadre de mes projets universitaires, j'ai conçu plusieurs présentations PowerPoint simples et professionnelles : grille stricte, typographie éditoriale, blocs verts UdS, etc.",
  context: "Examen de synthèse — Laboratoire DOMUS, Université de Sherbrooke, 2024.",
  images: [
  { src: "assets/examen-synthese-1.jpg", caption: "Slide d'ouverture — Examen de synthèse" },
  { src: "assets/examen-synthese-2.jpg", caption: "Slide de transition — Partie II : Réalité Mixte" }],

  layout: "grid-2"
},
{
  id: "cv-interactif",
  num: "09",
  year: "2026",
  title: "CV interactif — ce site",
  role: "Design · Code",
  desc: "Le site que vous parcourez en ce moment est lui-même un projet de design et d'interface réalisé par moi.",
  context: "Candidature REMDUS — Université de Sherbrooke, 2026.",
  self: true,
  layout: "self"
}];


function ProjectImages({ work }) {
  if (work.self) {
    return (
      <div className="ph self-card">
        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--ink-mute)" }}>
            VOUS Y ÊTES — explorez la navigation, scrollez, survolez les cartes.
          </div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 56, lineHeight: 1, marginTop: 16, fontStyle: "italic", color: "var(--accent)" }}>
            ↳ Ce site
          </div>
        </div>
      </div>);

  }
  const lay = work.layout;
  return (
    <div className={"work-images " + (lay || "")}>
      {work.images.map((img, i) =>
      <figure className="work-image" key={i}>
          <div className="work-image-frame">
            <img src={img.src} alt={img.caption} loading="lazy" />
          </div>
          <figcaption className="mono">{img.caption}</figcaption>
        </figure>
      )}
    </div>);

}

function Portfolio() {
  return (
    <section id="portfolio" className="block" data-screen-label="05 Portfolio">
      <div className="container">
        <header className="section-head reveal">
          <div>
            <div className="num">04 — Portfolio</div>
          </div>
          <div>
            <h2>Quelques réalisations.</h2>
          </div>
        </header>

        <div className="works">
          {WORKS.map((w, i) =>
          <article className={"work reveal " + (i % 2 ? "alt" : "")} key={w.id}>
              <div className="work-meta">
                <div className="work-num mono">{w.num} / {String(WORKS.length).padStart(2, "0")}</div>
                <div className="work-year mono">{w.year}</div>
                <div className="work-rule"></div>
                <div className="work-role mono">{w.role}</div>
              </div>

              <div className="work-body">
                <h3 className="work-title">{w.title}</h3>
                <p className="work-desc">{w.desc}</p>
                <div className="work-context">
                  <span className="mono">Contexte —</span> {w.context}
                </div>
                {w.link &&
              <a className="work-link" href={w.link.href} target="_blank" rel="noopener">
                    {w.link.label}
                  </a>
              }
              </div>

              <div className="work-visuals">
                <ProjectImages work={w} />
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

window.Portfolio = Portfolio;