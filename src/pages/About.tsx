const coveragePoints = [
  'How is your topic connected to both the history of American imperialism and the history of immigration? In other words, what is the historical context for your topic?',
  'What connections can you draw between your topic and recent/current American foreign policy and/or immigration policy?',
  '',
  'Pre-9/11 global context and domestic sentiment (placeholder text)',
  'Key events on September 11, 2001 and immediate impacts (placeholder text)',
  'Federal and state policy responses, including legislation (placeholder text)',
  'Cultural reactions across media, sports, and public rituals (placeholder text)',
  'Long-term debates about security, identity, and immigration (placeholder text)'
];

const methodologySteps = [
  'Collect placeholder sources and organize them chronologically.',
  'Translate each source into a concise event entry with context placeholders.',
  'Review the flow to ensure thematic transitions feel intentional (placeholder).',
  'Revise language for clarity, tone, and accessibility (placeholder).'
];

function About() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      <section className="px-6 pt-16 pb-10 text-center max-w-4xl mx-auto space-y-5">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">About the Timeline</p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Placeholder title describing the deeper goals of this 9/11 timeline project
        </h1>
        <p className="text-slate-100/90 leading-relaxed">
          Placeholder paragraph outlining why the timeline was assembled, what type of insight it offers, and how it
          supports thoughtful classroom conversations.
        </p>
      </section>

      <section className="px-6 pb-16 max-w-5xl mx-auto space-y-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-3">Project Overview</h2>
            <p className="text-slate-200/90">
              Placeholder copy explaining how the timeline is structured, how entries are grouped, and how viewers can
              interact with each card for more detailed narratives and sources.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-white mb-3">Audience</h2>
            <p className="text-slate-200/90">
              Placeholder text describing who the timeline is for (students, instructors, researchers) and what level of
              background knowledge is assumed before exploring the cards.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur space-y-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">Coverage</p>
            <h2 className="text-2xl font-semibold text-white">What the Timeline Highlights</h2>
          </div>
          <ul className="space-y-4 text-slate-100/90">
            {coveragePoints.map((point) => (
              <li key={point} className="flex items-start gap-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-300"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur space-y-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">Method</p>
            <h2 className="text-2xl font-semibold text-white">How the Timeline Was Compiled</h2>
          </div>
          <ol className="list-decimal list-inside space-y-3 text-slate-200/90">
            {methodologySteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white mb-4">Next Steps</h2>
          <p className="text-slate-200/90">
            An important warning: you can turn in the most creative thing, but if you don't fully address the questions above, I can't give you full credit. Fully responding to these questions is of the upmost importance for your creative project. As part of your creative project, you will also turn in a description or explanation of your project that helps illustrate how you answered these questions. Think about pieces displayed in museums and art galleries; many of them come accompanied by a plaque that describes/contextualizes/analyzes the piece. Your explanation can range from a paragraph to a page.

          </p>
        </div>
      </section>
    </main>
  );
}
export default About;
