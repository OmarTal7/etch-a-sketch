const container = document.querySelector('.container');
let number = prompt("What board size do you want? (e.g. type '3' for a '3x3', or '50' for a '50x50' grid)");
let height = `${500/number}px`;
let width = `${500/number}px`;


// Generate correct number of squares for etch-a-sketch container
let i=0;
while(i < (number**2)){
    const div = document.createElement('div');
    div.classList.add('pixel');
    container.appendChild(div);
    i++;
};


// Setting height and width attributes
const pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {
    pixel.setAttribute('style', 'height:' + height + '; width: ' + width + ';');
});


function changeColor(e){
    e.target.style.background = 'black';
};

pixels.forEach((pixel) => {
    pixel.addEventListener('mousedown', () => {
        pixels.forEach((pixel) => {
            pixel.addEventListener('mouseover', changeColor);
        })
    });

    pixel.addEventListener('mouseup', () => {
        pixels.forEach((pixel) => {
            pixel.removeEventListener('mouseover', changeColor);
        })
    });
});