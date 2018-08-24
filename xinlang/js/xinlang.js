
function _show(obj){
	var elem = obj.firstChild.nextSibling.nextSibling.nextSibling;
	elem.style.display = "inherit";
}
function _hidden(obj){
	var elem = obj.firstChild.nextSibling.nextSibling.nextSibling;
	elem.style.display = "none";
}
function _show_1(obj){
	var elem = obj.nextSibling.nextSibling;
	elem.style.display = "inherit";
}
function _hidden_1(obj){
	var elem = obj.nextSibling.nextSibling;
	elem.style.display = "none";
}
function search_classify(){
	var elem = document.querySelector(".search_classify");
	if(elem.style.display == 'inherit'){
		elem.style.display = 'none';
	} else{
		elem.style.display = 'inherit';
	}
}
function search_reco(){
	var elem = document.querySelector(".search_reco");
	if(elem.style.display == 'inherit'){
		elem.style.display = 'none';
	} else{
		elem.style.display = 'inherit';
	}
}
