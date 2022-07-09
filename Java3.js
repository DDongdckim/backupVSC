let myWord = "Hello World"
myWord= myWord.replace ('Hello','Goodbye');
myWord=myWord.substring(0,7).toUpperCase()+
    myWord.substring(7,13).toLowerCase();

console.log(myWord);

const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
}); 
rl.question("What is your name ?",(ans)=>{
    console.log(`Hello, ${ans}`);
})