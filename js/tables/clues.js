import { randomItem } from '../random.js';
import { generateNpc, formatNpc } from './npcs.js';

export const CLUE_TYPES = {
  WITNESS: 'Witness',
  FORENSIC: 'Forensic Evidence',
  RECORDING: 'Recording',
  DOCUMENTS: 'Documents',
  RUMOURS: 'Rumours',
  TIP: 'Anonymous Tip',
  ITEM: 'Item',
};

// Weighted pool of clue-type ids, ported from CluesTable.Type.getRandomClueType().
const CLUE_TYPE_WEIGHTS = ['WITNESS', 'WITNESS', 'FORENSIC', 'RECORDING', 'DOCUMENTS', 'RUMOURS', 'TIP', 'ITEM'];

const CLUE_ITEMS = {
  FORENSIC: ['Ballistics', 'Toxicology', 'DNA', 'Fingerprints', 'Autopsy', 'Blood'],
  RECORDING: ['Security Camera', 'Photo', 'Voice'],
  DOCUMENTS: ['ID Card', 'Ticket', 'Brochure', 'Legal Document', 'Note', 'Letter'],
  RUMOURS: ['In the Street', 'In the Department', 'In the Media'],
  TIP: ['Call', 'Note', 'Messenger'],
  ITEM: ['Gun', 'Clothing', 'Statuette', 'Jewelry', 'Vehicle', 'Data Disc / Memory C/ube'],
};

export function generateClue() {
  const type = randomItem(CLUE_TYPE_WEIGHTS);
  if (type === 'WITNESS') {
    return { type, witness: generateNpc() };
  }
  return { type, text: randomItem(CLUE_ITEMS[type]) };
}

export function formatClue(clue) {
  const label = CLUE_TYPES[clue.type];
  if (clue.type === 'WITNESS') {
    return `${label}: ${formatNpc(clue.witness)}`;
  }
  return `${label}: ${clue.text}`;
}
