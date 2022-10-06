//Access the div container
const CONTAINER = document.querySelector(".container");

//Default squares per side
let squaresPerSide = 16;

//Calls function to create the grid
createGrid();

//Creates grid based and changes color of cells
function createGrid () {
    for (let i = 1; i <= Math.pow(squaresPerSide, 2); i++) {
        let CELL = document.createElement("div");
        CELL.addEventListener("mouseover", () => {
            CELL.style.backgroundColor = "black";  
            CELL.style.borderColor = "black";  
        });
        let calculation = 800/squaresPerSide; 
        CELL.style.width = calculation + "px"
        CELL.style.height = calculation + "px"
        CONTAINER.appendChild(CELL);
    }
}

//Asks for a number of cells per side to create new grid
document.querySelector("button").addEventListener("click",() => {
    do {
        squaresPerSide = prompt ("Squares per side. Max number is 100.");
        squaresPerSide = Number(squaresPerSide);  
    } while (squaresPerSide > 100 || squaresPerSide < 2);

    //Clears the old grid
    while (CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }

    // Calls function to create the grid again
    createGrid();
})