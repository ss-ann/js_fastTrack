// Exercise 1

let elem = document.getElementById('test');
elem.innerHTML = 'Last';

//2nd try

let elem = document.querySelector('div');
elem.innerHTML = 'Last';


// Exercise 2

let elem = document.querySelector("img.image");
elem.src = 'cat.jpg';

alert(elem.outerHTML);


//Exercise 3

document.querySelectorAll('#text p');

for(let i = 0; i < elements.length; i++) {
    console.log(`Selector text ${i}: ${elements[i].textContent}`);
};


//Exercise 4

let elems = document.querySelectorAll('#list li');

alert(`${elems[0].textContent}, ${elems[4].textContent}, ${elems[1].textContent}, ${elems[3].textContent}, ${elems[2].textContent}`);

//2nd way for task no 2

let list = document.getElementById('list');
let lastElem = list.lastElementChild;

alert(lastElem.textContent); 

// Exercise 5

const header = document.querySelector('h1');
header.style.backgroundColor = '#90ee91';

const paragraphOne = document.querySelector('#myDiv p');
paragraphOne.style.fontWeight ='bold';

const div = document.getElementById('myDiv');
const paragraphTwo = div.getElementsByTagName('p')[1];
paragraphTwo.style.color = 'red';

const paragraphThree = div.getElementsByTagName('p')[2];
paragraphThree.style.textDecorationLine = 'underline';

const paragraphFour = div.getElementsByTagName('p')[3];
paragraphFour.style.fontStyle = 'italic';

const list = document.getElementById('myList');
list.style.display = 'flex';
list.style.listStyle = 'none';
list.style.padding = '0';
list.style.margin = '0';

const items = list.querySelectorAll('li');

items.forEach(item => {
    item.textContent = item.textContent.replaceAll(' ', '');
});

const spans = document.getElementsByTagName('span');
spans[0].style.visibility = 'hidden'; 

//Exercise 6

let textInput1 = document.getElementById('input1');
textInput1.value = prompt('Please enter your first message');

let textInput2 = document.getElementById('input2');
textInput2.value = prompt('Please enter your second message');

// Swap

let swapValue = textInput1.value;
textInput1.value = textInput2.value;
textInput2.value = swapValue;


// Exercise 7

let newMain = document.createElement("main");
newMain.className = " mainClass check item ";

let newDiv = document.createElement("div");
newDiv.id = "myDiv";

let newParagraph = document.createElement("p");
newParagraph.innerText = 'First paragraph';

newDiv.appendChild(newParagraph);
newMain.appendChild(newDiv);
document.body.appendChild(newMain);


