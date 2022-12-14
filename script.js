// Access the div container
const CONTAINER = document.querySelector('.container');

// Default squares per side
let squaresPerSide = 16;

// Color modes
let modeBlack = true;
let modeRandom = false;
const COLORBLACK = document.querySelector('#color-black');
const COLORRANDOM = document.querySelector('#color-random');

// Initialize larger black color and border
COLORBLACK.style.transform = 'scale(1.5, 1.5)';
COLORBLACK.style.border = '3px grey solid';

// Paint function
function paint() {
    if (modeBlack) {
        this.style.backgroundColor = 'black';
        this.style.border = '1px black solid';
    } else if (modeRandom) {
        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.style.backgroundColor = randomColor;
        this.style.border = `1px ${randomColor} solid`;
    }
}

// Creates grid based and changes color of cells
function createGrid() {
    for (let i = 1; i <= squaresPerSide ** 2; i += 1) {
        const CELL = document.createElement('div');
        CELL.style.backgroundColor = 'white';
        CELL.style.border = '1px lightGrey solid';
        CELL.addEventListener('mouseover', paint);
        const calculation = 800 / squaresPerSide;
        CELL.style.width = `${calculation}px`;
        CELL.style.height = `${calculation}px`;
        CONTAINER.appendChild(CELL);
    }
}

// Calls function to create the grid
createGrid();

// Chooses black color
COLORBLACK.addEventListener('click', () => {
    modeBlack = true;
    modeRandom = false;
    COLORBLACK.style.transform = 'scale(1.5, 1.5)';
    COLORBLACK.style.border = '3px grey solid';
    COLORRANDOM.style.transform = 'scale(1, 1)';
    COLORRANDOM.style.border = 'none';
});

// Chooses random color
COLORRANDOM.addEventListener('click', () => {
    modeBlack = false;
    modeRandom = true;
    COLORRANDOM.style.transform = 'scale(1.5, 1.5)';
    COLORRANDOM.style.border = '3px grey solid';
    COLORBLACK.style.transform = 'scale(1, 1)';
    COLORBLACK.style.border = 'none';
});

function clearGrid() {
    // Clears the old grid
    while (CONTAINER.firstChild) {
        CONTAINER.removeChild(CONTAINER.firstChild);
    }
    // Creates the grid
    createGrid();
}

// Clears the grid
document.querySelector('#clear-grid').addEventListener('click', clearGrid);

// Asks for a number of cells per side to create new grid
document.querySelector('#change-grid-size').addEventListener('click', () => {
    do {
        squaresPerSide = prompt('Squares per side. Max number is 100.');
    } while (
        squaresPerSide > 100 ||
        squaresPerSide < 2 ||
        Number.isNaN(squaresPerSide)
    );

    // Calls the functions to clear the grid
    clearGrid();
});
