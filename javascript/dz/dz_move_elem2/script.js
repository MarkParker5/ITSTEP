'use strict'

let elem = document.querySelector('#head');
let x = 0;

document.body.addEventListener('wheel', (e) => {
	x += e.deltaY > 0 ? 10 : -10;
	elem.style.backgroundPositionX = x + 'px';
})