'use strict'
let body = document.body

/*
let circle = document.createElement('div');
body.append(circle)

circle.addEventListener('click', (event) => {
	event.cancelBubble = true;                  //!!!!!!!!!!!!!!!!!!
	console.log(event);
})

body.addEventListener('click', () => {
	circle.style.left = event.clientX-100+'px';
	circle.style.top = event.clientY-100+'px';
})
*/
///////////////////////////////////////////////////////////////////////
let lug = document.getElementById('lug');

lug.addEventListener('click', (event) => {
	let x = Math.round(Math.random()*4+1);
	let fl = document.createElement('div');
	fl.style.background = `url(img/fl_${x}.png)`;
	fl.style.left = event.clientX-25+'px';
	fl.style.top = event.clientY-25+'px';
	lug.append(fl)
})


let link = document.links.link_a; //getElementsByTagName('a')['link_a'];

link.addEventListener('click', () => {
	//document.location.replace("http://youtube.com");
	event.returnValue = false;
})

////////////////////////////////////////////////////////////////////////

let now = new Date();
let king = new Date('11/22/1963'); //Date('1963/11/22');

//let bd = new Date(prompt('Enter your birthday', 'month/day/year'));
let bd = king

//let age = Math.round((now-bd)/1000/60/60/24/365);
let age = now.getMonth > bd.getMonth ? now.getYear - bd.getYear : now.getYear - bd.getYear - 1

alert(age)

