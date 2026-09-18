const { Card, Field, Input, Select, Radio, Checkbox, Button, SectionHeading, Waterline, Toast, Badge, TierMarker } = window.LakesRegionAIDesignSystem_e86074;

function Contact() {
  // "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = React.useState("idle");
  const [missing, setMissing] = React.useState({});
  const [form, setForm] = React.useState({ name: "", business: "", phone: "", email: "", town: "Laconia", how: "call", tier: "No idea yet", notes: "", newsletter: true, _honey: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e && e.target ? e.target.value : e });
  const call = () => { window.location.href = "tel:+16037070720"; };

  // Leads go to FormSubmit (no backend, no account) and land in matt@lakesregionai.com.
  const submit = async () => {
    const need = { name: !form.name.trim(), business: !form.business.trim(), phone: !form.phone.trim(), email: form.how === "email" && !form.email.trim() };
    setMissing(need);
    if (Object.values(need).some(Boolean)) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/e852b86ecf883bf2a90e6bfce879d0ab", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New lead: ${form.business.trim()} (${form.town})`,
          _template: "table",
          _captcha: "false",
          _honey: form._honey,
          Name: form.name.trim(),
          Business: form.business.trim(),
          Phone: form.phone.trim(),
          Email: form.email.trim() || "(not given)",
          Town: form.town,
          "Reach me by": form.how,
          "Tier they're thinking": form.tier,
          "What eats the week": form.notes.trim() || "(blank)",
          "Weekly one-pager": form.newsletter ? "YES — add to list" : "no",
          Page: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch (err) {
      setStatus("error");
    }
  };
  return (
    <Section tone="alt" tight>
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: "var(--space-10)", alignItems: "start" }}>
        <div>
          <SectionHeading level={1} eyebrow="Get in touch" title="Tell us about your week." lead="Two minutes of typing, or just call. Either way you'll hear back the same business day." />
          <Card padding="lg" waterline style={{ marginTop: "var(--space-7)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-5)" }}>
              <Field label="Your name" required><Input value={form.name} onChange={set("name")} invalid={!!missing.name} placeholder="First and last" autoComplete="name" /></Field>
              <Field label="Business name" required hint="However it appears on your sign."><Input value={form.business} onChange={set("business")} invalid={!!missing.business} placeholder="Lakeside Plumbing & Heating" autoComplete="organization" /></Field>
              <Field label="Phone" required><Input value={form.phone} onChange={set("phone")} invalid={!!missing.phone} placeholder="(603) 555-0100" type="tel" autoComplete="tel" /></Field>
              <Field label="Email" hint="Only needed if you'd rather we email."><Input value={form.email} onChange={set("email")} invalid={!!missing.email} placeholder="you@yourshop.com" type="email" autoComplete="email" /></Field>
              <div style={{ gridColumn: "1 / -1" }}><Field label="Town"><Select value={form.town} onChange={set("town")} options={["Laconia", "Meredith", "Gilford", "Wolfeboro", "Tilton", "Belmont", "Moultonborough", "Alton", "Somewhere else nearby"]} /></Field></div>
              <input type="text" name="_honey" value={form._honey} onChange={set("_honey")} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, opacity: 0 }} />
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
              <Checkbox label="Send me the weekly one-pager" description="Two short items a week about what's working for local businesses. Unsubscribe any time." checked={form.newsletter} onChange={(v) => setForm({ ...form, newsletter: typeof v === "boolean" ? v : !form.newsletter })} />
            </div>
            <Waterline style={{ margin: "var(--space-7) 0 var(--space-6)" }} reflection={false} />
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", flexWrap: "wrap" }}>
              <Button size="lg" onClick={submit} disabled={status === "sending" || status === "sent"}>{status === "sending" ? "Sending…" : status === "sent" ? "Sent" : "Send it over"}</Button>
              <Button size="lg" variant="secondary" onClick={call}>Call (603) 707-0720</Button>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-caption)", color: "var(--text-muted)" }}>We don't share your information. Ever.</span>
            </div>
          </Card>
        </div>
        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          <Card tone="subtle" padding="lg">
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-700)" }}>The office</div>
            <Waterline width={40} reflection={false} style={{ margin: "var(--space-3) 0 var(--space-5)" }} />
            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              {[["phone", "(603) 707-0720", "tel:+16037070720"], ["mail", "matt@lakesregionai.com", "mailto:matt@lakesregionai.com"], ["map-pin", "Belknap Street, Laconia NH", null], ["clock", "Mon–Fri 7:30–5:00 · Sat by appointment", null]].map(([i, t, href]) => (
                <div key={t} style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                  <span style={{ color: "var(--color-lake-600)" }}><Icon name={i} size={18} /></span>
                  {href
                    ? <a href={href} style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", color: "var(--text-strong)", textDecoration: "none" }}>{t}</a>
                    : <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", color: "var(--text-strong)" }}>{t}</span>}
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
          {status === "sent" ? (
            <Toast tone="success" title="Message sent" message={`Matt will ${form.how === "call" ? "call" : form.how === "text" ? "text" : "email"} you back today. Nothing else needed from you.`} style={{ width: "100%" }} />
          ) : null}
          {status === "error" ? (
            <Toast tone="error" title="That didn't go through" message="Something's off on our end. Call (603) 707-0720 or email matt@lakesregionai.com and we'll pick it up from there." onDismiss={() => setStatus("idle")} style={{ width: "100%" }} />
          ) : null}
        </div>
      </div>
    </Section>
  );
}
Object.assign(window, { Contact });
