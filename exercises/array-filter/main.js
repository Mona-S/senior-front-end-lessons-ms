/* eslint-disable no-console, no-unused-vars */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var names = [
  'Bill',
  'Monique',
  'Dan',
  'TJ',
  'Scott',
  'Tim H.',
  'Cody',
  'Brett',
  'Andy',
  'Tim D.'
];

var evenNumbers = numbers.filter(x => x % 2 === 0);
console.log('evenNumbers: ', evenNumbers);

var overFive = numbers.filter(y => y > 5);
console.log('overFive numbers: ', overFive);

var startWithT = names.filter(word => word.startsWith('T'));
console.log('startWithT: ', startWithT);

var haveD = names.filter(word => word.includes('D') || word.includes('d'));
console.log('haveD: ', haveD);
