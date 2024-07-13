const grid = document.querySelector("#container");


for(let i = 0; i < 16; i++) {
const gridSquare = document.createElement("div");
gridSquare.classList.add("square");
grid.appendChild(gridSquare);
}
