/* eslint-disable no-console, no-unused-vars */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

var doubled = numbers.map(x => x * 2);
console.log('doubled: ', doubled);

var prices = numbers.map(y => '$' + y.toFixed(2));
console.log('prices: ', prices);

var upperCased = languages.map(word => word.toUpperCase());
console.log('upperCased: ', upperCased);

var firstLetters = languages.map(word => word[0]);
console.log('firstLetters: ', firstLetters);
