const { Button, Card, Badge, Waterline, SectionHeading } = window.LakesRegionAIDesignSystem_e86074;

function SeasonBand() {
  return (
    <div style={{ background: "var(--surface-inverse-alt)", color: "#fff" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-7) var(--gutter)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-7)", alignItems: "center" }}>
        <Waterline width={56} tone="inverse" style={{ flex: "none" }} />
        <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-display)", lineHeight: 1.2, margin: 0, color: "#fff" }}>
          We know your June is Bike Week and your April is nothing. Built for a business that does half its year in twelve weeks.
        </p>
      </div>
    </div>
  );
}

function Receptionist({ onNavigate }) {
  const transcript = [
    ["them", "Hey — do you guys do trailer tires?"],
    ["us", "We do. Are you looking to get one mounted today, or price it out first?"],
    ["them", "Today if you can. I'm on 106 heading toward Belmont."],
    ["us", "We've got a bay at 3:15. Want me to hold it? I'll need a name and the tire size if you have it."]
  ];
  return (
    <Section tone="card">
      <div style={{ display: "grid", gridTemplateColumns: "1fr .95fr", gap: "var(--space-10)", alignItems: "center" }}>
        <div>
          <Badge tone="accent">Running today</Badge>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)", lineHeight: "var(--leading-snug)", margin: "var(--space-5) 0 0" }}>The one that answers the phone.</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lead)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: "var(--space-5) 0 var(--space-6)", maxWidth: 520 }}>
            This is the system most people start with, and it's already running for shops in Laconia and Gilford. It picks up on the second ring, asks what a good front-desk person would ask, books the job into your calendar, and texts you the details. After hours, during the rush, in the middle of an install.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 var(--space-7)", display: "grid", gap: "var(--space-3)" }}>
            {["It answers from your own website and price list — not a script somebody wrote in California.",
              "Your customers hear a normal voice, not a phone tree.",
              "If it can't help, it hands off to you — it doesn't loop.",
              "Nobody gets replaced. Your front desk stops doing the part they hate."].map((t) => (
              <li key={t} style={{ display: "flex", gap: "var(--space-3)", fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-normal)", color: "var(--text-strong)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.4" strokeLinecap="round" style={{ flex: "none", marginTop: 5 }}><path d="M4 12.5l5 5L20 6.5" /></svg>
                {t}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", flexWrap: "wrap" }}>
            <Button size="lg" variant="secondary">Call it yourself: (603) 707-0720</Button>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-body-sm)", color: "var(--text-muted)" }}>Ask it anything. It's a real line.</span>
          </div>
        </div>
        <Card padding="lg" style={{ background: "var(--surface-subtle-alt)" }}>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-700)" }}>An actual call, last Tuesday</div>
          <div style={{ display: "grid", gap: "var(--space-4)", marginTop: "var(--space-6)" }}>
            {transcript.map(([who, line], i) => (
              <div key={i} style={{ display: "flex", justifyContent: who === "us" ? "flex-end" : "flex-start" }}>
                <div style={{ maxWidth: "84%", padding: "var(--space-4) var(--space-5)", borderRadius: "var(--radius-md)", background: who === "us" ? "var(--color-lake-700)" : "var(--surface-card)", color: who === "us" ? "#fff" : "var(--text-strong)", border: who === "us" ? "none" : "1px solid var(--border-hairline)", fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-normal)" }}>
                  {line}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "var(--space-6)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--border-hairline)", fontFamily: "var(--font-ui)", fontSize: "var(--text-caption)", color: "var(--text-muted)" }}>
            Booked. Owner got a text with the name, the size, and the bay time.
          </div>
        </Card>
      </div>
    </Section>
  );
}

function StraightAnswers() {
  const qs = [
    ["\u201cWill it sound like a robot to my customers?\u201d", "No, and you get to hear it before anyone else does. You approve every word it says before it ever picks up a call. If it can't help someone, it says so plainly and gets you \u2014 it doesn't put them in a loop."],
    ["\u201cAm I firing somebody?\u201d", "Nobody gets replaced. Every business we've set up has the same people in it. What changes is that they stop retyping the same message forty times a week."],
    ["\u201cI'm not a computer person.\u201d", "Good \u2014 that's the job. You don't get a dashboard to learn. You get one short summary a week and a phone number that reaches a person in Laconia."],
    ["\u201cWhat if it doesn't work?\u201d", "If it doesn't earn its keep in the first month, we shut it off and you stop paying. No contract, no cancellation call with somebody in another state."]
  ];
  return (
    <Section tone="alt">
      <SectionHeading eyebrow="Straight answers" title="The five things everybody asks." lead="Usually in the first ten minutes, usually apologetically. They're fair questions." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "var(--space-9)", alignItems: "start", marginTop: "var(--space-9)", paddingTop: "var(--space-6)", borderTop: "3px solid var(--color-lake-700)" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h2)", margin: 0 }}>“How does it know the ins and outs of my business?”</h3>
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lead)", lineHeight: "var(--leading-relaxed)", color: "var(--text-strong)", margin: 0 }}>
            Because you feed it. It learns from your own material — your website, your price list, your service area, the way you already describe the work. It answers from that, not from a script somebody wrote in California.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: "var(--space-4) 0 0" }}>
            If your site says you don't work on diesels, it won't book one. If your season starts Memorial Day, it knows that. If you charge a trip fee past Meredith, it says so before the customer gets surprised. That's why it sounds like your shop instead of a phone tree — it's repeating you.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "var(--text-muted)", margin: "var(--space-4) 0 0" }}>
            Most businesses have written down more than they think. If you've got a website, we're already halfway there.
          </p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "var(--space-6) var(--space-8)", marginTop: "var(--space-9)" }}>
        {qs.map(([q, a]) => (
          <div key={q} style={{ paddingTop: "var(--space-5)", borderTop: "2px solid var(--color-lake-600)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", margin: 0 }}>{q}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: "var(--space-3) 0 0" }}>{a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Headwaters({ onNavigate }) {
  const rows = [
    ["Where it came from", "Every call, form, and walk-in tagged to what sent them \u2014 the sign, the referral, the truck, the listing."],
    ["What it turned into", "Which of those became a quote, which became a job, and what the job was actually worth."],
    ["What they're worth over time", "The customer who spends $400 once versus the one who spends $400 every spring for nine years."]
  ];
  return (
    <Section tone="page" tight>
      <Card padding="lg" style={{ background: "var(--surface-inverse)", border: "none", position: "relative", overflow: "hidden" }}>
        <img src={window.ASSETS+"winnipesaukee-watermark.svg"} alt="" style={{ position: "absolute", right: -100, top: -40, width: 480, opacity: .1, filter: "invert(1)" }} />
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: ".85fr 1.15fr", gap: "var(--space-10)", alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-300)" }}>Add-on · Tier 2 and 3</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", color: "#fff", margin: "var(--space-4) 0 0" }}>Headwaters</h2>
            <Waterline width={56} tone="inverse" style={{ margin: "var(--space-4) 0 var(--space-5)" }} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lead)", lineHeight: "var(--leading-relaxed)", color: "rgba(255,255,255,.88)", margin: 0 }}>
              Know which jobs are worth chasing.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-relaxed)", color: "rgba(255,255,255,.72)", margin: "var(--space-4) 0 var(--space-6)" }}>
              Every river around here starts somewhere small. Same with your work — it all came from somewhere, and most people never find out where. This traces it back.
            </p>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-body-lg)", color: "#fff" }}>$240<span style={{ fontSize: "var(--text-body-sm)", color: "rgba(255,255,255,.7)" }}> /mo, on top of your tier</span></div>
            <Button variant="inverse" style={{ marginTop: "var(--space-6)" }} onClick={() => onNavigate && onNavigate("Contact")}>Ask about Headwaters</Button>
          </div>
          <div style={{ display: "grid", gap: "var(--space-5)" }}>
            {rows.map(([t, b], i) => (
              <div key={t} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-5)", alignItems: "start", paddingBottom: "var(--space-5)", borderBottom: i < rows.length - 1 ? "1px solid var(--border-inverse)" : "none" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", fontWeight: 600, color: "var(--accent)", flex: "none", width: 34 }}>{"0" + (i + 1)}</span>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", color: "#fff", margin: 0 }}>{t}</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-relaxed)", color: "rgba(255,255,255,.78)", margin: "var(--space-2) 0 0" }}>{b}</p>
                </div>
              </div>
            ))}
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", color: "rgba(255,255,255,.62)", margin: 0 }}>
              Nobody needs this in month one. Most people ask for it about six months in, when they want to know whether the sign on Route 3 is doing anything.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
}

Object.assign(window, { SeasonBand, Receptionist, StraightAnswers, Headwaters });
