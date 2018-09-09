$().ready(function(){
	$("#login").validate({
		rules:{
			user: {
				required: true,
				minlength: 4
			},
			passw: {
				required: true,
				minlength: 7
			}
		},
		messages: {
			user: {
				required: "哈哈！这个不能为空！！！",
				minlength: "太短了能不能长点？"
			},
			passw: {
				required: "太天真了，没密码还想登录?!",
				minlength: "还不够长，再打几个!!!"
			}
		}
	})
	
	$("#register").validate({
		
	})
})
