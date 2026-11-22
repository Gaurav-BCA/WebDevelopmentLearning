// function hello() {
//     console.log("Wassa my Gang!");
// };

// setTimeout(hello, 3000); // time in ms. 3s = 3000ms


// // Callback Hell
// function getData(dataID, getNextData) {
//     setTimeout(() => {
//         console.log("Data", dataID);
//         if (getNextData) {
//             getNextData();
//             console.log("Getting next data...");
//         };
//     }, 2000);
// };

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });


let promise = new Promise((resolve, reject) => {
    console.log("It's a promise.");
    // resolve("Done");
    reject("Not Done!");
});



