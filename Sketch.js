//container for all the divs incoming;
const divContainer = document.createElement("div");

divContainer.classList.add("container");
document.body.appendChild(divContainer);

//make button to choose max px by px row and columns
let inputBtnValue =  0;
let x = 0;

//creation of the button;
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    inputBtnValue = Number(prompt("Choisi une valeur inférieur ou égale a 64 :", "O"));
    if (inputBtnValue > 64) {
        alert("ERROR, choose a number equal or under 64, words are not accepted!!!");
        return;
    }
    x = inputBtnValue;
});

//change the size of the grid
btn.addEventListener("click", () => {
    divContainer.style.gridTemplateColumns = `repeat(${x}, minmax(0, 1fr))`;
    divContainer.style.gridTemplateRows = `repeat(${x}, minmax(0, 1fr))`;
})

//Base 16 * 16 px
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






//Change the px * px;
btn.addEventListener("click", () => {
    for (i = 0; i < x * x; i++) {
        //create the div;
        let div = document.createElement("div");
        //add the div inside the container;
        divContainer.appendChild(div);
        div.classList.add("grid");
        //add a hovering effect;
        div.onmouseover = () => div.classList.add("hover");
        div.onmouseleave = () => div.classList.remove("hover");
    }
})