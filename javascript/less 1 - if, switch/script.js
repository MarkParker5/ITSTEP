'use strict'
//--------------IF-----ELSE---------------------
//True - !0
//False - 0 или undefined или NaN или ''

/*
let time = prompt("Enter hour", 12);
if(time < 0 || time > 24){
	alert('Error')}
else if(time < 6 || time >= 22){
	alert('Night')}
else if(time < 11){
	alert('Morning')}
else if(time < 17){
	alert('Day')}
else{
	alert('Afternoon')}
*/

//------------SWITCH-----CASE--------------------
/*
let day = prompt('Enter');

switch(day){
	case '1':
		alert('mon');
		break;
	case '2':
		alert('tue');
		break;
	case '3':
		alert('wed');
		break;
	case '4':
		alert('thu');
		break;
	case '5':
		alert('fri');
		break;
	case '6':
		alert('sat');
		break;
	case '7':
		alert('sun');
		break;
	default:
		alert("Error")}

switch(day){
	case '1':
	case '2':
	case '3':
	case '4':
	case '5':
		alert('work');
		break;
	case '6':
	case '7':
		alert('weekend');
		break;}
*/
/*
let month = prompt('Enter num');

switch(month){
	case '12':
	case '1':
	case '2':
		alert('winter');
		break;
	case '3':
	case '4':
	case '5':
		alert('spring');
		break;
	case '6':
	case '7':
	case '8':
		alert('summer');
		break;
	case '9':
	case '10':
	case '11':
		alert('autumn');
		break;
	default:
		alert('Error')} */


//----------------?-:--(тернарный оператор)-----------------------------

let num = 4;
let result 	= num%2 ? 'odd' : 'even';
let result2	= num > 0 ? 'positive' : 
			  num < 0 ? 'negative' : 'zero';
console.log(result + '\n' + result2);