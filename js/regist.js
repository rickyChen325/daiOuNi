
	var regs={
		mobileReg:/^1[3|4|5|7|8]\d{9}$/,
		pwdReg: /[a-zA-Z0-9]{6,20}/
	}
	//手机号码验证
	var mol=0,pwd=0,pwd2=0,yzm=0,yzm2=0;
	var username;
	var pwdcook;
	$("#regname").blur(function(){
		// console.log(111)
		if(regs.mobileReg.test($(this).val())) {
			$("#regnameerror").html("");
			mol=1;
			username=$("#regname").val();
			// return true;
		}else{
			$("#regnameerror").html("请输入正确手机号")
			// return false;
			mol=0;
		}
	})
	//密码验证
	$("#regpass").blur(function(){
		// console.log(111)
		if(regs.pwdReg.test($(this).val())) {
			$("#regpasserror").html("")
			// return true;
			pwd=1;
			pwdcook=$("#regpass").val();
		}else{
			$("#regpasserror").html("设置密码为6-20位必须包含字母或数字");
			// return false;
			pwd=0;
		}
	})
	//密码一致验证
	$("#regword").blur(function(){
		// console.log(111)
		if($(this).val()==$("#regpass").val()) {
			$("#regworderror").html("");
			// return true;
			pwd2=1;
		}else{
			$("#regworderror").html("确认密码与设置密码不一致");
			// return false;
			pwd2=0;
		}
	})
	//验证码验证
	$("#regimgcode").blur(function(){
		var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        if(IsBy){
            $("#regimgcodeerror").html("");
            // return true;
            yzm=1;
        }else {
            $("#regimgcodeerror").html("请输入正确验证码");
            // return false;
            yzm=0;
        }
	})
	//短信验证码验证
	var yzCode="111111"
	$("#regcode").blur(function(){
			if ($(this).val()==yzCode) {
				$("#regcodeerror").html("");
				// return true;
				yzm2=1;
			}else{
				$("#regcodeerror").html("请输入正确短信验证码");
				// return false;
				yzm2=0;
			}
	})
	$.idcode.setCode();   //加载生成验证码方法

	//点击注册
	$("#regbutnitem").click(function(){
		if ($("#regread").prop("checked")){
			if (mol&&pwd&&pwd2&&yzm&&yzm2==1) {
				location.href="../html/index.html";
				// $.cookie("userInfo", JSON.stringify(userInfo), {expires: 7, path: "/"});
				$.cookie("userName",username,{expires:7,path:"/"})
				$.cookie("userName1",username,{expires:7,path:"/"})
				$.cookie("pwd",pwdcook,{expires:7,path:"/"})
				// console.log(111)
			}else{
				// console.log(222)
				
			}
		}else{
			// console.log(2222)；
			$("#regreaderror").html("请阅读协议")
		}
	})
