'use strict'

let big = document.createElement('div');
big.id = 'zoom';
document.body.append(big)

let img = document.querySelector('img');
let imgH = parseInt(img.getBoundingClientRect().width);
let imgW = parseInt(img.getBoundingClientRect().height);

img.addEventListener('mouseover', () => {
	big.style.display = 'block';
	big.style.background = `url(${img.dataset.big})`;
})
img.addEventListener('mousemove', (e) => {
	let x = e.offsetX/imgW*100;
	let y = e.offsetY/imgH*100;
	big.style.backgroundPosition = `${x}% ${y}%`;
})
img.addEventListener('mouseleave', () => {
	big.style.display = 'none';
})