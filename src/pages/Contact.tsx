const quickFacts = [
  { label: 'Course', value: 'HI 1313 – Contemporary U.S. History' },
  { label: 'Creator', value: 'Logan Winters' },
];

const sources = [
  {
    label: 'Bush, G. W. (2001, September 20). "Address to a Joint Session of Congress and the American People."',
    detail: 'National Archives and Records Administration.',
    url: 'https://georgewbush-whitehouse.archives.gov/news/releases/2001/09/20010920-8.html'
  },
  {
    label: '107th Cong. (2001). USA PATRIOT Act (Public Law 107–56).',
    detail: 'Full legislative text outlining expanded counterterror powers.',
    url: 'https://www.congress.gov/107/plaws/publ56/PLAW-107publ56.pdf'
  },
  {
    label: 'Tumlin, K. C. (2004). "Suspect First: How Terrorism Policy Is Reshaping Immigration Policy."',
    detail: 'California Law Review, 92(4), 1173–1239.',
    url: 'https://doi.org/10.2307/3481320'
  },
  {
    label: 'Spigel, L. (2004). "Entertainment Wars: Television Culture after 9/11."',
    detail: 'American Quarterly, 56(2), 235–270.',
    url: 'http://www.jstor.org/stable/40068195'
  },
  {
    label: 'Council on Foreign Relations. (n.d.). "How 9/11 reshaped foreign policy."',
    detail: 'CFR overview of diplomatic and security shifts.',
    url: 'https://www.cfr.org/timeline/how-911-reshaped-foreign-policy'
  },
  {
    label: 'NFL Films. (2021, September 10). "Remembering 9/11: How the Events of September 11th Impacted the NFL and the Community."',
    detail: 'YouTube remembrance piece documenting sports culture responses.',
    url: 'https://www.youtube.com/watch?v=q6waDZy7Hc8'
  },
];

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        <header className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80">Project Info</p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Reference Notes for the 9/11 Timeline</h1>
          <p className="text-slate-200/90 max-w-3xl mx-auto">
            This page gathers the logistical details behind the interactive timeline—course context, focus areas,
            tools used, and quick references for classmates or instructors who want to understand how it was
            assembled.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2">
          {quickFacts.map((fact) => (
            <article
              key={fact.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-blue-200/80">{fact.label}</p>
              <p className="mt-3 text-lg font-semibold text-white">{fact.value}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold mb-4">Works Cited</h2>
          <p className="text-slate-200/90 mb-6">
            Core references used to build the interactive cards. Each citation includes a summary plus a direct link for
            verification.
          </p>
          <ul className="space-y-4 text-slate-100/90">
            {sources.map((source) => (
              <li key={source.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">{source.label}</p>
                <p className="text-slate-200/80 text-sm mb-2">{source.detail}</p>
                <a
                  className="text-blue-200 hover:text-blue-100 break-all"
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {source.url}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold mb-4">Tools & Workflow</h2>
          <div className="grid gap-6 md:grid-cols-2 text-slate-200/90">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Technical Stack</h3>
              <p>
                Built with React, Vite, and Tailwind CSS. Timeline entries are stored in a local data array for now,
                making it easy to adjust copy without a backend.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Research Workflow</h3>
              <p>
                Drafted notes in a shared Google Doc, cross-checked dates with the Council on Foreign Relations
                timeline, the Bush Library archives, and NFL Films’ memorial coverage for the cultural angle.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
