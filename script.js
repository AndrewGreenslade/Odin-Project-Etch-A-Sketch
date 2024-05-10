//runs function to create a default 16 x 16 grid
createDivs(16);

//creates a new grid
function createDivs(size) {
    const containerDiv = document.querySelector("#containerDiv");

    for (let x = 0; x < size; x++) {
        var column = document.createElement("div");
        column.classList.add("column");
        containerDiv.appendChild(column);

        for (let y = 0; y < size; y++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.addEventListener('mouseenter', () => { row.style.backgroundColor = 'black' })

            column.appendChild(row);
        }
    }
}

//Remove all div's that are children of container div
function removeDivs() {
    const containerDiv = document.querySelector("#containerDiv");

    containerDiv.replaceChildren();
}

//re-adds div's to empty container div,i.e. making a new grid
function changeGridSize() {
    let size = document.getElementById("gridSizeInput").value;
    const containerDiv = document.querySelector("#containerDiv");

    containerDiv.replaceChildren();
    createDivs(size);
}

//resets grid to white background without changing grid size
function ResetGrid() {
    var elms = document.querySelectorAll(".row");

    for (var i = 0; i < elms.length; i++)
        elms[i].style.backgroundColor = 'white';
}