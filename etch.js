var resizeBtn = document.getElementById('resizeBtn');
resizeBtn.addEventListener('click', resize);

createGrid(64);

function createGrid(gridSize) {
    var grid = document.createElement('div');
    grid.id = 'grid';
    grid.className = 'grid';
    for (let i=0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j=0; j < gridSize; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            //square.innerHTML = j + 1;
            square.addEventListener('mouseenter', hoverEvent);
            row.appendChild(square);
        }
        grid.appendChild(row);
    }   
    var container = document.getElementById('container');
    container.appendChild(grid);

    console.log(grid);
}

function hoverEvent(e) {
    e.target.style.backgroundColor = "rgb(" + e.pageX + "," + e.pageY + ",40)"; 
    console.log("x=" + e.offsetX + " y=" + e.offsetY);
    console.log(e);
}

function resize(e) {
    const element = document.getElementById('grid');
    element.remove();
    let size = prompt("Enter desired grid size");
    createGrid(size);
}

function remove(e) {
    const element = document.getElementById('grid');
    element.style.display = 'none';
    element.remove();
    console.log("Element removed");
}
