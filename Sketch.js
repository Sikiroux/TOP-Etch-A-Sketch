//container for all the divs incoming;
const divContainer = document.createElement("div");

divContainer.classList.add("container");
document.body.appendChild(divContainer);


//create all the divs;
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

