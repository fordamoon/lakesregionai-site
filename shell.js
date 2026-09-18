const { Wordmark, Waterline, Button, NavBar } = window.LakesRegionAIDesignSystem_e86074;

function Footer({ onNavigate }) {
  const towns = ["Laconia", "Meredith", "Gilford", "Wolfeboro", "Tilton", "Belmont", "Moultonborough", "Alton", "Plymouth", "Concord"];
  return (
    <footer style={{ background: "var(--surface-inverse)", color: "var(--text-inverse)", position: "relative", overflow: "hidden" }}>
      <img src={window.ASSETS+"winnipesaukee-watermark.svg"} alt="" style={{ position: "absolute", right: -80, bottom: -60, width: 560, opacity: .12, filter: "invert(1)" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-11) var(--gutter) var(--space-8)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "var(--space-10)" }}>
          <div>
            <Wordmark size="md" tone="reverse" />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-relaxed)", color: "rgba(255,255,255,.8)", maxWidth: 330, marginTop: "var(--space-5)" }}>
              AI for the businesses your town runs on. Based in Laconia, working across the Lakes Region.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-300)" }}>Get in touch</div>
            <Waterline width={40} tone="inverse" reflection={false} style={{ margin: "var(--space-3) 0 var(--space-4)" }} />
            <div style={{ display: "grid", gap: "var(--space-2)", fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", color: "rgba(255,255,255,.85)" }}>
              <a href="tel:+16037070720" style={{ color: "inherit", textDecoration: "none" }}>(603) 707-0720</a>
              <a href="mailto:matt@lakesregionai.com" style={{ color: "inherit", textDecoration: "none" }}>matt@lakesregionai.com</a>
              <span>Belknap Street, Laconia</span>
              <span style={{ color: "rgba(255,255,255,.6)" }}>Mon–Fri 7:30–5:00</span>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-300)" }}>Where we work</div>
            <Waterline width={40} tone="inverse" reflection={false} style={{ margin: "var(--space-3) 0 var(--space-4)" }} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2) var(--space-4)", fontFamily: "var(--font-ui)", fontSize: "var(--text-label)", color: "rgba(255,255,255,.85)" }}>
              {towns.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "var(--space-10)", paddingTop: "var(--space-5)", borderTop: "1px solid var(--border-inverse)", display: "flex", flexWrap: "wrap", gap: "var(--space-4)", justifyContent: "space-between", fontFamily: "var(--font-ui)", fontSize: "var(--text-caption)", color: "rgba(255,255,255,.6)" }}>
          <span>© 2026 Lakes Region AI · A New Hampshire company</span>
          <span style={{ display: "flex", gap: "var(--space-6)" }}>
            <a href={"shop-talk.html"} onClick={(e) => { if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return; e.preventDefault(); onNavigate && onNavigate("Shop Talk"); }} style={{ color: "rgba(255,255,255,.75)" }}>Shop Talk</a>
            <a href={"contact.html"} onClick={(e) => { if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return; e.preventDefault(); onNavigate && onNavigate("Contact"); }} style={{ color: "rgba(255,255,255,.75)" }}>Contact</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function Section({ children, tone = "page", tight = false, style }) {
  const bg = { page: "var(--surface-page)", alt: "var(--surface-page-alt)", mist: "var(--surface-subtle)", inverse: "var(--surface-inverse)", card: "var(--surface-card)" }[tone];
  return (
    <section style={{ background: bg, padding: (tight ? "var(--section-y-tight)" : "var(--section-y)") + " 0", ...style }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--gutter)" }}>{children}</div>
    </section>
  );
}

Object.assign(window, { Footer, Section, SiteNav: NavBar });
