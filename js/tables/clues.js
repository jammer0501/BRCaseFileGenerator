import { randomItem, pickWeighted } from '../random.js';
import { generateNpc, withDistinctNames, formatNpc } from './npcs.js';

// Weight is relative likelihood, not a percentage; omit it for weight 1.
export const CLUE_TYPES = [
  { id: 'WITNESS', description: 'Witness', weight: 2 },
  { id: 'FORENSIC', description: 'Forensic Evidence' },
  { id: 'RECORDING', description: 'Recording' },
  { id: 'DOCUMENTS', description: 'Documents' },
  { id: 'RUMOURS', description: 'Rumours' },
  { id: 'TIP', description: 'Anonymous Tip' },
  { id: 'ITEM', description: 'Item' },
];

const CLUE_ITEMS = {
  FORENSIC: ['Ballistics', 'Toxicology', 'DNA', 'Fingerprints', 'Autopsy', 'Blood'],
  RECORDING: ['Security Camera', 'Photo', 'Voice'],
  DOCUMENTS: ['ID Card', 'Ticket', 'Brochure', 'Legal Document', 'Note', 'Letter'],
  RUMOURS: ['In the Street', 'In the Department', 'In the Media'],
  TIP: ['Call', 'Note', 'Messenger'],
  ITEM: ['Gun', 'Clothing', 'Statuette', 'Jewelry', 'Vehicle', 'Data Disc / Memory C/ube'],
};

export function clueTypeDescription(id) {
  return CLUE_TYPES.find((type) => type.id === id).description;
}

export function generateClue() {
  const type = pickWeighted(CLUE_TYPES).id;
  if (type === 'WITNESS') {
    return { type, witness: generateNpc() };
  }
  return { type, text: randomItem(CLUE_ITEMS[type]) };
}

// Witnesses are told apart by name (see generateClues); any other clue is
// a repeat if its type and text match.
function isRepeat(clue, clues) {
  return clue.type !== 'WITNESS'
    && clues.some((other) => other.type === clue.type && other.text === clue.text);
}

// `count` clues with no repeats. Witnesses are renamed so they don't share
// a name with each other or with `people` (the case's NPCs).
export function generateClues(count, people = []) {
  const clues = [];
  while (clues.length < count) {
    const clue = generateClue();
    if (!isRepeat(clue, clues)) clues.push(clue);
  }

  const witnessClues = clues.filter((clue) => clue.type === 'WITNESS');
  const named = withDistinctNames([...people, ...witnessClues.map((clue) => clue.witness)]);
  witnessClues.forEach((clue, i) => { clue.witness = named[people.length + i]; });
  return clues;
}

export function formatClue(clue) {
  const label = clueTypeDescription(clue.type);
  if (clue.type === 'WITNESS') {
    return `${label}: ${formatNpc(clue.witness)}`;
  }
  return `${label}: ${clue.text}`;
}
