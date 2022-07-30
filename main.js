var gridSize = document.getElementById('slider').value
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

function startPainting(mode) {
    const gridItems = document.querySelectorAll('.square');
      
    gridItems.forEach((item) => {
      item.count = 0;
      item.addEventListener('mouseenter', (a) => {
        if (mode === 'classic' || currentMode === 'classic' || currentMode === '') {
          a.target.style.backgroundColor = '#707070';
          a.target.style.opacity = 1;
        } 
      });
    });
}


gridCreation(gridSize);
startPainting('classic');
