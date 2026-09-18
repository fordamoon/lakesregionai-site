const { Card, Field, Input, Select, Radio, Checkbox, Button, SectionHeading, Waterline, Toast, Badge, TierMarker } = window.LakesRegionAIDesignSystem_e86074;

function Contact() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: "Dave Robichaud", business: "Weirs Auto & Tire", phone: "(603) 707-0720", town: "Laconia", how: "call", tier: "Set It Up", notes: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e && e.target ? e.target.value : e });
  return (
    <Section tone="alt" tight>
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "var(--space-10)", alignItems: "start" }}>
        <div>
          <SectionHeading eyebrow="Get in touch" title="Tell us about your week." lead="Two minutes of typing, or just call. Either way you'll hear back the same business day." />
          <Card padding="lg" waterline style={{ marginTop: "var(--space-7)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
              <Field label="Your name" required><Input value={form.name} onChange={set("name")} /></Field>
              <Field label="Business name" required hint="However it appears on your sign."><Input value={form.business} onChange={set("business")} /></Field>
              <Field label="Phone" required><Input value={form.phone} onChange={set("phone")} /></Field>
              <Field label="Town"><Select value={form.town} onChange={set("town")} options={["Laconia", "Meredith", "Gilford", "Wolfeboro", "Tilton", "Belmont", "Moultonborough", "Alton", "Somewhere else nearby"]} /></Field>
            </div>
            <div style={{ marginTop: "var(--space-5)" }}>
              <Field label="What eats up the most time each week?" hint="One or two sentences is plenty.">
                <Input multiline rows={4} placeholder="Answering the phone when both bays are full." value={form.notes} onChange={set("notes")} />
              </Field>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)", marginTop: "var(--space-6)" }}>
              <Field label="How should we reach you?">
                <Radio name="how" value={form.how} onChange={(v) => setForm({ ...form, how: v })} options={[{ label: "Call me", value: "call" }, { label: "Text me", value: "text" }, { label: "Email me", value: "email" }]} />
              </Field>
              <Field label="Which tier are you thinking?" hint="A guess is fine — we'll tell you if it's the wrong one.">
                <Radio name="tier" value={form.tier} onChange={(v) => setForm({ ...form, tier: v })} options={["Get Started", "Set It Up", "Run It For You", "No idea yet"]} />
              </Field>
            </div>
            <div style={{ marginTop: "var(--space-6)" }}>
              <Checkbox label="Send me the weekly one-pager" description="Two short items a week about what's working for local businesses. Unsubscribe any time." defaultChecked />
            </div>
            <Waterline style={{ margin: "var(--space-7) 0 var(--space-6)" }} reflection={false} />
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", flexWrap: "wrap" }}>
              <Button size="lg" onClick={() => setSent(true)}>Send it over</Button>
              <Button size="lg" variant="secondary">Call (603) 707-0720</Button>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-caption)", color: "var(--text-muted)" }}>We don't share your information. Ever.</span>
            </div>
          </Card>
        </div>
        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          <Card tone="subtle" padding="lg">
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-700)" }}>The office</div>
            <Waterline width={40} reflection={false} style={{ margin: "var(--space-3) 0 var(--space-5)" }} />
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              {[["phone", "(603) 707-0720"], ["mail", "matt@lakesregionai.com"], ["map-pin", "Belknap Street, Laconia NH"], ["clock", "Mon–Fri 7:30–5:00 · Sat by appointment"]].map(([i, t]) => (
                <div key={t} style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                  <span style={{ color: "var(--color-lake-600)" }}><Icon name={i} size={18} /></span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", color: "var(--text-strong)" }}>{t}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card padding="lg">
            <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", fontWeight: 700, color: "var(--text-strong)" }}>What happens next</div>
            <ol style={{ margin: "var(--space-4) 0 0", padding: "0 0 0 var(--space-5)", display: "grid", gap: "var(--space-3)", fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)" }}>
              <li>Matt calls you back, same business day.</li>
              <li>We pick a time and he drives to you.</li>
              <li>You get a one-page plan with a flat price on it.</li>
            </ol>
          </Card>
          {sent ? (
            <Toast tone="success" title="Message sent" message="Matt will call (603) 707-0720 today. Nothing else needed from you." onDismiss={() => setSent(false)} style={{ width: "100%" }} />
          ) : null}
        </div>
      </div>
    </Section>
  );
}
Object.assign(window, { Contact });
