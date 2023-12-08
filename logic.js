const container = document.querySelector('.container');
let number = prompt("how many?");
let height = `${500/number}px`;
let width = `${500/number}px`;


let i=0;
while(i < (number**2)){
    const div = document.createElement('div');
    div.classList.add('pixel');
    // div.textContent = "pixel";
    container.appendChild(div);
    i++;
};

const pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel) => {
    pixel.setAttribute('style', 'height:' + height + '; width: ' + width + ';');
});



pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', (e) =>{
        e.target.style.background = 'black';
    });
});