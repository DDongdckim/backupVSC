const evenEmitter = require('events');
const myEvents = new evenEmitter();
myEvents.on('message', ()=>{
    console.log('message received');
});
myEvents.emit("message"); 

let a = 1;
let b = 2;

function add(num1,num2){
    console.log(num1+num2);
}
add(a,b)
function subtract(num1,num2){
    console.log(num1-num2);
}
subtract(a,b)
function multiplication(num1,num2){
    console.log(num1*num2);
}
multiplication(a,b)
function division(num1,num2){
    console.log(num1/num2);
}
division(a,b)

function toNumber(num){
    for(let index = 1; index<num+1; index ++){
        console.log(index)
    }
}
toNumber(5);


