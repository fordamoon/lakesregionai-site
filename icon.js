// Lucide icons, loaded from CDN (see readme ICONOGRAPHY). Renders an <i data-lucide> and lets
// lucide.createIcons() swap it for the real SVG at 1.75 stroke.
function Icon({ name, size = 20, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '<i data-lucide="' + name + '"></i>';
    window.lucide.createIcons({ attrs: { width: size, height: size, "stroke-width": 1.75 } });
  }, [name, size]);
  return <span ref={ref} aria-hidden="true" style={{ display: "inline-flex", width: size, height: size, ...style }} />;
}
Object.assign(window, { Icon });
