function Nav() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      <a href="#intro" className="mark" style={{ border: "none" }}>
        <span className="dot"></span>
        <span>Halah Magri</span>
        <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--ink-mute)", textTransform: "uppercase", marginLeft: 8 }}>
          ·  Candidature REMDUS
        </span>
      </a>
      <ul>
        <li><a href="#apropos">À propos</a></li>
        <li><a href="#cv">CV</a></li>
        <li><a href="#lettre">Lettre</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

window.Nav = Nav;
