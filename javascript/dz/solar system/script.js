'use strict'

let x = parseInt(document.body.clientWidth)/2;
let y = parseInt(document.body.clientHeight)/2;
let center = [x, y];
let planets = [];

const Planet = function(name, img, r, speed, size){
	this.name = name;			//string
	this.img = img;				//src
	this.r = r;					//radius, px
	this.speed = speed;			//ms
	this.size = size;			//[w,h]
	this.center = [center[0]-size[0]/2, center[1]-size[1]/2];		//[x,y]
};
const planetFuncs = {
	create: function(){
		let elem2 = document.createElement('div');
		elem2.style.width 		 = this.r*2+'px';
		elem2.style.height 		 = this.r*2+'px';
		elem2.style.position 	 = 'absolute';
		elem2.style.left 		 = this.center[0]-this.r+this.size[0]/2 + 'px';
		elem2.style.top 		 = this.center[1]-this.r+this.size[1]/2 + 'px';
		elem2.style.border 		 = '1px solid #fff2';
		elem2.style.borderRadius = '50%';
		document.body.append(elem2);

		let elem 			= document.createElement('img');
		elem.src 			= this.img;
		elem.style.width 	= this.size[0]+'px';
		elem.style.height 	= this.size[1]+'px';
		elem.style.position = 'absolute';
		elem.style.left 	= this.center[0]-this.r + 'px';
		elem.style.top 		= this.center[1]-this.r + 'px';
		document.body.append(elem);
		this.elem = elem;
	},
	rotate: function(){
		let L = 0;
  		this.inter = setInterval(() => {
  			L++;
			this.elem.style.left = this.r*Math.cos(L*Math.PI/180)+this.center[0]+'px';
			this.elem.style.top = this.r*Math.sin(L*Math.PI/180)+this.center[1]+'px';
  		}, this.speed);
	},
	stop: function(){ 
		clearInterval(this.inter);
	},
};
Planet.prototype = planetFuncs;

let sun = new Planet('sun', 'img/sun.gif', 0, 1000, [50,50]);
planets.push(sun);

let mercury = new Planet('mercury', 'img/mercury.gif', 50, 2, [25,25]);
planets.push(mercury);

let venus = new Planet('venus', 'img/venus.gif', 75, 5, [20,20]);
planets.push(venus);

let earth = new Planet('earth', 'img/earth.gif', 110, 6, [35,35]);
planets.push(earth);

let mars = new Planet('mars', 'img/mars.gif', 150, 8, [30,30]);
planets.push(mars);

let jupiter = new Planet('jupiter', 'img/jupiter.gif', 190, 12, [120,50]);
planets.push(jupiter);

let saturn = new Planet('saturn', 'img/saturn.gif', 230, 15, [100,50]);
planets.push(saturn);

let uranus = new Planet('uranus', 'img/uranus.gif', 275, 20, [40,40]);
planets.push(uranus);

let neptune = new Planet('neptune', 'img/neptune.gif', 320, 30, [40,40]);
planets.push(neptune);

for(let i in planets){
	planets[i].create();
	planets[i].rotate();
};