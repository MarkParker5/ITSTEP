'use strict'

class Product{
	constructor(name, price, img){
		this.name = name;
		this.price = price;
		this.img = img;
	};
	show(){
		let pr = document.createElement('div');
		pr.innerHTML = `<p>Name:\t${this.name}</p>
						<p>Price:\t${this.price} $</p>
						<img src="${this.img}" alt="[image]"/>`;
		document.body.append(pr);
	};
	static create(){
		return new Product('Product name', 999, 'test.png');
	};
	set productName(newName){this.name = newName};
	get productName(){return this.name};
	set productPrice(newPrice){this.price = newPrice};
	get productPrice(){return this.price};
	set productImg(newImg){this.img = newImg};
	get productImg(){return this.img};
};

// let test = Product.create();
// test.show();

class RealProduct extends Product{
	constructor(name, price, img, weight){
		super(name, price, img);
		this.weight = weight;
	};
	set productWeight(newWeight){this.weight = newWeight};
	get productWeight(){return this.weight};
	show(){
		let pr = document.createElement('div');
		pr.innerHTML = `<p>Name:\t${this.name}</p>
						<p>Price:\t${this.price} $</p>
						<p>Weight:\t${this.weight}kg</p>
						<img src="${this.img}" alt="[image]"/>`;
		document.body.append(pr);
	};
};

class VRProduct extends Product{
	constructor(name, price, img, memory){
		super(name, price, img);
		this.memory = memory;
	};
	set productWeight(newMemory){this.memory = newMemory};
	get productWeight(){return this.memory};
	show(){
		let pr = document.createElement('div');
		pr.innerHTML = `<p>Name:\t${this.name}</p>
						<p>Price:\t${this.price} $</p>
						<p>Memory:\t${this.memory}kg</p>
						<img src="${this.img}" alt="[image]"/>`;
		document.body.append(pr);
	};
};
