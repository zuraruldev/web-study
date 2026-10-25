const alproQuestions = require('./data/alproQuestions');
const arsikomQuestions = require('./data/arsikomQuestions');
const pancasilaQuestions = require('./data/pancasilaQuestions');
const psiQuestions = require('./data/psiQuestions');
const matdasQuestions = require('./data/matdasQuestions');
const basdatQuestions = require('./data/basdatQuestions');
const bindoQuestions = require('./data/bindoQuestions');
const ketkomQuestions = require('./data/ketkomQuestions');

const questions = [
  ...alproQuestions,
  ...arsikomQuestions,
  ...pancasilaQuestions,
  ...psiQuestions,
  ...matdasQuestions,
  ...basdatQuestions,
  ...bindoQuestions,
  ...ketkomQuestions
];

module.exports = questions;
