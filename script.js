let container = document.getElementById("container");
let row;
let box;

for(let i = 0; i < 16; i++) {
    row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < 16; j++) {
        box = document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
    }
    container.appendChild(row);
}