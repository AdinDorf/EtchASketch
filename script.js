const grid = document.querySelector("#container");
const button = document.querySelector('.button');
const input = document.querySelector('.textInput');
let squareSize = 100;

createGrid();

button.addEventListener("click", () => 
    {
        let val = Number(input.value);
        
        if (Number.isInteger(val))
        {
            squareSize = val;
            createGrid()
        }
        else{
            alert("Error: NaN");
        }
    }) ;

function createGrid()
{
    grid.innerHTML='';

    for(let i = 0; i < squareSize*squareSize; i++) {
        
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
