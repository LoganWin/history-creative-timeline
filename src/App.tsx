import { Link } from 'react-router-dom';
import twinTowers from './assets/twin-towers.jpg';
import './App.css';

function App() {
  return (
    <main className="relative overflow-hidden min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      <div className="absolute inset-0">
        <img src={twinTowers} alt="Twin Towers background" className="w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/30 to-slate-900" />
      </div>

      <section className="relative max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80 mb-5">Interactive Educational Timeline</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 mt-8">
          Understanding the Historical, Cultural, and Policy Responses to 9/11
        </h1>
        <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed max-w-3xl mt-8 mx-auto">
          Explore a guided timeline that traces the events leading up to September 11, the attacks themselves,
          and the wide-ranging responses that followed. Discover how U.S. policy shifted, how media and sports
          expressed collective grief, and how debates around immigration and security shaped everyday life.
        </p>
        <div className="mt-10">
          <Link
            to="/timeline"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-8 py-3 text-base font-semibold text-white shadow-[0_15px_40px_rgba(79,70,229,0.35)] transition duration-300 hover:shadow-[0_20px_45px_rgba(219,39,119,0.45)]"
          >
            View Timeline
            <span className="text-xl" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <p className="relative text-center text-xs text-slate-400 pb-6">
        Disclaimer: Student project for WPI HI1313 The US and the World.
      </p>
    </main>
  );
}

export default App;
