console.log("Hello world");
let myName = "Dongchan";
let myAge = 13;
console.log("Hello,"+ myName);
console.log("I am "+ myAge+ " years old");

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = [1,2,3,4,5];
console.log(f);

for(let i=0; i<f.length; i++){
    console.log(f[i]);
}
let index = 0;
while(index<f.length){
    console.log(f[index]);
    index++
}

let myLetters= ['A','B','C','D','E']
for (let index = 0; index < myLetters.length; index++) {
    console.log(myLetters[index]);
}
let Student = new Object();
Student = {
    name="Dongchan",
    Age=13
}
console.log(Student.name);
console.log(Student.Age);