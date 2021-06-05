'use strict'

let form = document.forms['form1'];
let inputs = form.elements['ch[]'];
let count = 0;

for(let i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('change', () => {
		count = 0;
		for(let j = 0; j < inputs.length; j++){
			if(inputs[j].checked) count++;
			if(count == 3){ inputs[i].disable = true; break;}
		}
	})
}