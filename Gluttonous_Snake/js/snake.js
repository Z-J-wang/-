
var $background = $('.background');
var coordinate_x = new Array();
var coordinate_y = new Array();
var status = "Right";
var Time;
var $grade;

$(document).ready(function(){
	$(".begin select").click(function(){
		Grade();
	})
	Grade();
	$("#btn_begin").click(function(){
		$(".start").show();
		Crate_start_snake_boby();
		Crate_start_snake_boby();
		create_foot();
		Time = setInterval(Auto_walk,$grade);
		$(".begin").hide();
	})
	$("#btn_exit").click(function(){
		window.close();	
	})
	
	$("#btn_restart").click(function(){
		window.location.reload();
	})
	
})
function Grade(){
	var value = $(".begin select").val();
	switch (parseFloat(value)){
		case 1: $grade = 500;
			break;
		case 2: $grade = 200;
			break;
		case 3: $grade = 50;
			break;
	}
}
$(document).ready(function(){
	$(".start").hide();
	$(window).keydown(function(event){
		switch (event.keyCode){
			case 38:{
				move_top();
				eat();
				if(status != "Bottom"){
					status = "Top";
				}
				
			}
				break;
			case 40:{
				move_bottom();
				eat();
				if(status != "Top"){
					status = "Bottom";
				}
			}
				break;
			case 37:{
				move_left();
				eat();
				if(status != "Right"){
					status = "Left";
				}
			}
				break;
			case 39:{
				move_right();
				eat();
				if(status != "Left"){
					status = "Right";
				}
			}
				break;
		}
	})
	

	$("#btn").click(function(){
//		Crate_start_snake_boby();
//		Grade();
	alert($(".begin select").val())
	})
	
	
})

//创建一节蛇身
function Crate_start_snake_boby(){
	var $newSnake_boby = $("<div class='snake_boby'></div>");
	var $snakes = $(".background>div");
	var L_left = parseInt($snakes.eq($snakes.length-1).css("left"))-20+'px';
	var L_Top = $snakes.eq($snakes.length-1).css("top");
	$newSnake_boby.css("left",L_left);
	$newSnake_boby.css("top",L_Top);
	$background.append($newSnake_boby);
}

function Crate_snake_boby(){
	var $newSnake_boby = $("<div class='snake_boby'></div>");
	var $snakes = $(".background>div");
	var Last_boby_x = parseInt($snakes.eq($snakes.length-1).css("left"));
	var LastButOne_boby_x = parseInt($snakes.eq($snakes.length-2).css("left"));
	var Last_boby_y = parseInt($snakes.eq($snakes.length-1).css("top"));
	var LastButOne_boby_y = parseInt($snakes.eq($snakes.length-2).css("top"));
	console.log(LastButOne_boby_x,LastButOne_boby_x)
	if(Last_boby_x == LastButOne_boby_x){
		if(Last_boby_y > LastButOne_boby_y){
			$newSnake_boby.css("left",Last_boby_x);
			$newSnake_boby.css("top",Last_boby_y+20+'px');
		}else if(Last_boby_y < LastButOne_boby_y){
			$newSnake_boby.css("left",Last_boby_x);
			$newSnake_boby.css("top",Last_boby_y-20+'px');
		}
	}else if(Last_boby_y == LastButOne_boby_y){
		if(Last_boby_x > LastButOne_boby_x){
			$newSnake_boby.css("left",Last_boby_x+20+'px');
			$newSnake_boby.css("top", Last_boby_y);
		}else if(Last_boby_x < LastButOne_boby_x){
			$newSnake_boby.css("left",Last_boby_x-20+'px');
			$newSnake_boby.css("top", Last_boby_y);
		}
	}
	$background.append($newSnake_boby);
	console.log($newSnake_boby.css("left"),$newSnake_boby.css("top"))
}

function create_foot(){
	this.foot_x = Math.floor(Math.random()*50)*20;
	this.foot_y = Math.floor(Math.random()*30)*20;
	var $foot = $("<span class='foot'></span>");
	$foot.css("top",foot_y+"px");
	$foot.css("left",foot_x+"px");
	$background.append($foot);
	console.log(foot_x,foot_y);
}

function eat(){
	var $snakes = $(".background>div");
	var $H_Top1 = parseInt($snakes.eq(0).css("top"));;
	var $H_Left1 = parseInt($snakes.eq(0).css("left"));
	if($H_Top1 == foot_y && $H_Left1 == foot_x){
		$(".foot").remove();
		Crate_snake_boby();
		create_foot();
	}
}

function move_right(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	for(var i=0;i < $snakes.length;i++){
		coordinate_y[i] = $snakes.eq(i).css("top");
		coordinate_x[i] = $snakes.eq(i).css("left");
	}
	if(!($H_Top == parseInt(coordinate_y[1]) && ($H_Left+20) == parseInt(coordinate_x[1]))){
		$snakes.eq(0).css("left",$H_Left+20+'px');
		for(var i = 1; i < $snakes.length; i++){
			$snakes.eq(i).css("top",coordinate_y[i-1]);
			$snakes.eq(i).css("left",coordinate_x[i-1]);
		}
		collide_dead();  
	}else{
		return false;
	}
	
}
function move_left(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	for(var i=0;i < $snakes.length;i++){
		coordinate_y[i] = $snakes.eq(i).css("top");
		coordinate_x[i] = $snakes.eq(i).css("left");
	}
	if(!($H_Top == parseInt(coordinate_y[1]) && ($H_Left-20) == parseInt(coordinate_x[1]))){
		$snakes.eq(0).css("left",$H_Left-20+'px');
		for(var i = 1; i < $snakes.length; i++){
			$snakes.eq(i).css("top",coordinate_y[i-1]);
			$snakes.eq(i).css("left",coordinate_x[i-1]);
		}
	collide_dead();
	}else{
		return false;
	}
}
function move_top(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	for(var i=0;i < $snakes.length;i++){
		coordinate_y[i] = $snakes.eq(i).css("top");
		coordinate_x[i] = $snakes.eq(i).css("left");
	}
	if(!(($H_Top-20) == parseInt(coordinate_y[1]) && $H_Left == parseInt(coordinate_x[1]))){
		$snakes.eq(0).css("top",$H_Top-20+'px');
		for(var i = 1; i < $snakes.length; i++){
			$snakes.eq(i).css("top",coordinate_y[i-1]);
			$snakes.eq(i).css("left",coordinate_x[i-1]);
		}
	collide_dead();
	}else{
		return false;
	}
}
function move_bottom(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	for(var i=0;i < $snakes.length;i++){
		coordinate_y[i] = $snakes.eq(i).css("top");
		coordinate_x[i] = $snakes.eq(i).css("left");
	}
	if(!(($H_Top+20) == parseInt(coordinate_y[1]) && $H_Left == parseInt(coordinate_x[1]))){
		$snakes.eq(0).css("top",$H_Top+20+'px');
		for(var i = 1; i < $snakes.length; i++){
			$snakes.eq(i).css("top",coordinate_y[i-1]);
			$snakes.eq(i).css("left",coordinate_x[i-1]);
		}
		collide_dead();
	}else{
		return false;
	}
}

function collide_dead(){
		var $snakes = $(".background>div");
		var $H_Top1 = parseInt($snakes.eq(0).css("top"));;
		var $H_Left1 = parseInt($snakes.eq(0).css("left"));
//		console.log($H_Left1,$H_Top1)
		for(var i=0;i < $snakes.length;i++){
			coordinate_y[i] = $snakes.eq(i).css("top");
			coordinate_x[i] = $snakes.eq(i).css("left");
		}
		for(var j = 1;j < $snakes.length;j++){
//			console.log(parseInt(coordinate_x[j]),parseInt(coordinate_y[j]));
			if($H_Top1 == parseInt(coordinate_y[j]) && $H_Left1 == parseInt(coordinate_x[j])){
				alert("Game Over");
				clearTimeout(Time);
				$(".GameOver").show();
//				$("#btn_begin").focus();
				return false;
			}
			if($H_Top1 > 580 || $H_Top1 < 0|| $H_Left1 > 980 || $H_Left1 < 0){
				alert("Game Over");
				clearTimeout(Time);
				$(".GameOver").show();
				return false;
			}
		}
}


function Auto_walk(){
	if(status == "Right"){
		move_right();
		eat();
	}else if(status == "Left"){
		move_left();
		eat();
	}else if(status == "Top"){
		move_top();
		eat();
	}else if(status == "Bottom"){
		move_bottom();
		eat();
	}
}
