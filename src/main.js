// LENGTH
const array1 = ["1", "2", "3", "hello"];
const arrayLength = (array) => {
  let count = 0;
  array.forEach((index) => count++);
  return count;
};
console.log(arrayLength(array1));

// PUSH
