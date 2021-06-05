'use strict'

let imgs 		= document.getElementsByTagName('td');
let nums 		= [];
let pictures 	= [];
let notStarted 	= true;
let first 		= null;
let second 		= null;
let lifes		= 3;
let points 		= 0;
let lifesText 	= document.querySelector('h3>span');
let gameOver	= false;
lifesText.innerHTML = lifes;

function show (i) {
	imgs[i].childNodes[0].style.opacity = 0;
};

function hide (i) {
	imgs[i].childNodes[0].style.opacity = 1;
};

//CREATE ARRAY OF RANDOM NUMS 1-8
for(let i = 0; i < 16; i++) nums.push(i);
for(let i = 0; i < 16; i++){
	let j = Math.floor(Math.random()*nums.length)
	pictures.push(nums[j]%8+1)
	nums.splice(j, 1)
}
console.log(pictures)


//SET BG
for(let i = 0; i < 16; i++) imgs[i].style.backgroundImage = `url(img/p${pictures[i]}.jpg)`;


//MOUSEOVER-MOUSELEAVE
for(let i = 0; i < 16; i++) imgs[i].addEventListener('mouseover', () => {
	if(notStarted) show(i);
});
for(let i = 0; i < 16; i++) imgs[i].addEventListener('mouseleave', () => {
	if(notStarted) hide(i);
});


//CLICK
for(let i = 0; i < 16; i++) imgs[i].addEventListener('click', () => {
	notStarted = false;
	if(!gameOver){
	if(first != null){
		second = i;
		show(i);
		if(!(pictures[first]==pictures[second])){
			setTimeout(() => {
				hide(first);
				hide(second);
				console.log(first, second, "\n----")
				second = null;
				first = null;
				lifes--;
				lifesText.innerHTML = lifes;
				if(!lifes){
					gameOver = true;
					document.getElementsByTagName('h2')[0].innerHTML = 'Game over!';
					document.querySelector('.gameover').style.display = 'block';
				}
			}, 500)
		}else{
		 	second = null;
			first = null;
			points++;
			if(points==8){
				gameOver = true;
				document.getElementsByTagName('h2')[0].innerHTML = 'You win!';
				document.querySelector('.gameover').style.display = 'block';
			}
		 }
	}else{
		first = i;
		show(i)
		console.log(first, second)
	}
	}
});
document.getElementsByTagName('button')[0].addEventListener('click', () => {
	location = location;
});