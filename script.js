const container = document.querySelector(".container");

function addDivs() {
    for(let i = 0; i < 16*16; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
}

addDivs();