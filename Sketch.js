//container for all the divs incoming;
const divContainer = document.createElement("div");

divContainer.classList.add("container");
document.body.appendChild(divContainer);

//make button to choose max px by px row and columns
let inputBtnValue =  0;
let x = 0;

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    inputBtnValue = Number(prompt("Choisi une valeur :", "O"));
    x = inputBtnValue;
});
btn.addEventListener("click", () => {
    divContainer.style.gridTemplateColumns = `repeat(${x}, 20px)`;
    divContainer.style.gridTemplateRows = `repeat(${x}, 20px)`;
})


for (i = 0; i < 256; i++) {
    //create the div;
    let div = document.createElement("div");
    //add the div inside the container;
    divContainer.appendChild(div);
    div.classList.add("grid");
    //add a hovering effect;
    div.onmouseover = () => div.classList.add("hover")
    div.onmouseleave = () => div.classList.remove("hover")
}






//create all the divs;
btn.addEventListener("click", () => {
    for (i = 0; i < x * x; i++) {
    //create the div;
    let div = document.createElement("div");
    //add the div inside the container;
    divContainer.appendChild(div);
    div.classList.add("grid");
    //add a hovering effect;
    div.onmouseover = () => div.classList.add("hover")
    div.onmouseleave = () => div.classList.remove("hover")
}
})


