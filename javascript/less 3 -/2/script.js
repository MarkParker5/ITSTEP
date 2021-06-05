'use strict'
let num = parseInt(prompt('Enter num'));
let i = 0, j = 0, sum = 0, num2 = num;
do{
	j = num2 % 10;
	sum += j;
	i++;
	num2 = (num2 - j) / 10;
}while(num2 != 0)
alert('Sum = ' + sum + '\nCount = ' + i);