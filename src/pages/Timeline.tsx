// src/pages/Timeline.tsx

import { useEffect, useState } from "react";
import { events, type TimelineItem } from "../data/TimelineData";
import { TimelineCard } from "../components/TimeLineCard";

export default function Timeline() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  let cardIndex = -1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (!Number.isNaN(idx)) {
            setVisibleCards((prev) => {
              if (prev[idx] === entry.isIntersecting) return prev;
              return { ...prev, [idx]: entry.isIntersecting };
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".timeline-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100">
      <section className="relative max-w-5xl mx-auto py-16 min-h-screen">
        <div className="pointer-events-none absolute inset-4 rounded-[40px] bg-white/5 blur-3xl opacity-40" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

        <div className="space-y-32 relative z-10">
          {events.map((item: TimelineItem, idx) => {
            // 1) Year marker branch
            if ("marker" in item) {
              return (
                <div
                  key={`marker-${item.yearLabel}-${idx}`}
                  className="relative flex justify-center z-30"
                  data-index={idx}
                >
                  <div className="flex items-center gap-4">
                    <span className="h-px w-12 bg-white/20" />
                    <span className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 bg-gradient-to-r from-indigo-500/20 via-transparent to-pink-500/20 text-xs sm:text-sm font-semibold tracking-[0.45em] uppercase text-white/80 shadow-[0_10px_30px_rgba(14,13,30,0.45)] backdrop-blur">
                      {item.yearLabel}
                    </span>
                    <span className="h-px w-12 bg-white/20" />
                  </div>
                </div>
              );
            }

            // 2) Normal event branch – now `item` is a TimelineEvent
            const event = item;
            cardIndex += 1;
            const isLeft = cardIndex % 2 === 0;
            const isVisible = !!visibleCards[idx];

            return (
              <div
                key={`${event.year}-${idx}`}
                className={`relative flex timeline-card transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                data-index={idx}
              >
                {/* Dot on center line */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span className="absolute inline-flex h-5 w-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-35 animate-[pulse_4s_ease-in-out_infinite]" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/40 border border-white/40" />
                  </span>
                </div>

                {/* Year label next to the line */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/70 hidden md:block ${
                    isLeft ? "left-1/2 pl-8 text-left" : "right-1/2 pr-8 text-right"
                  }`}
                >
                  {event.year}
                </div>

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
