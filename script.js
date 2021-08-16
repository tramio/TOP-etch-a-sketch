const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".gameOptions");
let squareNumber;
let gameMode = "normalMode";
let defaultFill = "cornsilk";

buttons.forEach((button) => {
    button.addEventListener("click", () => newGame(button.id));
})

function addDivs(squareNumber) {
    container.style.gridTemplateRows = `repeat(${squareNumber}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${squareNumber}, 1fr)`;

    for(let i = 0; i < squareNumber*squareNumber; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.background = defaultFill;
        container.appendChild(div);
    }
}

addDivs(16);

let squares = document.querySelectorAll(".square");

function newGame(gameMode) {
    clearGrid();
    squares.forEach(square => {
        square.addEventListener("mouseover", function(e) {
            switch (gameMode) {
                case "normalMode":
                default:
                    this.style.background = "cornflowerblue";
                    break;
                case "rainbowMode":
                    this.style.background = `rgb(${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)}, ${Math.floor(Math.random()*255+1)})`;
                    break;
                case "gradientMode":
                    let currentOpacity = Number(this.style.background.slice(-4, -1));
                    if (currentOpacity < 1) {
                        this.style.background = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                        this.classList.add = "gradientFill";
                    }
                    else if (this.classList = "gradientFill" && this.style.background == "rgb(0, 0, 0)") {
                        return;
                    }
                    else {
                        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
                    }
                    break;
            }
        });
    });
}

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", clearGrid);

function clearGrid(event) {
    squares.forEach(square => {
        square.style.background = defaultFill;
    });
}

const resizeBtn = document.getElementById("resizeBtn");
resizeBtn.addEventListener("click", resetGrid)

function resetGrid(event) {
    squareNumber = prompt("How many squares per side do you want?", "Yes");
    while (squareNumber >= 100 || isNaN(squareNumber)) {
        squareNumber = prompt("Please enter a number under 100!");
    }
    addDivs(squareNumber);
    squares = document.querySelectorAll(".square");
    squares.style.background = defaultFill;
};