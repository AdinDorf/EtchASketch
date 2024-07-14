const grid = document.querySelector("#container");
const button = document.querySelector('.button');
const input = document.querySelector('.textInput');
let gridSize = 100;

createGrid();

button.addEventListener("click", () => 
    {
        let val = Number(input.value);
        
        if (Number.isInteger(val))
        {
            gridSize = val;
            createGrid()
        }
        else{
            alert("Error: NaN");
        }
    }) ;

function createGrid()
{
    grid.innerHTML='';
    const squareSize = Math.floor(Math.sqrt(gridSize));
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
                gridSquare.style.backgroundColor = 'white';
            }
        );
        grid.appendChild(gridSquare);
        }
}
