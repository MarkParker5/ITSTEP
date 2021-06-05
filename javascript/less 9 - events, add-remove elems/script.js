'use strict'
/*
let elem = document.getElementById('test');
let btn = document.querySelector('button');
//elem.className = 'active';
//elem.classList.add('active');
//elem.classList.remove('cl2');
//btn.addEventListener('click', () => 
{ elem.classList.contains('hide') ? elem.classList.remove('hide') : elem.classList.add('hide')});
btn.addEventListener('click', () => elem.classList.toggle('hide'))
*/
//----------------------------------------------------------------
/*
let elems = document.querySelectorAll('ul>li');

for(let i = 0; i < elems.length; i++){
	elems[i].addEventListener('mouseover', () => { //mouse -over, -out, -enter, -leave;
		document.querySelector('body>img').src = `images/big/${i+1}.jpg`;
	})
}
/*
let small = document.querySelectorAll('ul>li>img');
let big = document.querySelector('body>img');

//elems[i].getAttribute('data-src-big')
//big.setAttribute('src')

//.removeAttribute('id')
//.hasAttribute('id')

for(let i = 0; i < elems.length; i++){
	elems[i].addEcentListener('mouseover', () => {
		big.setAttribute('src', elems[i].getAttribute('data-src-big'))
	})
}

*/
//////////////////////////////////////////////////////////////////////////




let fig = document.querySelector('figure');

fig.addEventListener('mouseover', () => {
	fig.lastElementChild.style.transform = 'scaleX(1.5)';
})
fig.addEventListener('mouseout', () => {
	fig.lastElementChild.style.transform = 'scaleX(1)';
})



