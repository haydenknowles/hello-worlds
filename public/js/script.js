
var bar_search = document.getElementById("search_bar");

function search(){
	var searchValue = bar_search.value.toLowerCase();
	var languages = document.getElementsByClassName("language_code");

	for(let i = 0; i<languages.length;i++){
		var language = languages[i].getElementsByTagName("h3")[0];
		if(language.innerText.toLowerCase().indexOf(searchValue) > -1){
			setTimeout(function(){
				languages[i].style.display = "block"
			}, 0);
		}
		else{
			setTimeout(function(){
				languages[i].style.display = "none"
			}, 0);
		}
	}
}

bar_search.onkeyup = search;
