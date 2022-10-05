//Access the div container
const container = document.querySelector(".container");

//Create 256 boxes in 16 rows and 16 columns
for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
    
}