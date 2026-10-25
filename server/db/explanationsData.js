const alproExplanations = require('./data/alproExplanations');
const arsikomExplanations = require('./data/arsikomExplanations');
const pancasilaExplanations = require('./data/pancasilaExplanations');
const psiExplanations = require('./data/psiExplanations');
const matdasExplanations = require('./data/matdasExplanations');
const basdatExplanations = require('./data/basdatExplanations');
const bindoExplanations = require('./data/bindoExplanations');
const ketkomExplanations = require('./data/ketkomExplanations');

const explanations = [
  ...alproExplanations,
  ...arsikomExplanations,
  ...pancasilaExplanations,
  ...psiExplanations,
  ...matdasExplanations,
  ...basdatExplanations,
  ...bindoExplanations,
  ...ketkomExplanations
];

module.exports = explanations;
