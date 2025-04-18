// Exercise 1

const song = {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    duration: '3:53 min',
    genre: 'pop'
};

function propsCount(obj){
    const propertyCount = Object.keys(obj).length;
    console.log(propertyCount);
}

propsCount(song);

// Exercise 2

const song = {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    duration: '3:53 min',
    genre: 'pop',
    album: 'Divide'
};

function showProps(obj){
    const keysArr = [];
    const valsArr =[];

    const keysDerived = Object.keys(obj);
    keysArr.push(keysDerived);

    const valsDerived = Object.values(obj);
    valsArr.push(valsDerived);

console.log(keysArr);
console.log(valsArr);
}

showProps(song);

// Exercise 3

class Person {
    constructor(name, surname){
       this.name = name;
       this.surname = surname;
    }
    showFullName(){
        console.log(this.name + ' ' + this.surname);
    }
}

class Student extends Person {
    constructor(name, middleName, surname, year){
super(name, surname);
this.middleName = middleName;
this.year = year;
    }
    showFullName(){
        console.log(this.name + ' ' + this.middleName + ' ' + this.surname);
}
showCourse(){
const currentYear = new Date().getFullYear();
const yearofAdmission = this.year;
const course = currentYear - yearofAdmission + 1;

if(course < 1 || course > 6){
    console.log('Invalid year of admission')
} else {
    console.log(`Current course year ${course}`);
}
}
}

const student1 = new Student('Peter', 'Michael', 'Brown', 2023);
student1.showFullName();
student1.showCourse();

const student2 = new Student('Michael', 'John', 'Redd', 2025);
student1.showFullName();
student1.showCourse();

//Exercise 4
const employees= [];

 class Worker{
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary(){
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
    }
    showSalaryWithExperience(){
        const salary = this.dayRate * this.workingDays;
        const salaryWithExperience = salary * this.#experience;
        console.log(`${this.fullName} salary: ${salaryWithExperience}`);
        return salaryWithExperience;
 }
 get showExp(){
return this.#experience;
 }
 set setExp(value){
    this.#experience = value;
 }
}

employees.push(new Worker("Sophie Nowak", 120, 22));
employees.push(new Worker("Mateusz Zieliński", 150, 18));
employees.push(new Worker("Alicja Kwiatkowska", 95, 20));
employees.push(new Worker("Jakub Wiśniewski", 130, 21));
employees.push(new Worker("Oliwia Wójcik", 160, 19));
employees.push(new Worker("Kacper Dąbrowski", 105, 23));

employees.forEach(worker => {
    console.log(worker.fullName);
    worker.showSalary();
    console.log("New experience: " + worker.showExp);
    worker.showSalaryWithExperience();
    worker.setExp = 1.5;
    console.log("New experience: " + worker.showExp);
    worker.showSalaryWithExperience();
    console.log('---------');
});

employees.forEach(worker => {
    worker.setExp = 1.5;
    worker.salaryWithExperience = worker.dayRate * worker.workingDays * worker.showExp;
});

const sortedEmployees = [...employees].sort((a, b) => (a.salaryWithExperience - b.salaryWithExperience));

console.log('Sorted salary');
sortedEmployees.forEach(worker => {
    console.log(`${worker.fullName}: ${worker.salaryWithExperience}`);
})

//Exercise 5
class GeometricFigure {
    getArea(){
return 0
    }
    toString(){
return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(triangleBase, triangleHeight){
        super();
        this.base = triangleBase;
        this.height =  triangleHeight;
    }
    getArea(){
        return (this.base * this.height)/2;
    };
}

class Circle extends GeometricFigure {
    constructor(radius){
        super();
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius ** 2
    }
}

class Square extends GeometricFigure {
    constructor(side){
        super();
        this.side = side
    }
    getArea(){
        return this.side ** 2;
    }
}

function handleFigures(figures){
figures.forEach(figure =>{
    if(figure instanceof GeometricFigure){
        console.log(`Geometric figure ${figure.toString()}, area: ${figure.getArea()}`);
        }
    }
)

    const totalArea = figures.reduce((acc, figure) => {
        if(figure instanceof GeometricFigure){
            return acc + figure.getArea();
        }
        return acc;
    }, 0);
    
    return console.log(`Total area: ${totalArea}`);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
