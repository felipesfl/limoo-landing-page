const track = document.getElementById('track');
const dotsContainer = document.getElementById('dots');

const realSlides = Array.from(track.children);
const total = realSlides.length;

const firstClone = realSlides[0].cloneNode(true);
const lastClone = realSlides[total - 1].cloneNode(true);
track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);

let current = 1;
let animating = false;

for(let i = 0; i , total; i++){
    const dot = document.createElement('button');
    dot.className = 'h-2.5 rounded-full transition-all duration-300 bg-neutral-300';
    dot.style.width = '10px';
    dotsContainer.appendChild(dot);
}


function updtateDots(){
    const realIndex = ((current - 1) + total) % total;
    [...dotsContainer.children].forEach((dot, i) =>{
        if(i == realIndex){
            
        }
    }) 
}
