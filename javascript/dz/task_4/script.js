'use strict'

let obj = document.getElementById('zd1');
let inter;
let x = 0, y = 0;

//////////////////////////////////////////////////////////////////////

let action = (move) => {
	moveStop()
	inter = setInterval(move, 10)
}

let moveStop = () => {
	clearInterval(inter);
}

let moveRight = () => {
	x++;
	obj.style.marginLeft = x + 'px';
}

let moveLeft = () => {
	x--;
	obj.style.marginLeft = x + 'px';
}

let moveUp = () => {
	y--;
	obj.style.marginTop = y + 'px';
}

let moveDown = () => {
	y++;
	obj.style.marginTop = y + 'px';
}

let moveStart = () => {
	y = 0; x = 0;
	obj.style.marginTop = y + 'px';
	obj.style.marginLeft = x + 'px';
}

/////////////////////////////////////////////////////////////////////
addEventListener('keydown', (e) => {
	//console.log(e.keyCode)
	switch(parseInt(e.keyCode)){
		case 87:
		case 38: action(moveUp); break;
		case 83:
		case 40: action(moveDown); break;
		case 65:
		case 37: action(moveLeft); break;
		case 68:
		case 39: action(moveRight); break;
		case 32: action(moveStop); break;
		case 13:
		case 8: action(moveStart); break;
	}
})

