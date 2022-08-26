function createGrid(size) {
    let grid = document.querySelector('#grid-container');
    
    grid.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;

    for (let i = 0; i < size; i++) {
        let gridItem = document.createElement('div')
        
        gridItem.classList.add('grid-item');
        grid.append(gridItem);
    }

}

function isSquare(number) {
    if (number < 0) return false;

    return Number.isInteger(Math.sqrt(number)) ? true : false;
}

createGrid(4096);
