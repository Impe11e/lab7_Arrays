'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const newArray = [];
  for (const i of array1) {
    if (!array2.includes(i)) {
      newArray.push(i);
    }
  }
  return newArray;
};
module.exports = { difference };
