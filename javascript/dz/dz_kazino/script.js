'use strict'

let money = document.querySelector('#money');
let stavka = document.querySelector('#stavka');
let drum = document.querySelectorAll('#drum img');
let prize = document.querySelector('#prize');
let btn = document.querySelector('#spin');
let btns = document.querySelectorAll('button');
let username = document.querySelector('h3');
let lastgame = document.querySelector('h4');

let imgs = ['img/pearl.gif', 'img/shark.gif', 
'img/octopus.gif', 'img/fish.gif', 'img/shell.gif', 
'img/star-magenta.gif', 'img/star-red.gif', ];

let prizes = [800, 200, 80, 40, 20, 10, 5, 2]
let res = [0, 0, 0];
 
function rotate(){
	for(let i in res) res[i] = Math.round(Math.random()*6);
	for(let i in res) drum[i].src = imgs[res[i]];
	while(res.indexOf(6)+1) res[res.indexOf(6)] = 5;
	if(res[0] == res[1] && res[0] == res[2]) return prizes[res[0]];
	else if(res.indexOf(5)+1){
		if(res[0]==res[1] || res[1]==res[2] || res[2]==res[0]) return prizes[6];
		else return prizes[7];
	}
	else return 0;
}

function main(){
	money.innerHTML -= parseInt(stavka.innerHTML);
	let win = parseInt(stavka.innerHTML) * rotate();
	prize.innerHTML = win;
	money.innerHTML = parseInt(money.innerHTML) + win;
}

console.log(btns)

btn.addEventListener('click', main);
for(let i = 0; i < 2; i++){
	btns[i].addEventListener('click', () => {
		stavka.innerHTML -= i ? -1 : 1;
	})
}

function setCookie(name, val, days){
	let cook = name + '=' + escape(val) + ';';
	if(days){
		let now = new Date();
		now.setDate(now.getDate()+days);
		cook +=  'expires=' + now.toUTCString() + ';';
	}
	document.cookie = cook;
}

function getCookie(name){
	let cook = document.cookie;
	let ptn = new RegExp('\\b'+name+'=','g');
	if( cook.search(ptn)+1 ){
		let pos1 = cook.indexOf('=', cook.search(ptn)) + 1;
		let pos2 = cook.indexOf(';', pos1);
		return unescape(pos2+1 ? cook.slice(pos1, pos2) : cook.slice(pos1));
	}else return '';
}

if(!getCookie('username')) setCookie('username', prompt('What is your name?'), 30);
username.innerHTML = 'Hello, ' + getCookie('username');
let now = new Date();
now = `Last game was ${now.getDate()}.${now.getMonth()+1 > 9 ? now.getMonth()+1 : '0'+(now.getMonth()+1)}.${now.getFullYear()}`;
if(!getCookie('lastgame')) lastgame.innerHTML = now;
else lastgame.innerHTML = getCookie('lastgame');
setCookie('lastgame', now, 30)