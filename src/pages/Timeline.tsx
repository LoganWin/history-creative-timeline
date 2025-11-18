import { useState } from "react";
import { TimelineCard } from "../components/TimeLineCard";
import example from "../assets/react.svg";
import nineElevenImage from "../assets/1140-9-11-towers-attack-explosion.jpg";
import Bush from "../assets/bush-adress.jpg";
import NFL from "../assets/NFL-9:11.webp";
import CIA from "../assets/detention-camps.jpg"
import AUMF from "../assets/soldiers.jpg"
import Anthrax from "../assets/anthrax-mail.jpg"
import WOT from "../assets/war-on-terror.jpg"
import OEF from "../assets/operation-enduring-freedom.jpg"
import PatriotAct from "../assets/patriot-act.jpg"
import TSA from "../assets/TSA.jpg"
import GuantBayDet from "../assets/guant-bay.webp"
import Deportation from "../assets/Deportation.webp"


const events = [
  {
    year: "September 11, 2001",
    label: "Unprecedented Attacks Strike the World Trade Center and Pentagon",
    description:
      "Nineteen al-Qaeda members hijacked four commercial airliners, killing 2,977 across New York, Washington D.C., and Pennsylvania. The tragedy exposed intelligence-sharing failures and marked the first time in 136 years that Americans experienced war casualties at the heart of a major city.",
    image: nineElevenImage,
  },
  {
    year: "September 14, 2001",
    label: "Bush Declares National Emergency and vows to \"Rid the World of Evil\"",
    description:
      "At Ground Zero, President Bush vowed to answer the attacks and declared a national emergency, unlocking expanded executive powers. A follow-up order granted sweeping authority to target global terrorist financing.",
    image: Bush,
  },
  {
    year: "September 17, 2001",
    label: "Bush Granted CIA the Authority to Run Global Detention Program",
    description:
      "A classified memorandum authorized the CIA to detain anyone deemed a continuing threat, enabling a network of clandestine \"black sites\" that operated outside traditional oversight.",
    image: CIA,
  },
  {
    year: "September 18, 2001",
    label: "AUMF Green-Lights Open-Ended Military Force",
    description:
      "Congress passed the Authorization for Use of Military Force, empowering the President to use all necessary force against those tied to 9/11. The resolution became the foundation for counterterror operations in over a dozen countries.",
    image: AUMF,
  },
  {
    year: "September 18, 2001",
    label: "Anthrax Mailings Ignite Biological Attack Panic",
    description:
      "Letters laced with anthrax hit media outlets and Congress, killing five people and prompting false suspicions of Iraqi involvement before the FBI traced the attack to U.S. scientist Bruce Ivins.",
    image: Anthrax,
  },
  {
    year: "September 20, 2001",
    label: "Bush Declares Global War on Terror",
    description:
      "In a joint session of Congress, Bush defined the response as an open-ended war on terror, demanded the Taliban surrender al-Qaeda leaders, and announced the creation of the Office of Homeland Security.",
    image: WOT,
  },
  {
    year: "Late September 2001",
    label: "NFL Returns to Promote Unity and Resilience",
    description:
      "After pausing its schedule, the NFL resumed play to help the nation grieve and heal, showcasing tributes such as Giants lineman Joe Andruzzi honoring his firefighter brothers.",
    image: NFL,
  },
  {
    year: "October 7, 2001",
    label: "Operation Enduring Freedom Begins",
    description:
      "U.S. and U.K. forces launched air strikes in Afghanistan after NATO’s first collective defense invocation, toppling the Taliban by December while al-Qaeda’s leaders slipped away.",
    image: OEF,
  },
  {
    year: "October 26, 2001",
    label: "USA PATRIOT Act is Signed into Law",
    description:
      "Public Law 107-56 enhanced surveillance authority (Title II) and strengthened international anti-money-laundering enforcement (Title III) to disrupt plots and funding networks.",
    image: PatriotAct,
  },
  {
    year: "October 26, 2001",
    label: "Congress Condemns Bias Against Arab and Muslim Americans",
    description:
      "Title I of the PATRIOT Act denounced discrimination toward Arab, Muslim, and Sikh Americans, honoring heroes like Mohammed Salman Hamdani and reaffirming civil liberties.",
    image: PatriotAct,
  },
  {
    year: "October 26, 2001",
    label: "Mandatory Detention Authority Established",
    description:
      "Section 412 created mandatory detention for non-citizens suspected of terrorism and expanded access to criminal history records for visa screening and admissions decisions.",
    image: PatriotAct,
  },
  {
    year: "November 19, 2001",
    label: "Transportation Security Administration Created",
    description:
      "The TSA federalized airport security, bringing permanent changes such as standardized screening, luggage inspections, and limitations on in-flight movement.",
    image: TSA,
  },
  { marker: true, yearLabel: "2002" },
  {
    year: "January 11, 2002",
    label: "Guantanamo Bay Opens for Detainees",
    description:
      "The first Taliban and al-Qaeda suspects arrived at the U.S. naval station in Cuba, turning Guantanamo into a focal point for criticism of detention and interrogation practices.",
    image: GuantBayDet,
  },
  {
    year: "January 25, 2002",
    label: "Absconder Apprehension Initiative Targets Immigrants",
    description:
      "The Justice Department began locating immigrants who ignored deportation orders, prioritizing nationals from Muslim-majority nations in a strategy dubbed \"immigration-plus profiling.\"",
    image: Deportation,
  },
  {
    year: "January 29, 2002",
    label: "Bush Labels Iran, Iraq, North Korea an Axis of Evil",
    description:
      "In the State of the Union, Bush welcomed Afghan leader Hamid Karzai but warned that these \"outlaw regimes\" posed a grave threat by supporting terrorism and pursuing WMDs.",
    image: example,
  },
  {
    year: "August 2002",
    label: "Classified Torture Memos Justify Harsh Techniques",
    description:
      "Administration lawyers drafted secret memos arguing that \"enhanced interrogation\" methods, including waterboarding, were legal, giving the President leeway to authorize aggressive tactics.",
    image: example,
  },
  {
    year: "September 12, 2002",
    label: "Bush Pressures UN on Iraq’s Alleged WMD",
    description:
      "Addressing the UN General Assembly, Bush accused Iraq of stockpiling chemical, biological, and nuclear weapons and claimed al-Qaeda members were present in the country.",
    image: example,
  },
  {
    year: "October 16, 2002",
    label: "Second AUMF Authorizes Force Against Iraq",
    description:
      "Congress granted the President authority to use force against Iraq over suspected WMD programs and terrorist ties. Critics later argued the law facilitated unrelated military operations.",
    image: example,
  },
  {
    year: "Nov. 2002 – Jan. 2003",
    label: "Special Registration Targets Specific Nationalities",
    description:
      "The Attorney General required certain non-permanent residents from countries tied to al-Qaeda to undergo \"special registration,\" leading to thousands of deportations for technical visa violations.",
    image: example,
  },
  {
    year: "November 25, 2002",
    label: "Department of Homeland Security Established",
    description:
      "Congress consolidated more than twenty federal entities into DHS, integrating immigration functions under a counterterror mission in the largest government reorganization since WWII.",
    image: example,
  },
  { marker: true, yearLabel: "2003" },
  {
    year: "March 2003",
    label: "Operation Liberty Shield Mandates Detention",
    description:
      "Ahead of the Iraq War, the administration required asylum seekers from certain nations to be detained, drawing criticism for equating refugee status with national-origin suspicion.",
    image: example,
  },
  {
    year: "March 20, 2003",
    label: "Operation Iraqi Freedom Begins",
    description:
      "A U.S.-led coalition invaded Iraq without explicit UN approval, swiftly toppling Saddam Hussein but initiating a costly occupation that would last nearly a decade.",
    image: example,
  },
  {
    year: "2003–2011",
    label: "Service and Prosecution of 9/11 Conspirators",
    description:
      "Former NFL linebacker Rob McGovern volunteered for active duty in Afghanistan and later prosecuted Khalid Sheikh Mohammed and other conspirators, demonstrating how citizens joined legal responses to 9/11.",
    image: example,
  },
  { marker: true, yearLabel: "2004" },
  {
    year: "July 22, 2004",
    label: "9/11 Commission Spurs Intelligence Reform",
    description:
      "The bipartisan commission concluded that intelligence agencies failed to share information, prompting the creation of the National Counterterrorism Center under the Director of National Intelligence.",
    image: example,
  },
];
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
