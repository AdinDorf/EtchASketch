const grid = document.querySelector("#container");
const gridSize = 10000;

createGrid();

function createGrid()
{
    grid.innerHTML='';
    const squareSize = Math.floor(Math.sqrt(gridSize));
    console.log(squareSize);
    for(let i = 0; i < gridSize; i++) {
        
        const gridSquare = document.createElement("div");
        
        gridSquare.classList.add("square");
        gridSquare.style.width = `calc(100% / ${squareSize} )`;
        gridSquare.style.height = `calc(100% / ${squareSize} )`;


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
}
