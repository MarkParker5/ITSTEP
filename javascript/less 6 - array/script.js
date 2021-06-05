'use strict'


//////////////////////////////////////////////////////////////////////////////////
/*
let search = ['Google', 'Bing', 'Yandex', 'DuckDuckGo', 'Yahoo'];
let urls = ['google.com', 'bing.com', 'yandex.ru', 'duckduckgo.com', 'yahoo.com'];

document.write('<ul style="list-style:none">');
for(let i in search){
	document.write(`
	<li>
	<a href = "http://${urls[i]}" target="_blank">${search[i].bold().big().toUpperCase()}
	</a></li>`);
	//document.write(search[i].link('http://' + urls[i]));
}
document.write('</ul>');

str.sub()
str.sup()
str.small()
str.toLowerCase()
*/
///////////////////////////////////////////////////////////////////////////////////
/*
let file;
do{
	file = prompt('Enter file name', 'index.html');
}while(file.indexOf('.') == -1 || file.indexOf('.') == file.length - 1)
         
let str = 'qwertyqwerq';
console.log(str.indexOf('q', 1)); //6
console.log(str.lastIndexOf('q')); //10
*/
////////////////////////////////////////////////////////////////////////////////////
/*
let str = 'qwertyqwerq';

console.log(str.includes('q')); //true
console.log(str.startsWith('q')); //true
console.log(str.endsWith('q')); //true
*/
/////////////////////////////////////////////////////////////////////////////////////
/*
let email = 'qwery@gmail.com';
let startPos = email.indexOf('@') + 1;
let endPos = email.indexOf('.', email.indexOf('@'));
let domain = email.slice(startPos, endPos); 
// email.substring(startPos, endPos);
// email.substr(start, length_of_str);
console.log(domain); //gmail
*/
////////////////////////////////////////////////////////////////////////////////////
/*
let arr = 'Elon Reeve Musk'.split(' ');
console.log(arr)
*/
////////////////////////////////////////////////////////////////////////////////////

let file = prompt('Enter file name');
let exps = ['doc', 'bmp', 'jpg', 'png', 'gif', 'psd', 'mp3', 'mp4', 'pdf', 'exe', 'txt'];

let exp = file.slice(file.lastIndexOf('.')+1, file.length);
let name = file.slice(0, file.lastIndexOf('.'));
let icon = exps.includes(exp) ? -16 * exps.indexOf(exp) : -16 * (exps.length - 1);

document.write(`<p>Name: ${name} </p>
				<p>Expansion: ${exp}</p>
				<p>Icon:</p>
				<div class = "icon"></div>`);
document.write(`
<style>
	.icon{
		width: 16px;
		height: 16px;
		background: url(img/icons.png);
		background-position-y: ${icon}px ;
	}
</style>
`);
