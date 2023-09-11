let panel = document.getElementById("panel");
let sizeButton = document.getElementById("size");
let boxes = document.getElementsByClassName("box");
let defaultSize = 16;

let isDrawing = false;

createGrid(defaultSize);

function createGrid(gridSize) {
    
    let row;
    let box;

    panel.innerText = ""

    for(let i = 0; i < gridSize; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < gridSize; j++) {
            box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        panel.appendChild(row);
    }

    addGridEvents();

}

function addGridEvents () {
    

    for(let i = 0; i < boxes.length; i++){
        
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        boxes[i].addEventListener("mousedown", (event) => {
            event.target.style['background-color'] = `rgb(${r},${g},${b})`;
            isDrawing = true;
        })
        
        boxes[i].addEventListener("mousemove", (event) => {
            if(isDrawing) {
                event.target.style['background-color'] = `rgb(${r},${g},${b})`;
            }
        })
    
        boxes[i].addEventListener("mouseup", (event) => {
            isDrawing = false;
        })
    }
}

sizeButton.addEventListener("click", () => {
    createGrid(parseInt(prompt("Enter the size of the grid")));
    

})