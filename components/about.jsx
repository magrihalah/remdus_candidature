function About() {
  return (
    <section id="apropos" className="block" data-screen-label="02 À propos">
      <div className="container">
        <header className="section-head reveal">
          <div>
            <div className="num">01 — À propos</div>
          </div>
          <div>
            <h2>Une chercheuse qui pense comme une designer, et organise comme une chef de projet.</h2>
          </div>
        </header>

        <div className="about-grid">
          <div className="reveal">
            <div className="portrait">
              <img src="assets/portrait.jpg" alt="Portrait de Halah Magri"
                   style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              <div className="label">FIG. 01 — Portrait</div>
            </div>
          </div>

          <div className="about-body reveal d1">
            <p>
              <span className="drop">J</span>e m'appelle <strong>Halah Magri</strong>. Je
              suis en deuxième année de doctorat en informatique à l'Université
              de Sherbrooke, où mes recherches portent sur la <strong style={{ fontWeight: "500" }}>visualisation</strong>,
              les <strong>environnements intelligents</strong> et la <strong>réalité mixte</strong>.
            </p>
            <p>
              En parallèle de la recherche, j'ai construit un parcours d'organisation et de conception graphique dans la vie étudiante : Sport Mines Rabat et le Forum Mines Rabat à l'École Nationale Supérieure des Mines de Rabat, et le RECSUS à la faculté de sciences de l'UdS. Trois contextes différents, une constante : 


              <strong> traduire une idée en supports visuels clairs
              </strong>, dans des délais courts, avec des équipes
              hétérogènes.
            </p>
            <p>Ce que je cherche au REMDUS, c'est mettre ce mélange : rigueur scientifique, sens du visuel, expérience associative, au service d'une communauté étudiante que je connais et qui me tient à cœur.



            </p>

            
          </div>
        </div>
      </div>
    </section>);

}

window.About = About;