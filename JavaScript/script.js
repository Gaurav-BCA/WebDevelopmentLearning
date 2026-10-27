// let heading = document.getElementsByClassName("heading-class"); //h1
// console.dir(heading);

// let tag = document.getElementsByTagName("p");
// console.dir(tag);

// let firstEl = document.getElementById("id");
// console.dir(firstEl);

// let allEl = document.querySelector("p");
// console.dir(allEl);

// let allClass = document.querySelectorAll(".heading-class");
// console.dir(allClass);

// let h2 = document.getElementsByTagName("h2");
// console.dir(h2);
// h2.innerText  = h2.innerText + " from apna college students.";


// let box = document.querySelectorAll(".box");
// console.dir(box);
// for(let i in box){
//     box[i].innerText = `Box No. ${i+1}`;
// }
// box[0].innerText = "First Box";
// box[1].innerText = "Second Box";
// box[2].innerText = "Third Box";

// let heading = document.querySelector("h2");
// console.log(heading.setAttribute("class", "123"));
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "50px";

// let atr = document.querySelector("span");
// console.log(atr.getAttribute("id"));
// console.log(atr.getAttribute("name"));

let btn = document.createElement("button");
btn.innerHTML = "<i>Click here!</i>";
console.dir(btn);
btn.style.border = "2px solid black";
btn.style.backgroundColor = "aqua";
document.querySelector("body").append(btn);
// document.querySelector("div").after(btn);

btn.onclick = (e) => {
    console.log(e);
}

let heading = document.createElement("h1");
heading.innerHTML = "<i>Learn about DOM Manipulation</i>";
document.querySelector("body").prepend(heading);
heading.style.textDecoration = "underline";
heading.style.color = "grey";
heading.onmouseover = () => {
    alert("This is heading");
}