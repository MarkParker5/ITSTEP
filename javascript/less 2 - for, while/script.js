'use strict'
//----------------------------------------
//True - !False
//False - 0 или undefined или NaN или ''
//parseInt - float to int

//---------------------FOR--------------------------с параметром/с управляющей переменной

/*
for(let i = 0; i < 10; i++){
	console.log(i)}
*/

//---------------------WHILE------------------------с предусловием
/*
let i = 0;
while(i < 4){
	console.log(i++)}


let num = parseInt(prompt('Do it', 77));
while(num < 10 || num >= 100 || num%10 + (num-num%10)/10 <= 12  || isNaN(num)){
	num = parseInt(prompt('Do it', 77));
}

while(true){
	num = parseInt(prompt('Do it', 77));
	if(num < 10 || num >= 100 || num%10 + (num-num%10)/10 <= 12  || isNaN(num)){
		continue}
	else{
		break}
}
*/
//-------------------DO-WHILE-----------------------с постусловием
/*
let j = 0;
do{
	console.log(j++)}while(j < 4)


let num;
do{
	num = parseInt(prompt('Do it', 77));
}while(num < 10 || num >= 100 || num%10 + (num-num%10)/10 <= 12  || isNaN(num))
*/