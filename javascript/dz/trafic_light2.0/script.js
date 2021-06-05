'use strict'
//				0		1		  2
let colors = ['red', 'yellow', 'green'];
let elem = document.querySelectorAll('div>div');
let text = document.querySelectorAll('div>div>p')[1];
let hour;
let s = 1000;
//---------------------------------------------------------------------
let off = () => { 
	for(let i = 0; i < 3; i++){elem[i].style.backgroundColor = '#ABABAB'}
}

let color = (i) => {
	elem[i].style.backgroundColor = colors[i];
}

let flash = (i, k) => {
	let inter = setInterval( () => {
		off();
		setTimeout( () => {color(i)}, 700);
	}, 1400);
	setTimeout( () => {
		clearInterval(inter);
		off();
	}, k*s);
}
let timer = (i, k) => {
	text.innerHTML = --k;
	text.style.color = colors[i];
	text.style.display = 'block';
	let inter = setInterval( () => {
		text.innerHTML = --k;
		if(k < 0){ 
			clearInterval(inter);
			text.style.display = 'none';
		}
	}, s)}

//---------------------------------------------------------------------
let trafic_light = () => {
	hour = new Date().getHours();
	//hour = 3;
	if(hour >= 22 || hour <= 4) { 
		flash(1, 59);
	}
	else{
		off();
		color(2);										//green
		timer(2, 33); 									
		setTimeout( () => {	flash(2, 5.4)}, 27*s); 		//flashing green
		setTimeout( () => {	color(1)}, 		33*s); 		//yellow
		setTimeout( () => {	off();color(0);
							timer(0, 23)},	35*s); 		//red
		setTimeout( () => {	color(1)}, 		59*s); 		//red+yellow
	}
}

trafic_light();
let main = setInterval(trafic_light, 60*s);

