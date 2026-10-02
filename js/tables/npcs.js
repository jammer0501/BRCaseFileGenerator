import { randomItem } from '../random.js';

const NPC_DATA = {
  CORPORATE: {
    occupations: ['Corporate Agent', 'Lab Worker', 'Administrator', 'Manager', 'Security Officer', 'Liaison Officer'],
    quirks: ['Secret Allegiance', 'Serial liar', 'Constant flirt', 'Overuses perfume', 'Twitching eye', 'Sarcastic'],
    firstNames: ['Alexia', 'Remi', 'Clara', 'Maximillian', 'Priya', 'Sandor'],
    lastNames: ['Reisch', 'Shalhoub', 'Stratton', 'Voldokov', 'Singh', 'Pentecost'],
  },
  SECURITY: {
    occupations: ['Cop', 'Security Guard', 'Bouncer', 'Mercenary', 'Soldier', 'Body Guard'],
    quirks: ['Overly sentimental', 'Highly strung', 'Always chewing on something', 'Constant comedian', 'Drug user', 'Aloof'],
    firstNames: ['Prei', 'Magda', 'Wade', 'Kilo', 'Alexander', 'Luna'],
    lastNames: ['Haden', 'Leyoun', 'Kawasaki', 'Bharat', 'Marsten', 'Farahani'],
  },
  ENTERTAINMENT: {
    occupations: ['Actor', 'Singer', 'Poet', 'Dancer', 'Celeb', 'Designer'],
    quirks: ['Fast talker', 'Oily skin', 'Instantly likeable', 'Moves constantly', 'Patronising', 'Glamourous'],
    firstNames: ['Ariana', 'Joshua', 'Dot', 'Gabor', 'Ava', 'Seo-joon'],
    lastNames: ['Polokov', 'Izzo', 'McMillan', 'Nanjiani', 'Rodriguez', 'Jeong'],
  },
  STREET: {
    occupations: ['Food Worker', 'Maintenance Worker', 'Scavenger', 'Street Rat', 'Cultist', 'Store Owner'],
    quirks: ['Smelly', 'Grubby clothes', 'Fidgety', 'Full of attitude', 'Whispers', 'Eccentric'],
    firstNames: ['Vladislav', 'Rhea', 'Harley', 'Dara', 'Radhi', 'Cass'],
    lastNames: ['Lang', 'Mandell', 'Beck', 'Yang', 'Molo', 'Ibrahim'],
  },
  CRIME: {
    occupations: ['Gang Member', 'Hitman', 'Hustler', 'Burglar', 'Drug Dealer', 'Syndicate Member'],
    quirks: ['Ruthless', 'Limps', 'Extravagant haircut', 'Plain', 'Suspicious', 'Tattooed'],
    firstNames: ['Aurora', 'Niko', 'Rue', 'Luca', 'Jean', 'Haru'],
    lastNames: ['Zhao', 'Mercer', 'Hoskins', 'De Vries', 'Wozniak', 'Giordano'],
  },
  SCIENCE: {
    occupations: ['Student', 'Scholar', 'Researcher', 'Scientist', 'Analyst', 'Biochemist'],
    quirks: ['Tired', 'Touchy', 'Intense', 'Bald', 'Booming voice', 'Wiry'],
    firstNames: ['Saidah', 'Constance', 'Reinhard', 'Ivana', 'Bwana', 'Eve'],
    lastNames: ['Linton', 'Sawadogo', 'Meier', 'Lec', 'Siddiqi', 'Ricci'],
  },
  TECH: {
    occupations: ['Technician', 'Bioengineer', 'Mechanic', 'Engineer', 'Programmer', 'Quality Controller'],
    quirks: ['Corpulent', 'Mumbling', 'Impatient', 'Bejeweled', 'Dry wit', 'Arrogant'],
    firstNames: ['Bill', 'Kat', 'Amar', 'Alejandro', 'Eitan', 'Mei'],
    lastNames: ['Banks', 'Atwood', 'Mirai', 'Morales', 'Chakrabarti', 'Teng'],
  },
  OTHER: {
    occupations: ['Clerk', 'Journalist', 'TV Host', 'Cityspeaker', 'Kid', 'Politician'],
    quirks: ['Overly eager', 'Brusque', 'Elegant', 'Old', 'Fashionable', 'Argumentative'],
    firstNames: ['Feng', 'Shira', 'Sanjay', 'Dmitry', 'Libby', 'Nombeko'],
    lastNames: ['Wyman', 'da Silva', 'Kamarr', 'Kebede', 'Esposito', 'Koslovski'],
  },
};

export const NPC_TYPES = Object.keys(NPC_DATA);

export function getRandomNpcType() {
  return randomItem(NPC_TYPES);
}

export function createNpc(type) {
  const data = NPC_DATA[type];
  return {
    type,
    occupation: randomItem(data.occupations),
    quirk: randomItem(data.quirks),
    firstName: randomItem(data.firstNames),
    lastName: randomItem(data.lastNames),
  };
}

// A hint is { types?, occupations? }: an NPC matches if its type or its
// occupation is listed. An empty hint matches anyone.
export function npcMatches(npc, hint) {
  const { types, occupations } = hint;
  if (!types && !occupations) return true;
  return (types ?? []).includes(npc.type) || (occupations ?? []).includes(npc.occupation);
}

export function generateNpcMatching(hint) {
  const candidates = NPC_TYPES.flatMap((type) =>
    NPC_DATA[type].occupations.map((occupation) => ({ type, occupation })))
    .filter((candidate) => npcMatches(candidate, hint));
  if (candidates.length === 0) throw new Error(`No NPC matches hint ${JSON.stringify(hint)}`);
  const { type, occupation } = randomItem(candidates);
  return { ...createNpc(type), occupation };
}

export function generateNpc() {
  return createNpc(getRandomNpcType());
}

export function generateNpcs(count) {
  return Array.from({ length: count }, () => generateNpc());
}

export function formatNpc(npc) {
  return `${npc.type}: ${npc.firstName} ${npc.lastName} is a ${npc.occupation} whose quirk is: ${npc.quirk}`;
}
