import NFLTribute from "../assets/NFL-9:11.webp";
import {
  heroContent,
  sectionNav,
  historicalContextSection,
  policyConnectionsSection,
  tyingTimelineSection,
  impactPoints,
  culturalImpactSection,
  culturalNotes
} from "../data/MoreDetailsData";

export default function MoreDetails() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      {/* Hero */}
      <section className="px-6 pt-16 pb-8 text-center max-w-4xl mx-auto space-y-5">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">
          {heroContent.eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          {heroContent.title}
        </h1>
        <p className="text-slate-100/90 leading-relaxed">
          {heroContent.intro}
        </p>
      </section>

      {/* Section nav */}
      <nav className="px-6 mb-10 max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {sectionNav.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="px-3 py-1 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-slate-100 transition"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="px-6 pb-16 max-w-6xl mx-auto space-y-12">
        {/* Historical Context */}
        <section id="context" className="scroll-mt-24">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur space-y-4">
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">
                {historicalContextSection.heading}
              </h2>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">
                {historicalContextSection.question}
              </p>
            </header>

            <div className="space-y-4 text-slate-200/90 leading-relaxed">
              {historicalContextSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-4 space-y-3 text-slate-100/85">
              {historicalContextSection.bulletPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Policy Connections */}
        <section id="policy" className="scroll-mt-24">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur space-y-4">
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">
                {policyConnectionsSection.heading}
              </h2>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">
                {policyConnectionsSection.question}
              </p>
            </header>

            <div className="space-y-4 text-slate-200/90 leading-relaxed">
              {policyConnectionsSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-4 space-y-3 text-slate-100/85">
              {policyConnectionsSection.bulletPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-pink-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <hr className="border-white/10 max-w-3xl mx-auto" />

        {/* Cultural Impact / NFL case study */}
<section id="culture" className="scroll-mt-24">
  <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur space-y-6">
    <header className="text-center space-y-2">
      <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">
        {culturalImpactSection.eyebrow}
      </p>
      <h2 className="text-2xl font-semibold text-white">
        {culturalImpactSection.heading}
      </h2>
    </header>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-slate-200/90">

      {/* Left + middle cards */}
      {culturalNotes.map((note) => (
        <article
          key={note.title}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col lg:col-span-1"
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            {note.title}
          </h3>
          <p className="text-base leading-relaxed">{note.text}</p>
        </article>
      ))}

      {/* NFL Case Study */}
      <article className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden md:col-span-2 lg:col-span-1 flex flex-col">
        <img
          src={NFLTribute}
          alt="NFL Tribute"
          className="h-48 w-full object-cover"
        />
        <div className="p-5 text-slate-200/90 flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-2">
            NFL Impact
          </h3>
          <p className="text-base leading-relaxed">
            {culturalImpactSection.caption}
          </p>
        </div>
      </article>

    </div>
  </article>
</section>

        {/* Tying the Timeline Together */}
        <section id="together" className="scroll-mt-24">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur space-y-6">
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">
                {tyingTimelineSection.heading}
              </h2>
              <p className="text-slate-200/90">
                {tyingTimelineSection.blurb}
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {impactPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200/90"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {point.title}
                  </h3>
                  <p>{point.detail}</p>
                </article>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
