//A function that create the grid
let divContainer = "";
function createGrid () {
    divContainer = document.createElement("div");
    divContainer.classList.add("container");
    document.body.appendChild(divContainer)
}
createGrid();

//A function that create the divs
function createGridElement() {
    for (i = 0; i < 256; i++) {
        let div = document.createElement("div");
        divContainer.appendChild(div);
        div.classList.add("grid");
    }
}
createGridElement();

//A function to remove the current grid to let place for the new one
function removeGrid() {
    for (i = 0; i < 256; i++) {
        let element = document.querySelector(".grid");
        element.remove();
    }
}

//A function wich change the color on hover;
let divs = 0;
function hoverOnElement() {
    divs = document.querySelectorAll(".grid");
    divs.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.classList.add("hover")
        })
    })
}
hoverOnElement();

//Hover end;
function hoverOffElement() {
    divs = document.querySelectorAll(".grid");
    divs.forEach(div => {
        div.addEventListener("mouseleave", () => {
            div.classList.remove("hover");
        })
    })
}
hoverOffElement();

//A button that show a prompt
let inputValue = 0;

function getValue() {
    const btn = document.querySelector("button");
    inputValue = 0;
    btn.addEventListener("click", () => {
        inputValue = Number(prompt("Choisi un nombre en dessous ou égale à 64 :", 0))
    })
    return;
}
getValue();

//A function that verify the value of the input
function checkValue() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        if (inputValue > 64) {
            alert('ERROR, please choose a "number" equal or under 64');
        } else {
            return;
        }
    })
    
}
checkValue();

//A function which change the number of gridElement
function changeLaye() {
    let btn = document.querySelector("button")
    btn.addEventListener("click", () => {
        removeGrid();
        for (i = 0; i < inputValue * inputValue; i++) {
            //create the div;
            let div = document.createElement("div");
            //add the div inside the container;
            divContainer.appendChild(div);
            div.classList.add("grid");
        }
        hoverOnElement();
        hoverOffElement();
    })
   
}
changeLaye();


//A function which change the layout
function changeCssLayout() {
    const btn = document.querySelector("button");
    let size = 600 / (inputValue * inputValue)
    let divs = document.querySelectorAll(".grid");
    btn.addEventListener("click", () => {
        divContainer.style.gridTemplateColumns = `repeat(${inputValue}, minmax(${size}, 1fr))`
        divContainer.style.gridTemplateRows= `repeat(${inputValue}, minmax(${size}, 1fr))`
    })
}
changeCssLayout();