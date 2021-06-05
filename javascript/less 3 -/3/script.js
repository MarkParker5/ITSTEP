'use strict'
let num = parseInt(prompt('Enter num'));
let i = 0;
do{
	num /= 2;
	i++;
	console.log(num)
}while(num >= 50)

alert('Result = ' + num + '\nIterations = ' + i)


