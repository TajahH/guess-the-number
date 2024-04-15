// The computer’s favourite number is 7.  
//Ask the user to enter their name and their favourite number.  
//The computer will then greet the user by name 
//and if their favourite number is the same as the computer, it will output a message saying “that’s my favourite number as well”.

const readline = require("readline-sync");
const computerFave = 7
let userName = readline.question("What is your name, User?: ");
console.log(`Hello ${userName}, lets play a game. Is our favourite number the same? Let's test it.`);


let usersChoice = -1

while(usersChoice !== computerFave){

    usersChoice = parseInt (readline.question("What is your favourite number?: "))
    if (usersChoice !== computerFave){
        console.log("I guess we don't have the same favourite number. Try Again?")
        }
       
}
console.log("That is my favourite number as well")


// do while means you an avoid double checking

// while(true){}




// 

// }

