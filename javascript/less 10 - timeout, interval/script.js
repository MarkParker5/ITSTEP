'use strict'

let body = document.body;

/*
let new_p = document.createElement('p');
new_p.id = 'new_p';
new_p.className = 'active';
new_p.setAttribute('title', 'Hello');
new_p.innerHTML = '3.1415926535'

let test = document.getElementById('test');
test.append(new_p); // in, start
test.prepend(new_p); // in, end
test.before(new_p);
test.after(new_p);
test.replaceWith(new_p);
test.remove();
*/
///////////////////////////////////////////////////////////////////////
/*
let new_p = document.createElement('p');
new_p.id = 'new_p';
new_p.className = 'active';
new_p.setAttribute('title', 'Hello');
new_p.innerHTML = '3.1415926535'

let test = document.getElementById('test');
let new_article = document.createElement('artcle');
let new_img = document.createElement('img');
new_img.src = 'img/5.jpg';

new_article.append(new_p);
new_article.prepend(new_img)
body.append(new_article);

new_img.addEventListener('click', () => {
	new_img.style = 'filter: hue-rotate(270deg);';
})
*/
////////////////////////////////////////////////////////////////////////////
/*
let test = document.getElementById('test');
test.insertAdjacentHTML('afterbegin', '<h3>afterbegin</h3>');
test.insertAdjacentHTML('beforebegin', '<em>beforebegin</em>');
test.insertAdjacentHTML('beforeend', '<sub>beforeend</sub>');
test.insertAdjacentHTML('afterend', '<b>afterend</b>');
*/
/////////////////////////////////////////////////////////////////////////////
/*
let my_window = document.createElement('div');
my_window.id = 'window';

let button = document.createElement('button');
button.innerHTML = 'REGISTER';

my_window.append(button);

// body.addEventListener('click', () => { body.prepend(my_window); })

setTimeout( () => { body.prepend(my_window) }, 3000)

let count = 0;
let inter = setInterval( () => {
	console.log(count++);
	if(count>9) clearInterval(inter);
}, 100);

button.addEventListener('click', () => {
	my_window.style.display = 'none';
	my_window.remove();
})
*/
//////////////////////////////////////////////////////////////


let button = document.querySelector('button');
let k = 1;

let inter = setInterval( () => {
	button.style.transform = `scale(${k++})`;
}, 1000)

button.addEventListener('click', () => {
	clearInterval(inter);
	button.style.transform = `scale(1)`;
})