function createGrid(size) {
    let grid = document.querySelector('#grid-container');
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < Math.pow(size, 2); i++) {
        let gridItem = document.createElement('div')
        
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add('drawn')
        });
        grid.append(gridItem);
    }
}

function updateGrid(size) {
    let grid = document.querySelector('#grid-container');

    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }

    createGrid(size);
}

function initiateSettings() {
    const slider = document.querySelector('#slider');
    const sliderDisplayValue = document.querySelector('#slider-value');
    const clearButton = document.querySelector('#clear-button');

    sliderDisplayValue.textContent = `${slider.value} x ${slider.value}`;
    slider.addEventListener('input', () => {
        sliderDisplayValue.textContent = `${slider.value} x ${slider.value}`;
    });
    slider.addEventListener('change', () => updateGrid(slider.value));
    clearButton.addEventListener('click', () => updateGrid(slider.value));
}

initiateSettings();

// TODO: create initiate function that gets the initial grid value from the slider? and/or set slider initial value?
createGrid(64);