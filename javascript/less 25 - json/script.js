'use strict'

/*

let user = {
	name: 'Elon',
	age: 48,
};
console.log(user);

//JSON.stringify 		object 	-> .json
//JSON.parse 	 		.json 	-> 	object

let json = JSON.stringify(user);
console.log(json);

let data = JSON.parse(json);
console.log(data);

console.log('-------------------------------------------------------')

localStorage.setItem('key', 'value');
localStorage.setItem('key2', 'value2');
localStorage.setItem('user', json);
localStorage.removeItem('key2');
console.log(localStorage.getItem('user'));
console.log(localStorage.key(1));

console.log(localStorage);
localStorage.clear();

console.log('-------------------------------------------------------')

*/

let main 	= document.querySelector('main');
let input	= document.querySelector('#item');
let button 	= document.querySelector('#clear');
let counter = document.querySelector('#counter');
let elem 	= document.querySelector('.row');
let items 	= localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let dlt 	= document.querySelectorAll('.dlt');
let rows 	= document.querySelectorAll('.row');
/*
items.splice(1, 1)
items.push('five')
localStorage.setItem('items', JSON.stringify(items));
*/

input.addEventListener('change', () => {
	items.push(input.value);
	localStorage.setItem('items', JSON.stringify(items));
	create(input.value);
	input.value = '';
});

let create = (txt) => {
	let div = elem.cloneNode(true);
	div.classList = 'row';
	div.children[1].children[0].innerHTML = txt;
	main.append(div);

    dlt = document.querySelectorAll('.dlt');
    rows = document.querySelectorAll('.row');
    dlt[dlt.length-1].addEventListener('click', () => {
		rows[rows.length-1].remove();
		items.splice(dlt.length-1, 1);
		localStorage.setItem('items', JSON.stringify(items));
		console.log(items);
	});
};

for(let i = 0; i < items.length; i++){
	let div = create(items[i]);
	dlt[i].addEventListener('click', () => {
		rows[i].remove();
		items.splice(i, 1);
		localStorage.setItem('items', JSON.stringify(items));
		console.log(items)});
};