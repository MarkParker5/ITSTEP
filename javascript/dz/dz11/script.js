'use strict'
let body = document.body;

let container = document.createElement('div');

let parent = document.createElement('div');
parent.className = 'parent';

let parent_bg = document.createElement('div');

let btn1 =  document.createElement('div');
btn1.innerHTML = 'БЫСТРЫЙ ПРОСМОТР';
btn1.className = 'btn';

let btn2 =  document.createElement('div');
btn2.innerHTML = 'В КОРЗИНУ';
btn2.className = 'btn';

let name = document.createElement('p');
name.innerHTML = 'Название товара'

let price = document.createElement('em');
price.innerHTML = '1999грн'


parent_bg.append(btn1);
parent_bg.append(btn2);
parent.append(parent_bg)
container.append(parent);
container.append(name);
container.append(price);
body.append(container);