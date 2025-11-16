import { useState } from "react";
import example from "../assets/react.svg";

const events = [
  {
    year: "1990s",
    label: "Rising Global Tensions and U.S. Involvement Abroad",
    description:
      "Throughout the 1990s, the United States faced growing tension with Middle Eastern terrorist networks following events like the 1993 World Trade Center bombing and 1998 U.S. embassy attacks, shaping later fears about global terrorism. (CFR)",
  },
  {
    year: "2001-09-11",
    label: "September 11 Attacks",
    description:
      "Al-Qaeda hijackers carried out coordinated attacks on the World Trade Center and the Pentagon, killing nearly 3,000 people and shocking the nation. The tragedy reshaped American identity, media, and policy direction. (Bush, Spigel)",
  },
  {
    year: "2001-09-20",
    label: "Bush’s Address to Congress: Declaring the 'War on Terror'",
    description:
      "President George W. Bush delivered a defining speech to Congress, framing the attacks as acts of war and calling for a global campaign against terrorism. His message emphasized unity but also fueled public fear of outsiders. (Bush)",
  },
  {
    year: "2001-10-26",
    label: "USA PATRIOT Act Signed into Law",
    description:
      "Congress passed the USA PATRIOT Act, vastly expanding government surveillance and immigration enforcement powers to prevent terrorism. Critics warned it compromised civil liberties and targeted immigrants unfairly. (Patriot Act, Tumlin)",
  },
  {
    year: "2002",
    label: "Creation of the Department of Homeland Security",
    description:
      "The federal government reorganized domestic agencies under the Department of Homeland Security to centralize counterterrorism efforts. Immigration policy became more tightly linked to national security. (CFR, Tumlin)",
  },
  {
    year: "2003–2004",
    label: "Cultural Response and Media Transformation",
    description:
      "Television and entertainment industries adapted to post-9/11 sensitivities. Programs emphasized patriotism and unity while often stereotyping Middle Eastern identities. Media played a key role in shaping public perception of the 'enemy.' (Spigel)",
  },
  {
    year: "2004",
    label: "Legal Challenges and Civil Liberties Debates",
    description:
      "Court cases and advocacy groups began contesting elements of the PATRIOT Act. Public debate grew over how much freedom Americans should sacrifice for security. (Tumlin)",
  },
  {
    year: "2006–2011",
    label: "Continuing the 'War on Terror' and Shifts in Public Perception",
    description:
      "As wars in Afghanistan and Iraq continued, Americans grew increasingly divided over the costs of the War on Terror. Immigration enforcement and surveillance remained key domestic legacies. (CFR)",
  },
  {
    year: "2021",
    label: "9/11’s Legacy in American Culture and Sport",
    description:
      "Two decades later, the emotional impact of 9/11 remains strong. NFL Films’ remembrance highlights how the tragedy united communities and reinforced collective identity through public rituals. (NFL Films)",
  },
];

export default function Timeline() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section className="relative max-w-5xl mx-auto py-16 min-h-screen">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-pink-500 z-0" />

      {/* Timeline items */}
      <div className="space-y-32 relative z-10">
        {events.map((event, idx) => {
          const isLeft = idx % 2 === 0;
          const isFlipped = flippedIndex === idx;

          return (
            <div
              className="relative flex items-center"
              key={event.year + idx}
            >
              <div
                className={`w-full max-w-md md:max-w-lg ${
                  isLeft ? "mr-auto pr-8 text-right" : "ml-auto pl-8 text-left"
                } relative z-30`}
              >
                <div className="card w-full min-h-[260px] bg-base-100 shadow-2xl border border-base-content/10 overflow-hidden flex flex-col sm:flex-row">
                  {isFlipped ? (
                    // DETAILS SIDE — always left-justified
                    <div className="card-body gap-4 p-6 sm:p-8 flex-1 items-start text-left">
                      <div className="w-full">
                        <p className="text-sm uppercase tracking-wide text-base-content/70 mb-1">
                          {event.year}
                        </p>
                        <h5 className="card-title mb-4">{event.label}</h5>
                        <p className="text-base-content leading-relaxed break-words whitespace-pre-wrap">
                          {event.description}
                        </p>
                      </div>
                      <div className="card-actions mt-auto justify-end self-end">
                        <button
                          className="btn btn-primary"
                          onClick={() => setFlippedIndex(null)}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  ) : (
                    // FRONT SIDE — year + header alignment alternates by side
                    <>
                      <figure className="bg-base-200 sm:w-48 w-full flex-shrink-0 flex items-center justify-center p-6">
                        <img
                          src={example}
                          alt={`Visual for ${event.year}`}
                          className="h-32 sm:h-40 w-full object-contain"
                        />
                      </figure>
                      <div
                        className={`card-body gap-3 p-6 sm:p-8 flex-1 min-w-0 ${
                          isLeft ? "items-end text-right" : "items-start text-left"
                        }`}
                      >
                        <div className="w-full">
                          <p
                            className={`text-sm uppercase tracking-wide text-base-content/70 mb-1 ${
                              isLeft ? "text-right" : "text-left"
                            }`}
                          >
                            {event.year}
                          </p>
                          <h5
                            className={`card-title mb-0.5 ${
                              isLeft ? "text-right" : "text-left"
                            }`}
                          >
                            {event.label}
                          </h5>
                        </div>
                        <div className="card-actions mt-auto justify-end self-end">
                          <button
                            className="btn btn-primary"
                            onClick={() => setFlippedIndex(idx)}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
