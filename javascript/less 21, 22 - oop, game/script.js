'use strict'

//encapsulation
//inheritance
//polymorphism

function Transport(){
	this._inTurned = false;
	this.inTurnedOn = function(){this._inTurned = true};
	this.inTurnedOff = function(){this._inTurned = false};
}

function Auto(volume, valBack){
	Transport.call(this);
	let wheel = 4;
	let amountFuel = 0;
	this.rashod;
	let getDist = () => amountFuel*100/this.rashod
	this.run = function(){     
		if(this._inTurned)console.log(getDist());
	}
	/*
	this.setAmountFuel = function(v){
		if(v<2) {throw new Error('to small fuel')}
		if(v>valBack){throw new Error('too much fuel')}
		if(v>=2 && v<valBack)amountFuel = v; 
	}
	this.getAmountFuel = () => amountFuel;
	*/
	this.fuel = function(v){
		if(!arguments.length) return amountFuel;
		else if(v>=2 && v<valBack)amountFuel = v; 
		else if(v<2) {throw new Error('to small fuel')}
		else if(v>valBack){throw new Error('too much fuel')}
	}
}

let auto1 = new Auto(1.6, 50);
auto1.rashod = 7;
auto1.fuel(49);
auto1.inTurnedOn();
auto1.run();
console.log(auto1.fuel());


