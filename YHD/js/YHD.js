//登陆界面脚本
$(document).ready(function(){
	//显示隐藏帮助中心
	$(".hd>a").hover(function(){
		$(".Hd_menu_list").show();
		$(".Hd_menu_list li").css("border-top","dotted 1px gainsboro")
	},function(){
		$(".Hd_menu_list").hide();
	})
	//input获取焦点是样式切换
	$(".login_container>div>input").focus(function(){
		$(this).parent().css("border-color","black");
	}).blur(function(){
		$(this).parent().css("border-color","darkgrey")
	})
	
	$(".login_container>div:nth-child(2)>input").hover(function(){
		$(this).parent().css("border-color","black");
		$(this).attr("placeholder","");
		$(this).focus();
	},function(){
		$(this).parent().css("border-color","darkgrey");
		$(this).attr("placeholder","邮箱/手机/用户名");
		$(this).blur();
	})
	//自动登陆选项框的点击样式切换
	$(".login_tool_L").toggle(function(){
		$(this).find("input+ i").css("background","orange");
		$(this).find(".login_tip").show();
	},function(){
		$(this).find("input+ i").css("background","white");
		$(this).find(".login_tip").hide();
	})
	//点击更多合作网站切换样式
	$("#_show_more").toggle(function(){
		$(this).find("img").addClass("_cooperator_r");
		$("._cooperator_sites").show();
	},function(){
		$(this).find("img").removeClass("_cooperator_r");
		$("._cooperator_sites").hide();
	})
	//点击二维码切换登陆
	$(".change_model").toggle(function(){
		
	},function(){
		
	})
})
//注册界面脚本
$(document).ready(function(){
	//第一个输入框
	$(".register_container>div:nth-child(2) input").focus(function(){
		$(this).prev().animate({left:"-60px"})
		$(this).parent().find("._info").show(1000);
		$(this).parent().find("._warning").slideUp(100);
	}).blur(function(){
		if($(this).val() == ""){
			$(this).parent().css("border-color","red");
			$(this).parent().find("._warning").show(1000);
			$(this).parent().find("._info").slideUp(100);
		}
	})
	//第二个输入框
	$(".register_container>div:nth-child(3) input").focus(function(){
		$(this).prev().animate({left:"-60px"})
		$(this).parent().find("._info").show(1000);
		$(this).parent().find("._warning2").slideUp(100);
	}).blur(function(){
		if($(this).val() == ""){
			$(this).parent().css("border-color","red");
			$(this).parent().find("._warning2").show(1000);
			$(this).parent().find("._info").slideUp(100);
		}
	})
	//第三个输入框
	$(".register_container>div:nth-child(4) input:nth-child(2)").focus(function(){
		$(this).prev().animate({left:"-60px"})
		$(this).parent().find("._info").show(1000);
		$(this).parent().find("._warning2").slideUp(100);
	}).blur(function(){
		if($(this).val() == ""){
			$(this).parent().css("border-color","red");
			$(this).parent().find("._warning2").show(1000);
			$(this).parent().find("._info").slideUp(100);
		}
	})
	//第四个输入框
	$(".register_container>div:nth-child(5) input").focus(function(){
		$(this).prev().animate({left:"-70px"})
		$(this).parent().find("._info").show(1000);
		$(this).parent().find("._warning").slideUp(100);
	}).blur(function(){
		if($(this).val() == ""){
			$(this).parent().css("border-color","red");
			$(this).parent().find("._warning").show(1000);
			$(this).parent().find("._info").slideUp(100);
		}
	})
	//第四个输入框
	$(".register_container>div:nth-child(6) input").focus(function(){
		$(this).prev().animate({left:"-70px"})
		$(this).parent().find("._info2").show(1000);
		$(this).parent().find("._warning").slideUp(100);
	}).blur(function(){
		if($(this).val() == ""){
			$(this).parent().css("border-color","red");
			$(this).parent().find("._warning").show(1000);
			$(this).parent().find("._info2").slideUp(100);
		}
	})
})
