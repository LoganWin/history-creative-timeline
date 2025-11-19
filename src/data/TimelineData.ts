import example from "../assets/react.svg";
import nineElevenImage from "../assets/1140-9-11-towers-attack-explosion.jpg";
import Bush from "../assets/bush-adress.jpg";
import NFL from "../assets/NFL-9:11.webp";
import CIA from "../assets/detention-camps.jpg";
import AUMF from "../assets/soldiers.jpg";
import Anthrax from "../assets/anthrax-mail.jpg";
import WOT from "../assets/war-on-terror.jpg";
import OEF from "../assets/operation-enduring-freedom.jpg";
import PatriotAct from "../assets/patriot-act.jpg";
import TSA from "../assets/TSA.jpg";
import GuantBayDet from "../assets/guant-bay.webp";
import Deportation from "../assets/Deportation.webp";
import AxisOfEvil from "../assets/axis-of-evil.jpg";
import TortureMemos from "../assets/torture-memos.jpg";
import Iraq from "../assets/iraq-terrorism.jpg";
import AUMF2 from "../assets/second-AUMF.jpg";
import UNSC from "../assets/UN-security-council.avif";
import DHS from "../assets/DHS.jpeg";
import OLS from "../assets/operation-libery-sheild.jpeg";
import OIF from "../assets/operaton-iraqi-freedom.webp";
import CR from "../assets/commision-report.jpg";

export const events = [
  {
    year: "September 11, 2001",
    label: "Al-Qaeda Hijackings Strike the World Trade Center and Pentagon",
    description:
      "Nineteen al-Qaeda members hijacked four commercial airliners, killing 2,977 people across New York, Washington, D.C., and Pennsylvania when United Flight 93 crashed near Shanksville. The tragedy exposed intelligence-sharing failures and marked the first time in 136 years that Americans experienced war-like casualties at the heart of a major city.",
    image: nineElevenImage,
  },
  {
    year: "September 14, 2001",
    label: "Bush Declares National Emergency and Vows to \"Rid the World of Evil\"",
    description:
      "At Ground Zero, President Bush vowed to answer the attacks and \"rid the world of evil,\" while formally declaring a national emergency that unlocked expanded executive and military mobilization powers. A follow-up order on September 23 authorized wide-ranging financial sanctions against suspected terrorists and their supporters worldwide.",
    image: Bush,
  },
  {
    year: "September 17, 2001",
    label: "CIA Given Secret Authority to Run Global Detention Network",
    description:
      "A classified presidential finding authorized the CIA to capture and secretly detain people deemed a continuing threat, enabling a network of clandestine \"black sites\" outside traditional oversight. These facilities became central to debates over torture, extraordinary rendition, and who counted as a protected prisoner of war.",
    image: CIA,
  },
  {
    year: "September 18, 2001",
    label: "First AUMF Authorizes Open-Ended War Against Terror Suspects",
    description:
      "Congress passed the Authorization for Use of Military Force (AUMF), empowering the President to use \"all necessary and appropriate force\" against those responsible for 9/11 and associated forces. With no geographic or time limit, the AUMF became the legal foundation for counterterror operations in more than a dozen countries over the next two decades.",
    image: AUMF,
  },
  {
    year: "September 18, 2001",
    label: "Anthrax Mailings Spark Fears of Biological Terrorism",
    description:
      "Letters laced with anthrax spores were mailed to media outlets and members of Congress, killing five people and sickening many others. Early speculation falsely linked the attacks to Iraq before the FBI later traced the source to U.S. Army scientist Bruce Ivins, showing how fear could quickly be redirected toward foreign enemies.",
    image: Anthrax,
  },
  {
    year: "September 20, 2001",
    label: "Bush Declares a Global \"War on Terror\"",
    description:
      "In a joint session of Congress, Bush framed the response as an open-ended \"war on terror,\" demanded that the Taliban surrender al-Qaeda leaders, and warned that nations were \"either with us or with the terrorists.\" He also announced the creation of the Office of Homeland Security, signaling that counterterrorism would reorient domestic agencies as well.",
    image: WOT,
  },
  {
    year: "Late September 2001",
    label: "NFL Returns, Turning Football into a Space of Mourning and Unity",
    description:
      "After pausing its schedule, the NFL resumed play to help the nation grieve and heal, with tributes such as Giants lineman Joe Andruzzi honoring his firefighter brothers at midfield. Weekly ceremonies and broadcasts helped turn football into a recurring space where 9/11 was remembered and ideas about unity and patriotism were performed.",
    image: NFL,
  },
  {
    year: "October 7, 2001",
    label: "Operation Enduring Freedom Launches War in Afghanistan",
    description:
      "U.S. and U.K. forces launched airstrikes and special operations in Afghanistan after NATO’s first collective defense invocation, targeting al-Qaeda and their Taliban hosts. The Taliban regime was toppled by December, but many al-Qaeda leaders escaped, and the operation evolved into a decades-long counterinsurgency and nation-building project.",
    image: OEF,
  },
  {
    year: "October 26, 2001",
    label: "USA PATRIOT Act Expands Surveillance, Security, and Immigration Powers",
    description:
      "President Bush signed the USA PATRIOT Act, which broadened surveillance and information-sharing authorities (Title II) and strengthened anti–money laundering tools to track terrorist financing (Title III). Title I condemned bias against Arab, Muslim, South Asian, and Sikh Americans and honored heroes like Mohammed Salman Hamdani, even as Section 412 created new mandatory detention powers for non-citizens suspected of terrorism and expanded criminal-record checks for visa screening. Together, these provisions fused counterterror policing with immigration control while officially insisting that civil liberties still mattered.",
    image: PatriotAct,
  },
  {
    year: "November 19, 2001",
    label: "Transportation Security Administration Federalizes Airport Screening",
    description:
      "The Aviation and Transportation Security Act created the TSA and federalized airport screening, replacing private contractors with federal officers. Standardized checkpoint procedures, luggage inspections, and tight rules on movement and carry-ons made the new security state visible in everyday travel.",
    image: TSA,
  },
  { marker: true, yearLabel: "2002" },
  {
    year: "January 11, 2002",
    label: "Guantánamo Bay Prison Opens for \"Enemy Combatants\"",
    description:
      "The first Taliban and al-Qaeda suspects arrived at the U.S. naval station at Guantánamo Bay, Cuba, where they were labeled \"enemy combatants\" rather than traditional prisoners of war. The camp quickly became a symbol of indefinite detention, harsh interrogation, and legal experiments that sidestepped normal constitutional protections.",
    image: GuantBayDet,
  },
  {
    year: "January 25, 2002",
    label: "Absconder Apprehension Initiative Targets Muslim and Middle Eastern Immigrants",
    description:
      "The Justice Department began an \"Absconder Apprehension Initiative\" to locate immigrants who had ignored deportation orders, prioritizing nationals from Muslim-majority and Middle Eastern countries. Advocates described the effort as \"immigration-plus profiling,\" using minor status violations to build terrorism cases or justify removal.",
    image: Deportation,
  },
  {
    year: "January 29, 2002",
    label: "Bush Brands Iran, Iraq, and North Korea an \"Axis of Evil\"",
    description:
      "In the State of the Union address, Bush welcomed Afghan leader Hamid Karzai but warned that Iran, Iraq, and North Korea formed an \"axis of evil\" by supporting terrorism and pursuing weapons of mass destruction. The phrase helped shift public attention from Afghanistan toward Iraq and other perceived rogue states.",
    image: AxisOfEvil,
  },
  {
    year: "August 2002",
    label: "Secret Torture Memos Reinterpret the Law to Permit \"Enhanced\" Techniques",
    description:
      "Administration lawyers in the Office of Legal Counsel drafted classified opinions arguing that \"enhanced interrogation\" methods, including waterboarding, stress positions, and sleep deprivation, were lawful and did not meet the legal definition of torture. These memos gave the President and CIA leeway to authorize aggressive tactics at black sites.",
    image: TortureMemos,
  },
  {
    year: "September 12, 2002",
    label: "Bush Urges the UN to Confront Iraq’s Alleged Weapons of Mass Destruction",
    description:
      "Addressing the UN General Assembly, Bush accused Iraq of stockpiling chemical, biological, and nuclear weapons and suggested that al-Qaeda members were present in the country. He urged the Security Council to confront Saddam Hussein, laying diplomatic groundwork for later claims that war was necessary to enforce disarmament.",
    image: Iraq,
  },
  {
    year: "October 16, 2002",
    label: "Second AUMF Authorizes the Use of Force Against Iraq",
    description:
      "Congress passed the Authorization for Use of Military Force Against Iraq Resolution of 2002, granting the President authority to use force over suspected WMD programs and terrorist ties. Critics later argued that this AUMF was stretched far beyond its original purpose and made it easier to launch a discretionary war.",
    image: AUMF2,
  },
  {
    year: "November 8, 2002",
    label: "UN Security Council Resolution 1441 Warns Iraq of \"Final Opportunity\"",
    description:
      "The UN Security Council unanimously adopted Resolution 1441, declaring Iraq in \"material breach\" of past disarmament obligations and offering a \"final opportunity\" to comply with intrusive weapons inspections. While it stopped short of explicitly authorizing force, the resolution was later cited by the U.S. and U.K. as part of their justification for invading Iraq.",
    image: UNSC,
  },
  {
    year: "November 25, 2002",
    label: "Department of Homeland Security Reorganizes Security and Immigration Agencies",
    description:
      "Congress consolidated more than twenty federal entities into the Department of Homeland Security, integrating immigration, customs, and border agencies under a counterterror mission. The reorganization made counterterrorism a central organizing principle of the federal government and firmly tied immigration control to national security.",
    image: DHS,
  },
  { marker: true, yearLabel: "2003" },
  {
    year: "March 18, 2003",
    label: "Operation Liberty Shield Detains Asylum Seekers from Targeted Countries",
    description:
      "Ahead of the Iraq War, the administration launched Operation Liberty Shield, requiring many asylum seekers and certain non-citizens from designated countries to be detained for additional security review. Civil-rights groups criticized the program for equating refugee status and national origin with suspicion.",
    image: OLS,
  },
  {
    year: "March 20, 2003",
    label: "Operation Iraqi Freedom Invades Iraq and Topples Saddam Hussein",
    description:
      "A U.S.-led coalition invaded Iraq without explicit new UN authorization, swiftly toppling Saddam Hussein’s regime but initiating a costly occupation that would last nearly a decade. The war reshaped regional politics, fueled insurgency and sectarian violence, and became one of the most controversial uses of post-9/11 military power.",
    image: OIF,
  },

  { marker: true, yearLabel: "2004" },
  {
    year: "July 22, 2004",
    label: "9/11 Commission Report Drives Intelligence and Counterterror Reform",
    description:
      "The bipartisan 9/11 Commission released its final report, concluding that intelligence agencies had failed to share information needed to prevent the attacks. Its recommendations led to the creation of the Director of National Intelligence and the National Counterterrorism Center, embedding information-sharing and watchlisting at the core of U.S. security strategy.",
    image: CR,
  },
];
