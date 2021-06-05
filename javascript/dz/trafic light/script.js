'use strict'

let colors = ['red', 'yellow', 'green'];
let elem = document.querySelectorAll('div>div');

for(let i = 0; i < 3; i++){
	elem[i].addEventListener('click', () => {
		for(let j = 0; j < 3; j++){ elem[j].style.backgroundColor = '#ABABAB'}
		elem[i].style.backgroundColor = colors[i];
	})
}