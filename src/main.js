const array1 = [1, 2, 3, "hello"];
const array2 = [2, 2, 2];

// LENGTH
const arrayLength = (array) => {
  let count = 0;
  array.forEach((index) => count++);
  return count;
};
// console.log(arrayLength(array1));

// PUSH
const arrayPush = (array, newValue) => {
  let n = arrayLength(array);
  array[n] = newValue;
  return n + 1;
};
// console.log(arrayPush(array1, "bye"));
// console.log(array1);

// POP
const arrayPop = (array) => {
  let n = arrayLength(array);
  let d = array[n - 1];
  array.length = n - 1;
  return d;
};
// console.log(arrayPop(array1));
// console.log(array1);

// UNSHIFT
const arrayUnshift = (array, newValue) => {
  let n = arrayLength(array);
  do {
    array[n] = array[n - 1];
    n--;
  } while (n > 0);
  array[0] = newValue;
  return arrayLength(array);
};
// console.log(arrayUnshift(array1, "foo"));
// console.log(array1);

// SHIFT
const arrayShift = (array) => {
  let f = array[0];
  let n = 1;
  do {
    array[n - 1] = array[n];
    n++;
  } while (n < arrayLength(array));
  array.length = arrayLength(array) - 1;
  return f;
};
// console.log(arrayShift(array1));
// console.log(array1);

// SOME
const checkSomeCondition = (item) => item === "bar";
const arraySome = (array, checkSomeCondition) => {
  let check = 0;
  for (let i = 0; i < array.length; i++) {
    if (checkSomeCondition(array[i])) {
      check++;
    }
  }
  if (check > 0) {
    return true;
  }
  return false;
};
// console.log(arraySome(array1, checkSomeCondition));

const checkSomeNewCondition = (item) => item >= 3;
const arraySomeNew = (array, checkSomeNewCondition) => {
  let check = 0;
  for (let i = 0; i < array.length; i++) {
    if (checkSomeNewCondition(array[i])) {
      check++;
    }
  }
  if (check > 0) {
    return true;
  }
  return false;
};
// console.log(arraySomeNew(array1, checkSomeNewCondition));

// EVERY
const checkEveryCondition = (item) => item === 2;
const arrayEvery = (array, checkEveryCondition) => {
  let every = 0;
  for (let i = 0; i < array.length; i++) {
    if (checkEveryCondition(array[i])) {
      every++;
    }
  }
  if (every === array.length) {
    return true;
  }
  return false;
};
// console.log(arrayEvery(array1, checkEveryCondition));

const arrayEveryNew = (array, checkEveryCondition) => {
  let everyNew = 0;
  for (let i = 0; i < array.length; i++) {
    if (checkEveryCondition(array[i])) {
      everyNew++;
    }
  }
  if (everyNew === array.length) {
    return true;
  }
  return false;
};
// console.log(arrayEvery(array2, checkEveryCondition));

// FIND
const checkFindCondition = (item) => item <= 2;
const arrayFind = (array, checkFindCondition) => {
  let found = [];
  for (let i = 0; i < array.length; i++) {
    if (checkFindCondition(array[i])) {
      found.push(array[i]);
    }
  }
  if (found.length > 0) {
    return found[0];
  } else {
    return "Not found any element";
  }
};
// console.log(arrayFind(array1, checkFindCondition));

// FILTER
const checkFilterCondition = (item) => item <= 2;
const arrayFilter = (array, checkFindCondition) => {
  let filter = [];
  for (let i = 0; i < array.length; i++) {
    if (checkFilterCondition(array[i])) {
      filter.push(array[i]);
    }
  }
  if (filter.length > 0) {
    return filter;
  } else {
    return "Not found any element";
  }
};
// console.log(arrayFilter(array1, checkFilterCondition));

// MAP

// FINDINDEX

// INCLUDES
const arrayIncludes = (array, x) => {
  let includes = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === x) {
      includes++;
    }
  }
  if (includes > 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(arrayIncludes(array1, 4));

// INDEXOF
const arrayIndexOf = (array, y) => {
  for (let i = 0; i < array.length; i++) {
    array[i] === y;
  }
  if (array[i] === y) {
    return i;
  } else {
    return -1;
  }
};
console.log(arrayIncludes(array1, 3));

// REDUCE

// JOIN
