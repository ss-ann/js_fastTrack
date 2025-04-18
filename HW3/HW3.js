// Exercise 1

//while loop

const arr = [2, 3, 4, 5];
let product = 1;

let i = 0;
while (i < arr.length) {
  product *= arr[i];
  i++;
}

console.log(product);

//for loop

const arr = [2, 3, 4, 5];
let product2 = 1;

for (let elem of arr) {
  product2 *= elem;
}

// Exercise 2

for (let i = 0; i < 16; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  } else {
    console.log(`${i} is not an even number`);
  }
}

// Exercise 3

let randomNumbers = [];

function randArray(k) {
  if (k <= 0) {
    alert("Incorrect data, number must be positive");
    return;
  }

  if (k > 500) {
    alert("Incorrect data, you can't generate more than 500 numbers");
    return;
  }

  for (let i = 0; i < k; i++) {
    let randomNum = Math.floor(Math.random() * 500) + 1;
    randomNumbers.push(randomNum);
  }
}

randArray(10);
console.log(randomNumbers);

// Exercise 4

let a = Number(prompt("Please enter your number"));
let b = Number(prompt("Please enter power number"));

if (!Number.isInteger(a) || !Number.isInteger(b)) {
  alert("Please enter a valid number");
} else {
  raiseToDegree(a, b);
}

function raiseToDegree(a, b) {
  let result = a ** b;
  console.log(result);
}

// Exercise 5

let arguments = [23, 55, 59485, 239, 578567, -2094, -238473, 3944975, 1, 2];

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

findMin(arguments);

// Exercise 6

let arr1 = [2, 10, 45, 567, 2345, 23, 43, 5, 10];
let arr2 = [2, 10, 45, 567, 2345, 23, 43, 5];

function isUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let a = 0; a < arr.length; a++) {
      if (i !== a && arr[i] === arr[a]) {
        return true;
      }
    }
  }
  return false;
}

console.log(isUnique(arr1));
console.log(isUnique(arr2));

// Exercise 7

const arr1 = [23, 54, 34434, 222, 4, 6, 34, 2];

function arraySearch(arr, x) {
  if (x === 1) {
    let lastElem = arr.pop();
    console.log(lastElem);
  } else if (x > 1 && x <= arr.length) {
    let lastElems = arr.slice(-x);
    console.log(lastElems);
  } else {
    console.log(arr);
  }
}

arraySearch(arr1, 1);

// Exercise 8

let phrase = "this could be literally any sentence";

function makeUppercase(phrase) {
  let extractedWords = phrase.split(" ");

  let upperCasedWords = extractedWords.map((word) => {
    let firstLetter = word.charAt(0).toUpperCase();
    let restOfTheWord = word.slice(1);

    let capitalizedWord = firstLetter + restOfTheWord;
    return capitalizedWord;
  });
  return upperCasedWords.join(" ");
}
console.log(makeUppercase(phrase));
