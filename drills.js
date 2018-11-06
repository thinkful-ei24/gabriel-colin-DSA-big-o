// O(1)
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else return false;
}

// O(n^2), two for loops with one nested
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

// O(n), single for loop proportional to length of array
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// O(n), single for loop loop proportional to the length of the array
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// O(n^2), two for loops, with one nested in the other
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

// O(n), only one for loop
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// O(logn) data is sorted and halved with each iteration
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];
    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

// O(1) only one operation possible
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// O(n) single for loop increases proportionally to size of input
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

// Recursive/iterative

// Recur -> Linear O(n)
const countingSheep = num => {
  if (num === 0) {
    return;
  }
  console.log(`${num} - Another sheep jump over the fence`);
  return countingSheep(num - 1);
};

// Iterative -> Linear O(n)
const counting = num => {
  for (let i = num; i > 0; i--) {
    console.log(`${i} - Another sheep jump over the fence`);
  }
};

// Recur -> Linear O(n)
function double(array) {
  if (array.length === 0) {
    return [];
  }

  const doubledNumber = array[0] * 2;

  return [doubledNumber, ...double(array.slice(1))];
}

// Iter -> O(n)
const doubledArray = [1, 2, 3].map(number => number * 2);

// Recur -> Linear O(n)
const reverseString = str => {
  if (str === '') {
    return '';
  }
  const newChar = str[str.length - 1];
  return newChar + reverseString(str.slice(0, str.length - 1));
};

// Iter -> Linear O(n)
const iterativeReverse = str => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

// Recursive --> linear O(n)
function triangle(num) {
  if (num <= 1) {
    return 1;
  }
  return num + triangle(num - 1);
}

// Iterative --> linear O(n)
function iterativeTriangle(num) {
  let total = 0;

  for (let i = 0; i <= num; i++) {
    total = total + i;
  }
  return total;
}

// Recursive --> linear O(n) ticks will be directly proportional to the string size and number of seperators in the string
const stringSplitter = (str, sep) => {
  if (str.indexOf(sep) === -1) {
    return str;
  }
  const newStr = str.slice(0, str.indexOf(sep));
  return newStr + stringSplitter(str.slice(str.indexOf(sep) + 1), sep);
};

// Iterative --> linear O(n) only one for loop iteration to replace seperator with ' '
const iterativeSplitter = (str, sep) => {
  const splitStr = str.split('');
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === sep) {
      splitStr[i] = '';
    }
  }
  return splitStr.join('');
};

// Recur --> linear O(n)
function binary(num) {
  if (num === 0) {
    return '';
  }
  const remainder = num % 2;
  return binary((num - remainder) / 2) + remainder;
}

// Iter --> linear O(n)
function iterativeBinary(number) {
  return number.toString(2);
}

// Recur --> linear O(n)
const factorial = num => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// iter --> linear O(n)
const iterativeFactorial = num => {
  let prod = 1;
  for (let i = 1; i <= num; i++) {
    prod *= i;
  }
  return prod;
};

// Recur -> Linear O(n) / O(n^2)?
function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Iter -> Linear O(n)
function iterativeFibonacci(num) {
  let prevNumOne = 1;
  let prevNumTwo = 1;
  let fiboNum;

  for (let i = 3; i <= num; i++) {
    fiboNum = prevNumOne + prevNumTwo;

    prevNumOne = prevNumTwo;
    prevNumTwo = fiboNum;
  }
  return fiboNum;
}

// Recur -> O(2^n)
const allAnagrams = word => {
  const results = {};
  const anagram = (word, ana = '') => {
    if (word === '') {
      results[ana] = '';
      return;
    }
    // loop through word so each letter is a prefix
    for (let i = 0; i < word.length; i++) {
      let newStr = word.slice(0, i) + word.slice(i + 1, word.length);
      anagram(newStr, ana + word[i]);
    }
  };
  anagram(word, '');
  console.log(Object.keys(results));
};

// Iter -> exponential O(2^n)
function swap(chars, i, j) {
  var tmp = chars[i];
  chars[i] = chars[j];
  chars[j] = tmp;
}

function iterativeAnagrams(input) {
  var counter = [],
    anagrams = [],
    chars = input.split(''),
    length = chars.length,
    i;

  for (i = 0; i < length; i++) {
    counter[i] = 0;
  }

  anagrams.push(input);
  i = 0;
  while (i < length) {
    if (counter[i] < i) {
      swap(chars, i % 2 === 1 ? counter[i] : 0, i);
      counter[i]++;
      i = 0;
      anagrams.push(chars.join(''));
    } else {
      counter[i] = 0;
      i++;
    }
  }

  return anagrams;
}
