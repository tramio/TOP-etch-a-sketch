const container = document.querySelector(".container");
let squareNumber;

function addDivs(squareNumber) {
    container.style.gridTemplateRows = `repeat(${squareNumber}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${squareNumber}, 1fr)`;

    for(let i = 0; i < squareNumber*squareNumber; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
}

addDivs(16);

let squares = document.querySelectorAll(".square");

function makeThemListen() {
    squares.forEach(square => {
        square.addEventListener("mouseover", function(e) {
            square.classList.add("hovered");
        });
    });
}

makeThemListen();

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearGrid);

function clearGrid(event) {
    squares.forEach(square => {
        square.classList.remove("hovered");
    });
    squareNumber = prompt("How many squares per side do you want?", "Yes");
    while (squareNumber >= 100) {
        squareNumber = prompt("Less please!");
    }
    addDivs(squareNumber);
    squares = document.querySelectorAll(".square");
    makeThemListen();
}