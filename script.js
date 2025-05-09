const container = document.querySelector(".container");
let numberOfBoxes = 100;


function createRow(){
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${numberOfBoxes}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfBoxes}, 1fr)`;
    for (i = 0; i < numberOfBoxes * numberOfBoxes; i++){
        let gridBox = document.createElement("div");
        gridBox.classList = "gridBox";
        gridBox.addEventListener("mouseenter", e => {
            gridBox.style.backgroundColor = "black";
        });
        container.appendChild(gridBox);
    }
}

const changeGrid = document.querySelector(".changeGrid");
changeGrid.addEventListener("click", e => {
    userInput = prompt("Enter a number between 1 to 100");
    newSize = parseInt(userInput);
    numberOfBoxes = newSize;
    console.log(numberOfBoxes);
    createRow();
})

createRow();
