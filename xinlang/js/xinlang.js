window.onload = function(){
	Time_1=setInterval(lunbo,5000);  //5秒自动调用函数 lunbo()
}

var value = 0;				//定义全局变量 value 用来统计marginTop移动的距离
//var Time_1 ;
var Time_2 ;//定义全局变量用来保存setInterval，

function lunbo(){
    Time_2 = setInterval(move,100);   //0.1自动调用move()
//move();
}
function move(){					//该函数用于移动lunbo_ad div的第一张图片的marginTop,
	var elems = document.querySelectorAll('.lunbo_ad ul li');
	var parent_Node = document.querySelector('.lunbo_ad ul');
	value = value -5;				//函数没执行一次，marginTop就上移动5px
	elems[0].style.marginTop = value +'px';
	if(value <= -60){	//当上一移60px后，就把第一个li移除，并让其在ul里的最后面重新生成
		var Src = elems[0].firstElementChild.firstElementChild.src; //第一个元素移除前，获取其图片的src
		elems[0].remove();
		elems[0] = elems[1];										//交换位置，把原本第二的li设为第一的li
		var newsNode_li = document.createElement("li");
		var newsNode_a = document.createElement("a");
		var newsNode_img = document.createElement("img");
		newsNode_img.src = Src;
		newsNode_img.style.width = "150px";
		newsNode_a.appendChild(newsNode_img);
		newsNode_li.appendChild(newsNode_a);
//		console.log(newsNode_li);
		parent_Node.appendChild(newsNode_li);
		value = 0;
		clearInterval(Time_1);
		clearInterval(Time_2);//同时清空 计时器
	}
}
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
//----------------------------------------------------选项卡-----------------------------------------------
function TabContral_show(obj,order,index){
	var divs = document.querySelectorAll('#TabControl_'+order+'> div');			//获取选项卡内容区的每个块
	var a_s = document.querySelectorAll('#TabControl_'+order + '> .module_nav a');	//获取选项卡导航栏的每个a标签
	for(var i=0;i<divs.length;i++){											//遍历清空数组中的class然后只对选中的块和a标签的class赋值
		a_s[i].className = "";												
		divs[i].className = "display_hidden";
		if(index == i){
			if(index == 0){
				obj.className = "hover_first";
			} else{
				obj.className = "hover";
			}
			divs[index].className = "display_show";
		}
	}
}
function TabContral_like(obj,index){
	var div = document.querySelector('.like_details');
	var divs =document.querySelectorAll('.module_nav_2 ul a div')
	for(var i=0;i<divs.length;i++){
		divs[i].className ='';
		if(index == i){
			divs[i].className ='_sel';
		}
	}
	div.style.marginLeft = -380*index+'px';
}
