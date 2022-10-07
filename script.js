//Access the div container
const CONTAINER = document.querySelector(".container");

//Default squares per side
let squaresPerSide = 16;

//Calls function to create the grid
createGrid();

//Color modes
let modeBlack = true;
let modeGreen = false;

//Creates grid based and changes color of cells
function createGrid () {
    for (let i = 1; i <= Math.pow(squaresPerSide, 2); i++) {
        let CELL = document.createElement("div");
        CELL.classList.add("white");
        CELL.addEventListener("mouseover", () => {
            if (modeBlack) {
                CELL.className = "black";
            } else if (modeGreen){
                CELL.className = "green"
            }
        });
        let calculation = 800/squaresPerSide; 
        CELL.style.width = calculation + "px"
        CELL.style.height = calculation + "px"
        CONTAINER.appendChild(CELL);
    }
}

//Clears the grid
document.querySelector("#clear-grid").addEventListener("click", clearGrid);

//Chooses black color
document.querySelector("#color-black").addEventListener("click", () => {
    modeBlack = true;
    modeGreen = false;
});

//Chooses green color
document.querySelector("#color-green").addEventListener("click", () => {
    modeBlack = false;
    modeGreen = true;
});

//Asks for a number of cells per side to create new grid
document.querySelector("#change-grid-size").addEventListener("click",() => {
    do {
        squaresPerSide = prompt ("Squares per side. Max number is 100.");
        if (squaresPerSide == null) {
            return;
        }
        squaresPerSide = Number(squaresPerSide);  
    } while (squaresPerSide > 100 || squaresPerSide < 2 || isNaN(squaresPerSide));

    //Calls the functions to clear the grid
    clearGrid();  
})

function clearGrid() {
    //Clears the old grid
    while (CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
    //Creates the grid
    createGrid();
}