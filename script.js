let panel = document.getElementById("panel");
let sizeButton = document.getElementById("size");
let size = 16;

let isDrawing = false;


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
    panel.appendChild(row);
}

let boxes = document.getElementsByClassName("box");

for(let i = 0; i < boxes.length; i++){
    
    boxes[i].addEventListener("mousedown", (event) => {
        event.target.style['background-color'] = "black";
        isDrawing = true;
    })
    
    boxes[i].addEventListener("mousemove", (event) => {
        if(isDrawing) {
            event.target.style['background-color']  = "black"; 
        }
    })

    boxes[i].addEventListener("mouseup", (event) => {
        isDrawing = false;
    })
}

sizeButton.addEventListener("click", () => {
    prompt("")
})