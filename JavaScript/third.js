// for(let i = 1; i <= 5; i++){
//     console.log("yes this is a loop program.");
// }

// Calculate sum of first n numbers.
// let n = prompt("Enter a number:");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log("sum of first", n, "numbers is", sum);

// let i = 0;
// while (i<=5) {
//     console.log("Looks Cool!");
//     i++;
// }

// do{
//     console.log("i is 0 but still run.");
// } while(i==1);

//for-of loop
// let str= "SpiderMan";
// for(let i of str){
//     console.log("i =", i);
// };

// for-in loop
// const student = {
//     Name: 'Gaurav Bisht',
//     age: 21,
//     percentage: 87.6,
//     isPass: true
// }
// for(let key in student){
//     console.log(`${key} = ${student[key]}`); // Template literals (`) embeds the variable or expression in string
// }

// Print even number from 0 to 100
// for(let i = 0; i <= 100; i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }

// Number guessing game
// let gameNum=29;
// let userNum=prompt("Guess a number between 1 to 100:");
// while(userNum != gameNum){
//     if(userNum < gameNum){
//         userNum=prompt("Your number is smaller than game number! Guess greater:");
//     } else if(userNum > gameNum){
//         userNum=prompt("Your number is greater than game number! Guess smaller:");
//     }
// }
// console.log("Congratulations! You guessed the correct number.");

// let gameNum = 29;

// while (true) {
//     let userNum = Number(prompt("Guess a number between 1 to 100:"));
//     if (userNum < gameNum) {
//         alert("Your number is smaller! Guess greater.");
//     } else if (userNum > gameNum) {
//         alert("Your number is greater! Guess smaller.");
//     } else if (userNum === gameNum) {
//         console.log("Congratulations! You guessed the correct number.");
//         break; // यह लूप को तुरंत रोक देगा
//     }
// }

// String
// let str= "Gaurav Bisht";
// console.log(str);
// // Template Literals
// console.log(`this is template literal string, it is my ${1+3+4}th jersey no. player.`);

// String Questions
let name = prompt("Enter your name: ");
console.log("@" + name.toLowerCase().replace(/\s+/g, "") + name.replace(/\s+/g, "").length);