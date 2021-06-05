'use strict'
/*
document.cookie = 'cookieName=cookieValue; expires=Fri, 14 Feb 2020 00:00:00;';
document.cookie = 'count=1; expires=Fri, 14 Feb 2020 00:00:00;';
document.cookie = 'color=белый; expires=Fri, 14 Feb 2020 00:00:00;';

console.log(document.cookie)
*/
///////////////////////////////////////////////////////////////////////////////////
function setCookie(name, val, days){
	let cook = name + '=' + escape(val) + ';';
	if(days){
		let now = new Date();
		now.setDate(now.getDate()+days);
		cook +=  'expires=' + now.toUTCString() + ';';
	}
	document.cookie = cook;
}

function getCookie(name){
	let cook = document.cookie;
	let ptn = new RegExp('\\b'+name+'=','g');
	if( cook.search(ptn)+1 ){
		let pos1 = cook.indexOf('=', cook.search(ptn)) + 1;
		let pos2 = cook.indexOf(';', pos1);
		return unescape(pos2+1 ? cook.slice(pos1, pos2) : cook.slice(pos1));
	}else return '';
}
/*
if( !getCookie('count') ) setCookie('count', 0, 1);
else setCookie('count', parseInt(getCookie('count'))+1);

if(parseInt(getCookie('count'))>=3){
	document.write('hello');
	setCookie('count', 0, 1)
}
console.log(getCookie('count'));
*/
function getUsername(){
	document.querySelector('#getUN').style.display = 'block';
	document.querySelector('#getUN>button').addEventListener('click', () => {
		setCookie('username', document.querySelector('#getUN>input').value, 10);
		location.reload();
	})
}
if( !getCookie('username') ){
	getUsername();
}
else{
	document.getElementById('username').innerHTML = 'Hello, ' + getCookie('username');
	document.getElementById('hello').style.display = 'block';
}
document.querySelector('#hello>button').addEventListener('click', () => {
	getUsername();
})