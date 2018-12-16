const range = (start, end, step = 1) => {
  let arr = [];
  for (let i = start; i <= end; i = i + step) {
    arr.push(i);
  }
  return arr;
};

console.log(range(3, 10));

const sum = arr => {
  return arr.reduce((acc, v) => acc + v, 0);
};

console.log(sum(range(1, 10)));

const reverseArray = arr => {
  let reversedArr = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArr.unshift(arr[i]);
  }
  return reversedArr;
};

console.log(reverseArray(range(3, 10)));

const reverseArrayInPlace = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    arr.push(arr[arr.length - 1 - 2 * i]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr.shift();
  }
  return arr;
};

console.log(reverseArrayInPlace(range(3, 10)));

const arrayToList = arr => {
  let list = null;
  for (let i = 0; i < arr.length; i++) {
    list = { value: arr[arr.length - 1 - i], rest: list };
  }
  return list;
};

console.log(arrayToList([3, 4, 45, 8, 7]));

const listToArray = list => {
  let arr = [];
  while (list) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
};

console.log(listToArray(arrayToList([1, 2, 3, 4, 5, 6, 7])));

const prepend = (number, list) => {
  return { value: number, rest: list };
};

console.log(prepend(7, arrayToList([1, 2, 3])));

const nthValueOfList = (number, list) => {
  while (number - 1 && list) {
    list = list.rest;
    number--;
  }
  return list ? list.value : undefined;
};

console.log(nthValueOfList(3, arrayToList([1, 2, 3, 4])));

const deepEqual = (element1, element2) => {
  if (element1 === element2) return true;
  if (typeof element1 === "object") {
    return Object.keys(element1).every(v => {
      if (typeof element1[v] === "object") {
        return deepEqual(element1[v], element2 && element2[v]);
      }
      return element1[v] === (element2 && element2[v]);
    });
  }
};

console.log(
  deepEqual(
    { value: 3, key: [1, 2, "word"] },
    { value: 3, key: [1, 2, "word"] }
  ),
  deepEqual({ value: 3, key: [1, 2, "word"] }, null)
);
