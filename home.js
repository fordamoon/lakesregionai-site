const { Button, Card, Badge, Waterline, SectionHeading, TierCard, TierMarker, Wordmark } = window.LakesRegionAIDesignSystem_e86074;

function Hero({ onNavigate }) {
  return (
    <section style={{ background: "var(--surface-inverse)", color: "#fff", position: "relative", overflow: "hidden" }}>
      <img src={window.ASSETS+"winnipesaukee-watermark.svg"} alt="" style={{ position: "absolute", right: -120, top: 40, width: 720, opacity: .13, filter: "invert(1)" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-13) var(--gutter) var(--space-12)", display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: "var(--space-10)", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-300)" }}>Laconia, New Hampshire</div>
          <Waterline width={56} tone="inverse" style={{ margin: "var(--space-4) 0 var(--space-6)" }} />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-1)", fontWeight: 800, letterSpacing: "-.03em", lineHeight: "var(--leading-tight)", color: "#fff", margin: 0, maxWidth: 620 }}>
            AI for the businesses your town runs on.
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lead)", lineHeight: "var(--leading-relaxed)", color: "rgba(255,255,255,.85)", maxWidth: 520, margin: "var(--space-6) 0 var(--space-8)" }}>
            No jargon, no sales pitch, no out-of-state price tag. We find the two or three jobs eating your week, set up systems that handle them, and show your people how to use them.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", flexWrap: "wrap" }}>
            <Button variant="inverse" size="lg" onClick={() => onNavigate("Contact")}>Book a walkthrough</Button>
            <Button variant="ghost" size="lg" style={{ color: "#fff", border: "1px solid rgba(255,255,255,.35)" }} onClick={() => onNavigate("What we do")}>See the three tiers</Button>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", color: "rgba(255,255,255,.7)" }}>or call (603) 707-0720</span>
          </div>
        </div>
        <Card tone="inverse" padding="lg" style={{ background: "rgba(255,255,255,.07)", backdropFilter: "blur(3px)" }} waterline>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-300)" }}>What that looks like</div>
          <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-5) 0 0", display: "grid", gap: "var(--space-4)" }}>
            {["The phone gets answered at 7 p.m. and the job gets booked.",
              "Quotes follow themselves up on day three.",
              "Friday's invoices go out Thursday, on their own.",
              "You get one short summary a week. That's it."].map((t) => (
              <li key={t} style={{ display: "flex", gap: "var(--space-3)", fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-normal)", color: "rgba(255,255,255,.92)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" style={{ flex: "none", marginTop: 5 }}><path d="M4 12.5l5 5L20 6.5" /></svg>
                {t}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div style={{ background: "var(--surface-card)", borderBottom: "1px solid var(--border-hairline)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-6) var(--gutter)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-7)", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-label)", fontWeight: 600, color: "var(--text-muted)" }}>Working with businesses in</span>
        {["Laconia", "Meredith", "Gilford", "Wolfeboro", "Tilton", "Moultonborough"].map((t) => (
          <span key={t} style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", fontWeight: 700, color: "var(--color-lake-800)", letterSpacing: "-.01em" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function WhatWeDo() {
  const items = [
    ["file-text", "Quotes and follow-ups", "Estimates written from your notes, then followed up on day three without you remembering."],
    ["receipt", "Invoices and paperwork", "Recurring invoices, reminders, and the monthly reconciliation your bookkeeper keeps asking about."],
    ["inbox", "The inbox", "Sorts what needs you from what doesn't, drafts the routine replies in your words."],
    ["calendar-check", "Scheduling", "Fills cancellations from the waitlist. Confirms the day before. Cuts the no-shows."],
    ["clipboard-list", "Your own stuff", "The spreadsheet only you understand, the process that lives in your head. We start there."]
  ];
  return (
    <Section tone="page">
      <SectionHeading eyebrow="What else we do" title="Plain work, done properly." lead="The phone is where most people start. These are the other five. You'll recognize at least two of them." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--space-6)", marginTop: "var(--space-9)" }}>
        {items.map(([icon, title, body]) => (
          <Card key={title} interactive padding="lg" waterline>
            <span style={{ color: "var(--color-lake-600)" }}><Icon name={icon} size={24} /></span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", margin: "var(--space-4) 0 var(--space-2)" }}>{title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: 0 }}>{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    ["We come to you", "An hour at your counter or in your truck. We watch how the work actually moves and write down where it snags."],
    ["We build the two or three things", "Small systems, live in two weeks. You approve everything before it talks to a customer."],
    ["We train your people, then stay reachable", "Your staff learns it in one sitting. When something needs changing, you call a 603 number and get Matt."]
  ];
  return (
    <Section tone="mist">
      <div style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: "var(--space-10)", alignItems: "start" }}>
        <SectionHeading eyebrow="How it works" title="Three visits, then it runs without you." lead="No discovery phase, no statement of work you need a lawyer to read." />
        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          {steps.map(([t, b], i) => (
            <div key={t} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-5)", alignItems: "start" }}>
              <span style={{ width: 40, height: 40, borderRadius: "var(--radius-pill)", background: "var(--surface-card)", border: "1px solid var(--color-lake-100)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-lake-800)", flex: "none" }}>{i + 1}</span>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", margin: 0 }}>{t}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: "var(--space-2) 0 0" }}>{b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const TIERS = [
  { tier: 1, name: "Get Started", price: "$750", priceNote: "one time", summary: "One afternoon, one problem solved, nothing ongoing.", includes: ["A two-hour sit-down at your shop", "One automation built and running", "A one-page written plan for the rest", "Thirty days of questions answered"], cta: "Start here" },
  { tier: 2, name: "Set It Up", price: "$2,400", priceNote: "then $180/mo", featured: true, summary: "The common one. Two or three systems, built and handed over.", includes: ["Everything in Get Started", "Two to three automations, live in two weeks", "Staff training at your shop", "Monthly check-in and adjustments", "Weekly one-page summary"], cta: "Talk it through" },
  { tier: 3, name: "Run It For You", price: "$650", priceNote: "per month", summary: "We hold the keys, watch the queues, and fix things before you notice.", includes: ["Everything in Set It Up", "We own the day-to-day operation", "Same-week changes on request", "Quarterly review with your books in hand", "Direct line to Matt"], cta: "See if it fits" }
];

function Tiers({ onNavigate }) {
  return (
    <Section tone="page">
      <SectionHeading eyebrow="What it costs" title="Three ways in. Pick the smallest one that helps." lead="Flat prices, written down before we start. No per-seat anything." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--space-6)", marginTop: "var(--space-9)", alignItems: "stretch" }}>
        {TIERS.map((t) => <TierCard key={t.name} {...t} onCta={() => onNavigate("Contact")} />)}
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--text-muted)", marginTop: "var(--space-6)", maxWidth: 620 }}>
        If it doesn't earn its keep in the first month, we shut it off and you stop paying. Not sure which one? Call and describe your week — if we're not the right fit we'll say so and point you somewhere better.
      </p>
    </Section>
  );
}

function Proof() {
  return (
    <Section tone="alt" tight>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: "var(--space-10)", alignItems: "center" }}>
        <div>
          <Waterline width={56} />
          <blockquote style={{ fontFamily: "var(--font-body)", fontSize: 26, lineHeight: 1.45, color: "var(--text-strong)", margin: "var(--space-6) 0 var(--space-6)", fontStyle: "normal" }}>
            "I didn't want a dashboard. I wanted the phone answered when both bays are full. Matt set that up in a week and it books three or four jobs a night now."
          </blockquote>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-body-sm)", fontWeight: 600, color: "var(--text-strong)" }}>Dave R. · Weirs Auto &amp; Tire, Laconia</div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-caption)", color: "var(--text-muted)", marginTop: 2 }}>Tier 2 · customer since 2025</div>
        </div>
        <div style={{ display: "grid", gap: "var(--space-4)" }}>
          {[["19", "local businesses running with us"], ["2 weeks", "typical time from handshake to live"], ["603", "the area code you'll be calling"]].map(([n, l]) => (
            <div key={l} style={{ display: "flex", gap: "var(--space-5)", alignItems: "baseline", paddingBottom: "var(--space-4)", borderBottom: "1px solid var(--border-hairline)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: 800, color: "var(--color-lake-700)", letterSpacing: "-.03em" }}>{n}</span>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-body-sm)", color: "var(--text-body)" }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ClosingCta({ onNavigate }) {
  return (
    <Section tone="mist" tight>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-8)", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", letterSpacing: "-.025em", margin: 0 }}>Thirty minutes on site.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lead)", color: "var(--text-body)", margin: "var(--space-3) 0 0" }}>Bring your worst week. We'll tell you what we'd fix first.</p>
        </div>
        <div style={{ display: "flex", gap: "var(--space-4)" }}>
          <Button size="lg" onClick={() => onNavigate("Contact")}>Book a walkthrough</Button>
          <Button size="lg" variant="secondary" onClick={() => { window.location.href = "tel:+16037070720"; }}>Call (603) 707-0720</Button>
        </div>
      </div>
    </Section>
  );
}

function Home({ onNavigate }) {
  return <>
    <Hero onNavigate={onNavigate} />
    <TrustBar />
    <SeasonBand />
    <Receptionist onNavigate={onNavigate} />
    <WhatWeDo />
    <HowItWorks />
    <Tiers onNavigate={onNavigate} />
    <Headwaters onNavigate={onNavigate} />
    <StraightAnswers />
    <ShopTalkTeaser onNavigate={onNavigate} />
    <Proof />
    <ClosingCta onNavigate={onNavigate} />
  </>;
}
Object.assign(window, { Home, Tiers, TIERS, Hero, TrustBar, ClosingCta });
