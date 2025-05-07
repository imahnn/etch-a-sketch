const container = document.querySelector(".container");
const numberOfBoxes = 100;
container.style.gridTemplateColumns = `repeat(${numberOfBoxes}, 1fr)`;
let gridBox = document.createElement("div");
function createRow(){
    for (i = 0; i < numberOfBoxes; i++){
        let gridBox = document.createElement("div");
        gridBox.classList = "gridBox";
        gridBox.addEventListener("mouseenter", e => {
            gridBox.style.backgroundColor = "black";
        });
        container.appendChild(gridBox);
    }
}

for (let i = 0; i < numberOfBoxes; i++){
    createRow();
}
