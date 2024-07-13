const grid = document.querySelector("#container");


for(let i = 0; i < 16; i++) {
const gridSquare = document.createElement("div");
gridSquare.classList.add("square");
gridSquare.addEventListener("mouseover", () =>
    {
        gridSquare.style.backgroundColor = 'green';
    }
);
gridSquare.addEventListener("mouseout", () =>
    {
        gridSquare.style.backgroundColor = 'red';
    }
);
grid.appendChild(gridSquare);
}

function onHover()
{
    
}
