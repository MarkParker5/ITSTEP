'use strict'

let body = document.body; 						// only <body>...</body>
let doc = document.documentElement; 			//full html

//event.preventDefault();
//event.returnValue = false;

//------------------------------------------------------------------
window.addEventListener('load', (e) =>{
	window.scrollBy(0, btn.getBoundingClientRect().top);
})
/*
window.scrollTo({
    top: 2000,
    behavior: "smooth"
})

console.log(body.offsetHeight);
console.log(window.getComputedStyle(btn).top);
console.log(btn.getBoundingClientRect().top);
*/

let btn = document.querySelector('button');
let height = Math.max(
					body.scrollHeight, body.clientHeight, body.offsetHeight,
					doc.scrollHeight, doc.clientHeight, doc.offsetHeight);


btn.addEventListener('click', (e) => {
	window.scrollTo({ top: 0, behavior: 'smooth'});
});


window.addEventListener('scroll', (e) => {
	btn.style.position = window.pageYOffset >= height/2 ? 'fixed' : 'relative';
});
*/
//-------------------------------------------------------------