function Contact() {
  return (
    <section id="contact" className="contact" data-screen-label="07 Contact">
      <div className="container">
        <div className="eyebrow reveal" style={{ color: "rgba(244,239,230,0.5)" }}>
          §06 — Contact · Disponibilités
        </div>

        <h2 className="reveal d1" style={{ marginTop: 24 }}>
          Discutons de la <span className="sw">prochaine session</span> du REMDUS.
        </h2>

        <div className="grid">
          <div className="col reveal d1">
            <h4>Courriel</h4>
            <a href="mailto:magrihalah@gmail.com">magrihalah@gmail.com</a>
          </div>
          <div className="col reveal d2">
            <h4>Téléphone</h4>
            <p>+1 436 462 4503</p>
          </div>
          <div className="col reveal d3">
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/halah-magri/" target="_blank" rel="noopener">halah-magri</a>
          </div>
          <div className="col reveal d4">
            <h4>TikTok</h4>
            <a href="#" onClick={(e) => e.preventDefault()}>@usernamehm6</a>
          </div>
        </div>

        <div className="foot">
          <span>© 2026 · Halah Magri · Candidature REMDUS</span>
          <span>CONÇU ET CODÉ POUR LE POSTE ·</span>
        </div>
      </div>
    </section>);

}

window.Contact = Contact;