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
  arrayLength(array) = n-1;
  return d;
};
console.log(arrayPop(array1));
console.log(array1);
