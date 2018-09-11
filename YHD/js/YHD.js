//登陆界面脚本
$(document).ready(function(){
	//显示隐藏帮助中心
	$(".hd,.Hd_menu_list").hover(function(){
		$(".Hd_menu_list").show();
		$(".Hd_menu_list li").css("border-top","dotted 1px gainsboro")
	},function(){
		$(".Hd_menu_list").hide();
	})
	
	if (window.name != "register") {
		location.reload();
		window.name = "register";
	} else{
		window.name = "";
	}
	
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
		}else{
			$(this).parent().css("border-color","gainsboro");
			$(this).parent().find("._warning").hide(1000);
			$(this).parent().find("._info").hide(100);
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
		}else{
			$(this).parent().css("border-color","gainsboro");
			$(this).parent().find("._warning").hide(1000);
			$(this).parent().find("._info").hide(100);
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
		}else{
			$(this).parent().css("border-color","gainsboro");
			$(this).parent().find("._warning").hide(1000);
			$(this).parent().find("._info").hide(100);
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
		}else{
			$(this).parent().css("border-color","gainsboro");
			$(this).parent().find("._warning").hide(1000);
			$(this).parent().find("._info").hide(100);
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
		}else{
			$(this).parent().css("border-color","gainsboro");
			$(this).parent().find("._warning").hide(1000);
			$(this).parent().find("._info").hide(100);
		}
	})
	
	
	setInterval(reg_bj,2000);
	//背景切换效果
	var num = 0;
	function reg_bj(){
		var $bjs = $(".bj>div");
		$bjs.eq(num).fadeOut(2000);
		$bjs.eq(num+1).fadeIn(2000);
		if(num == 4){
			num =0;
		}else{
			num++;
		}
	}
	
	
})
//购物车页面脚本
$(document).ready(function(){
	//头部-客户服务效果
	$(".head_right>ul>li:nth-child(3)").hover(function(){
//		$("#tran_img").addClass("_tran_r");
		$("#tran_img").animate({
			aa:"180"
		},{
			step:function(now,fx){
				$("#tran_img").css({"transform":"rotate("+now+"deg)"})
			}
		});
		$(".customer_service_menu").show();
	},function(){
//		$("#tran_img").removeClass("_tran_r");
		$("#tran_img").animate({
			aa:"0"
		},{
			step:function(now,fx){
				$("#tran_img").css({"transform":"rotate("+now+"deg)"})
			}
		});
		$(".customer_service_menu").hide();
	})
	//APP下载效果
		$(".head_right>ul>li:nth-child(4)").hover(function(){
		$(".QR_code").show();
	},function(){
		$(".QR_code").hide();
	})
		
	//轮播图效果
	$(".carousel_btn_left").click(function(){
		carousel_left(".carousel_content",1000,4,1000);
		carousel_dot2(".carousel_content",".carousel_list",1000,"dot_hot");
	})
	$(".carousel_btn_right").click(function(){
		carousel_right(".carousel_content",1000,4,1000);
		carousel_dot2(".carousel_content",".carousel_list",1000,"dot_hot");
	})
	
	//地区选项卡
	$("._address ._nav a").click(function(){
		$ali = $("._address ._nav a")
		for (var i=0; i < $ali.length;i++) {
			$ali.eq(i).removeAttr("id");
		}
		$(this).attr("id","_nav_hover_a");
		$(this).parent().addClass("_nav_hover");
		$(this).parent().removeClass("_nav_cur");
		$("._address").addClass("_address_hover");
		$index = $(this).index()/2;
		$divs = $(".addres_list>div");
		for (var i=0; i < $divs.length;i++) {
			$divs.eq(i).hide();
		}
		$divs.eq($index).show();
		$("._address_exit").show();
	})
	//选择城市脚本
	$(".province a").click(function(){
		$("._nav a:first-child").html($(this).html());
		$("._nav a:nth-child(3)").focus()
//		$(".province").hide();
//		$(".city").show();
	})
	$(".city a").click(function(){
		$("._nav a:nth-child(3)").html($(this).html());
//		$(".city").hide();
//		$(".town").show();
	})
	$(".town a").click(function(){
		$("._nav a:nth-child(5)").html($(this).html());
//		$(".addres_list").hide()
	})
	$("._address_exit").click(function(){
		$(this).hide();
		$divs = $(".addres_list>div");
		for (var i=0; i < $divs.length;i++) {
			$divs.eq(i).hide();
		}
		$ali = $("._address ._nav a")
		for (var i=0; i < $ali.length;i++) {
			$ali.eq(i).removeAttr("id");
		}
		$("._nav").removeClass("_nav_hover");
		$("._nav").addClass("_nav_cur");
		$("._address").removeClass("_address_hover");
	})
	
	$("#ch_login").click(function(){
		window.location.href = "login.html";
	})
	
	$("#ch_index").click(function(){
		window.location.href = "index.html";
	})
	
	$("._nav_classify").hover(function(){
		$("._nav_classify>img").animate({
			aa:"180"
		},{
			step:function(now,fx){
				$("._nav_classify>img").css({"transform":"rotate("+now+"deg)"})
			}
		});
	},function(){
		$("._nav_classify>img").animate({
			aa:"0"
		},{
			step:function(now,fx){
				$("._nav_classify>img").css({"transform":"rotate("+now+"deg)"})
			}
		});
	})
	
	$("._nav_classify").hover(function(){
		$("._nav_classify_list").show();
	},function(){
		$("._nav_classify_list").hide();
	})
	
	$(".product_number>div").hover(function(){
		$(".product_number div>img:first-child").animate({"margin-top":"-20px"},50)
	},function(){
		$(".product_number div>img:first-child").animate({"margin-top":"0px"},50)
	})
	
	//添加购物车
	$(".add").click(function(){
		var $val = $(".The_shipping_address input[type=number]").val();
		$(".The_shipping_address input[type=number]").val(parseInt($val)+1);
	})
	$(".sup").click(function(){
		var $val = $(".The_shipping_address input[type=number]").val();
		if($val >= 1){
			$(".The_shipping_address input[type=number]").val(parseInt($val)-1);
		}
	})
	//选择产品
	$(".category li").click(function(){
		var $lis = $(".category li");
		for (var i=0; i<$lis.length;i++) {
			$lis.eq(i).removeClass("category_hover");
		}
		$lis.eq($(this).index()).addClass("category_hover");
	})
	//others切换
		var $chang = 1;
		
		$("#again").click(function(){
			var $divs =$(".others>div");
			for (var i = 0; i < $divs.length; i++){
				$divs.eq(i).hide()
			}
			var $num1 =  Math.floor(Math.random()*6);
			var $num2 =  Math.floor(Math.random()*6);
			while ($num2 == $num1){
				var $num2 =  Math.floor(Math.random()*6);
			}
			var $num3 =  Math.floor(Math.random()*6);
			while ($num3 == $num1||$num3 == $num2){
				var $num3 =  Math.floor(Math.random()*6);
			}
			$divs.eq($num1).show();
			$divs.eq($num2).show();
			$divs.eq($num3).show();
		}) 
//	$("#again").click(function(){
//		var $divs =$(".others>div");
//		var a = new Array(-1,-1,-1);
//		this.status = true;
//		for (var i = 0; i < 3; i++) {
//			while(true){
//				var num = Math.floor(Math.random()*6);
//				a[i] = num;
//				console.log(num)
//				if(num != a[0] && num != a[1] && num != a[2]){
//						status = false;
//				}
//			}
//			do{
//			var num = Math.floor(Math.random()*6);
//			a[i] = num;
//				if(num != a[0] && num != a[1] && num != a[2]){
//					status = false;
//				}
//			}while(status)
//			status = true;
//			console.log(a[i])
//	}

//	})
	//产品详情切换
	$(".product_detail>.product_detail_nav li").click(function(){
		var $divs = $(".product_detail_content>div");
		var $lis = $(".product_detail>.product_detail_nav li");
		for (var i=0; i<$lis.length;i++) {
			$lis.eq(i).removeClass("product_detail_nav_li_hover");
		}
		for (var i=0; i<$divs.length;i++) {
			$divs.eq(i).removeClass("_show");
		}
		$(this).addClass("product_detail_nav_li_hover");
		$divs.eq($(this).index()).addClass("_show");
	})
	
	$(".float_nav li").click(function(){
		var $divs = $(".product_detail_content>div");
		var $lis = $(".float_nav li");
		for (var i=0; i<$lis.length;i++) {
			$lis.eq(i).removeClass("product_detail_nav_li_hover");
		}
		for (var i=0; i<$divs.length;i++) {
			$divs.eq(i).removeClass("_show");
		}
		$(this).addClass("product_detail_nav_li_hover");
		$divs.eq($(this).index()).addClass("_show");
	})
	
	//用户评论
	$("._eva_nav>div").click(function(){
		var $div = $("._eva_nav>div");
		var $divs = $("._evaluation_list>div");
		for(var i=0;i<$div.length;i++){
			$div.eq(i).removeClass("_eva_nav_hover");
		}
		for(var i=0;i<$divs.length;i++){
			$divs.eq(i).removeClass("_show");
		}
		$(this).addClass("_eva_nav_hover");
		$divs.eq($(this).index()).addClass("_show");
	})
	
	//首页轮播图一
	$(".lunbo_one").hover(function(){
//		$(".lunbo_btn").show();
		$(this).find(".lunbo_btn").show();
	},function(){
//		$(".lunbo_btn").hide();
		$(this).find(".lunbo_btn").hide();
	})
	$(".lunbo_one_left").click(function(){
		carousel_left(".lunbo_one>ul",982,6,1000);
		carousel_dot2(".lunbo_one>ul",".lunbo_one_dot",982,"lunbo_dot_hover");
	})
	$(".lunbo_one_right").click(function(){
		carousel_right(".lunbo_one>ul",982,6,1000);
		carousel_dot2(".lunbo_one>ul",".lunbo_one_dot",982,"lunbo_dot_hover");
	})
//	首页轮播图二
	$(".lunbo_tow").hover(function(){
//		$(".lunbo_btn").show();
		$(this).find(".lunbo_btn").show();
	},function(){
//		$(".lunbo_btn").hide();
		$(this).find(".lunbo_btn").hide();
	})
	$(".lunbo_tow_left").click(function(){
		carousel_left(".lunbo_tow>ul",982,2,1000);
	})
	$(".lunbo_tow_right").click(function(){
		carousel_right(".lunbo_tow>ul",982,2,1000);
	})
	//个人中心登录注册跳转
	$("#btn_login").click(function(){
		window.location.href = "login.html";
	})
	$("#btn_reg").click(function(){
		window.location.href = "register.html";
	})
	
	
	$(".img_am img").hover(function(){
		$(this).animate({"margin-left":"-10px"});
	},function(){
		$(this).animate({"margin-left":"0px"});
	})
	
	$(".model_right_nav li").mouseover(function(){
		var $lis = $(".model_right_nav li");
		var $divs = $("._model_right_list>div");
		for (var i = 0; i<$lis.length; i++) {
			$lis.eq(i).removeClass("right_nav_li_hover")
		}
		for (var i = 0; i<$divs.length; i++) {
			$divs.eq(i).removeClass("_show")
		}
		$(this).addClass("right_nav_li_hover");
		$divs.eq($(this).index()).addClass("_show");
	})
	
	//浮动搜索框
	$(window).scroll(function(){
	// 滚动条距离顶部的距离 大于 200px时
	if($(window).scrollTop() >= 1000){
		$(".float_search").slideDown();
	} else{
	$(".float_search").slideUp()
		}
	});
	
	$(".current_head_middle_search>input").focus(function(){
		$(this).parent().find(".search_h").show();
	}).blur(function(){
		$(this).parent().find(".search_h").hide()
	})
	
	$("._search").click(function(){
		var $sea_H = $(".current_head_middle_search>input").val();
		var $par = $("._history");
		var $new = $("<p>"+$sea_H+"</p>");
		$par.append($new);
		$(".current_head_middle_search>input").val("");
	})
	
	$("._clear_h").click(function(){
		$("._history p").remove();
	})
	
	//全屏广告
	$(".ad_exit").click(function(){
		$(".ad_mian").hide();
	})
	//顶部广告
	$(".ad_T").hover(function(){
//		$(this).find("img").animate({"padding-top":"200px"})
		$(this).find("img").hide();
		$(this).find("div").animate({"height":"245px"});
		$(this).animate({"height":"245px"});
	},function(){
		$(this).find("img").show(1000);
		$(this).find("div").animate({"height":"0px"});
		$(this).animate({"height":"80px"});
	})
})
//$("#tran_img").animate({
//			aa:"0"
//		},{
//			step:function(now,fx){
//				$("#tran_img").css({"transform":"rotate("+now+"deg)"})
//			}
//		});