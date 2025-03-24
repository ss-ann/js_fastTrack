// hoisting in js
// const x;
let pet;
pet ='dog';

let breed; 
breed ='poodle';

const message = `pet: ${pet}\nbreed: ${breed}`

alert(message);

pet = breed;

alert(`pet: ${pet}`);