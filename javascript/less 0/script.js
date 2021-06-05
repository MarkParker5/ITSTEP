'use strict'
/*
const pi = 3.14;
let text;
text = 'Some text';
console.log(text);
var num = 55;
// var num = prompt('Enter some number', 100500);
//console.log(pi + + num);  //+ переводит строку в число
var root = 8 ** 0.3333333333333333; //16
console.log(root);
console.log(num % 6); //остача от деления
console.log((num - num % 6) / 6); //целочисленное деление
console.log((num / 6 ) - (num / 6) % 1 ); //целочисленное деление*/

var num5 = 12345;
for(var i = 0, sum = 0; i < 5; i++){
	console.log(sum, num5, num5%10);
	sum += num5 % 10;
	num5 = (num5 - num5 % 10) / 10;
}
console.log(sum)