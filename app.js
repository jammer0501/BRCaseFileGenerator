import { generateCase, formatCase } from './js/generator.js';
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

function renderSolution(c) {
  const { culprit, locations, clues } = describeRelationships(c, generateRelationships(c));

  const culpritBlock = el('div', 'solution-block');
  culpritBlock.append(
    el('h3', 'solution-heading', 'Culprit'),
    el('p', 'solution-culprit', culprit.name),
    el('p', 'solution-detail', culprit.detail),
    el('p', 'solution-detail', `Motive: ${culprit.motive}`),
  );

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
  outputEl.textContent = formatCase(currentCase);
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
