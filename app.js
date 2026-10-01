import { generateCase, formatCase } from './js/generator.js';
import { generateRelationships, formatRelationships } from './js/relationships.js';

const generateBtn = document.getElementById('generate-btn');
const relationshipsBtn = document.getElementById('relationships-btn');
const resultEl = document.getElementById('result');
const outputEl = document.getElementById('case-output');

let currentCase = null;

generateBtn.addEventListener('click', () => {
  currentCase = generateCase();
  outputEl.textContent = formatCase(currentCase);
  resultEl.hidden = false;
  relationshipsBtn.hidden = false;
});

relationshipsBtn.addEventListener('click', () => {
  if (!currentCase) return;
  outputEl.textContent += '\n\n' + formatRelationships(currentCase, generateRelationships(currentCase));
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('[SW] registered', reg.scope))
      .catch((err) => console.warn('[SW] registration failed', err));
  });
}
