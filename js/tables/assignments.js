import { randomItem } from '../random.js';

export const THEMES = {
  ONE: 'Replicant Crimes & Punishment',
  TWO: 'Corporate Intrigues & Courtroom Dramas',
  THREE: 'Organised and Underground Threats',
  FOUR: 'Political Machinations & Internal Affairs',
  FIVE: 'UN Assignments & Joint Investigations',
  SIX: 'Monitored Entities & Technologies',
};

// Weighted pool of theme ids, ported from AssignmentTables.generateTheme()'s
// hard-coded 10-slot array.
const THEME_WEIGHTS = ['ONE', 'ONE', 'ONE', 'ONE', 'TWO', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];

const ASSIGNMENTS_BY_THEME = {
  ONE: [
    'A retirement order has been filed for a counterfeit Nexus-8 chef who killed the kitchen staff at a five-star restaurant.',
    'A Replicant claims innocence, because their owner ordered them to commit unlawful acts and they were forced to obey.',
    'A Replicant accuses their employer of the unlawful murder of a Replicant co-worker.',
    'A Replicant mysteriously falls to their death at a Sea Wall construction site.',
    'A hostage situation breaks out at the LAX Spaceport when a presumed-dead Nexus-8 is identified.',
    'A N-8 registered in the RDU files as retired is identified as an active leader of a radical Replicant Underground faction.',
    'A memory engineer has secretly implanted memories that manipulated select Replicants to act out of character.',
    'A Replicant is arrested after defending themselves against a physically abusive employer.',
    'Human power plant workers accuse a Replicant of sabotaging the reactor and triggering the subsequent mob justice that was meted out.',
    'A human refuses to believe that their Replicant servant ran away and files a missing persons report.',
  ],
  TWO: [
    'A Replicant is the star witness in a high-profile murder trial.',
    'A top megacorp executive is revealed to be a Replicant, but the executive didn’t know the truth.',
    'A major biotech company steals a competitor’s patent by infiltrating their ranks with a Replicant spy.',
    'A megacorp is accused of illegally producing Replicants to assume the identities of key stakeholders on their board.',
    'An Independent Sentinel journalist requests protection after uncovering a damning conspiracy against Wallace Corp.',
    'A Blade Runner is witness to a retirement in the field that may not have been merited. The DA goes for Murder in the First Degree against a human who unlawfully retires a Replicant.',
    'The CEO of a tech company is kidnapped by what appears to be Replicant fugitives.',
    'A lethal virus is stolen from a high security lab and let loose in a run-down neighborhood.',
  ],
  THREE: [
    'The UN Bureau of Investigation needs assistance apprehending an arms dealer trafficking illegal Nexus counterfeits.',
    'A DNA Row bioengineer is accused of running an illegal beauty salon that once helped Nexus-8s flee the city.',
    'The RDU must go undercover to suss out a criminal gambling ring hosting underground Replicant death matches.',
    'Replicants are being kidnapped and sold on the black market.',
    'The Counter-Terrorism Bureau uncovers a terrorist plot by Human Supremacists.',
    'A new extremist group is attempting to radicalize Replicants into terrorists.',
  ],
  FOUR: [
    'The Replicant Underground bombs an Empathy Movement protest.',
    'A gossip rag stumbles upon a seemingly real conspiracy to assassinate a pro-Replicant UN delegate.',
    'The UN Colonization Defense Program notifies the RDU that an AWOL N-9 is hiding out in the city.',
    'Governor Kolvig requests a security detail at a public speaking event after an anonymous death threat.',
    'LAPD Internal Affairs is investigating another Blade Runner for excessive use of force and abuse of power.',
    'An anti-Replicant populist politician is murdered. All evidence points towards the Replicant Underground. But the clues seem a little too convenient.',
  ],
  FIVE: [
    'UN Marshals order the RDU to apprehend and transport a major drug trafficker harbored by the Replicant Underground.',
    'LAPD joint-investigation with the Robbery division when a major casino heist suggests that Replicants were involved.',
    'LAPD Homicide joint-investigation requesting special forensic assistance on a priority serial murder case.',
    'The CBI has requested a Doxie present during criminal interrogations of a major investigation.',
    'An earthquake results in Replicant Blade Runners being enlisted as emergency responders.',
    'Internal security at Wallace Corp investigates stolen lab samples and enlists the help of LAPD.',
  ],
  SIX: [
    'A digital companion is accused as an accessory to a series of bank robberies.',
    'A real and priceless snow leopard is running free down Animoid Row after a smuggler’s trade-off goes sour.',
    'A tech company announces a new halo device with dangerous bio-hacking capabilities.',
    'An animoid owl with supposedly implanted memories of a dead Wallace Corp bio-scientist goes missing.',
    'Someone is killing synthetic animals on Animoid Row.',
    'A computer engineer disappears and seemingly turns up as a DiJi ghost.',
  ],
};

export function generateTheme() {
  return randomItem(THEME_WEIGHTS);
}

export function generateAssignment() {
  const theme = generateTheme();
  return randomItem(ASSIGNMENTS_BY_THEME[theme]);
}
