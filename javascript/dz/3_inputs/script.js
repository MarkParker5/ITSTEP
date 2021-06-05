'use strict'

'use strict'

let form = document.forms['form1'];
let inputs = form.elements['ch[]'];
let count;

for(let i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('change', () => {
		count = 0;
		for(let j = 0; j < inputs.length; j++){
			if(inputs[j].checked) count++ ;
			if(count==3) for(let k = 0; k < inputs.length; k++) inputs[k].disabled = inputs[k].checked ? false : true;
			else for(let k = 0; k < inputs.length; k++) inputs[k].disabled = false;
		}
	})
}