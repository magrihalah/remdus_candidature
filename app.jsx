/* global React, ReactDOM */

const { useEffect } = React;

function App() {
  // Reveal-on-scroll observer
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });

  // Scroll-spy for nav
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav ul a");
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = "intro";
      sections.forEach((s) => {
        if (s.offsetTop <= y) current = s.id;
      });
      links.forEach((l) => {
        l.classList.toggle("active", l.getAttribute("href") === "#" + current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <window.Nav />
      <main>
        <window.Hero />
        <window.About />
        <window.CV />
        <window.Letter />
        <window.Portfolio />
        <window.Skills />
        <window.Contact />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
