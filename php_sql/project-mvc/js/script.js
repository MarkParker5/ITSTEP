const deleteAjaxBtns = document.querySelectorAll('.delete-ajax');

for(const btn of deleteAjaxBtns){
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		const id = btn.dataset.id;
		// Send a POST request
		axios({
		  method: 'post',
		  url: '/post/delete-ajax',
		  data: 'id='+id,//data
		})//Axios
		.then( function(){
			btn.parentElement.remove();
		})
	});//addEventListener
}//for