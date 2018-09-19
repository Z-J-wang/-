$(function () { $("[data-toggle='popover']").popover(); });
//$(function () { $(".popover-options").popover({html : true });});
$(document).ready(function(){
	
	$(".a_p>a,.prime_info").hover(function(){
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
	
	$(".user_bar,.user_interface").hover(function(){
		$(".user_interface").show();
		$(".bg_color").show();
	},function(){
		$(".user_interface").hide();
		$(".bg_color").hide();
	})
	
	$(".try_prime,.prime_way").hover(function(){
		$(".prime_way").show();
		$(".bg_color").show();
	},function(){
		$(".prime_way").hide();
		$(".bg_color").hide();
	})
	
	$(".lan_bar,.change_lan").hover(function(){
		$(".change_lan").show();
		$(".bg_color").show();
	},function(){
		$(".change_lan").hide();
		$(".bg_color").hide();
	})
	
	$(".now_price").click(function(){
		$(this).css("border","solid 1px dodgerblue");
	}).blur(function(){
		$(this).css("border","solid 1px transparent");
	})
	
	//倒计时
	downTimeFun();
})
