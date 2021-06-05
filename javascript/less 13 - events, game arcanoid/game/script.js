'use strict'


let ball = document.getElementById('ball');
let stick = document.getElementById('stick');
let field = document.getElementById('field');
let health_txt = document.getElementById('health');
let score_txt = document.getElementById('score');
let lvl_txt = document.getElementById('lvl');

let height = field.getBoundingClientRect().height;
let width = field.getBoundingClientRect().width;
let ball_size = ball.getBoundingClientRect().width;
let stick_size = stick.getBoundingClientRect().width;

let x = parseInt(width/2);
let y = height-150;
let right = -1;
let bottom = -1;
let stick_pos = x - stick_size/2;
stick.style.left = stick_pos  + 'px';
ball.style.left = x - ball_size/2 + 'px';
ball.style.top = y + 'px';

let inter;

let speed = 10;
let health = 3;
let score = 0;
let score2 = 0;
let lvl = 0;

let bricks = [];
let brick
let bricks_count = 10;

//////////////////////////////////////////////////////////////////////
let start = () => {
	x = parseInt(width/2);
	y = height-150;
	right = -2;
	bottom = -2;
	stick_pos = x - stick_size/2;
	stick.style.left = stick_pos  + 'px';
	ball.style.left = x - ball_size/2 + 'px';
	ball.style.top = y + 'px';
	setTimeout( () => {inter = setInterval('move()', speed)}, 1000)}


let move = () => {
	x += right;
	y += bottom;
	ball.style.left = x + 'px';
	ball.style.top = y + 'px';
	check_colision();
	bot() 												// <--- bot
}

let check_colision = () => {
	if(x <= 0 || x >= width - ball_size){ //left*right wall
		right *= -1;
	}
	else if(y <= 0){ //top
		bottom *= -1;
	}
	else if(y < height - 120 && y >= height - 125 && x >= stick_pos-ball_size && x <= stick_pos + stick_size+ball_size){ //stick
		bottom *= -1
	}
	else if(y > height - ball_size){ //bottom
		lose();
	}
	else if(y < 151+ball_size){ //bricks
		brick = Math.floor((x+ball_size/2)/50) + Math.floor((y-70) / 20)*10;
		if(brick in bricks){
		if(bricks[brick].style.display != 'none'){
			bricks[brick].style.display = 'none';
			bottom *= -1;
			score += 100;
			score2 += 100;
			score_txt.innerHTML = 'Score: ' + score;
			if(score2 == bricks_count*100) next_lvl();
		}}
	}
}

let lose = () => {
	x = parseInt(width/2);
	y = height-150;
	right = -1;
	bottom = -1;
	clearInterval(inter);
	health--;
	health_txt.innerHTML = 'Health: ' + health;
	if(health > 0) start();
	else setTimeout('over()', 1000);
}

let build = () => {
	for(let i = 0; i < bricks_count; i++){
		let new_brick = document.createElement('div');
		new_brick.className = 'brick';
		new_brick.style.left = 50*i%500 + 'px';
		new_brick.style.top = 70+20*Math.floor(i/10) + 'px';
		new_brick.style.background = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
		field.append(new_brick);
	}
	bricks = document.getElementsByClassName('brick')
}

let over = () => {
	clearInterval(inter);
	document.write('Game Over :(')
}

let next_lvl = () => {
	lvl++;
	speed = 5;
	health++;
	score2 = 0;
	bricks_count += 10;
	lvl_txt.innerHTML = 'Level: ' + lvl;
	health_txt.innerHTML = 'Health: ' + health;
	clearInterval(inter);
	build();
	start()
}

let bot = () => {
	stick_pos = x - stick_size/2;
	if(stick_pos < 0) stick_pos = 0;
	if(stick_pos > width - stick_size) stick_pos = width - stick_size;
	stick.style.left = stick_pos  + 'px';
}
//////////////////////////////////////////////////////////////////////


field.addEventListener('wheel', (e) => {
	stick_pos += e.deltaY > 0 ? 10 : -10;
	if(stick_pos < 0) stick_pos = 0;
	if(stick_pos > width - stick_size) stick_pos = width - stick_size;
	stick.style.left = stick_pos  + 'px';
})

field.addEventListener('mousemove', (e) => {
	stick_pos = e.offsetX - stick_size/2;
	if(stick_pos < 0) stick_pos = 0;
	if(stick_pos > width - stick_size) stick_pos = width - stick_size;
	stick.style.left = stick_pos  + 'px';
})
build();
start();