var gridSize = document.getElementById('slider').value
var squareSize = 500/gridSize;
var colorInput = document.querySelector('#colorpicker');

colorInput.addEventListener('input', () =>{
    });




var resetButton = document.getElementById("reset").onclick = function() {
      gridReset();
      gridCreation(gridSize);
      startPainting('classic');
  }

var slider = document.getElementById("slider");
slider.onchange = (e) => changeSize(e.target.value)

function changeSize(value) {
  gridSize = value;
  squareSize = 500/gridSize;
  document.getElementById("sliderText").textContent = "grid size: "+gridSize+
        " x "+gridSize;
  gridReset();
  gridCreation(gridSize);
  startPainting('classic');

}


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

function gridReset() {
  let div2 = document.getElementById('grid');
  var child = div2.lastElementChild; 
    while (child) {
      div2.removeChild(child);
      child = div2.lastElementChild;
    }
  
}

function startPainting(mode) {
    const gridItems = document.querySelectorAll('.square');
      
    gridItems.forEach((item) => {
      item.count = 0;
      item.addEventListener('mouseenter', (a) => {
        if (mode === 'classic' || currentMode === 'classic' || currentMode === '') {
          a.target.style.backgroundColor = colorInput.value;
          a.target.style.opacity = 1;
        } 
      });
    });
}


gridCreation(gridSize);
startPainting('classic');
