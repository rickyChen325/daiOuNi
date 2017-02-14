//轮播图
$(function() {
	var oDiv = $(".banner_box");
	var oUl = $(".banner", oDiv);
	var aLi = $("li", oUl);
	var oNav = $(".banner_nav", oDiv);
	var aNav = $("div", oNav);
	var oPrev = $(".banner_prev", oDiv);
	var oNext = $(".banner_next", oDiv);
	
	var len = aLi.length;
	//0 1 2 3 4 ... len-1
	var iNow = 1;
	var oFirst = aLi.first().clone();
	var oLast = aLi.last().clone();
	oUl.append(oFirst);
	aLi.first().before(oLast);
	len += 2;
	oUl.width(aLi.first().outerWidth()*len);
	oUl.css("left", -aLi.first().outerWidth());
	
	autoPlay();
	function autoPlay() {
		clearInterval(oDiv.timer);
		oDiv.timer = setInterval(function() {
			iNow++;
			if(iNow==len) {
				oUl.css("left", -aLi.first().outerWidth());
				iNow = 2;
			}
			tab();
		}, 2000)
	}
	
	oPrev.mousedown(function(e) {
		e.preventDefault() 
		iNow--;
		if(iNow==-1) {
			oUl.css("left", -(len-2)*aLi.first().outerWidth());
			iNow = len-3;
		}
		tab();
	})
	oNext.mousedown(function(e) {
		e.preventDefault() 
		iNow++;
		if(iNow==len) {
			oUl.css("left", -aLi.first().outerWidth());
			iNow = 2;
		}
		tab();
	})
	
	oDiv.mouseover(function() {
		clearInterval(oDiv.timer);
	})
	oDiv.mouseout(function() {
		autoPlay();
	})

	aNav.click(function() {
		// iNow 0 1 2 3 ... len-2 len-1
		// nav    0 1 2 ... len-1
		iNow = $(this).index() + 1;  
		tab();
	})

	function tab() {
		aNav.removeClass();
		var navIndex = 0;
		// iNow       0 1 2 3 4 5 ... len-3 len-2 len-1
	  // navIndex len-3 0 1 2 3 4 ... len-4 len-3 0
	  	if(iNow==0) {
	  		navIndex = len-3;
	  	} else if(iNow==len-1) {
	  		navIndex = 0;
	  	} else {
	  		navIndex = iNow-1;
	  	}
	  	aNav.eq(navIndex).addClass('active');
	  	// iNow 0 1 2 3 4 5 ... len-2 len-1
	  	// left 0 1  -iNow*aLi[0].offsetWidth
	  	oUl.stop().animate({left: -iNow*aLi.first().outerWidth()})
	}

	//楼梯
	var isClick=false;
	$("#loutiNav ul li").click(function(){
		isClick=true;
		$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
		var iTop=$(".louti").eq($(this).index()).offset().top
		$("html,body").stop().animate({scrollTop:iTop},500,function(){
			isClick=false;
		})
	})
	$("#loutiNav .back").click(function(){
		isClick=true;
		$("html,body").stop().animate({scrollTop:0},500,function(){
			$("#loutiNav ul li").find("span").removeClass("active")
			isClick=false;
		})
	})

	$(window).scroll(function(){
		if (!isClick) {
			var iScroolTop=$(this).scrollTop();
			$(".louti").each(function(){
				if (iScroolTop>=$(this).offset().top-$(this).prev().outerHeight()/2) {
					$("#loutiNav ul li").eq($(this).index(".louti")).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
				}
			})
		}	
	})


	//json
	$.get("../data/index/news.json",function(data){
		// console.log(data)
		// console.log(data)
		for(var i in data){
			$("#news").append(
				"<div class='maintext'>"	    
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news1+"</a>"
		            +"</div>"	            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news2+"</a>"
		            +"</div>"	            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news3+"</a>"
		            +"</div>"            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news4+"</a>"
		            +"</div>"	            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news5+"</a>"
		            +"</div>"	            
		        +"</div>"
				)
		}
		
	})

	$.get("../data/index/knowledge.json",function(data){
		// console.log(data)
		// console.log(data)
		for(var i in data){
			$("#knowledge").append(
				"<div class='maintext'>"	    
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news1+"</a>"
		            +"</div>"	            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news2+"</a>"
		            +"</div>"	            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news3+"</a>"
		            +"</div>"            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news4+"</a>"
		            +"</div>"	            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news5+"</a>"
		            +"</div>"	            
		        +"</div>"
				)
		}
		
	})

	$.get("../data/index/knowledge2.json",function(data){
		// console.log(data)
		// console.log(data)
		for(var i in data){
			$("#knowledge2").append(
				"<div class='maintext'>"	    
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news1+"</a>"
		            +"</div>"	            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news2+"</a>"
		            +"</div>"	            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news3+"</a>"
		            +"</div>"            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news4+"</a>"
		            +"</div>"	            
		            +"<div>"
		            	+"· <a target='_blank' href='#'>"+data[i].news5+"</a>"
		            +"</div>"	            
		        +"</div>"
				)
		}
		
	})
})

