const container = document.querySelector('.container');
const button = document.querySelector('#refresh-button');
const rainbowMode = document.querySelector('#rainbow-mode');
let number = 16;
let gridParts = []; 
let toggle = false;


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

function refreshGrid(){
    gridParts.forEach((part) => {
        part.replaceWith(part.cloneNode(true))
    })
};

function blackCo(e){
    e.target.style.backgroundColor = 'black';
};

function rainboCo(e){
    let randomHash = "#" + Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = randomHash;
};

function colorBlack(){
    gridParts.forEach((part) => {
    
        part.addEventListener('mousedown', () =>{
            gridParts.forEach((part) => {
                part.addEventListener('mouseover', blackCo)
                });
            });
        

        part.addEventListener('mouseup', () => {
            gridParts.forEach((part) => {
                part.removeEventListener('mouseover', blackCo);               
            });
        });
    });
}; 

function colorRainbow(){
    gridParts.forEach((part) => {
    
        part.addEventListener('mousedown', () =>{
            gridParts.forEach((part) => {
                part.addEventListener('mouseover', rainboCo)
                });
            });
        

        part.addEventListener('mouseup', () => {
            gridParts.forEach((part) => {
                part.removeEventListener('mouseover', rainboCo);               
            });
        });
    });
}; 

makeGrid(16);
colorBlack();


rainbowMode.addEventListener('click', () =>{
    if(!toggle){
        toggle = true;
        console.log(toggle)
        refreshGrid();
        colorRainbow();
    } else{
        toggle = false;
        console.log(toggle)
        refreshGrid();
        colorBlack();
    }
})











