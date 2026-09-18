const { Button, Card, Badge, Waterline, SectionHeading, Tag } = window.LakesRegionAIDesignSystem_e86074;

const POSTS = [
  { kind: "video", len: "4 min", date: "Sep 10, 2026", town: "Gilford", title: "\u201cWhat happens if it books two guys into the same slot?\u201d", teaser: "Somebody asked me this at the Chamber breakfast. Short answer: it can't, and here's the thirty seconds of setup that makes sure.", featured: true },
  { kind: "video", len: "6 min", date: "Sep 3, 2026", town: "Laconia", title: "I let it answer my own phone for a week. Here's every call.", teaser: "Twenty-two calls. Nineteen handled, three handed to me. I read the transcripts out loud, including the one it got wrong." },
  { kind: "written", len: "3 min read", date: "Aug 27, 2026", town: "Meredith", title: "The four things a plumber's phone gets asked all summer", teaser: "Pulled from real call logs. If you know the four, you can answer three of them without picking up." },
  { kind: "written", len: "5 min read", date: "Aug 19, 2026", town: "Wolfeboro", title: "What Bike Week does to a two-man shop's calendar", teaser: "Nine days of June is a quarter of the year. What we set up in May so nobody works a 14-hour Thursday." },
  { kind: "video", len: "5 min", date: "Aug 12, 2026", town: "Tilton", title: "Reading a quote follow-up out loud, line by line", teaser: "The day-three text that recovers about one job in five. I'll show you the exact wording and why every word is in there." },
  { kind: "written", len: "4 min read", date: "Aug 5, 2026", town: "Laconia", title: "Nobody got fired. Here's what actually changed at the front desk.", teaser: "Three businesses, a year in. What the person at the counter does now that they didn't before." }
];

function PostMeta({ p, tone = "light", compact = false }) {
  const muted = tone === "inverse" ? "rgba(255,255,255,.7)" : "var(--text-muted)";
  const item = { whiteSpace: "nowrap", flex: "none" };
  const dot = <span aria-hidden="true" style={{ ...item, opacity: .5 }}>·</span>;
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", columnGap: "var(--space-3)", rowGap: 4, fontFamily: "var(--font-ui)", fontSize: "var(--text-caption)", color: muted }}>
      <span style={{ ...item, display: "inline-flex", alignItems: "center", gap: 5, fontWeight: 600, color: tone === "inverse" ? "var(--accent)" : "var(--color-lake-700)", textTransform: "uppercase", letterSpacing: ".08em" }}>
        <Icon name={p.kind === "video" ? "play-circle" : "file-text"} size={13} />
        {p.kind === "video" ? "Video" : "Written"}
      </span>
      {dot}<span style={item}>{compact ? p.len.replace(" read", "") : p.len}</span>
      {dot}<span style={item}>{p.town}</span>
      {dot}<span style={item}>{compact ? p.date.replace(", 2026", "") : p.date}</span>
    </div>
  );
}

function PostCard({ p }) {
  return (
    <Card interactive padding="lg" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      {p.kind === "video" ? (
        <div style={{ aspectRatio: "16/9", borderRadius: "var(--radius-md)", background: "linear-gradient(150deg,var(--color-lake-800),var(--color-lake-900))", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <span style={{ width: 46, height: 46, borderRadius: "var(--radius-pill)", background: "rgba(255,255,255,.14)", border: "1.5px solid rgba(255,255,255,.5)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><Icon name="play" size={18} /></span>
          <span style={{ position: "absolute", bottom: 10, right: 12, fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,.8)" }}>{p.len}</span>
        </div>
      ) : (
        <div style={{ aspectRatio: "16/9", borderRadius: "var(--radius-md)", background: "var(--surface-subtle)", border: "1px solid var(--border-hairline)", display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--space-5)", fontFamily: "var(--font-ui)", fontSize: "var(--text-caption)", color: "var(--text-muted)", textAlign: "center" }}>
          Photo placeholder — the shop or the job this post is about
        </div>
      )}
      <PostMeta p={p} compact />
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h4)", margin: 0 }}>{p.title}</h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: 0 }}>{p.teaser}</p>
    </Card>
  );
}

function ShopTalkTeaser({ onNavigate }) {
  return (
    <Section tone="page">
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--space-8)", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", maxWidth: 700 }}>
          <div style={{ flex: "none", width: 104, height: 104, borderRadius: "50%", overflow: "hidden", background: "#EDE9E1", border: "3px solid var(--accent)", position: "relative" }}>
            <img src={window.ASSETS+"assets/owl-mark.jpg"} alt="" style={{ position: "absolute", width: "265%", maxWidth: "none", left: "-82.7%", top: "-6.4%", display: "block" }} />
          </div>
          <SectionHeading eyebrow="Shop Talk" title="One real question, answered properly." lead="Somebody asks me something at a counter or a Chamber breakfast, and I film the answer or write it down. No tips, no trends — just the question and what I actually told them." />
        </div>
        <Button variant="secondary" onClick={() => onNavigate && onNavigate("Shop Talk")}>All of it</Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--space-6)", marginTop: "var(--space-9)" }}>
        {POSTS.slice(0, 3).map((p) => <PostCard key={p.title} p={p} />)}
      </div>
    </Section>
  );
}

function ShopTalk({ onNavigate }) {
  const [filter, setFilter] = React.useState("Everything");
  const tabs = ["Everything", "Video", "Written"];
  const shown = POSTS.filter((p) => filter === "Everything" || (filter === "Video" ? p.kind === "video" : p.kind === "written"));
  const hero = POSTS[0];
  return <>
    <section style={{ background: "var(--surface-inverse)", color: "#fff" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-12) var(--gutter)", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "var(--space-10)", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-300)" }}>Shop Talk</div>
          <Waterline width={56} tone="inverse" style={{ margin: "var(--space-4) 0 var(--space-6)" }} />
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-display-2)", lineHeight: "var(--leading-snug)", color: "#fff", margin: 0, maxWidth: 520 }}>One real question, answered properly.</h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lead)", lineHeight: "var(--leading-relaxed)", color: "rgba(255,255,255,.85)", maxWidth: 480, margin: "var(--space-5) 0 var(--space-7)" }}>
            Somebody asks me something at a counter or a Chamber breakfast, and I film the answer or write it down. Every one of these came from an actual conversation with an actual business in this area.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center", flexWrap: "wrap" }}>
            <Button variant="inverse" onClick={() => onNavigate && onNavigate("Contact")}>Ask me something</Button>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", color: "rgba(255,255,255,.7)" }}>or call (603) 707-0720</span>
          </div>
        </div>
        <Card tone="inverse" padding="lg" style={{ background: "rgba(255,255,255,.07)" }}>
          <Badge tone="accent">Newest</Badge>
          <div style={{ aspectRatio: "16/9", borderRadius: "var(--radius-md)", background: "linear-gradient(150deg,rgba(255,255,255,.14),rgba(255,255,255,.04))", border: "1px solid rgba(255,255,255,.22)", display: "flex", alignItems: "center", justifyContent: "center", margin: "var(--space-5) 0" }}>
            <span style={{ width: 54, height: 54, borderRadius: "var(--radius-pill)", background: "rgba(255,255,255,.16)", border: "1.5px solid rgba(255,255,255,.55)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff" }}><Icon name="play" size={22} /></span>
          </div>
          <PostMeta p={hero} tone="inverse" />
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h3)", color: "#fff", margin: "var(--space-3) 0 var(--space-3)" }}>{hero.title}</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-relaxed)", color: "rgba(255,255,255,.8)", margin: 0 }}>{hero.teaser}</p>
        </Card>
      </div>
    </section>

    <Section tone="page">
      <div style={{ display: "flex", gap: "var(--space-3)", marginBottom: "var(--space-8)", flexWrap: "wrap" }}>
        {tabs.map((t) => (
          <button key={t} onClick={() => setFilter(t)} style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-body-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-caps)", padding: "10px 18px", borderRadius: "var(--radius-pill)", cursor: "pointer", border: "1.5px solid " + (filter === t ? "var(--color-lake-700)" : "var(--border-default)"), background: filter === t ? "var(--color-lake-700)" : "transparent", color: filter === t ? "#fff" : "var(--text-body)" }}>{t}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: "var(--space-6)" }}>
        {shown.map((p) => <PostCard key={p.title} p={p} />)}
      </div>
    </Section>

    <Section tone="mist" tight>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-10)", alignItems: "center" }}>
        <div>
          <SectionHeading eyebrow="Why I bother" title="Every one of these makes the phone smarter." />
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: "var(--space-5) 0 0" }}>
            The system that answers your phone learns from what's written down. So every question I answer here is a question it can already answer for a customer at 7 p.m. — in the same words I'd use standing in your shop. The writing isn't marketing. It's the training.
          </p>
        </div>
        <Card padding="lg">
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", marginBottom: "var(--space-5)" }}>
            <div style={{ flex: "none", width: 72, height: 72, borderRadius: "50%", overflow: "hidden", background: "#EDE9E1", border: "2px solid var(--accent)", position: "relative" }}>
              <img src={window.ASSETS+"assets/owl-mark.jpg"} alt="" style={{ position: "absolute", width: "265%", maxWidth: "none", left: "-82.7%", top: "-6.4%", display: "block" }} />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", color: "var(--text-muted)" }}>Always answered</span>
          </div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-eyebrow)", fontWeight: 600, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-lake-700)" }}>Got a question?</div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-body)", margin: "var(--space-4) 0 var(--space-6)" }}>
            If you've wondered it, three other shops in Laconia have too. Ask and I'll answer it here — no name attached if you'd rather.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap" }}>
            <Button onClick={() => onNavigate && onNavigate("Contact")}>Send it over</Button>
            <Button variant="secondary">Call (603) 707-0720</Button>
          </div>
        </Card>
      </div>
    </Section>
  </>;
}

Object.assign(window, { ShopTalk, ShopTalkTeaser, PostCard, POSTS });
