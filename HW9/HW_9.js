//Exercise 1

function getPromise(message, delay){
return new Promise(function(resolve){
setTimeout(function(){
    resolve(message);
}, delay);
});
}

getPromise("test promise", 3000).then(function(data){
    console.log(data);
})

//Exercise 2

function calcArrProduct(arr){
    return new Promise(function(resolve,reject){
        const allNumbers = arr.every(item => typeof item ==='number');
      if(!allNumbers){
       reject('Error! Incorrect array!');
} else {
    const product = arr.reduce((acc, num) => acc * num, 1);
    resolve(product);
}
    });
}

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct ( [5,"user2", 7, 12]).then(result => console.log(result));

// Exercise 3

const delay = (i, time) => new Promise( resolve => setTimeout (() => resolve(i), time));
function showNumbers ( ) {
    let promise = Promise.resolve();

for(let i = 0; i < 10; i++){
const time = Math.floor(Math.random() * 1000);
promise = promise.then(() => {
    return delay(i,time).then(result => {
        console.log(result);
    });
});
}
}
showNumbers ( );

// Exercise 4

async function showNumbers(){

for(let i = 0; i < 10; i++){
const time = Math.floor(Math.random() * 1000);
const result = await delay(i,time);
console.log(result);
}
}
showNumbers ( );