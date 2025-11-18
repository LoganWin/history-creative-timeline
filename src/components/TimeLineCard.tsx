type TimelineEvent = {
  year: string;
  label: string;
  description: string;
  image: string;
};

interface TimelineCardProps {
  event: TimelineEvent;
  isFlipped: boolean;
  onToggle: () => void;
  alignRight?: boolean; // true if on the right side of the timeline
}

export function TimelineCard({ event, isFlipped, onToggle, alignRight }: TimelineCardProps) {
  return (
    <div
      className={`
        w-full max-w-md
        ${alignRight ? "ml-auto pl-8 text-left" : "mr-auto pr-8 text-right"}
      `}
    >
      <article
        className="card bg-slate-900/90 border border-slate-700/70 shadow-xl overflow-hidden min-h-[320px]"
        aria-expanded={isFlipped}
      >
        {/* FRONT SIDE */}
        {!isFlipped && (
          <div className="flex flex-col h-full">
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={event.image}
                alt={`Visual for ${event.year}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div
              className={`
                card-body flex-1 flex flex-col gap-3 p-6
                ${alignRight ? "items-end text-right" : "items-start text-left"}
              `}
            >
              <h3 className="card-title text-base sm:text-lg leading-snug">
                {event.label}
              </h3>

              {/* CTA pinned bottom-right */}
              <div className="mt-auto w-full flex justify-end">
                <button
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(79,70,229,0.35)] transition hover:shadow-[0_15px_28px_rgba(219,39,119,0.4)]"
                  onClick={onToggle}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}

        {/* BACK SIDE */}
        {isFlipped && (
          <div className="flex flex-col h-full card-body p-6 items-start text-left">
            <div className="w-full mb-3">
              <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                {event.year}
              </p>
              <h3 className="card-title text-base sm:text-lg mt-1">
                {event.label}
              </h3>
            </div>

            {/* Scrollable detailed text */}
            <div className="text-sm text-slate-100 leading-relaxed w-full max-h-56 overflow-y-auto pr-1">
              {event.description}
            </div>

            {/* Back button pinned bottom-right */}
            <div className="mt-auto w-full flex justify-end pt-4">
              <button
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                onClick={onToggle}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
