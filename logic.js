const container = document.querySelector('.container');
const button = document.querySelector('#refresh-button');
const rainbowMode = document.querySelector('#rainbow-mode');
let number = 16;



function promptUser(){
    let userNumber = prompt("What board size do you want? (e.g. type '3' for a '3x3', or '50' for a '50x50' grid)");
    return userNumber;
};


// Generate correct number of squares for etch-a-sketch container
function makeGrid(size, randomColors){

    let height = `${950/size}px`;
    let width = `${950/size}px`;
    let i=0;

    while(i < (size**2)){
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);
        i++;
    };

    // Setting height/width attributes for grid elements
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
    pixel.setAttribute('style', 'height:' + height + '; width: ' + width + ';');
        });

    (!randomColors) ? addCustomEventListeners(pixels, false) : addCustomEventListeners(pixels, true);
};

function addCustomEventListeners(pixels, randomColors){
    pixels.forEach((pixel) => {
        pixel.addEventListener('mousedown', () => {
            pixels.forEach((pixel) => {
                (randomColors == false) ? pixel.addEventListener('mouseover', changeColor) : pixel.addEventListener('mouseover', changeRandomColor);
            })
        });
    
        pixel.addEventListener('mouseup', () => {
            pixels.forEach((pixel) => {
                (randomColors == false) ? pixel.removeEventListener('mouseover', changeColor) : pixel.removeEventListener('mouseover', changeRandomColor);
            })
        });
    });
};

function changeColor(e){
    e.target.style.background = 'black';
};

function changeRandomColor(e){
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.background = randomColor;
};

function toggleButton(button){
    if (button.value == "ON"){
        button.value = "OFF";
    } else if (button.value == "OFF"){
        button.value = "ON";
    }
};

makeGrid(number);

button.addEventListener('click', () =>{
    makeGrid(promptUser());
});

rainbowMode.addEventListener('click', () =>{
    let pixels = document.querySelectorAll('.pixel');

    if(rainbowMode.value == "OFF"){
        toggleButton(rainbowMode);
        console.log(rainbowMode.value);
        addCustomEventListeners(pixels, true);
    } else if(rainbowMode.value == "ON"){
        toggleButton(rainbowMode);
        console.log(rainbowMode.value);
        addCustomEventListeners(pixels, false);
    }
});




