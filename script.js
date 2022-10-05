//Access the div container
const CONTAINER = document.querySelector(".container");

//Create 256 boxes in 16 rows and 16 columns
for (let i = 1; i <= 256; i++) {
    let CELL = document.createElement("div");
    CELL.addEventListener("mouseover", () => {
        CELL.style.backgroundColor = "black";
    }); 
    CONTAINER.appendChild(CELL);
}