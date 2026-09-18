const { Tabs, Card, Tag, SectionHeading, Waterline, Button, Badge, TierCard, TierMarker } = window.LakesRegionAIDesignSystem_e86074;

const BY_INDUSTRY = {
  "Trades": {
    line: "Plumbers, electricians, HVAC, excavation, landscaping.",
    jobs: [["phone-call","Answer the phone from the ladder","Calls answered and jobs booked while you're on a roof in Gilford."],["file-text","Quotes out the same night","Dictate on the drive home; the estimate goes out before dinner."],["calendar-check","Fill the cancellations","The waitlist gets texted the moment a slot opens."]],
    quote: ["We stopped losing the 4:30 calls.", "Sanborn Plumbing & Heating, Meredith"]
  },
  "Restaurants": {
    line: "Diners, pubs, seasonal spots, catering.",
    jobs: [["phone-call","Reservations during the rush","Nobody leaves the line to pick up the phone."],["clipboard-list","Prep lists that write themselves","Yesterday's covers set today's par levels."],["users","Scheduling around the season","Summer staffing that doesn't take your Sunday."]],
    quote: ["July finally stopped feeling like a fire drill.", "The Lakeside Room, Wolfeboro"]
  },
  "Real estate": {
    line: "Agents, brokerages, property managers, short-term rentals.",
    jobs: [["inbox","Lead follow-up that doesn't lapse","Every inquiry answered in five minutes, in your voice."],["file-text","Listing copy in your style","Drafted from your notes and photos, ready to edit."],["receipt","Turnover and cleaning coordination","Bookings, cleaners, and reminders in one thread."]],
    quote: ["I answer showings, not email.", "Winnipesaukee Shore Realty, Laconia"]
  },
  "Professional services": {
    line: "Accountants, insurance, law offices, clinics, contractors' offices.",
    jobs: [["inbox","Intake without the phone tag","Clients answer six questions before they ever reach you."],["receipt","Invoices and reminders","Out on time, chased politely, reconciled monthly."],["clipboard-list","Document handling","Files named, filed, and findable a year from now."]],
    quote: ["Tax season with two fewer temps.", "Belknap Tax & Bookkeeping, Tilton"]
  },
  "Retail": {
    line: "Hardware, gift, garden centers, marinas, auto parts.",
    jobs: [["phone-call","\"Do you have it in stock?\"","Answered accurately, all day, without leaving the register."],["clipboard-list","Reorder points that hold","Watches what moves and tells you before you're out."],["calendar-check","Seasonal hours everywhere at once","One change updates the phone, the site, and the listings."]],
    quote: ["The phone stopped interrupting customers.", "Weirs Hardware, Laconia"]
  }
};

function Services({ onNavigate }) {
  const [industry, setIndustry] = React.useState("Trades");
  const data = BY_INDUSTRY[industry];
  return <>
    <Section tone="alt" tight>
      <SectionHeading level={1} eyebrow="What we do" title="Same three tiers. Different week." lead="The work depends on your trade. Pick yours — these are the jobs we usually take off the owner's plate first." />
      <div style={{ marginTop: "var(--space-8)" }}>
        <Tabs tabs={Object.keys(BY_INDUSTRY)} value={industry} onChange={setIndustry} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--space-6)", marginTop: "var(--space-8)" }}>
        {data.jobs.map(([icon, title, body]) => (
          <Card key={title} padding="lg" waterline interactive>
            <span style={{ color: "var(--color-lake-600)" }}><Icon name={icon} size={24} /></span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", margin: "var(--space-4) 0 var(--space-2)" }}>{title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: 0 }}>{body}</p>
          </Card>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", marginTop: "var(--space-8)", flexWrap: "wrap" }}>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-label)", color: "var(--text-muted)" }}>{data.line}</span>
        <span style={{ flex: 1, minWidth: 40 }} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", color: "var(--text-strong)" }}>"{data.quote[0]}"</span>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-caption)", color: "var(--text-muted)" }}>— {data.quote[1]}</span>
      </div>
    </Section>
    <Section tone="page">
      <SectionHeading eyebrow="What it costs" title="Three ways in. Pick the smallest one that helps." lead="Flat prices, written down before we start." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--space-6)", marginTop: "var(--space-9)" }}>
        {TIERS.map((t) => <TierCard key={t.name} {...t} onCta={() => onNavigate("Contact")} />)}
      </div>
    </Section>
    <Section tone="mist" tight>
      <SectionHeading eyebrow="Common questions" title="The things people ask on the phone." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6) var(--space-10)", marginTop: "var(--space-8)" }}>
        {[["Will it talk to my customers like a robot?","No. Everything customer-facing gets written in your words and approved by you before it goes live. You can shut it off from your phone."],
          ["Do I need new software?","Usually not. We work with the phone, email and scheduling you already have."],
          ["What if I want out?","Month to month after the build. You keep everything we set up and the written documentation."],
          ["Are you local, actually?","Laconia. We drive to Wolfeboro, Meredith, Tilton, Moultonborough, Plymouth and Concord every week."]].map(([q, a]) => (
          <div key={q}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", margin: 0 }}>{q}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: "var(--space-2) 0 0" }}>{a}</p>
          </div>
        ))}
      </div>
    </Section>
  </>;
}
Object.assign(window, { Services });
