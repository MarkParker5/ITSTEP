'use strict'
let num = parseInt(prompt('Enter num', 111));
let str_num, j, result = '';

let get_str = (j) => {
    if(j==0){str_num = 'десять'}
    else if(j==1){str_num = 'один'}
    else if(j==2){str_num = 'два'}
    else if(j==3){str_num = 'три'}
    else if(j==4){str_num = 'четыре'}
    else if(j==5){str_num = 'пять'}
    else if(j==6){str_num = 'шесть'}
    else if(j==7){str_num = 'семь'}
    else if(j==8){str_num = 'восемь'}
    else{str_num = 'девять'};
    return str_num;
}

for(let i = 100, j; i >= 1; i /= 10){
    j = parseInt(num/i%10);
    str_num = get_str(j);
    if(str_num=='десять'){continue}

    if(i==100){if(j==1){str_num = "сто"}
    else if(j==2){str_num = "двести"}
    else if(j<5){str_num  += "ста"}
    else{str_num += "сот"}}

    else if(i==10 && j == 1){
        j = parseInt(num%10);
        str_num = get_str(j);
        if(j==0){str_num = ""}
        else if(j==2){str_num = "две"}
        else if(j==4){str_num = "четыр"}
        else if(j==5){str_num = "пят"}
        str_num += "надцать"
        if(j==0){str_num = 'десять'}
        result += " "+str_num+" ";
        break}

    else if(i==10){if(j==4){str_num = "сорок"}
        else if(j<5){str_num += "дцать"}
        else if(j==9){str_num = "девяноста"}
        else{str_num += "десят"}
    }
    result += " "+str_num+" ";
}
alert(result);
/*
let l, text;
do{
num = parseInt(prompt('Enter'))}while(isNaN(num))
l = num%10;
text = ' товар';
if(l > 1 && l < 5 && num%100-l != 10){text += 'а'}
else if(l - 1 || num%100-l == 10){ text += 'ов'}
alert(num+text)*/
