//container for all the divs incoming
const divContainer = document.createElement("div");

divContainer.classList.add("container");
document.body.appendChild(divContainer);

for (i = 0; i < 256; i++) {
    let div = document.createElement("div");
    divContainer.appendChild(div);
    div.classList.add("grid");
}