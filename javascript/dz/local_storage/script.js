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
						<img src="${this.img}" alt="[image]" width="350px"/>`;
		pr.style.border = '1px solid #777';
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




let products = {
  "arrayOfProducts": [
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "CHECK PRINT SHIRT",
      "price": 110
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "GLORIA HIGH LOGO SNEAKER",
      "price": 91
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "CATE RIGID BAG",
      "price": 94.5
    },
    {
      "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "GUESS CONNECT WATCH",
      "price": 438.9
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "'70s RETRO GLAM KEFIAH",
      "price": 20
    }
  ]
}
localStorage.setItem('products', JSON.stringify(products));


let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

for(let i in products.arrayOfProducts){
	let item = new Product(products.arrayOfProducts[i].name, products.arrayOfProducts[i].price, products.arrayOfProducts[i].imgUrl);
	item.show();
};