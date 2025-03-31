// Exercise 1

let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1); // "12"
console.log( typeof res1); // "string"

let x = 1;
let y = 2;

let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log( typeof res2); // "string"

let x = 1;
let y = 2

let res3 = y > x
console.log(res3); // true
console.log( typeof res3); // " boolean "

let x = 1;
let y = 2;

let res4 = (x-x) / (y-y);
console.log(res4); // NaN
console.log( typeof res4); // "number"

// Exercise 2

let inputNumber = prompt("Please enter your number");

console.log("Number is positive : " + (inputNumber > 0));
console.log("Number is multiple of 7: " + ((inputNumber%7) == 0));

// Exercise 3

const randomArr =[];

randomArr[0] = 26;
randomArr[1] = 'hey there!';
randomArr[2] = true;
randomArr[3] = null;

alert(randomArr.length);

let userInput = prompt("Tell me, what's your favourite color");
randomArr[4] = userInput;

alert(randomArr[4]);

randomArr.shift();

alert(randomArr);

// Exercise 4

let cities = [ 'Rome', 'Lviv', 'Warsaw']; 

res = cities[0] + '*' + cities[1] + '*'+ cities[2];
//OR
res2 = cities.slice(0,1) + "*" + cities.slice(1,2) + "*" + cities.slice(2,3);

console.log(res);
console.log(res2);

// Exercise 5

let isAdult = prompt('How old are you?');

console.log(isAdult);

if(isAdult >= 18) {
    alert('You have reached the age of majority')
} else {
    alert('You are too young')
};

// Exercise 6

let a = Number(prompt('Please enther the length of the 1st side'));
let b = Number(prompt('Please enther the length of the 2nd side'));
let c = Number(prompt('Please enther the length of the 3rd side'));

if(a !== typeof Number || b !== typeof Number || c !== typeof Number){
    alert('Incorrect data!');
}

if(a + b <= c || a + c <= b || b + c <= a){
    alert('Incorrect data!');
    } ;

let s = (a  + b + c) / 2;

let triangleArea = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(`The area of this triangle is ${triangleArea.toFixed(3)}`); 

if(a ** 2 + b ** 2 === c ** 2) {
    isRectangular = true;
    console.log('It is a rectangular triangle')
} else {
    isRectangular = false;
    console.log('It is not a rectangular triangle')
};

// Exercise 7


const currentTime = new Date().getHours();
console.log(currentTime);

if(currentTime >= 23 || currentTime < 5){
    alert('Good night')
} else if (currentTime >= 5 && currentTime < 11){
    alert('Good morning') 
} else if(currentTime >= 11 && currentTime < 17){
    alert('Good day') 
} else {
    alert('Good evening') 
};

    switch(true){
        case currentTime >= 23 || currentTime < 5:
            alert('Good night');
            break;
        case currentTime >= 5 && currentTime < 11:
            alert('Good morning');
            break;
        case currentTime >= 11 && currentTime < 17:
            alert('Good day');
            break;
        case currentTime >= 17 && currentTime < 23:
            alert('Good evening');
    };