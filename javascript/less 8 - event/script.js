'use strict'
/*
function SetColorNum(id, red, green, blue){
	document.getElementById(id).style.color = `rgba(${red},${green},${blue})`
}
*/
////////////////////////////////////////////////////////////////////////////////
/*
let test = document.getElementById('test');
let setcolor = () => test.style.color = 'red'
test.addEventListener('click', setcolor);
//test.removeEventListener('click', setcolor);
*/
/////////////////////////////////////////////////////////////////////////////////
/*
let ps = document.getElementsByTagName('p');
let setBorder = (elem) => elem.style.border = '1px solid red';

for(let i=0; i<ps.length; i++){
	ps[i].addEventListener('click', () => {setBorder(ps[i])})
}
///////
let pst = document.getElementsByClassName('ptest');
let setBg = (elem) => elem.style.background = 'red';

for(let i=0; i<pst.length; i++){
	pst[i].addEventListener('click', () => {setBg(pst[i])})
}
*/
//////////////////////////////////////////////////////////////////////////////////
/*
let body = document.body;	//let body = document.getElementsByTagName('body');

//console.log(body.firstChild);
//console.log(body.lastChild);
//console.log(body.childNodes);

document.querySelector('.ptest>b').style.color = 'lime'; //querySelector - only one element
console.log(document.querySelectorAll('.ptest>b')); //querySelectorAll - all elements

let pb = document.querySelectorAll('.ptest>b');

for(let i=0; i<pb.length; i++){
	pb[i].addEventListener('click', () => { 
		pb[i].parentNode.style.transform = 'scaleY(-1)';
	})
}
*/
//////////////////////////////////////////////////////////////////////////////////
let btn = document.querySelectorAll('div>span');

for(let i=0; i<btn.length; i++){
	btn[i].addEventListener('click', () => { 
		btn[i].parentNode.style.display = 'none';
	})
}