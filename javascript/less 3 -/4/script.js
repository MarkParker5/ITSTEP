'use strict'

/*
пользователь вводит число, котоое должно содержать от 6 до 10 цифр, сумма первой
и последней цифры должа быть кратна 3

из этого числа удалить все 2 и 4, если они есть и получить новое число
*/
let num, num2, last, first, i = 1, j, new_num = 0, num_length;

do{
	num = parseInt(prompt('Enter num'));
	num2 = num;
	first = num%10;
	do{
		last = parseInt(num2/10);
		num2 /= 10
		console.log(last)
	}while(last > 9)
	num2 = num;
	num_length = 0;
	do{
		num2 /= 10;
		num_length++;
		alert(num2);
	}while(num2 >= 0)
}while((first+last)%3 || num_length < 6 || num_length > 10)

while(num != 0){
	j = num % 10;
	if(j != 2 && j != 4){
		new_num += j*i;
		i *= 10}
	num = (num - j) / 10}

alert(new_num);