import { Link } from 'react-router-dom';
import twinTowers from './assets/twin-towers.jpg';
import './App.css';

function App() {
  return (
    <main className="relative overflow-hidden min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      <div className="relative px-6 pt-6 text-center text-xs text-slate-300 uppercase tracking-[0.3em]">
        Disclaimer: Student project for WPI HI1313 The US and the World.
      </div>
      <div className="absolute inset-0">
        <img src={twinTowers} alt="Twin Towers background" className="w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/30 to-slate-900" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="w-full md:max-w-lg space-y-6">
            <div className="space-y-6 text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300/80">Interactive Educational Timeline</p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
                The Response to 9/11
              </h1>
              <p className="text-base sm:text-lg text-slate-100/85 leading-relaxed">
                A focused overview connecting the attacks to shifts in American policy, security strategy, and public
                culture in the years that followed.
              </p>
            </div>

            <div>
              <Link
                to="/timeline"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-8 py-3 text-base font-semibold text-white shadow-[0_15px_40px_rgba(79,70,229,0.35)] transition duration-300 hover:shadow-[0_20px_45px_rgba(219,39,119,0.45)]"
              >
                View Timeline
                <span className="text-xl" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="flex-1" />
        </div>
      </section>

    </main>
  );
}

export default App;
