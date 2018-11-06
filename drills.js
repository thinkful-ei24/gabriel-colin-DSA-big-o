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
