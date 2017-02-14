var regs={
	mobileReg:/^1[3|4|5|7|8]\d{9}$/,
	pwdReg: /[a-zA-Z0-9]{6,20}/
}
//手机号码验证
var input1;
var input2;
$("#loginname").blur(function(){
	// console.log(111)
	if(regs.mobileReg.test($(this).val())) {
		$("#loginnameerror").html("");
		
		input1=$("#loginname").val();
		// return true;
	}else{
		$("#loginnameerror").html("请输入正确手机号")
		// return false;
	
	}
})
//密码验证
$("#loginpass").blur(function(){
	// console.log(111)
	if(regs.pwdReg.test($(this).val())) {
		$("#loginpasserror").html("")
		// return true;
		input2=$("#loginpass").val()
	}else{
		$("#loginpasserror").html("设置密码为6-20位必须包含字母和数字");
		// return false;
		
	}
})

//点击登录
$(".loginbutnitem").click(function(){
	if (input1==$.cookie("userName1")&&input2==$.cookie("pwd")) {
		$.cookie("userName",input1,{expires:7,path:"/"})
		location.href="../html/index.html";
	}else{
		$("#loginnameerror").html("用户名不存在或密码不正确")
	}
})