//A function that create the grid
let divContainer = "";
function createGrid () {
    divContainer = document.createElement("div");
    divContainer.classList.add("container");
    document.body.appendChild(divContainer)
}
createGrid();

//A function that create the div
let paint = "";
let x = 0;
function createGridElement() {
    for (i = 0; i < 256; i++) {
        let div = document.createElement("div");
        divContainer.appendChild(div);
        div.classList.add("grid");
    }
    x = 256;
    paint = document.querySelectorAll(".grid")
}
createGridElement();


//A function to remove the current grid to let place for the new one
function removeGrid() {
    //Check wether x is equal to 256 so that the grid doesn't try to delete 256 element
    //all the time;
    if (x == 256) {
        for (i = 0; i < 256; i++) {
            let element = document.querySelector(".grid");
            element.remove();
        }
    } else {
        for (i = 0; i < x; i++) {
            let element = document.querySelector(".grid");
            element.remove();
        }
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
        paint = document.querySelectorAll(".grid");
        x = inputValue * inputValue;
        //Need to call function here so that they work with different grid size;
        hoverOnElement();
        hoverOffElement();
        fills();
        clearElement();
        getBlack();
        getEraser();
    })
}
changeLaye();


//A function which change the layout
function changeCssLayout() {
    const btn = document.querySelector("button");
    let size = 600 / (inputValue * inputValue)
    let divs = document.querySelectorAll(".grid");
    btn.addEventListener("click", () => {
        divContainer.style.gridTemplateColumns = `repeat(${inputValue}, minmax(0, 1fr))`
        divContainer.style.gridTemplateRows= `repeat(${inputValue}, minmax(0, 1fr))`
    })
}
changeCssLayout();

//A function to start drawing on click 

/*
function draw() {
    paint.forEach(div => div.addEventListener("click", () => {
        drawLine();
    }))
}
*/

// A function that draw on hovering;

function drawLine() {
    paint.forEach(div => div.addEventListener("mouseover", () => {
        div.classList.remove("hover");
        div.classList.add("colored");
    }))
}

function Eraser() {
    paint.forEach(div => div.addEventListener("mouseover", () => {
        div.classList.add("hover");
        div.classList.remove("colored");
    }))
}

/*
function drawLine() {
    paint.classList.remove("hover");
    paint.classList.add("colored");
}

function activateLine() {
    paint.forEach(div => div.addEventListener("mouseover", drawLine))
}
activateLine()
*/

// A function to stop drawing;

//Creating a button container
const btnContainer = document.createElement("div");
btnContainer.classList.add("btnCont");
document.body.appendChild(btnContainer);


//A function to fill all div using a button;
let fill = document.createElement("button");
    fill.classList.add("Fill");
    btnContainer.appendChild(fill);
    fill.textContent = "Fill"

function fills() {
    const gridElement = document.querySelectorAll(".grid");
    gridElement.forEach(div => fill.addEventListener("click", () => {
        div.classList.remove("hover");
        div.classList.add("colored");
    }))
}
fills();

//A function to clear all colored grid element;
let clear = document.createElement("button");
clear.classList.add("clear");
btnContainer.appendChild(clear);
clear.textContent = "Clear";

function clearElement() {
    const gridElement = document.querySelectorAll(".grid");
    gridElement.forEach(div => clear.addEventListener("click", () => {
        div.classList.remove("colored");
    }))
}
clearElement();

//Create a button to activate the eraser
let eraser = document.createElement("button");
btnContainer.appendChild(eraser);
eraser.classList.add("eraser");
eraser.textContent = "Eraser"

function getEraser() {
    eraser.addEventListener("click", () => {
        Eraser();
        console.log("hello")

    })
}
getEraser();


//Create a button to activate the drawing
let black = document.createElement("button");
btnContainer.appendChild(black);
black.classList.add("black");
black.textContent = "Black";

function getBlack() {
    black.addEventListener("click", () => {
        drawLine();
        console.log("hello")
    })
}
getBlack()