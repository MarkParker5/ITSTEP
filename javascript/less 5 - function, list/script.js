'use strict'

/* 			homework1

// let kino = (age, limit) => alert(age < limit ? 'not' : 'yes');
function kino(age = 5, limit = 7){
	return age < limit ? 'not' : 'yes'}

document.write(kino(prompt('Age'), prompt('limit'))) */

///////////////////////////////////////////////////////////////
/*
function sum(n1, n2){ return n1 + n2 }

// let sum1 = function(n1, n2){ return n1 + n2 };
let sum1 = (n1, n2) => n1 + n2;
*/
///////////////////////////////////////////////////////////////
/*
function show_button() {
	document.write('<button>OK</button>')
}
function show_link(word = '!OK') {
	document.write('<a href = "#">' + word + '</a>')
}
confirm('Button?') ? show_button() : show_link();

let show = confirm('Button?') ? show_button : show_link;
show('!Button');


let many_str = h => {  body... }
*/
///////////////////////////////////////////////////////////////
/*
let checkNum = n => n%2 ? 'odd' : 'even';
*/
//////////////////////////Array////////////////////////////////
/*
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let student_info = [ 'SpaceX', 'Elon', 'Reeve', 'Musk', 48];

console.log(nums);
console.log(student_info[1]);

for(let i in student_info) console.log(student_info[i]);
*/
////////////////////////////////////////////////////////////////
/*
let student_info = [];
student_info['name'] = 'Elon';
student_info['surname'] = 'Musk';
student_info['name2'] = 'Reeve';
student_info['age'] = '48';
student_info['company'] = 'SpaceX';

for(let i in student_info) console.log(i + ' - ' +student_info[i]);
*/
////////////////////////////////////////////////////////////////
/*
let week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
console.log(week, week[3]);
*/
/////////////////////////////////////////////////////////////////

let rainbow = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue'];
rainbow.push('violet');
rainbow.push('purple');

rainbow.unshift('magenta');

for(let color in rainbow) document.write('<p style=\'color:' + rainbow[color] + '\'>' + rainbow[color] + '</p>')

rainbow.pop();
rainbow.shift();

document.write('<hr>')
for(let color in rainbow) document.write('<p style=\'color:' + rainbow[color] + '\'>' + rainbow[color] + '</p>')

document.write('<hr>')
document.write(rainbow.join('~'))