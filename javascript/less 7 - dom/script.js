'use strict'

/*			  DOM
			 window
			document
	links forms images other
*/
// console.log(document.getElementById('text').style)

/////////////////////////////////////////////////////
/*
function setStyle(id, color1, color2, width, height){
	let elem = document.getElementById(id).style;
	elem.color = color1;
	elem.backgroundColor = color2;
	elem.width = width;
	elem.height = height;
}
setStyle('test', 'red', 'pink', '200px', '200px');
*/
/////////////////////////////////////////////////////
/*
function changeText(id, newText){
	let elem = document.getElementById(id);
	//elem.innerText = newText;
	elem.innerHTML = newText;
}

changeText('first', '<h2><em>QWERTY</em></h2>')
*/
//////////////////////////////////////////////////////
/*
let pifagorTable = (start = 2, stop = 9) => {
	let table = '';
	table += '<table border="1px solid black">';
	for(let i = start-1; i <= stop; i++){
		table += '<tr>';
		for(let j = start-1; j <= stop; j++){
			if(i == start-1 && j == start-1){table += '<td> </td>'}
			else if(i == start-1){ table += '<td>' + j + '</td>'}
			else if(j == start-1){ table += '<td>' + i + '</td>'}
			else{table += `<td>${i*j}</td>`;}
		}table += '</tr>';
	}
	table += '</table>';
	return table
}
document.write(pifagorTable())
*/
/////////////////////////////////////////////////////

function setGradient(amount = 10, start = 'rgb(255,0,0)', end = 'rgb(0,0,255)'){
	let divs = '', r, g, b, r1, g1, b1, rs, gs ,bs;
	r = parseInt(start.slice(start.indexOf('(')+1, start.length-1).split(',')[0]);
	g = parseInt(start.slice(start.indexOf('(')+1, start.length-1).split(',')[1]);
	b = parseInt(start.slice(start.indexOf('(')+1, start.length-1).split(',')[2]);
	r1 = parseInt(end.slice(end.indexOf('(')+1, end.length-1).split(',')[0]);
	g1 = parseInt(end.slice(end.indexOf('(')+1, end.length-1).split(',')[1]);
	b1 = parseInt(end.slice(end.indexOf('(')+1, end.length-1).split(',')[2]);
	rs = (r - r1);
	gs = (g - g1);
	bs = (b - b1);
	for(let i = 0; i < amount; i++){
		divs += `<div class = "color" style = "background: rgb(${parseInt(r)}, ${parseInt(g)}, ${parseInt(b)})"> </div>`;
		r -= rs/(amount-1);
		g -= gs/(amount-1);
		b -= bs/(amount-1);
	}
	return divs
}

document.getElementById('test').innerHTML = setGradient();
