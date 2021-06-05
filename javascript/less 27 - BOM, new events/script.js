'use strict'

//					NEW EVENTS
/*				
let btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
	alert(e.target.value);
});

btn.addEventListener('mouseover', function(e){
	let newEvent = new Event('sample');
	this.dispatchEvent(newEvent);
});

btn.addEventListener('sample', (e) => {
	alert('Hello, Elon!\n'+e.type);
});
*/

//					ARRAYS

/*
let nums = [1, 1, 2, 3, 5, 8, 13, 21, 34];

let res = nums.map(function(elem){			//manipulation with every arrays element
	return elem *= 10;						//returned new array
});

res.forEach(function(elem){					//change array
	return elem /= 2;
});

let filtered = res.filter(function(elem){	//returned new filtered array
	if(elem>50) return elem;
});

// every/some - true if all true/true if one true;

console.log(res, filtered);




let lis = document.getElementsByTagName('li');
let items = [];
let i = 0;

for(let elem of lis){
	items[i++] = elem.innerHTML;
};

let resItems = items.map(function(elem){
	let ptn = /(\d{1})(.+)/gi;
	return elem.replace(ptn, '$10$2');
});

i = 0;
for(let elem of resItems){
	lis[i++].innerHTML = elem;
};

console.log(resItems);

*/


//							BOM

//window.history.back()
//window.history.forward()
//window.history.go() 		// x < 0 - go back, x > 0 - go forward;
//	window.
//			navigator
//			history
//			location
//			location.href

//1
let input = document.getElementById('date');

input.addEventListener('blur', function(){
	let date = input.value.split('.');
	//input.value = input.value.split('.').reverse().join('-');
	input.value = date[2]+'-'+date[1]+'-'+date[0];
});

//2
let input2 = document.getElementById('num');
let btns = document.querySelectorAll('.second');

for(let i = 0; i < 2; i++){
	btns[i].addEventListener('click', () => {
		input2.value -= i ? -1 : 1;
		if(input2.value < 0) input2.value = 0;
	});
};

//3
let divs = document.querySelectorAll('div');
let items = [];

function hiding(){
	for(let i = 0; i < divs.length; i++){
		if(divs[i].innerHTML.length > 10){
			items.push(divs[i].innerHTML);
			localStorage.setItem('divs', JSON.stringify(items));

			divs[i].innerHTML = divs[i].innerHTML.slice(0, 11)+'...';
			let more = document.createElement('button');
			more.innerHTML = 'Read more';
			divs[i].append(more);
			
			more.addEventListener('click', () => {
				divs[i].innerHTML = JSON.parse(localStorage.getItem('divs'))[i];
				let hide = document.createElement('button');
				hide.innerHTML = 'Hide';
				divs[i].append(hide);
				hide.addEventListener('click', () => {
					hiding();
				});
			});
		};
	};
};

hiding();


//https://www.w3schools.com/js/exercise_js.asp

















/*							GEO
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Ваше текущее метоположение:');
  console.log(`Широта: ${crd.latitude}`);
  console.log(`Долгота: ${crd.longitude}`);
  console.log(`Плюс-минус ${crd.accuracy} метров.`);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);
*/

/*							IP


//window.history.back()
//window.history.forward()
//window.history.go() 		// x < 0 - go back, x > 0 - go forward;

console.log(window.location.href);
//location.href = "https://google.com";
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

     //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });
        
        pc.setLocalDescription(sdp, noop, noop);
    }, noop); 

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}

// Usage

getUserIP(function(ip){
		console.log(ip );
});
*/


