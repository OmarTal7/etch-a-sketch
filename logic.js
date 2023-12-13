const container = document.querySelector('.container');
const button = document.querySelector('#refresh-button');
const rainbowMode = document.querySelector('#rainbow-mode');
let number = 16;
let gridParts = []; 


function promptUser(){
    let userNumber = prompt("What board size do you want? (e.g. type '3' for a '3x3', or '50' for a '50x50' grid)");
    return userNumber;
};

// Generate correct number of squares for etch-a-sketch container
function makeGrid(size){

    let height = `${600/size}px`;
    let width = `${600/size}px`;
    let i=0;

    while(i < (size**2)){
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.setAttribute('style', 'height:' + height + '; width: ' + width + ';');
        container.appendChild(div);
        i++;
    };

    gridParts = document.querySelectorAll('.pixel');
};

function colorBlack(){
    gridParts.forEach((part) => {
        part.addEventListener('mouseover', () =>{
            part.style.background = 'black';
        })
    });
};

function drawBlack(){
    gridParts.forEach((part) =>{
        part.addEventListener('mousedown', colorBlack);

        part.addEventListener('mouseup', ()=> {
            part.removeEventListener('mousedown', colorBlack);
        })
    });
};


makeGrid(40);
drawBlack();







// function changeRandomColor(e){
//     let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     e.target.style.background = randomColor;
// };




