// let marks = [45, 67, 89, 90, 56, 78];
// console.log(marks);
// let sum = 0;
// for (let i of marks) {
//     sum += i;
// }
// let avg = sum / marks.length;
// console.log(`Average of marks = ${avg}`);

let items = [250, 645, 300, 900, 50];
console.log("Items before discount:", items);
let delItem = items.pop(); // removes last item from array
items.push(50);
for (let i in items) {
    items[i] = items[i] - items[i] * 0.1; // 10% discount on each item
}
console.log("Items after discount:", items);
console.log(delItem);
// let size = marks.length;
// console.log("Size of the array is: ", size);

// let heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Spider Man", "Shaktiman"];
// for (let i in heroes) {
//     console.log(i, "=", heroes[i]);
// }

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
let remFirst = companies.shift();
console.log(`Remove the ${remFirst} company.`);
companies.splice(1, 1, "Ola");
companies.push("Amazon");
console.log(companies);