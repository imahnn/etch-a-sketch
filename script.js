const container = document.querySelector(".container");
const numberOfBoxes = 16;
container.style.gridTemplateColumns = `repeat(${numberOfBoxes}, 1fr)`;

function createRow(){
    for (i = 0; i < numberOfBoxes; i++){
        let gridBox = document.createElement("div");
        container.appendChild(gridBox);
        gridBox.style.backgroundColor = "red";
        gridBox.style.aspectRatio = "1/1";
        gridBox.style.padding = "auto";
        gridBox.style.border = "2px solid black";
    }
}


for (let i = 0; i < numberOfBoxes; i++){
    createRow();
}
