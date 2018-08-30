//获取详细事件
function time_Long(){
	var mydate = new Date();
	var t=mydate.toLocaleString();
	return t;
}

//该函数让指定块相对与屏幕静止，参数obj是需要实现该效果的块的class或id
function ad_fix(obj){								
	var adTop = parseInt($(obj).css("top"));			//获取块的top
	var adLeft = parseInt($(obj).css("left"));			//获取块的left
	$(window).scroll(function(){
		var scTop = parseInt($(this).scrollTop());		//获取屏幕滚动的top
		var scLeft = parseInt($(this).scrollLeft());	//获取屏幕滚动的left
		$(obj).offset({top:adTop+scTop});				//根据adTop和scTop换算出应定位的位置的top
		$(obj).offset({left:adLeft+scLeft});			//根据adLeft和scLeft换算出应定位的位置的left
	})
}