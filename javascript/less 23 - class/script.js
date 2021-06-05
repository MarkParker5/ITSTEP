'use strict'

//only methods in class
/*class name extends ParentClass{
	constructor(){};
	method1(){}
	method2(){}
	method3(){}
}
*/

class Manager{
	static get maxKf(){return 100};
	constructor(name, sname, sales){
		this.name 	= name;
		this.sname 	= sname;
		this.sales 	= sales;
		this.k 		= 1;
	};
	sell(thing, count){
		this.sales += count;
		return `I am (${this.name}) selled ${thing} :)`;
	};
	speak(to_speak){
		return to_speak;
	};
	money(){ 
		return this.sales * this.k;
	};
	/*
	kf(k){
		if(!arguments.length) return this.k; 
		else{
			this.k = k;
			if(this.k < 1) this.k = 1;
			else if(this.k > 100) this.k = 100;
		};
	};
	*/
	set fullName(newName){
		[this.name, this.sname] = newName.split(' ');
		/*newName = newName.split(' ');
		this.name = newName[0];
		this.sname = newName[1];*/
	};
	get fullName(){
		return this.name + ' ' + this.sname;
	};
	set kf(k){
		if(k >= 1 && k <= Manager.maxKf) this.k = k;
	};
	get kf(){
		return this.k;
	};
	static create(){
		return new Manager('noname', 'nosname', 0);
	};
};

const m1 = new Manager('Elon', 'Musk', 10);
console.log(m1);

console.log(m1.sell('Tesla', 5));
m1.fullName = 'Tim Lee';
console.log(m1.fullName);

m1.kf = 100;
console.log(m1.money());

let test = Manager.create();
console.log(test);

class HeadManager extends Manager{
	manip(){
		console.log('No money :(');
	};
	speak(to_speak, ){
		return super.speak(to_speak) + '\n\tApple inc';
	};
};

let hm1 = new HeadManager('Steve', 'Jobs', 0);
console.log(hm1.speak('Go to work'));

/////////////////////////////////////////////////////////////////

//age, set&get all
class Person{
	constructor(name, sname, bd){
		this.name 	= name;
		this.sname 	= sname;
		this.bd 	= bd;
	};
	age(){
		let now = new Date();
		let bd 	= new Date(this.bd);
		return now.getMonth() > bd.getMonth() ? now.getYear() - bd.getYear() : now.getYear() - bd.getYear() - 1;
	};
	getAll(){
		return `Name: ${this.name};\nSname: ${this.sname};\nBirthday: ${this.bd};\nAge: ${this.age()};\n`
	};
	set fullName(newName){
		[this.name, this.sname] = newName.split(' ');
	};
	get fullName(){
		return this.name + ' ' + this.sname;
	};
	set bday(newBd){
		this.bd = newBd;
	};
	get bday(){ 
		return this.bd;
	};
};

const human = new Person('Tony', 'Stark', '5/29/1970');
console.log(human.getAll());

class Student extends Person{
	constructor(name, sname, bd, year, group){
		super(name, sname, bd);
		this.year = year;
		this.group = group;
	};
	course(){
		let now = new Date();
		return now.getMonth() > 5 ? now.getFullYear() - this.year + 1 : now.getFullYear() - this.year;
	};
	getAll(){
		let str = super.getAll() + `Group: ${this.group};\nCourse: ${this.course()};\n`;
		return str;
	};
	set studentGroup(newGroup){
		this.group = newGroup;
	};
	get studentGroup(){ 
		return this.group;
	};
};

let stud1 = new Student('Mark', 'Zuckerberg', '6/14/1984', 2018, 'web-505');
console.log(stud1.getAll());