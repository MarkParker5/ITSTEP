'use strict'
var num, sum=0;

num = prompt('Введите число ');
num = +num;
while(num > 0){

	sum += num % 10;
 num = (num - num % 10) / 10;}
alert(sum);                                                                             