'use strict'

while(true){
	let num = prompt('Enter number');
	let j;
	let sum1 = 0, sum2 = 0, num2 = num;

	for(let i = 0; i<num.length; i++){
		j = num2%10;
		num2 = (num2 - j) / 10;
		if(i<num.length/2){
			sum1 += j;
		}else{
			sum2 += j;
	}}
	if(sum1==sum2){
		alert('Number is lucky, ' + num)
		break}
	else{
		alert('Nubmer is not lucky, ' + num + '\ntry again')
		continue}}