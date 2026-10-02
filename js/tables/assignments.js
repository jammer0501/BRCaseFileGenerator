import { randomItem, pickWeighted } from '../random.js';

// Weight is relative likelihood, not a percentage; omit it for weight 1.
export const THEMES = [
  { id: 'ONE', description: 'Replicant Crimes & Punishment', weight: 4 },
  { id: 'TWO', description: 'Corporate Intrigues & Courtroom Dramas', weight: 2 },
  { id: 'THREE', description: 'Organised and Underground Threats' },
  { id: 'FOUR', description: 'Political Machinations & Internal Affairs' },
  { id: 'FIVE', description: 'UN Assignments & Joint Investigations' },
  { id: 'SIX', description: 'Monitored Entities & Technologies' },
];

// Optional hints keep the generated case and its solution consistent with
// what the assignment text says:
//   crimeScene — a location hint { sector, area?, location? } matching
//                js/tables/locations.js, or an array of them to choose from.
//   culprit    — an NPC hint { types?, occupations? }: an NPC matches if its
//                type or its occupation is listed; an empty hint matches anyone.
//   redHerring — the assignment points at an obvious suspect who may not be
//                guilty: { suspect, alternative }, each an NPC hint plus a
//                `label` naming that party. The solution decides which.
// Assignments without a hint leave that part of the case fully random.
const CRIMINAL = { types: ['CRIME'] };
const CORPORATE_INSIDER = { types: ['CORPORATE', 'SCIENCE', 'TECH'] };
const EMPLOYER = { types: ['CORPORATE'], occupations: ['Store Owner'] };
const ANIMOID_ROW = { sector: 'FOUR', area: 'Animoid Row' };
const HAPPY_JACKS = { sector: 'ONE', area: 'Red Light District', location: "Happy Jack's Casino" };
const GRAND_STAIRS = { sector: 'FIVE', area: 'City Hall', location: 'City Hall Grand Stairs' };

const ASSIGNMENTS_BY_THEME = {
  ONE: [
    {
      text: 'A retirement order has been filed for a counterfeit Nexus-8 chef who killed the kitchen staff at a five-star restaurant.',
      crimeScene: { sector: 'NINE', area: 'Fashion District', location: 'Razdora Eatery' },
      culprit: { occupations: ['Food Worker'] },
    },
    {
      text: 'A Replicant claims innocence, because their owner ordered them to commit unlawful acts and they were forced to obey.',
      redHerring: {
        suspect: { label: 'the Replicant' },
        alternative: { label: 'their owner', types: ['CORPORATE', 'CRIME', 'ENTERTAINMENT'] },
      },
    },
    {
      text: 'A Replicant accuses their employer of the unlawful murder of a Replicant co-worker.',
      redHerring: {
        suspect: { label: 'the employer', ...EMPLOYER },
        alternative: { label: 'someone else' },
      },
    },
    {
      text: 'A Replicant mysteriously falls to their death at a Sea Wall construction site.',
      crimeScene: { sector: 'TWELVE', area: 'Sea Wall Docks' },
    },
    {
      text: 'A hostage situation breaks out at the LAX Spaceport when a presumed-dead Nexus-8 is identified.',
      crimeScene: { sector: 'TWELVE', area: 'LAX', location: 'Off-World Spaceport Terminal' },
    },
    { text: 'A N-8 registered in the RDU files as retired is identified as an active leader of a radical Replicant Underground faction.' },
    {
      text: 'A memory engineer has secretly implanted memories that manipulated select Replicants to act out of character.',
      culprit: { occupations: ['Bioengineer', 'Engineer', 'Programmer', 'Scientist', 'Researcher'] },
    },
    {
      text: 'A Replicant is arrested after defending themselves against a physically abusive employer.',
      redHerring: {
        suspect: { label: 'the Replicant' },
        alternative: { label: 'the abusive employer', ...EMPLOYER },
      },
    },
    {
      text: 'Human power plant workers accuse a Replicant of sabotaging the reactor and triggering the subsequent mob justice that was meted out.',
      crimeScene: { sector: 'BEYOND_DOWNTOWN', area: 'The Energy Empire', location: 'Power Plant' },
      redHerring: {
        suspect: { label: 'the accused Replicant' },
        alternative: { label: 'one of the plant workers', occupations: ['Maintenance Worker', 'Technician', 'Engineer', 'Mechanic'] },
      },
    },
    { text: 'A human refuses to believe that their Replicant servant ran away and files a missing persons report.' },
  ],
  TWO: [
    { text: 'A Replicant is the star witness in a high-profile murder trial.' },
    {
      text: 'A top megacorp executive is revealed to be a Replicant, but the executive didn’t know the truth.',
      culprit: CORPORATE_INSIDER,
    },
    {
      text: 'A major biotech company steals a competitor’s patent by infiltrating their ranks with a Replicant spy.',
      crimeScene: { sector: 'FOUR', area: 'DNA Row' },
      culprit: CORPORATE_INSIDER,
    },
    {
      text: 'A megacorp is accused of illegally producing Replicants to assume the identities of key stakeholders on their board.',
      culprit: { types: ['CORPORATE'] },
    },
    {
      text: 'An Independent Sentinel journalist requests protection after uncovering a damning conspiracy against Wallace Corp.',
      crimeScene: { sector: 'FIVE', area: 'City Hall', location: 'Independent Sentinel' },
      culprit: { types: ['CORPORATE'], occupations: ['Hitman', 'Mercenary'] },
    },
    {
      text: 'A Blade Runner is witness to a retirement in the field that may not have been merited. The DA goes for Murder in the First Degree against a human who unlawfully retires a Replicant.',
      culprit: { types: ['SECURITY'], occupations: ['Hitman'] },
    },
    {
      text: 'The CEO of a tech company is kidnapped by what appears to be Replicant fugitives.',
      redHerring: {
        suspect: { label: 'the Replicant fugitives', types: ['STREET', 'CRIME'] },
        alternative: { label: 'a company insider', types: ['CORPORATE', 'TECH'] },
      },
    },
    {
      text: 'A lethal virus is stolen from a high security lab and let loose in a run-down neighborhood.',
      crimeScene: [
        { sector: 'TWO', area: 'University of Los Angeles Medical Center', location: 'Medical Research Lab' },
        { sector: 'BEYOND_DOWNTOWN', area: 'San Diego Trash Mesa', location: 'Off-Grid R&D Lab' },
      ],
    },
  ],
  THREE: [
    {
      text: 'The UN Bureau of Investigation needs assistance apprehending an arms dealer trafficking illegal Nexus counterfeits.',
      culprit: CRIMINAL,
    },
    {
      text: 'A DNA Row bioengineer is accused of running an illegal beauty salon that once helped Nexus-8s flee the city.',
      crimeScene: { sector: 'ONE', area: 'Beauty Parlors' },
      redHerring: {
        suspect: { label: 'the DNA Row bioengineer', occupations: ['Bioengineer'] },
        alternative: { label: 'someone else' },
      },
    },
    {
      text: 'The RDU must go undercover to suss out a criminal gambling ring hosting underground Replicant death matches.',
      crimeScene: [{ sector: 'ONE', area: 'Red Light District', location: 'Kumite' }, HAPPY_JACKS],
      culprit: CRIMINAL,
    },
    { text: 'Replicants are being kidnapped and sold on the black market.', culprit: CRIMINAL },
    { text: 'The Counter-Terrorism Bureau uncovers a terrorist plot by Human Supremacists.' },
    { text: 'A new extremist group is attempting to radicalize Replicants into terrorists.' },
  ],
  FOUR: [
    { text: 'The Replicant Underground bombs an Empathy Movement protest.', crimeScene: GRAND_STAIRS },
    { text: 'A gossip rag stumbles upon a seemingly real conspiracy to assassinate a pro-Replicant UN delegate.' },
    { text: 'The UN Colonization Defense Program notifies the RDU that an AWOL N-9 is hiding out in the city.' },
    {
      text: 'Governor Kolvig requests a security detail at a public speaking event after an anonymous death threat.',
      crimeScene: [{ sector: 'FIVE', area: 'City Hall', location: 'Press Area' }, GRAND_STAIRS],
    },
    {
      text: 'LAPD Internal Affairs is investigating another Blade Runner for excessive use of force and abuse of power.',
      redHerring: {
        suspect: { label: 'the Blade Runner under investigation', occupations: ['Cop'] },
        alternative: { label: 'someone else' },
      },
    },
    {
      text: 'An anti-Replicant populist politician is murdered. All evidence points towards the Replicant Underground. But the clues seem a little too convenient.',
      redHerring: {
        suspect: { label: 'the Replicant Underground', types: ['STREET', 'CRIME'] },
        alternative: { label: 'whoever set them up' },
      },
    },
  ],
  FIVE: [
    {
      text: 'UN Marshals order the RDU to apprehend and transport a major drug trafficker harbored by the Replicant Underground.',
      culprit: CRIMINAL,
    },
    {
      text: 'LAPD joint-investigation with the Robbery division when a major casino heist suggests that Replicants were involved.',
      crimeScene: HAPPY_JACKS,
      culprit: CRIMINAL,
    },
    { text: 'LAPD Homicide joint-investigation requesting special forensic assistance on a priority serial murder case.' },
    { text: 'The CBI has requested a Doxie present during criminal interrogations of a major investigation.' },
    { text: 'An earthquake results in Replicant Blade Runners being enlisted as emergency responders.' },
    {
      text: 'Internal security at Wallace Corp investigates stolen lab samples and enlists the help of LAPD.',
      crimeScene: { sector: 'FOUR', area: 'Wallace HQ' },
      culprit: CORPORATE_INSIDER,
    },
  ],
  SIX: [
    {
      text: 'A digital companion is accused as an accessory to a series of bank robberies.',
      crimeScene: { sector: 'NINE', area: 'Financial District', location: 'Shaw Financial' },
      culprit: CRIMINAL,
    },
    {
      text: 'A real and priceless snow leopard is running free down Animoid Row after a smuggler’s trade-off goes sour.',
      crimeScene: ANIMOID_ROW,
      culprit: CRIMINAL,
    },
    {
      text: 'A tech company announces a new halo device with dangerous bio-hacking capabilities.',
      culprit: { types: ['CORPORATE', 'TECH'] },
    },
    {
      text: 'An animoid owl with supposedly implanted memories of a dead Wallace Corp bio-scientist goes missing.',
      crimeScene: ANIMOID_ROW,
    },
    { text: 'Someone is killing synthetic animals on Animoid Row.', crimeScene: ANIMOID_ROW },
    { text: 'A computer engineer disappears and seemingly turns up as a DiJi ghost.' },
  ],
};

export const ALL_ASSIGNMENTS = Object.values(ASSIGNMENTS_BY_THEME).flat();

export function generateTheme() {
  return pickWeighted(THEMES).id;
}

export function generateAssignment() {
  const theme = generateTheme();
  return randomItem(ASSIGNMENTS_BY_THEME[theme]);
}
