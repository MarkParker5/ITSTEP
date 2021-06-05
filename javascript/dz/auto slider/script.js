'use strict'

let parent = document.querySelector('#thumbs');
let imgs = document.querySelectorAll('#thumbs>img');
let width = imgs[0].getBoundingClientRect().width;
let win = document.querySelector('.window');
let len = imgs.length;
let shift = 0;
let k = 1;
let i = 1;
let inter;

function main(argument) {
	shift -= shift%width;
	i = shift/width;
	inter = setInterval( () => {
	if(i==len){
	let slide = setInterval( () => {
		k *= shift >= len*i/2 ? 1.2 : 0.9;
		shift -= k;
		if(shift <= 0){
			shift = 0;
			k = 1;
			i = 1;
			clearInterval(slide);
		};
		parent.style.left = -shift + 'px';
	}, 10)}
	else{
	let slide = setInterval( () => {
		k *= shift <= width*i-width/2 ? 1.1 : 0.9;
		shift += k;
		if(shift >= i*width){
			shift = i*width;
			k = 1;
			i++;
			clearInterval(slide);
		}
		parent.style.left = -shift + 'px';
	}, 10)};
}, 2000)};


win.addEventListener('mouseover', () => {
	clearInterval(inter);
});
win.addEventListener('mouseleave', main);
win.addEventListener('wheel', (e) => {
  if(e.deltaY > 0){
    shift -= 30;
    if(shift < 0) shift = 0;
  }else{
    shift += 30;
    if(shift > 4800) shift = 4800;
  }
  parent.style.left = -shift + 'px';
});


main();

