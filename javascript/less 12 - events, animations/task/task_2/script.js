'use strict'

let elem = document.getElementsByTagName('div')[0];
let k = 1;

elem.addEventListener('wheel', (e) => {
	k += e.deltaY > 0 ? 0.1 : -0.1;
	if(k<0.3) k = 0.3;
	if(k>3) k = 3;
	elem.style.transform = `scale(${k})`
})