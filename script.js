const container = document.querySelector(".container");

function addDivs() {
    for(let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
    }
}

addDivs();