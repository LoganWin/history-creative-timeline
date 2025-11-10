import example from "../assets/react.svg";

const events = [
    { year: "1950", label: "Blah Blah Happened", description: "Another milestone..." },
    { year: "1900", label: "Blah Blah Happened", description: "Yooooooooooooooooooooooooooooooooooooooooooooooooooooooo" },
    { year: "1980", label: "Blah Blah Happened", description: "Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo" },
    { year: "1980", label: "Blah Blah Happened", description: "Yet another event..." },
    { year: "1980", label: "Blah Blah Happened", description: "Yet another event..." },
    { year: "1980", label: "Blah Blah Happened", description: "Yet another event..." },
    // Add more events as needed
];

export default function Timeline() {
    return (
        <section className="relative max-w-5xl mx-auto py-16 min-h-screen">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-pink-500 z-0"></div>

            {/* Timeline items */}
            <div className="space-y-32 relative z-10">
                {events.map((event, idx) => {
                    const isLeft = idx % 2 === 0;
                    return (
                        <div className="relative flex items-center" key={event.year + idx}>
                            {/* Card with tabs, aligned left/right */}
                            <div
                                className={`w-full max-w-md md:max-w-lg ${isLeft ? "mr-auto pr-8 text-right" : "ml-auto pl-8 text-left"} relative z-30`}
                            >
                                <div className="card w-full min-h-[260px] bg-base-100 shadow-2xl border border-base-content/10 flex flex-col sm:flex-row overflow-hidden">
                                    <figure className="bg-base-200 sm:w-48 w-full flex-shrink-0 flex items-center justify-center p-6">
                                        <img
                                            src={example}
                                            alt={`Visual for ${event.year}`}
                                            className="h-32 sm:h-40 w-full object-contain"
                                        />
                                    </figure>
                                    <div className={`card-body gap-3 p-6 sm:p-8 flex-1 min-w-0 ${isLeft ? "items-end text-right" : "items-start text-left"}`}>
                                        <h5 className="card-title mb-0.5">{event.year}</h5>
                                        <p className="mb-2">{event.label}</p>
                                        <p className="text-base-content/80 leading-relaxed w-full break-words whitespace-pre-wrap">
                                            {event.description}
                                        </p>
                                        <div className={`card-actions ${isLeft ? "justify-end" : "justify-start"}`}>
                                            <button className="btn btn-primary">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
