'use strict'

let elems = document.querySelectorAll('div>ul>li>img');
let image = document.querySelector('body>div>div.big-image').style
let text = document.querySelectorAll('body>div>div.big-image>ol>li').style

for(let i = 0; i < elems.length; i++){
	elems[i].addEventListener('mouseover', () => { //mouse -over, -out, -enter, -leave;
		image.background = `url(images/big/${i+1}.jpg) no-repeat`;
		image.backgroundSize = 'cover';
		for(let j = 0; j < 5; j++){
			elems[j].style = 'box-shadow: 1px 1px 5px #000;';
			document.getElementById(`text${j}`).style.display = 'none';
		}
		elems[i].style = 'box-shadow: 1px 1px 5px #fff;';
		document.getElementById(`text${i}`).style.display = 'block';
	})
}






