
//二级导航
$("#topmenu ul li").hover(function () {
// console.log(1)
    $("#topmenu .topmenu>li").addClass("menuhover");
    // $("#topmenu ul li ul").addClass("submenufixed");
    $(this).addClass("menuhover").children("ul").show();
    }, function () {
    $(this).removeClass("menuhover").children("ul").hide();
});

 //百度suggestion  
 /*
var oInput = $("#keyword");
oInput.keyup(function(){
	var value=$(this).val();
	var oScript ="<script  src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+value+"&json=1&p=3&cb=suggestion1&t'></script>";
	$("body").append(oScript);
})
// oInput.onkeyup = function() {
// 	var value = this.value;
// 	var oScript = document.createElement("script");
// 	oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+value+"&json=1&p=3&cb=suggestion1&t";
// 	document.body.appendChild(oScript);
// }	

function suggestion1(data) {
	// console.log(data.g);
	var result = data.g;
	var oUl = $("#tipList");
	oUl.html("");
	for(var i in result) {
		var oLi ="<li>"+result[i].q+"</li>"
		
		oUl.append(oLi);
	}
}
// function suggestion1(data) {
// 	// console.log(data.g);
// 	var result = data.g;
// 	var oUl = $("tipList");
// 	oUl.innerHTML = "";
// 	for(var i in result) {
// 		var oLi = document.createElement("li");
// 		oLi.innerHTML = result[i].q;
// 		oUl.appendChild(oLi);
// 	}
// }
*/
/*
var oInput = $("#keyword");
oInput.keyup(function() {
	$.ajax({
		url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oInput.val()+"&json=1&p=3&t",
		dataType: "jsonp",
		jsonp: "cb",
		success:function(data){
			var lists = data.g;
			var oUl = $("#tipList");
			oUl.html("");
			for(var i in lists) {
				var oLi = $("<li></li>");
				oLi.html(lists[i].q);
				oUl.append(oLi);
			}
			
			
			$("#tipList li").hover(function(){
				$("#tipList li").css({color:"gray",background:"white"}),function(){
					$(this).css({color:"#999",background:"#eee"})
				}
				
			})
			$("#tipList li").click(function(){
				oInput.val($(this).text())
			})
		}
		
	})
})
*/
 $("#keyword").focus().keyup(function(){
    	var value=$(this).val();
        $("#tipList").show();
    	$.ajax({
    		url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+value+"&json=1&p=3&cb=suggestion&t",
            dataType:"jsonp",
            jsonpCallback:"suggestion",
            success:function(data){
                suggestion(data);
            }    	
     	})
         function suggestion(data){
	    	var result = data.g;
			var oUl = $("#tipList");
			oUl.html("");
			for(var i in result) {
				var oLi =$("<li></li>");
				oLi.html(result[i].q);
				oUl.append(oLi);
			}
            $("#keyword").blur(function(){
            $("#tipList").hide();
            })
            $("#tipList li").each(function(){
                $(this).mouseover(function(){
                    $(this).css("background","#ccc").siblings().css("background","#fff");
                }).mouseout(function(){
                    $(this).css("background","#fff");
                });
                $(this).mousedown(function(e){
                    var value1=$(this).html();
                    $("#keyword").val(value1);
                    $("#tipList").hide();
                })
            })
	    }
    });


var quet="<a id='quet' href='../html/index.html'>退出</a>"

//登录cookie
if ($.cookie("userName")) {
	$("#hello").html("您好，"+$.cookie("userName")+"  欢迎光临戴欧妮珠宝网  "+quet+"");
	$("#login").html("");
	$("#gang").html("");
	$("#regist").html("");
}else if (!$.cookie("userName")) {
	$("#hello").text("您好，欢迎光临戴欧妮珠宝网！")
	$("#login").html("登录");
	$("#gang").html("/");
	$("#regist").html("注册");
}

$("#quet").click(function(){
	console.log(111)
	if ($.cookie("pwd")) {
	 	$.cookie("userName","",{expires:-1,path:"/"})
	}
})