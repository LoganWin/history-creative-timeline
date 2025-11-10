const events = [
  { year: "1950", description: "Another milestone..." },
  { year: "1900", description: "Major historical event..." },
  { year: "1980", description: "Yet another event..." },
  { year: "1980", description: "Yet another event..." },
  { year: "1980", description: "Yet another event..." },
  { year: "1980", description: "Yet another event..." },
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
              {/* Connector and dot */}
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20`}
              >
                {/* Dot */}
                <div className="w-5 h-5 bg-white border-4 border-indigo-500 rounded-full shadow"></div>
                {/* Optional: vertical connector for spacing */}
              </div>
              {/* Box */}
              <div
                className={`
                  bg-gray-800 p-6 rounded-lg w-2/3 shadow transition
                  ${isLeft ? "mr-auto pr-16 text-right" : "ml-auto pl-16 text-left"}
                  relative z-30
                `}
              >
                <h3 className="text-xl font-bold text-white">{event.year}</h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}