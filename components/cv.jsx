function CV() {
  // Liste plate ATS-friendly (plus de niveaux/jauges)
  const logiciels = ["Photoshop", "Figma", "Canva", "HTML / CSS", "JavaScript", "Python"];

  const langues = [
  { k: "Arabe", v: "Langue maternelle" },
  { k: "Français", v: "Professionnel" },
  { k: "Anglais", v: "Professionnel" }];


  return (
    <section id="cv" className="block" data-screen-label="03 CV">
      <div className="container">
        <header className="section-head reveal">
          <div>
            <div className="num">02 — Curriculum vitæ</div>
          </div>
          <div>
            <h2>Mon parcours, condensé en une page.</h2>
          </div>
        </header>

        <article className="cv reveal d1">
          {/* Sidebar */}
          <aside className="cv-side" style={{ backgroundColor: "rgb(107, 35, 48)" }}>
            <div>
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:magrihalah@gmail.com">magrihalah@gmail.com</a></li>
                <li>+1 436 462 4503</li>
                <li>Sherbrooke, Québec</li>
              </ul>
            </div>

            <div>
              <h3>En ligne</h3>
              <ul>
                <li><a href="https://www.linkedin.com/in/halah-magri/" target="_blank" rel="noopener">LinkedIn / halah-magri</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>TikTok / @usernamehm6</a></li>
              </ul>
            </div>

            <div>
              <h3>Logiciels</h3>
              <ul className="inline-tags">
                {logiciels.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>

            <div>
              <h3>Langues</h3>
              <ul>
                {langues.map((l, i) =>
                <li key={i} style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <span>{l.k}</span>
                    <span style={{ color: "rgba(244,239,230,0.55)" }}>{l.v}</span>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h3>Atouts</h3>
              <ul>
                <li>— Travail sous pression, délais courts</li>
                <li>— Coordination d'équipes pluridisciplinaires</li>
                <li>— Sens du détail typographique</li>
                <li>— Apprentissage rapide d'outils</li>
              </ul>
            </div>
          </aside>

          {/* Main */}
          <div className="cv-main">
            <div className="cv-name">
              Halah <span className="last">Magri</span>
            </div>
            <div className="cv-role">Doctorante · Designer · Organisatrice événementielle</div>

            <p className="cv-intro">
              Étudiante au doctorat en informatique (visualisation, environnements
              intelligents, réalité mixte) avec quatre années d'expérience en
              conception graphique et coordination d'événements étudiants au
              Maroc et au Québec. Je combine rigueur méthodologique et sensibilité
              visuelle pour concevoir des supports qui informent, mobilisent et
              donnent envie de participer.
            </p>

            <div className="cv-section">
              <h3>Formation</h3>

              <div className="cv-job">
                <div className="when">2024 — auj.</div>
                <div>
                  <div className="title">Doctorat en informatique</div>
                  <div className="org">Université de Sherbrooke — Sherbrooke, Québec · Faculté des sciences</div>
                  <ul>
                    <li>
                      <strong style={{ color: "var(--ink)" }}>Sujet de recherche :</strong>{" "}
                      Optimisation du déploiement de capteurs dans l'habitat intelligent
                      par raisonnement spatial en réalité mixte.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="cv-job">
                <div className="when">2022 — 2023</div>
                <div>
                  <div className="title">Maîtrise en informatique (type cours)</div>
                  <div className="org">Université du Québec à Rimouski — Rimouski, Québec</div>
                </div>
              </div>

              <div className="cv-job">
                <div className="when">2019 — 2021</div>
                <div>
                  <div className="title">Diplôme d'ingénieur</div>
                  <div className="org">École Nationale Supérieure des Mines de Rabat — Rabat, Maroc</div>
                  <ul>
                    <li>Management des systèmes d'information.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cv-section">
              <h3>Expériences et implications</h3>

              <div className="cv-job">
                <div className="when">2023 — 2024</div>
                <div>
                  <div className="title">
                    Responsable Conception —{" "}
                    <a
                      href="https://www.facebook.com/Comitesport.ENSMR"
                      target="_blank"
                      rel="noopener noreferrer">
                      
                      Comité Sport ENSMR
                    </a>
                  </div>
                  <div className="org">École Nationale Supérieure des Mines de Rabat · événements sportifs inter-écoles</div>
                  <ul>
                    <li>Direction de la conception graphique des supports événementiels (affiches, programmes, signalétique, réseaux sociaux).</li>
                    <li>Coordination logistique et communication autour des compétitions et conférences.</li>
                    <li>Travail sous délais courts en équipe pluridisciplinaire (sport, communication, sponsors).</li>
                    <li>Suivi du déploiement visuel sur site et sur les canaux numériques.</li>
                  </ul>
                </div>
              </div>

              <div className="cv-job">
                <div className="when">2022 — 2023</div>
                <div>
                  <div className="title">
                    Cellule Communication —{" "}
                    <a href="https://www.facebook.com/ForumENSMR" target="_blank" rel="noopener">
                      Forum ENSMR Entreprises
                    </a>
                  </div>
                  <div className="org">Forum entreprises-étudiants · Rabat</div>
                  <ul>
                    <li>Création de contenus visuels pour la campagne de communication du Forum.</li>
                    <li>Production de visuels pour les réseaux sociaux et coordination avec les partenaires.</li>
                    <li>Travail en équipe sur la cohérence de l'image et la visibilité de l'événement.</li>
                  </ul>
                </div>
              </div>

              <div className="cv-job">
                <div className="when">2024 — auj.</div>
                <div>
                  <div className="title">Membre — RECSUS</div>
                  <div className="org">
                    Regroupement étudiant des chercheurs et chercheuses en Sciences de l'Université de Sherbrooke (RECSUS)
                  </div>
                  <ul>
                    <li>Soutien à l'organisation et gestion administrative et financière.</li>
                    <li>Interaction avec les étudiant·e·s des cycles supérieurs.</li>
                    <li>Gestion multitâche et responsabilités opérationnelles.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cv-section">
              <h3>Compétences clés</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 32px", fontSize: 14, color: "var(--ink-soft)" }}>
                <div>— Conception graphique événementielle</div>
                <div>— Direction artistique de campagnes</div>
                <div>— Identité visuelle et déclinaisons</div>
                <div>— Gestion de projet & rétroplanning</div>
                <div>— Communication multicanal</div>
                <div>— Coordination d'équipes</div>
              </div>
            </div>

            <div className="cv-actions">
              <a href="#contact" className="btn primary">Me contacter</a>
              <a href="#" onClick={(e) => {e.preventDefault();window.print();}} className="btn">Imprimer le CV</a>
            </div>
          </div>
        </article>
      </div>
    </section>);

}

window.CV = CV;