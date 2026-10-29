function tehelkaFunction() {
    console.log("Aaj tehelka function banega.");
}
tehelkaFunction();


// Function-- > Two Numbers Addition
function addTwoNumbers(n1, n2) {
    console.log(`The addition of two numbers ${n1} and ${n2} is ${n1 + n2}.`);
}


// Arrow Functon for Multiplication
// const arrowMul = (n1, n2) => console.log(`The multiplication of two numbers ${n1} and ${n2} is ${n1 * n2}.`);


// Practice Question
// function countVowels(str) {
//     let count = 0;
//     for (let i of str) {
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//             count++;
//         }
//     }
//     return count;
// }

// let gotvalue = countVowels("Gaurav Bisht");
// console.log(gotvalue);

// const countVowels = (str) => {
//     let count = 0;
//     for (let i of str) {
//         if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u" || i === "A" || i === "E" || i === "I" || i === "O" || i === "U") {
//             count++;
//         }
//     }
//     return count;
// }

// let value = countVowels("Gaurav Bisht");
// console.log(value);

// let arr = [2, 3, 5, 23, 9];
// const calcSquare = (val, idx) => {
//     console.log(`${idx} : ${val ** 2}`);
// }
// arr.forEach(calcSquare);

// let newArr = arr.map((val) => {
//     return val * val;
// });
// console.log(newArr);

//Practice Question
// let marks = [89, 87, 93, 90, 77];
// let filArr = marks.filter((val) => {
//     return val >= 90;
// })
// console.log(filArr);

// let n = prompt("Enter the size of array:");
// let arr = [];
// for(let i = 1; i <= n; i++){
//     arr.push(i);
// }

// const sum = arr.reduce((prev, curr) => {
//     return prev + curr;
// })
// console.log(`Sum of array ${arr} is ${sum}.`);

// const product = arr.reduce((prev, curr) => {
//     return prev * curr;
// })
// console.log(`Product of array ${arr} is ${product}.`);
