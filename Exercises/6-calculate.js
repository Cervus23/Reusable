'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array.push(average(square(i), cube(i)));
  }
  return array;
};

module.exports = { square, cube, average, calculate };
