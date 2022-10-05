//Access the div container
const CONTAINER = document.querySelector(".container");

//Default squares per side
let squaresPerSide = 16;

//Creates grid based and changes color of cells
for (let i = 1; i <= Math.pow(squaresPerSide, 2); i++) {
    let CELL = document.createElement("div");
    CELL.addEventListener("mouseover", () => {
        CELL.style.backgroundColor = "black";
    }); 
    CONTAINER.appendChild(CELL);
}

//Asks for a number of cells per side to create new grid
document.querySelector("button").addEventListener("click",() => {
    do {
        squaresPerSide = prompt ("Squares per side. Max number is 100.");
        squaresPerSide = Number(squaresPerSide);     
    } while (squaresPerSide > 100);
    
})