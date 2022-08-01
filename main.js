var gridSize = document.getElementById('slider').value
var squareSize = 500/gridSize;
var mode = "color";
var colorInput = document.querySelector('#colorpicker');
var colorButton = document.getElementById("color")
var rainbowButton = document.getElementById("rainbow")

// read the color picker
colorInput.addEventListener('input', () =>{
  colorInput.style.setProperty('--color',colorInput.value)
  mode = "color";
  colorButton.classList.add('select');
  rainbowButton.classList.remove('select');
  startPainting(mode)
    });

// change to "color" mode
colorButton.onclick = function() {
  mode = "color";
  this.classList.add('select');
  rainbowButton.classList.remove('select');
  startPainting(mode);
}

// change to "rainbow" mode
rainbowButton.onclick = function() {
  mode = "rainbow";
  this.classList.add('select');
  colorButton.classList.remove('select');
  startPainting(mode);
}

// reset the grid
var clearButton = document.getElementById("clear").onclick = function() {
  gridReset();
  gridCreation(gridSize);
  startPainting(mode);
}

// change the size of the grid
var slider = document.getElementById("slider");
slider.onchange = (e) => changeSize(e.target.value)

function changeSize(value) {
  gridSize = value;
  squareSize = 500/gridSize;
  document.getElementById("sliderText").textContent = gridSize+
        " x "+gridSize;
  gridReset();
  gridCreation(gridSize);
  startPainting(mode);

}

// create the grid
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

// reset the grid
function gridReset() {
  let div2 = document.getElementById('grid');
  var child = div2.lastElementChild; 
    while (child) {
      div2.removeChild(child);
      child = div2.lastElementChild;
    }
  
}

// painting function
function startPainting(mode) {
    const gridItems = document.querySelectorAll('.square');
      
    gridItems.forEach((item) => {
      item.count = 0;
      item.addEventListener('mouseenter', (a) => {
        if (mode === 'color') {
          a.target.style.backgroundColor = colorInput.value;
          a.target.style.opacity = 1;
        } else {
          const randomR = Math.floor(Math.random() * 256)
          const randomG = Math.floor(Math.random() * 256)
          const randomB = Math.floor(Math.random() * 256)
          a.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
        }
      });
    });
}


gridCreation(gridSize);
startPainting(mode);
