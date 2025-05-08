// Exercise 1

const newWindow = window.open("", "My Page","width=300,height=300");

setTimeout( () => {
    newWindow.resizeTo(500,500);
    console.log('resized')}, 2000);


   setTimeout( () => {
      newWindow.moveTo(200,200)
      console.log('moved')}, 4000);    

      setTimeout( () => {
        newWindow.close();
        console.log('closed')}, 6000);    

// Exercise 2

const button = document.getElementsByTagName('button')[0];
const text = document.getElementById('text');

button.addEventListener("click", changeCSS);


function changeCSS() {
text.style.color = 'orange';
text.style.fontSize = '20px';
text.style.fontFamily = 'Comic Sans MS';
};

// Exercise 3

const button1 = document.getElementsByTagName('button')[1];
const button2 = document.getElementsByTagName('button')[2];
const button3 = document.getElementsByTagName('button')[3];
const link = document.getElementsByTagName('a')[0];

function bgToBlue(){
    document.body.style.backgroundColor = 'blue';
    };

function bgToPink(){
    document.body.style.backgroundColor = 'pink';
    };

function bgToBrown(){
    document.body.style.backgroundColor = 'brown';
    };

function bgToWhite(){
    document.body.style.backgroundColor = 'white';
    };

function bgToYellow(){
    document.body.style.backgroundColor = 'yellow';
    };

button1.addEventListener("click", bgToBlue);
button2.addEventListener("dblclick", bgToPink);
button3.addEventListener("mousedown", bgToBrown);
button3.addEventListener("mouseup", bgToWhite);
link.addEventListener("mouseover", bgToYellow);
link.addEventListener("mouseout", bgToWhite);

//Exercise 4

const deleteButton = document.getElementById('deleteButton');

function deleteSelected() {
    const select = document.getElementById('nameList');
    select.remove(select.selectedIndex);
};

deleteButton.addEventListener("click", deleteSelected);

//Exercise 5

const liveButton = document.getElementById('liveButton');
const buttonLog = document.getElementById('buttonLog');

liveButton.addEventListener("click", pressed);
liveButton.addEventListener("mouseover", hovered);
liveButton.addEventListener("mouseout",left);

function pressed() {
    const interactiondLog = document.createElement("p");
    buttonLog.appendChild(interactiondLog);
    interactiondLog.textContent = "I was pressed!";
    };

function hovered() {
    const interactiondLog = document.createElement("p");
    buttonLog.appendChild(interactiondLog);
    interactiondLog.textContent = "Mouse on me!";
    };

function left() {
    const interactiondLog = document.createElement("p");
    buttonLog.appendChild(interactiondLog);
    interactiondLog.textContent = "Mouse is not on me!";
    };

    //Exercise 6

const sizeDisplay = document.getElementById("sizeDisplay");

function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  sizeDisplay.textContent = `Width: ${width}px, Height: ${height}px`;
}
updateSize();
window.addEventListener("resize", updateSize);

//Exercise 7

const cities = {
ger: ['Berlin', 'Munich', 'Frankfurt'],
usa: ['New York', 'Chicago', 'Miami'],
ukr: ['Lviv', 'Kyiv', 'Odessa'],
};

const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("cities");
const output = document.getElementById("output");

function updateCities() {
    const selectedCountry = countrySelect.value;
    citySelect.innerHTML ='';

    cities[selectedCountry].forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
        
    });
    updateOutput();
}

function updateOutput(){
    const countryName = countrySelect.options[countrySelect.selectedIndex].text;
    const cityName = citySelect.value;
    output.textContent = `Selected country: ${countryName}, city: ${cityName}`;
};

countrySelect.addEventListener("change",updateCities);
citySelect.addEventListener("change",updateOutput);

updateCities();