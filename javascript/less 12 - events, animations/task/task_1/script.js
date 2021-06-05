'use strict'

let elem = document.getElementById('room');
let elem2 = document.getElementById('radio');
let elem3 = document.getElementById('second');
let elem4 = document.getElementById('col');

let x0 = 0, x1 = 0, x2 = 0, x3 = 0;

elem.addEventListener('wheel', (e) => {
	clearInterval(auto);
	x0 += e.deltaY/4;
	x1 += e.deltaY/3;
	x2 += e.deltaY/2;
	x3 += e.deltaY;
	elem.style.backgroundPositionX = x0 + 'px';
	elem2.style.backgroundPositionX = x1 + 'px';
	elem3.style.backgroundPositionX = x2 + 'px';
	elem4.style.backgroundPositionX = x3 + 'px';
})

let auto = setInterval(() => {
	x0 -= 1;
	x1 -= 2;
	x2 -= 3;
	x3 -= 4;
	elem.style.backgroundPositionX = x0 + 'px';
	elem2.style.backgroundPositionX = x1 + 'px';
	elem3.style.backgroundPositionX = x2 + 'px';
	elem4.style.backgroundPositionX = x3 + 'px';
}, 10)