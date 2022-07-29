var gridSize = 33;
var squareSize = 500/gridSize;

function gridCreation(size) {
    for (let i=1; i <=size; i++){
        let div1 = document.getElementById('grid');
        const divContainer = document.createElement("div");
        divContainer.classList.add("row");
        divContainer.classList.add("row"+i);
        div1.appendChild(divContainer);
        for (j=1; j<=size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.width = squareSize+"px";
            square.style.height = squareSize+"px";
            divContainer.appendChild(square);
        }

    }
}

gridCreation(gridSize);

