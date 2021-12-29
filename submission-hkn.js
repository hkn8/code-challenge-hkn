const findSum = function(array) {
  const sum = array.reduce((previousVal, currentVal) => {
    return previousVal + currentVal;
  })
  return sum;
};
console.log(findSum([2, 4, 6]));

const findFrequency = function(array) {
  const sortedMost = array.sort((a, b) =>
    array.filter(el => el === a).length - array.filter(el => el === b).length
  ).pop();
  const sortedLeast = array.sort((a, b) =>
    array.filter(el => el === b).length - array.filter(el => el === a).length
  ).pop();
  const obj = {
    most: sortedMost,
    least: sortedLeast
  };
  return obj;
};
console.log(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']));

const isPalindrome = function(str) {
  str = str.toLowerCase();
  
  const arrayFromStr = str.split('');
  const reversedArray = arrayFromStr.reverse();
  const reversedStr = reversedArray.join('');

  return str === reversedStr ? true : false;
};
console.log(isPalindrome('canal'));
console.log(isPalindrome('Ana'));

const largestPair = function(array) {
  const prodArray = [];
  for (let i = 0; i < array.length - 1; i = i + 1) {
    prodArray.push(array[i] * array[i + 1]);
  }
  const largestProd = prodArray.sort((a, b) => {
    return a - b;
  }).pop();
  return largestProd;
};
console.log(largestPair([5, 1, 2, 3, 1, 4]));
console.log(largestPair([9, 5, 10, 2, 24, -1, -48]));

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
console.log(removeParenth('ido(not)liketocode'));

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
  for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      sum += alphabet[letter];
  }
  return sum;
};
console.log(scoreScrabble('hello'));
console.log(scoreScrabble('quiet'));
