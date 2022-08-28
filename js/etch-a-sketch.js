function createGrid(size) {
    let grid = document.querySelector('#grid-container');
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < Math.pow(size, 2); i++) {
        let gridItem = document.createElement('div')
        
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', draw);
        grid.append(gridItem);
    }
}

function draw() {
    this.classList.add('drawn');
}

function updateSliderValueDisplay() {    
    let sliderDisplayValue = document.querySelector('#slider-value');

    sliderDisplayValue.textContent = `${this.value} x ${this.value}`;
}

function updateGrid(size) {
    let grid = document.querySelector('#grid-container');

    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }

    createGrid(size);
}

function initiateSettings() {
    let slider = document.querySelector('#slider');
    slider.addEventListener('input', updateSliderValueDisplay);
    slider.addEventListener('change', updateGrid(slider.value));

    let sliderDisplayValue = document.querySelector('#slider-value');
    sliderDisplayValue.textContent = `${slider.value} x ${slider.value}`;

    let clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', () => updateGrid(slider.value));
}

initiateSettings();
