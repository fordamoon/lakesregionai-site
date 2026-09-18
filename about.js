const { Card, SectionHeading, Waterline, Button, Badge, Wordmark } = window.LakesRegionAIDesignSystem_e86074;

function About({ onNavigate }) {
  return <>
    <Section tone="alt" tight>
      <div style={{ display: "grid", gridTemplateColumns: ".95fr 1.05fr", gap: "var(--space-10)", alignItems: "center" }}>
        <div style={{ aspectRatio: "4/5", borderRadius: "var(--radius-lg)", background: "linear-gradient(150deg,#E7E1D8,#D8D1C4)", border: "1px solid var(--border-hairline)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-ui)", fontSize: "var(--text-label)", color: "var(--text-muted)", textAlign: "center", padding: "var(--space-6)" }}>
          Photo placeholder — Matt at the counter of a Lakes Region business, warm natural light, no filter
        </div>
        <div>
          <SectionHeading level={1} eyebrow="Who you'd be working with" title="Matt Alighieri." lead="I grew up around here and I've spent fifteen years building systems for companies much larger than yours. The tools got good enough that a nine-person shop can use them too — but nobody was showing up to do it." />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", marginTop: "var(--space-5)" }}>
            So that's the whole business. I drive out, I watch how the work moves, and I set up two or three things that give you your evenings back. You call me directly when something needs changing. There's no account manager and no ticket queue.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-7)", flexWrap: "wrap" }}>
            <Button size="lg" onClick={() => onNavigate("Contact")}>Book a walkthrough</Button>
            <Button size="lg" variant="secondary" onClick={() => { window.location.href = "tel:+16037070720"; }}>Call (603) 707-0720</Button>
          </div>
        </div>
      </div>
    </Section>
    <Section tone="page">
      <SectionHeading eyebrow="How we work" title="Four things we hold to." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "var(--space-6)", marginTop: "var(--space-9)" }}>
        {[["Plain language","If we can't explain it at your counter in two minutes, we won't build it."],
          ["Flat prices","Written down before we start. No hourly surprises, no change orders."],
          ["You own it","Every account, every document, every automation is in your name."],
          ["We say no","If AI isn't the answer, we'll tell you that and not charge you for the visit."]].map(([t, b]) => (
          <Card key={t} padding="lg" waterline>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", margin: 0 }}>{t}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: "var(--space-3) 0 0" }}>{b}</p>
          </Card>
        ))}
      </div>
    </Section>
    <Section tone="inverse" tight style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-300)" }}>Also from Matt Alighieri</div>
          <Waterline width={48} tone="inverse" style={{ margin: "var(--space-4) 0" }} />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", color: "#fff", margin: 0, letterSpacing: "-.02em" }}>New England Growth Studio</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", color: "rgba(255,255,255,.82)", maxWidth: 560, marginTop: "var(--space-3)" }}>
            Separate practice, separate clients: growth work for the region's outdoor economy. Same person, same standards — different offer. If that's closer to what you need, we'll send you there.
          </p>
        </div>
        <Button variant="inverse" size="lg" onClick={() => window.open("https://newenglandgrowthstudio.com", "_blank", "noopener")}>Visit NEGS</Button>
      </div>
    </Section>
  </>;
}
Object.assign(window, { About });
