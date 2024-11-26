'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const newArray = [];
  for (const i of array) {
    if (!newArray.includes(i)) {
      newArray.push(i);
    }
  }
  return newArray;
};

//Або можна так:
//const unique = (array) => [...new Set(array)];

module.exports = { unique };
