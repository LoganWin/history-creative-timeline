import { info, sources } from "../data/ReferenceInfo";

export default function ReferencePage() {
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
          {info.map((val) => (
            <article
              key={val.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-blue-200/80">{val.label}</p>
              <p className="mt-3 text-lg font-semibold text-white">{val.value}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold mb-4 text-center">Works Cited</h2>
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
                Built with React, Typescript, Vite, and Tailwind CSS.
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
