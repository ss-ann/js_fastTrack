// Exercise 1

let width = Number(prompt('Enter the width of your rectangle'));
let length = Number(prompt('Enter the length of your rectangle'));

function calcRectangleArea(width, length) {
    
        const rectangleArea = width * length;
        console.log(`The area of your rectangle is ${rectangleArea} `);
}

try{
    if(isNaN(width) ||isNaN(length)){
        throw new Error('Entered value must be a number')
    }

calcRectangleArea(width,length);
} catch(error) {
    alert(error.message);
}

//Exercise 2

const inputAge = prompt('How old are you?');
const TOO_YOUNG = inputAge < 14;

function checkAge(userInput){


    if(isNaN(inputAge) || !Number(inputAge)){
        throw Error ('The value must be a number!');
        return
        };
        
        if(inputAge === null|| inputAge === ''){
            throw Error('The field is empty. Please enter your age');
            return
        };

    if(TOO_YOUNG) {
        alert('You\'re too young to watch this movie!');
    } else { 
    alert('Enjoy the movie!')
    };
};

try{
checkAge(inputAge);
} catch (error) {
alert(error.message);
};

//Exercise 3

class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function showMonthName(month){
    if (month <1 || month >12){
        throw new MonthException('Incorrect month number');
}
return monthsOfYear[month - 1];
}

try{
    const monthName = showMonthName(7);
    console.log(monthName);
} catch(error) {
if(error instanceof MonthException){
    console.log(`${error.name}: ${error.message}`)
} else {
    console.log('Unexpected error', error);
}
}

// Exercise 4

function showUser(id) {
    if(typeof id !== Number || id < 0){
        throw new Error ('Id can\'t be a negative number' + id);
    }
    return {id:id};
}

function showUsers(ids){
    const validUsers =[];
    for(const id of ids){
        try{
            const user = showUser(id);
            validUsers.push(user);
        } catch (error){
            console.log(error.message);
        }
    }
    return validUsers;
};

const result = showUsers([23,34,54,12,1,3,5,10,59, -13, -1, -22]);
console.log(result);