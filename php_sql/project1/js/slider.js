'use strict'

let parents = document.querySelectorAll('.thumbs');
let wins = document.querySelectorAll('.window');

for(let j = 0; j < wins.length; j++){
	function main() {
		shift -= shift%width;
		i = shift/width;
		inter = setInterval( () => {
		if(i >= len+1){
			shift = 0; k = 1; i = 1;
			parent.style.left = '0px';
		}else{
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

	let win = wins[j];
	let parent = parents[j];
	let imgs = [];
	for(let n = 0; n < parent.childNodes.length; n++) if(parent.childNodes[n].nodeName == 'IMG') imgs.push(parent.childNodes[n]);
	let width = imgs[0].getBoundingClientRect().width;
	let len = imgs.length;
	let shift = 0;
	let k = 1;
	let i = 1;
	let inter;

	for(let k = 0; k < 6; k++){
  		parent.append(imgs[k%len].cloneNode());
  		imgs.push(imgs[k%len].cloneNode());
	};

	win.addEventListener('mouseover', () => { clearInterval(inter) });
	win.addEventListener('mouseleave', main);
	win.addEventListener('wheel', (e) => {
		event.preventDefault();
		  if(e.deltaY > 0){
		    shift -= 30;
		    if(shift < 0) shift = 0;
		  }else{
		    shift += 30;
		    if(shift >= len*width){
		    	shift = 0; k = 1; i = 1;
		    };
		  };
		  parent.style.left = -shift + 'px';
		});
	main();
};

let imgs2 = document.querySelectorAll('.thumbs>img');
let big = document.getElementById('big');
let bigImg = document.querySelector('#big img');

for(let l = 0; l < imgs2.length; l++)imgs2[l].addEventListener('click', () => {
	let src = imgs2[l].src.split('/');
	src[src.length-1] = 'big/'+src[src.length-1];
	src = src.join('/');
	bigImg.src = src;
	big.style.display = 'block';
});
big.addEventListener('click', () => {
	big.style.display = 'none';
});