// src/data/MoreDetailsData.ts

export const heroContent = {
  eyebrow: "About the Timeline",
  title: "Connecting 9/11 to Imperialism and Immigration",
  intro:
    "This timeline traces how the response to September 11 grew out of much longer histories of U.S. power abroad and immigration control at home. By following key decisions between 2001 and 2004, the timeline shows how policies justified as emergency measures reshaped everyday life, especially for Muslim, Arab, and South Asian communities."
};

// Simple section nav for the page
export const sectionNav = [
  { id: "context", label: "1. Historical Context" },
  { id: "policy", label: "2. Policy & Today" },
  { id: "culture", label: "3. Cultural Impact" },
  { id: "together", label: "4. Tying the Timeline Together" }
];

/**
 * Question 1:
 * “How is your topic connected to both the history of American imperialism and the history of immigration?
 * In other words, what is the historical context for your topic?”
 */
export const historicalContextSection = {
  heading: "Historical Context: American Imperialism and Immigration",
  question:
    "How is this topic connected to both the history of American imperialism and the history of immigration?",
  paragraphs: [
    "After September 11, U.S. leaders framed the attacks as part of a global struggle that needed military, legal, and intelligence tools, not just normal law enforcement. That framing did not appear out of nowhere. It drew on a long history of American imperial power, from Cold War interventions to the 1991 Gulf War, where the U.S. used large overseas bases, economic pressure, and military force to shape events far beyond its borders.",
    "The AUMF, the invasions of Afghanistan and Iraq, the CIA's global detention program, and the torture memos all fit this older imperial pattern. They treated the world as a security frontier where the U.S. could project force, operate through special legal categories like “enemy combatant,” and rely on emergency logic to justify permanent military footprints.",
    "Immigration policy already had its own history of exclusion before 9/11. Laws like the Chinese Exclusion Act, national-origins quotas in the 1920s, and Cold War deportation powers had long framed certain migrants as threats. In the 1990s, anti-terror and crime bills expanded detention and deportation again, especially for non-citizens from the Global South.",
    "Post-9/11 policies — such as special registration, the Absconder Apprehension Initiative, mandatory detention provisions in the USA PATRIOT Act, and the creation of the Department of Homeland Security — tapped into this history. They reused older ideas like plenary power and national-security profiling, but now targeted Muslim and South Asian men as potential terrorists first and immigrants second.",
    "In other words, the timeline events operate at the intersection of these two histories: U.S. imperial power overseas and a long tradition of treating migration as a security risk. The “War on Terror” did not invent surveillance, detention, or racialized suspicion, but it intensified and globalized those tools."
  ],
  bulletPoints: [
    "Imperialism: AUMF, Operation Enduring Freedom, Operation Iraqi Freedom, and CIA black sites extend past U.S. wars and interventions that relied on exceptional legal categories and open-ended missions.",
    "Immigration: Special registration, deportation initiatives, and DHS's structure connect directly to earlier eras when immigration law was used to track, detain, and remove “undesirable” groups in the name of national security.",
    "9/11 becomes the bridge: decisions made in 2001-2004 fuse military power and immigration control into a single counterterrorism system."
  ]
};

/**
 * Question 2:
 * “What connections can you draw between your topic and recent/current
 * American foreign policy and/or immigration policy?”
 */
export const policyConnectionsSection = {
  heading: "Continuing Impact on Foreign and Immigration Policy",
  question:
    "What connections can we draw between this topic and recent American foreign and immigration policy?",
  paragraphs: [
    "Many of the tools created or expanded after 9/11 are still shaping U.S. foreign policy today. The original 2001 AUMF continues to justify counterterror operations, drone strikes, and special forces missions in multiple regions far beyond Afghanistan. Intelligence-sharing practices, watchlists, and the National Counterterrorism Center all grow out of the reforms recommended by the 9/11 Commission.",
    "On the immigration side, the basic assumption that certain nationalities, religions, and travel patterns are inherently risky still guides policy. Programs that flag visa applicants, expanded use of databases and biometric screening, and large-scale detention all reflect the post-9/11 turn toward treating migration as a counterterrorism problem rather than just a labor or family issue.",
    "Political debates over issues like the “Muslim ban,” refugee resettlement, and asylum detention show how durable the 9/11 security frame has become. Even when specific programs are rolled back or renamed, the idea that the border is a front line in an endless war on terror continues to influence both law and everyday experiences for immigrants.",
    "Outside the courtroom, culture still carries this legacy. Sports ceremonies, memorials, and media storytelling remember 9/11 as a moment of unity and sacrifice, but they can also make suspicion of certain communities feel normal. The same rituals that honor victims and first responders can quietly reinforce who is seen as fully American and who is still being asked to prove loyalty."
  ],
  bulletPoints: [
    "Foreign policy: The logic behind the original AUMF and Operation Iraqi Freedom continues in ongoing counterterror campaigns, drone warfare, and security partnerships framed as part of a global struggle against extremism.",
    "Immigration policy: DHS, TSA, and modern vetting regimes still embed national-security screening into routine travel and immigration, especially for people from Muslim-majority or formerly occupied regions.",
    "Political debate: Arguments about closing Guantanamo, revising surveillance powers, or limiting executive war powers all trace back to decisions made in the early 2000s.",
    "Everyday life: Airport rituals, no-fly lists, and intensified surveillance in certain neighborhoods mean that the post-9/11 security state is experienced unevenly, falling hardest on communities already marked by race, religion, or nationality."
  ]
};

export const tyingTimelineSection = {
  heading: "Tying the Timeline Together",
  blurb:
    "Each event shows how foreign policy, immigration enforcement, and cultural storytelling overlap. These points keep the project grounded."
};

export const impactPoints = [
  {
    title: "Legal Legacy",
    detail:
      "The AUMF, torture memos, and detention policies created flexible legal tools that still authorize military action, surveillance, and detention in new contexts long after the original crisis moment."
  },
  {
    title: "Institutional Shifts",
    detail:
      "Creating DHS and expanding TSA, FBI, and intelligence powers made counterterrorism a permanent organizing principle of the federal government, with immigration enforcement folded into that mission."
  },
  {
    title: "Cultural Narrative",
    detail:
      "Public memorials, sports tributes, and media portrayals keep 9/11 central to American identity, often emphasizing unity and heroism while quietly normalizing suspicion toward Muslim and immigrant communities."
  },
  {
    title: "Everyday Consequences",
    detail:
      "For many U.S. citizens, the legacy of 9/11 shows up as background security procedures. For targeted communities, it shows up as extra screenings, watchlists, visa delays, and the constant risk of detention or deportation."
  }
];

export const culturalImpactSection = {
  eyebrow: "Cultural Impact",
  heading: "How Memory and Ritual Keep 9/11 Alive",
  caption:
    "NFL ceremonies paused games, honored first responders, and used weekly broadcasts to keep the story of 9/11 at the center of American culture."
};

export const culturalNotes = [
  {
    title: "National Rituals",
    text:
      "Public memorials, classroom lessons, and media retrospectives make 9/11 part of everyday civic life. They also remind us that certain communities are constantly asked to prove their loyalty and patriotism."
  },
  {
    title: "Sports and Unity",
    text:
      "Football broadcasts, public ceremonies, and NFL Films specials helped turn weekly games into national rituals of mourning, unity, and remembrance."
  }
];

