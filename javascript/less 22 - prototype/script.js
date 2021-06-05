'use strict'

const Manager = function(name){
	this._name = name;
	this._sales = 0;
	this._k = 10;
};
const managerFuncs = {
	sell: function(thing, count){
		this._sales += count;
		return `I am (${this._name}) selled ${thing} :)`;
	},
	speak: function(to_speak){
		console.log(to_speak);
	},
	money: function(){ 
		return this._sales * this._k;
	},
	kf: function(k){
		if(!arguments.length) return this._k; 
		else{
			this._k = k;
			if(this._k < 1) this._k = 1;
			else if(this._k > 100) this._k = 100;
		}	;
	},
};
Manager.prototype = managerFuncs;

let m1 = new Manager('Mark');

console.log(m1);
console.log(m1.sell('air', 5));
m1.speak('Keep calm and love programming! :)');
m1.kf(20);
m1.speak(m1.kf());
m1.speak(m1.money());


const elon = {
	name: 'Elon',
	sname: 'Musk',
}
const direct = {
	comp: 'SpaceX',
	__proto__: elon, //inherit elons properties
}
const student = {
	gr: 'WEB-505',
}
student.__proto__ = elon; //inherit elons properties
console.log(student.name);

///////////////////////////////////////////////////////////////////////

const Input = function(id){
	this._type = 'text';
	this._value = '';
	this._event = 'keypress';
	this._elem = {};
}

const inputFuncs = { 
	create: function(){
		this.elem = document.createElement('input');
		this.elem.id = this._id;
		this.elem.type = this._type;
		this.elem.value = this._value;
		document.body.append(this.elem);
	},
	hide: function(){
		this.elem.style.display = 'none';
	},
	show: function(){
		this.elem.style.display = 'block';
	},
	change: function(){
		this.elem.addEventListener(this.event, () => {
			this.elem.style.width = parseInt(this.elem.value.length*7+100)+'px';
		})
	},
}

Input.prototype = inputFuncs;

let input = new Input(0);
input.create();
