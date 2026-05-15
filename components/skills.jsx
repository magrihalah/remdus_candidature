function Skills() {
  const cards = [
  {
    n: "·01",
    h: "Conception graphique",
    p: "De l'affiche à la signalétique, en passant par les visuels web et les déclinaisons réseaux sociaux. Habituée aux contraintes d'impression comme aux formats numériques.",
    t: ["Affiches", "Identité", "Signalétique", "Réseaux sociaux", "Édition"]
  },
  {
    n: "·02",
    h: "Communication & organisation",
    p: "Planifier une campagne, rétroplanner une production, coordonner une équipe bénévole. L'événementiel étudiant m'a appris à anticiper plutôt qu'à réagir.",
    t: ["Campagnes", "Rétroplanning", "Coordination", "Partenaires"]
  },
  {
    n: "·03",
    h: "Outils & technique",
    p: "Photoshop et Figma pour la production, Canva pour la production rapide en équipe, CSS et code pour les maquettes web et les prototypes interactifs.",
    t: ["Photoshop", "Figma", "Canva", "HTML / CSS", "JavaScript"]
  }];


  return (
    <section id="competences" className="block" data-screen-label="06 Compétences">
      <div className="container">
        <header className="section-head reveal">
          <div>
            <div className="num">05 — Compétences</div>
          </div>
          <div>
            <h2>Trois familles, qui se nourrissent l'une l'autre.</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Je tiens à présenter mes compétences en contexte, pas comme une
              liste de logiciels ou un nuage de mots.
            </p>
          </div>
        </header>

        <div className="skills-grid">
          {cards.map((c, i) =>
          <article key={i} className={"skill-card reveal d" + (i + 1)}>
              <div className="n">{c.n}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <ul>
                {c.t.map((t, j) => <li key={j}>{t}</li>)}
              </ul>
            </article>
          )}
        </div>

        <div className="stats reveal">
          <div>
            <div className="v">04<span className="sym">.</span></div>
            <div className="k">Années d'expérience associative</div>
          </div>
          <div>
            <div className="v">15<span className="sym">+</span></div>
            <div className="k">Événements étudiants accompagnés</div>
          </div>
          <div>
            <div className="v">03<span className="sym">.</span></div>
            <div className="k">Langues de travail</div>
          </div>
          <div>
            <div className="v">100<span className="sym">%</span></div>
            <div className="k">Bénévolat, à chaque fois</div>
          </div>
        </div>
      </div>
    </section>);

}

window.Skills = Skills;