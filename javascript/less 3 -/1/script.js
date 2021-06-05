'use strict'
let sum = parseInt(prompt('Сумма покупки: '));
let many = parseInt(prompt('Купюра: '));
let back = many - sum;
let back2 = back;

document.write('<p>Вы дали кассиру - ' + many + ' грн</p>');
document.write('<p>Стимость покупки составляет - ' + sum + ' грн</p>');
document.write('<p>Ваша сдача - ' + back + ' грн</p>');

/*
let bill = [500, 200, 100, 50, 20, 10, 5, 2, 1]; 
let count = [];
for(let i = 0; i < bill.length; i++){
	if(back2 > bill[i]){
		count[i] = parseInt(back2 / bill[i]);
		back2 -= bill[i] * count[i];
	}
}
for(let j = 0; j < bill.length; j++){
	if (typeof(count[j]) == 'undefined'){count[j] = 0}
	document.write('<p>Количество купюр достоинством ' + bill[j] + ' грн составляет - ' + count[j] + '</p>')}
*/
for(let i = 100; i >= 1; i /= 10){
	document.write('<p>Количество купюр достоинством ' + 5 * i + ' грн составляет - ' + parseInt(back/(5*i)) + '</p>');
	back = back%(5*i)
	document.write('<p>Количество купюр достоинством ' + 2 * i + ' грн составляет - ' + parseInt(back/(2*i)) + '</p>');
	back = back%(2*i)
	document.write('<p>Количество купюр достоинством ' + 1 * i + ' грн составляет - ' + parseInt(back/(1*i)) + '</p>');
	back = back%(1*i)}