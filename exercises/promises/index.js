/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promise1 = takeAChance('mona');

promise1.then(value => {
  console.log(value);

});

promise1.catch(error => {
  console.log(error);
});
