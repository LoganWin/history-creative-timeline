import { useState } from "react";
import { events } from "../data/Events";
import { TimelineCard } from "../components/TimeLineCard";
export default function Timeline() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  let cardIndex = -1;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      <section className="relative max-w-5xl mx-auto py-16 min-h-screen">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

        <div className="space-y-32 relative z-10">
          {events.map((event, idx) => {
            if ('marker' in event && event.marker) {
              return (
                <div
                  key={`marker-${event.yearLabel}-${idx}`}
                  className="relative flex justify-center z-30"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-px w-12 bg-white/20" />
                    <span className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 bg-gradient-to-r from-indigo-500/20 via-transparent to-pink-500/20 text-xs sm:text-sm font-semibold tracking-[0.45em] uppercase text-white/80 shadow-[0_10px_30px_rgba(14,13,30,0.45)] backdrop-blur">
                      {event.yearLabel}
                    </span>
                    <span className="h-px w-12 bg-white/20" />
                  </div>
                </div>
              );
            }

            cardIndex += 1;
            const isLeft = cardIndex % 2 === 0;

            return (
              <div key={`${event.year}-${idx}`} className="relative flex">
                <TimelineCard
                  event={event}
                  isFlipped={flippedIndex === idx}
                  onToggle={() =>
                    setFlippedIndex(flippedIndex === idx ? null : idx)
                  }
                  alignRight={!isLeft}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
