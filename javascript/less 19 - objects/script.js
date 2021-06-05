'use strict'
const body = document.body;
/*
const obj1 = new Object({key:1, prop1:'lalala'});

const obj2 = {
	name: 'qwerty',
	num: 75,
	arr: [3, 14, 15, 92, 5],
	obj: {name: 'child', num: 13},
	'рус':'qweqweqweqwe'
};
obj2.newBool = true;

//console.log(obj2.arr[1], obj2.obj.name, obj2.рус);
//if('name' in obj2) console.log('+')
//for(let i in obj2) console.log(i + ' :\t' + obj2[i]);

const obj = {};
for(let i in obj2) obj[i] = obj2[i];
*/
////////////////////////////////////////////////////////////

//Для привязки контекста (this, но это не точно):
//call - переменные, apply - элем-ы массива, bind - железная привязка

/*
const divObj = {
	id: 0,
	width: 100,
	height: 100,
	content: 'Div Object',
	sayHi: () => {
		alert('Hello, World!')
	},
	create: function(){
		let newDiv = document.createElement('div');
		newDiv.id = this.id;
		newDiv.style.width = `${this.width}px`;
		newDiv.style.height = `${this.height}px`;
		newDiv.innerHTML = this.content;
		this.id++;
		return newDiv;
	},
	show: (elem) => {
		setTimeout(() => {
			body.append(elem)
		}, 1000)
		
	}
}

divObj.show( divObj.create() );

////////////////////////////////////////////////////////////

const aquarium = {
	width : 20,
	height : 20,
	length : 40,
	volume : function(){ return this.width*this.height*this.length/1000*0.9 },
}
console.log(aquarium.volume());
*/

////////////////////////////////////////////////////////////

const input = {
	id: 	0,
	type: 	'text',
	value: 	'',
	event: 	'keypress',
	elem: {},
	create: function(){
		this.elem = document.createElement('input');
		this.elem.id = this.id;
		this.elem.type = this.type;
		this.elem.value = this.value;
		body.append(this.elem);
	},
	hide: 	function(){
		this.elem.style.display = 'none';
	},
	show: 	function(){
		this.elem.style.display = 'block';
	},
	change: function(){
		this.elem.addEventListener(this.event, () => {
			this.elem.style.width = parseInt(this.elem.value.length*7+100)+'px';
		})
	}
}

input.create();
input.change();