/* Tweaks — laisse à Halah la possibilité d'essayer des variations
   (accent, taille texte, fond) sans toucher au code. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#6b2330",
  "paper": "#f4efe6",
  "fontScale": 1.0,
  "showDiagnostic": true
}/*EDITMODE-END*/;

function TweaksApp() {
  const { TweaksPanel, useTweaks, TweakSection, TweakColor, TweakSlider, TweakToggle } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply live
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
    document.documentElement.style.setProperty("--paper", t.paper);
    document.documentElement.style.fontSize = (16 * t.fontScale) + "px";
    document.querySelectorAll(".diagnostic").forEach(el => {
      el.style.display = t.showDiagnostic ? "" : "none";
    });
  }, [t.accent, t.paper, t.fontScale, t.showDiagnostic]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Direction artistique">
        <TweakColor
          label="Accent"
          value={t.accent}
          options={["#6b2330", "#2d4a3e", "#8a3a48", "#1a1612", "#a8895a"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakColor
          label="Papier"
          value={t.paper}
          options={["#f4efe6", "#ebe4d6", "#f7f4ed", "#ede7dc", "#e4dcc8"]}
          onChange={(v) => setTweak("paper", v)}
        />
      </TweakSection>

      <TweakSection label="Typographie">
        <TweakSlider
          label="Taille du texte"
          value={t.fontScale}
          min={0.9} max={1.15} step={0.01}
          onChange={(v) => setTweak("fontScale", v)}
        />
      </TweakSection>

      <TweakSection label="Affichage">
        <TweakToggle
          label="Afficher la note d'intention"
          value={t.showDiagnostic}
          onChange={(v) => setTweak("showDiagnostic", v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const tweakRoot = document.createElement("div");
document.body.appendChild(tweakRoot);
ReactDOM.createRoot(tweakRoot).render(<TweaksApp />);
