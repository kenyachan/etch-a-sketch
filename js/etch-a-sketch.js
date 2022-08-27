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

function draw(gridItem) {
    gridItem.target.classList.add('drawn');
}

createGrid(64);