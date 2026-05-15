function Hero() {
  return (
    <section id="intro" className="block hero" data-screen-label="01 Intro">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow reveal">
              Candidature — Responsable au graphisme · REMDUS 2026
            </div>
            <h1 className="reveal d1" style={{ marginTop: 28 }}>
              Concevoir,<br />
              organiser,<br />
              <span className="swash">communiquer.</span>
            </h1>
          </div>

          <div className="reveal d2">
            <p className="tag">
              Halah Magri — étudiante au doctorat en informatique à l'Université
              de Sherbrooke, avec un parcours d'organisation événementielle et
              de conception graphique en milieu étudiant. Je candidate au poste
              de Responsable au graphisme du REMDUS pour mettre cette double
              expertise au service de la vie étudiante.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
              <a href="#cv" className="btn primary" style={{ borderBottom: "1px solid var(--accent)" }}>Voir le CV</a>
              <a href="#portfolio" className="btn" style={{ borderBottom: "1px solid var(--ink)" }}>Parcourir le portfolio</a>
            </div>
          </div>
        </div>

        <dl className="hero-meta reveal d3">
          <div>
            <dt>Rôle visé</dt>
            <dd>Responsable au graphisme</dd>
          </div>
          <div>
            <dt>Organisation</dt>
            <dd>REMDUS — Université de Sherbrooke</dd>
          </div>
          <div>
            <dt>Statut</dt>
            <dd>2ᵉ année de doctorat, Faculté des sciences</dd>
          </div>
          <div>
            <dt>Disponibilité</dt>
            <dd>Été 2026, 10 à 15h /semaine</dd>
          </div>
        </dl>

        {/* Designer's diagnostic — courte note de méthode */}
        <div className="diagnostic reveal d4" style={{ marginTop: 80 }}>
          <div>
            <div className="label">DOSSIER DE CANDIDATURE</div>
            <div className="mono" style={{ marginTop: 8, color: "var(--ink-mute)" }}>

            </div>
          </div>
          <div>
            <h3>Trois livrables, une seule grammaire visuelle.</h3>
            <p style={{ color: "var(--ink-soft)", marginBottom: 12 }}>
               <em></em>  
              <em></em> <em></em> 
            </p>
            <ol>
              <li><strong>Curriculum vitæ</strong> — Parcours, expériences et compétences</li>
              <li style={{ fontWeight: "300" }}><strong style={{ fontWeight: "700" }}>Lettre de motivation</strong> — Vision, implication étudiante et approche.</li>
              <li><strong>Portfolio</strong> — Projets, conception visuelle et réalisations</li>
            </ol>
          </div>
        </div>
      </div>
    </section>);

}

window.Hero = Hero;