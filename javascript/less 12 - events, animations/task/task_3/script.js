'use strict'

let elems = document.getElementsByTagName('div');
let txt = document.getElementsByTagName('p');
let colors = [0, 0, 0];


for(let i = 0; i < 3; i++){
	elems[i].addEventListener('wheel', (e) => {
		if(e.deltaY>0) colors[i]++;
		if(e.deltaY<0) colors[i]--;
		if(colors[i]>255) colors[i] = 255;
		if(colors[i]<0) colors[i] = 0;
		txt[i].innerHTML = colors[i];
		document.getElementById('div3').style.background = `rgb(${colors[0]},${colors[1]},${colors[2]})`
	})
}
