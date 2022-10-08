//Access the div container
const CONTAINER = document.querySelector(".container");

//Default squares per side
let squaresPerSide = 16;

//Calls function to create the grid
createGrid();

//Color modes
let modeBlack = true;
let modeRandom = false;
const COLORBLACK = document.querySelector("#color-black");
const COLORRANDOM = document.querySelector("#color-random");

//Initialize larger black color and border
COLORBLACK.style.transform = "scale(1.5, 1.5)";
COLORBLACK.style.border = "3px grey solid";

//Creates grid based and changes color of cells
function createGrid () {
    for (let i = 1; i <= Math.pow(squaresPerSide, 2); i++) {
        let CELL = document.createElement("div");
        CELL.style.backgroundColor = "white";
        CELL.style.border = "1px lightGrey solid";
        CELL.addEventListener("mouseover", () => {
            if (modeBlack) {
                CELL.style.backgroundColor = "black";
                CELL.style.border = "1px black solid"
            } else if (modeRandom){
                let randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`
                CELL.style.backgroundColor = randomColor;
                CELL.style.border = `1px ${randomColor} solid`;
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
COLORBLACK.addEventListener("click", () => {
    modeBlack = true;
    modeRandom = false;
    COLORBLACK.style.transform = "scale(1.5, 1.5)";
    COLORBLACK.style.border = "3px grey solid";
    COLORRANDOM.style.transform = "scale(1, 1)";
    COLORRANDOM.style.border = "none";
        
});

//Chooses random color
COLORRANDOM.addEventListener("click", () => {
    modeBlack = false;
    modeRandom = true;
    COLORRANDOM.style.transform = "scale(1.5, 1.5)";
    COLORRANDOM.style.border = "3px grey solid";
    COLORBLACK.style.transform = "scale(1, 1)";
    COLORBLACK.style.border = "none";
});

//Asks for a number of cells per side to create new grid
document.querySelector("#change-grid-size").addEventListener("click",() => {
    do {
        squaresPerSide = prompt ("Squares per side. Max number is 100."); 
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