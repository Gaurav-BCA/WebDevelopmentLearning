let tglBtn = document.querySelector("#toggle");
let body = document.querySelector("body");
let currMod = "";
// tglBtn.onclick = () => {
//         document.querySelector("body").style.backgroundColor = "black"; 
// }

tglBtn.addEventListener("click", (e) => {
    if (currMod == "dark") {
        tglBtn.innerText = "dark mode";
        currMod = "light";
        body.classList.add("light");
        // body.classList.remove("dark");
    } else {
        tglBtn.innerText = "light mode";
        currMod = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    };

    console.log(currMod)
})

let box = document.querySelector("#box");
box.addEventListener("mouseenter", (e)  => {
    body.style.backgroundColor = "red";
    box.style.backgroundColor = "white";
})
box.addEventListener("mouseleave", (e)  => {
    body.style.backgroundColor = "";
    box.style.backgroundColor = "";
})