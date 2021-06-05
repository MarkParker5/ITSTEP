'use strict'

let btn = document.querySelector('button');
let input = document.querySelector('input');
let box = document.querySelectorAll('input[type="checkbox"]');
let p = document.querySelector('p');

btn.addEventListener('click',() => {
	let pt = input.value;
	let keys = '';
	if(box[0].checked) keys += 'g';
	if(box[1].checked) keys += 'i';
	if(box[2].checked) pt = '\\b'+pt+'\\b';
	pt = new RegExp(pt, keys);
	console.log(pt);
	p.innerHTML = p.innerHTML.replace(pt, '<em>$&</em>');
});
