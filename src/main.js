const array1 = ["1", "2", "3", "hello"];

// LENGTH
const arrayLength = (array) => {
  let count = 0;
  array.forEach((index) => count++);
  return count;
};
//console.log(arrayLength(array1));

// PUSH
const arrayPush = (array, newValue) => {
  let n = arrayLength(array);
  array[n] = newValue;
  return n + 1;
};
//console.log(arrayPush(array1, "bye"));
//console.log(array1);

// POP
const arrayPop = (array) => {
  let n = arrayLength(array);
  let d = array[n - 1];
  array.length = n - 1;
  return d;
};
//console.log(arrayPop(array1));
//console.log(array1);

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
//console.log(arrayUnshift(array1, "foo"));
//console.log(array1);

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
console.log(arrayShift(array1));
console.log(array1);

// SOME

// EVERY

// FIND

// FILTER

// MAP

// FINDINDEX

// INCLUDES

// INDEXOF

// REDUCE

// JOIN
