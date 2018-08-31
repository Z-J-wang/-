$(document).ready(function(){
	var $span = 20;
	var $snakes = $(".background>div");
	var $snake_head = $(".snake");
	var $H_Top = $snake_head.css("top");
	var $H_Left = $snake_head.css("left");
	var coordinate_x = new Array();
	var coordinate_y = new Array();
	for(var i=0;i < $snakes.length;i++){
		coordinate_x[i] = $snakes.eq(i).css("top");
		coordinate_y[i] = $snakes.eq(i).css("left");
	}
	
	
	$(window).keydown(function(event){
		switch (event.keyCode){
			case 38:move_top();
				break;
			case 40:move_bottom();
				break;
			case 37:move_left();
				break;
			case 39:move_right();
				break;
		}
	})
	
	$("#btn").click(function(){
		Crate_snake_boby();
	})
	
	
})



//创建一节蛇身
function Crate_snake_boby(){
	var $background = $('.background');
	var $newSnake_boby = $("<div class='snake_boby'></div>");
	var $snakes = $(".background>div");
	var L_left = parseInt($snakes.eq($snakes.length-1).css("left"))-20+'px';
	var L_Top = $snakes.eq($snakes.length-1).css("top");
	$newSnake_boby.css("left",L_left);
	$newSnake_boby.css("top",L_Top);
	$background.append($newSnake_boby);
	
}


function move_right(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	var coordinate_x = new Array();
	var coordinate_y = new Array();
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
		
		var $H_Top1 = parseInt($snakes.eq(0).css("top"));;
		var $H_Left1 = parseInt($snakes.eq(0).css("left"));
		console.log($H_Left1,$H_Top1)
		for(var j = 0;j < $snakes.length;j++){
			console.log(parseInt(coordinate_x[j]),parseInt(coordinate_y[j]));
			if($H_Top1 == parseInt(coordinate_y[j]) && $H_Left1 == parseInt(coordinate_x[j])){
				alert("Game Over");
			}
		}
	}else{
		return false;
	}
	
}
function move_left(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	var coordinate_x = new Array();
	var coordinate_y = new Array();
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
		var $H_Top1 = parseInt($snakes.eq(0).css("top"));;
		var $H_Left1 = parseInt($snakes.eq(0).css("left"));
		console.log($H_Left1,$H_Top1)
		for(var j = 0;j < $snakes.length;j++){
			console.log(parseInt(coordinate_x[j]),parseInt(coordinate_y[j]));
			if($H_Top1 == parseInt(coordinate_y[j]) && $H_Left1 == parseInt(coordinate_x[j])){
				alert("Game Over");
			}
		}
	}else{
		return false;
	}
}
function move_top(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	var coordinate_x = new Array();
	var coordinate_y = new Array();
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
		var $H_Top1 = parseInt($snakes.eq(0).css("top"));;
		var $H_Left1 = parseInt($snakes.eq(0).css("left"));
		console.log($H_Left1,$H_Top1)
		for(var j = 0;j < $snakes.length;j++){
			console.log(parseInt(coordinate_x[j]),parseInt(coordinate_y[j]));
			if($H_Top1 == parseInt(coordinate_y[j]) && $H_Left1 == parseInt(coordinate_x[j])){
				alert("Game Over");
			}
		}
	}else{
		return false;
	}
}
function move_bottom(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	var coordinate_x = new Array();
	var coordinate_y = new Array();
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
		var $H_Top1 = parseInt($snakes.eq(0).css("top"));;
		var $H_Left1 = parseInt($snakes.eq(0).css("left"));
		console.log($H_Left1,$H_Top1)
		for(var j = 0;j < $snakes.length;j++){
			console.log(parseInt(coordinate_x[j]),parseInt(coordinate_y[j]));
			if($H_Top1 == parseInt(coordinate_y[j]) && $H_Left1 == parseInt(coordinate_x[j])){
				alert("Game Over");
			}
		}
	}else{
		return false;
	}
}