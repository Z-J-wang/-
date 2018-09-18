//$(function () { $("[data-toggle='popover']").popover(); });

$(document).ready(function(){
	
	$(".a_p>a").hover(function(){
		$(".prime_info").show();
	},function(){
		$(".prime_info").hide()
	})
	
//	搜索框类别选择
	$(".dropdown-menu a").click(function(){
		var $text = $(this).text();
		$(".change_text").text($text);
	})
	
//	$(".A_branch,dropdown_menu_2").hover(function(){
//		$(".dropdown_menu_2").show();
//	},function(){
//		$(".dropdown_menu_2").hide()
//	})
	
	
})
