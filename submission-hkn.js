const findSum = function(array) {
  const sum = arr.reduce((previousVal, currentVal) => {
    return previousVal + currentVal;
  })
  return sum;
};

const findFrequency = function(array) {
  const sortedMost = arr.sort((a, b) =>
    arr.filter(el => el === a).length - arr.filter(el => el === b).length
  ).pop();
  const sortedLeast = arr.sort((a, b) =>
    arr.filter(el => el === b).length - arr.filter(el => el === a).length
  ).pop();
  const obj = {
    most: sortedMost,
    lease: sortedLeast
  };
  return obj;
};

const isPalindrome = function(str) {
  str = str.toLowerCase();
  
  const arrayFromStr = str.split('');
  const reversedArray = arrayFromStr.reverse();
  const reversedStr = reversedArray.join('');

  return str === reversedStr ? true : false;
};

const largestPair = function(array) {
  const compareNum = (a, b) => {
    return a - b;
  };
  const largestPairArr = arr.sort(compareNum).slice(-2);
  return largestPairArr[0] * largestPairArr[1];
};

const removeParenth = function(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      const parenthToRemove = str.indexOf(')') - str.indexOf('(') + 1;
      const removed = str.splice(str.indexOf('('), parenthToRemove);
      return str.join('');
    }
  }
};

const scoreScrabble = function(str) {
  const alphabet = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10
  };
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      sum += alphabet[letter];
  }
  return sum;
};
