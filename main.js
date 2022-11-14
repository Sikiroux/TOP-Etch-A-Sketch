//A function that create the grid
let divContainer = "";
function createGrid () {
    divContainer = document.createElement("div");
    divContainer.classList.add("container");
    document.body.appendChild(divContainer)
}
createGrid();

//A function that create the div
let x = 0;
function createGridElement() {
    for (i = 0; i < 256; i++) {
        let div = document.createElement("div");
        divContainer.appendChild(div);
        div.classList.add("grid");
    }
    x = 256;
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
        x = inputValue * inputValue;
        //Need to call function here so that they work with different grid size;
        hoverOnElement();
        hoverOffElement();
        draw();
        fills();
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

//A function to draw while on click 

function draw() {
    const paint = document.querySelectorAll(".grid");
    paint.forEach(div => div.addEventListener("mousedown", () => {
        div.classList.remove("hover");
        div.classList.add("colored");
    }))
}
draw();

//A function to fill all div using a button;
let fill = document.createElement("button");
    fill.classList.add("Fill");
    document.body.appendChild(fill);
    fill.textContent = "Fill"
function fills() {
    
    const gridElement = document.querySelectorAll(".grid");
    gridElement.forEach(div => fill.addEventListener("click", () => {
        div.classList.remove("hover");
        div.classList.add("colored");
    }))
}
fills();