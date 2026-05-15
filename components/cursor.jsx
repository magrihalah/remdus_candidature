/* Custom cursor — follows pointer with eased ring, snappy dot. */
const { useEffect: useEffectC } = React;

function CustomCursor() {
  useEffectC(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };

    const frame = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(frame);
    };

    const onOver = (e) => {
      const t = e.target;
      const card = t.closest && t.closest(".project");
      if (card) {
        document.body.classList.add("cursor-card");
        document.body.classList.remove("cursor-hover", "cursor-text");
        return;
      }
      if (t.matches && t.matches("a, button, .btn, .cat-tabs button")) {
        document.body.classList.add("cursor-hover");
        document.body.classList.remove("cursor-card", "cursor-text");
        return;
      }
      if (t.matches && t.matches("input, textarea, [contenteditable]")) {
        document.body.classList.add("cursor-text");
        document.body.classList.remove("cursor-hover", "cursor-card");
        return;
      }
      document.body.classList.remove("cursor-hover", "cursor-card", "cursor-text");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return null;
}

window.CustomCursor = CustomCursor;
