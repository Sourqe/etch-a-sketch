// get the container containing all squares
const container = document.querySelector('.container');

// set the side and the amount of squares
// side = squares^2
var squares = 12;
var side = 144;

// create the grid
function createGrid() {
    // dynamically set the css style for the grid
    container.style.cssText = 'grid-template-columns: repeat(' + squares + ', 1fr); grid-template-rows: repeat(' + squares + ',1fr)';
    // loop through all squares that have to be created
    for (let i = 0; i < side; i++) {
        // create a square, make it white, and append it
        var square = document.createElement('div');
        square.classList.add('white');
        container.appendChild(square);
    }
}

// make the square either black or white depending on the state
function setSquareBlack() {
    // get the square to change the color of
    var changeColor = document.querySelectorAll('.white');
    for (let i = 0; i < changeColor.length; i++) {
        // when hovering over a square
        changeColor[i].addEventListener('mouseover', function (e) {
            // remove and toggle styles
            e.target.removeAttribute('style');
            e.target.classList.toggle('black');
        });
    }
}

// add an event listener to our reset grid button
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    squares = prompt("Enter a number between 1 and 16 to specify the amount of squares per side!");
    // check if the input is valid
    if (squares != null && squares > 1 && squares <= 16) {
        side = squares * squares;
        // create the new grid using side and squares
        createGrid();
    } else {
        alert("Please enter a valid number next time!");
    }

})

// call the initial functions to create the grid
createGrid();
setSquareBlack();
