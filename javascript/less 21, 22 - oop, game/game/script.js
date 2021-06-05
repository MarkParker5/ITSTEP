'use strict'


let red = new Hero('red', 20, 1000);
let bomb = new Hero('bomb', 10, 1200);
let blue = new Hero('blue', 50, 700);
let pig = new Hero('pig', -100, 1000);
let btnPlay = document.getElementById('start');
let clock = document.getElementById('time');
let score = document.getElementById('score');
let p = document.querySelectorAll('p');
let ss=0;
let tgame = 10;
let main;
let heroes = [red, bomb, blue, pig];

function Hero(id, points, timel){
	 let elem = document.getElementById(id);
	 let moveI;
	 let moveHero = () => {
	 	elem.style.left = Math.round(Math.random()*95) + 'vw';
	 	elem.style.top = Math.round(Math.random()*95) + 'vh';
	 	elem.src = `img/${id}.png`;
	 }
	 let kick = function(){
	 	ss += points;
	 	score.innerHTML = 'Score: ' + ss;
	 	elem.src = 'img/bang.png';
	 }
	 this.move = function(){ moveI = setInterval(moveHero, timel)};
	 this.stop = function(){ 
	 	clearInterval(moveI);
	 	elem.style.left = -100 + 'vw';
	  };
	 elem.addEventListener('click', kick);
}

function start(){
	btnPlay.style.display = 'none';
	document.body.style.backgroundImage = 'url(img/fon.jpg)';
	ss = 0;
	tgame = 12;
	score.innerHTML = 'Score: ' + ss;
	clock.innerHTML = tgame--;
	for(let i = 0; i < p.length; i++){
		p[i].style = 'display: block;';
	}
	for(let i in heroes) heroes[i].move();
	main = setInterval(game, 1000);
}

function stop(){
	for(let i in heroes) heroes[i].stop();
	clearInterval(main);
	for(let i = 0; i < p.length; i++){
		p[i].style = 'display: none;';
	}
	btnPlay.style.display = 'block';
}

function game(){
	clock.innerHTML = tgame--;
	if(tgame < 0){
		document.body.style.backgroundImage = 'url(img/lose.jpg)';
		stop();
	}
	else if(ss >= 120){
		document.body.style.backgroundImage = 'url(img/win.jpg)';
		stop();
	}
}

btnPlay.addEventListener('click', () => {
	start();
})
