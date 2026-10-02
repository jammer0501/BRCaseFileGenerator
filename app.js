import { generateCase, describeCase } from './js/generator.js';
import { generateRelationships, describeRelationships } from './js/relationships.js';

const generateBtn = document.getElementById('generate-btn');
const resultEl = document.getElementById('result');
const outputEl = document.getElementById('case-output');
const solutionEl = document.getElementById('solution');
const solutionBodyEl = document.getElementById('solution-body');
const rerollBtn = document.getElementById('reroll-btn');

let currentCase = null;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function caseSection(title, ...content) {
  const section = el('section', 'case-section');
  section.append(el('h2', 'case-heading', title), ...content);
  return section;
}

function renderCase(c) {
  const { assignment, npcs, locations, clues, moods, twist, finalConfrontation } = describeCase(c);

  const npcList = el('ul', 'case-list');
  for (const { name, role, quirk } of npcs) {
    const item = el('li', 'case-item');
    item.append(el('p', 'case-name', name), el('p', 'case-meta', role), el('p', 'case-note', `Quirk: ${quirk}`));
    npcList.append(item);
  }

  const locationList = el('ul', 'case-list');
  for (const { name, detail } of locations) {
    const item = el('li', 'case-item');
    item.append(el('p', 'case-name', name), el('p', 'case-meta', detail));
    locationList.append(item);
  }

  const clueList = el('ul', 'case-list');
  for (const { label, text } of clues) {
    const item = el('li', 'case-item case-clue');
    item.append(el('span', 'case-tag', label), el('p', null, text));
    clueList.append(item);
  }

  const moodList = el('ul', 'case-list');
  for (const mood of moods) moodList.append(el('li', 'case-item case-mood', mood));

  outputEl.replaceChildren(
    caseSection('Assignment', el('p', 'case-assignment', assignment)),
    caseSection('NPCs', npcList),
    caseSection('Locations', locationList),
    caseSection('Clues', clueList),
    caseSection('Mood', moodList),
    caseSection('Twist', el('p', 'case-callout', twist)),
    caseSection('Final Confrontation', el('p', 'case-callout', finalConfrontation)),
  );
}

function renderSolution(c) {
  const { culprit, locations, clues } = describeRelationships(c, generateRelationships(c));

  const culpritBlock = el('div', 'solution-block');
  culpritBlock.append(
    el('h3', 'solution-heading', 'Culprit'),
    el('p', 'solution-culprit', culprit.name),
    el('p', 'solution-detail', culprit.detail),
    el('p', 'solution-detail', `Motive: ${culprit.motive}`),
  );
  if (culprit.verdict) culpritBlock.append(el('p', 'solution-detail', culprit.verdict));

  const locationsBlock = el('div', 'solution-block');
  const locationList = el('dl', 'solution-locations');
  for (const { label, text } of locations) {
    locationList.append(el('dt', null, label), el('dd', null, text));
  }
  locationsBlock.append(el('h3', 'solution-heading', 'Locations'), locationList);

  const cluesBlock = el('div', 'solution-block');
  const clueList = el('ol', 'solution-clues');
  for (const { text, foundAt, pointsTo } of clues) {
    const item = el('li');
    item.append(
      el('p', 'clue-text', text),
      el('p', 'clue-link', `${foundAt} → ${pointsTo}`),
    );
    clueList.append(item);
  }
  cluesBlock.append(el('h3', 'solution-heading', 'Clue Trail'), clueList);

  solutionBodyEl.replaceChildren(culpritBlock, locationsBlock, cluesBlock);
}

generateBtn.addEventListener('click', () => {
  currentCase = generateCase();
  renderCase(currentCase);
  renderSolution(currentCase);
  solutionEl.open = false;
  resultEl.hidden = false;
});

// New culprit, roles and clue trail for the same case; the case itself is
// left untouched.
rerollBtn.addEventListener('click', () => {
  renderSolution(currentCase);
  solutionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

solutionEl.addEventListener('toggle', () => {
  if (solutionEl.open) solutionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('[SW] registered', reg.scope))
      .catch((err) => console.warn('[SW] registration failed', err));
  });
}
