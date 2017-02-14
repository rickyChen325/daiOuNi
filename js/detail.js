$(function(){
	//插入头部
	$.get("common/header.html",function(data){
		$("#header").html(data);
		
	})
//	//插入尾部
	$.get("common/footer.html",function(data){
		$("#footer").html(data);
	})
	
	function GetRequest() {   
	   var url = location.search; //获取url中"?"符后的字串   
	   var theRequest = new Object();   
	   if (url.indexOf("?") != -1) {   
	      var str = url.substr(1);   
	      strs = str.split("&");   
	      for(var i = 0; i < strs.length; i ++) {   
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
	      }   
	   }   
	   return theRequest;   
	}
	var onlyid=GetRequest().id;
	//储存商品变量
		var goodName;//商品名称
		var goodPrice;//商品价格
		var specifications;//商品规格
		var picture;//商品图片
		var numbers=1;//商品点击数量
		var goodId//增加商品id
	if(onlyid==0){$.get("../data/goodDetail/1.json",function(data){
			//商品放大镜加载
		for(var i in data){
			$("#boxs").append("<div class='middle-img-box'>"+
						"<img src="+data[i].img1+" class='middle-img'/>"+
						"<div class='image-zoom'></div>"+
					"</div>"+
					"<div class='big-img-box'>"+
						"<img src="+data[i].img1+" class='big-img'/>"+
					"</div>"+
					"<ul class='small-img-box'>"+
						"<li><a href='##'><img src="+data[i].img1+" class='active'/></a></li>"+
						"<li><a href='##'><img src="+data[i].img2+" /></a></li>"+
						"<li><a href='##'><img src="+data[i].img3+" /></a></li>"+
						"<li><a href='##'><img src="+data[i].img4+" /></a></li>"+
						
					"</ul>")
		}
		var oDiv = $("#boxs");
				var oMiddleImgBox = $("#boxs .middle-img-box");
				var oMiddleImg = $("#boxs .middle-img");
				var oImageZoom = $("#boxs .image-zoom");
				var oBigImgBox = $("#boxs .big-img-box");
				var oBigImg = $("#boxs .big-img");
				var oSmallImgBox = $("#boxs .small-img-box");
				var aSmallImg = $("#boxs .small-img-box img");

				aSmallImg.mouseover(function() {
					var src = $(this).attr("src")
					aSmallImg.removeClass("active");
					$(this).addClass("active");
					oMiddleImg.attr("src", src);
					oBigImg.attr("src", src);
				})
				
				oMiddleImgBox.mouseover(function() {
					oImageZoom.show();
					oBigImgBox.show();
				})
				
				oMiddleImgBox.mouseout(function() {
					oImageZoom.hide();
					oBigImgBox.hide();
				})
				
				oMiddleImgBox.mousemove(function(e) {
					var iScrollLeft = $(window).scrollLeft();
					var iScrollTop = $(window).scrollTop();
					var iLeft = iScrollLeft + e.clientX - oImageZoom.outerWidth()/2 - oMiddleImgBox.offset().left;
					var iTop = iScrollTop + e.clientY - oImageZoom.outerHeight()/2 - oMiddleImgBox.offset().top;
					var iSmallMaxLeft = oMiddleImgBox.outerWidth() - oImageZoom.outerWidth();
					var iSmallMaxTop = oMiddleImgBox.outerHeight() - oImageZoom.outerHeight();

					if(iLeft<0) {
						iLeft = 0;
					} else if(iLeft>iSmallMaxLeft) {
						iLeft = iSmallMaxLeft;
					}

					if(iTop<0) {
						iTop = 0;
					} else if(iTop>iSmallMaxTop) {
						iTop = iSmallMaxTop;
					}

					var iBigLeft = -iLeft/iSmallMaxLeft*(oBigImg.outerWidth()-oBigImgBox.outerWidth());
					var iBigTop = -iTop/iSmallMaxTop*(oBigImg.outerHeight()-oBigImgBox.outerHeight());
					oImageZoom.css({"left": iLeft, "top": iTop});
					oBigImg.css({"left": iBigLeft, "top": iBigTop})
				})
	})
	
	$.get("../data/goodDetail/good1.json",function(data){
		//侧面内容加载
		for(var i in data){
			$(".tipnamef").text(data[i].name);
			$("#tips").text(data[i].tips);
			$(".tippricef").text(data[i].price);
			$(".squrs").text(data[i].spec);
			$(".place").text(data[i].place);
			$(".weight").text(data[i].weight);
				goodName=$(".tipnamef").text();
				goodPrice=$(".tippricef").text();
				specifications=$(".squrs").text();
				picture=data[i].pic;
				goodId=data[i].id;
		}
	})
	}
	if(onlyid==1){$.get("../data/goodDetail/1.1.json",function(data){
			//商品放大镜加载
		for(var i in data){
			$("#boxs").append("<div class='middle-img-box'>"+
						"<img src="+data[i].img1+" class='middle-img'/>"+
						"<div class='image-zoom'></div>"+
					"</div>"+
					"<div class='big-img-box'>"+
						"<img src="+data[i].img1+" class='big-img'/>"+
					"</div>"+
					"<ul class='small-img-box'>"+
						"<li><a href='##'><img src="+data[i].img1+" class='active'/></a></li>"+
						"<li><a href='##'><img src="+data[i].img2+" /></a></li>"+
						"<li><a href='##'><img src="+data[i].img3+" /></a></li>"+
						"<li><a href='##'><img src="+data[i].img4+" /></a></li>"+
						
					"</ul>")
		}
		var oDiv = $("#boxs");
				var oMiddleImgBox = $("#boxs .middle-img-box");
				var oMiddleImg = $("#boxs .middle-img");
				var oImageZoom = $("#boxs .image-zoom");
				var oBigImgBox = $("#boxs .big-img-box");
				var oBigImg = $("#boxs .big-img");
				var oSmallImgBox = $("#boxs .small-img-box");
				var aSmallImg = $("#boxs .small-img-box img");

				aSmallImg.mouseover(function() {
					var src = $(this).attr("src")
					aSmallImg.removeClass("active");
					$(this).addClass("active");
					oMiddleImg.attr("src", src);
					oBigImg.attr("src", src);
				})
				
				oMiddleImgBox.mouseover(function() {
					oImageZoom.show();
					oBigImgBox.show();
				})
				
				oMiddleImgBox.mouseout(function() {
					oImageZoom.hide();
					oBigImgBox.hide();
				})
				
				oMiddleImgBox.mousemove(function(e) {
					var iScrollLeft = $(window).scrollLeft();
					var iScrollTop = $(window).scrollTop();
					var iLeft = iScrollLeft + e.clientX - oImageZoom.outerWidth()/2 - oMiddleImgBox.offset().left;
					var iTop = iScrollTop + e.clientY - oImageZoom.outerHeight()/2 - oMiddleImgBox.offset().top;
					var iSmallMaxLeft = oMiddleImgBox.outerWidth() - oImageZoom.outerWidth();
					var iSmallMaxTop = oMiddleImgBox.outerHeight() - oImageZoom.outerHeight();

					if(iLeft<0) {
						iLeft = 0;
					} else if(iLeft>iSmallMaxLeft) {
						iLeft = iSmallMaxLeft;
					}

					if(iTop<0) {
						iTop = 0;
					} else if(iTop>iSmallMaxTop) {
						iTop = iSmallMaxTop;
					}

					var iBigLeft = -iLeft/iSmallMaxLeft*(oBigImg.outerWidth()-oBigImgBox.outerWidth());
					var iBigTop = -iTop/iSmallMaxTop*(oBigImg.outerHeight()-oBigImgBox.outerHeight());
					oImageZoom.css({"left": iLeft, "top": iTop});
					oBigImg.css({"left": iBigLeft, "top": iBigTop})
				})
	})
	
	$.get("../data/goodDetail/good2.json",function(data){
		//侧面内容加载
		for(var i in data){
			$(".tipnamef").text(data[i].name);
			$("#tips").text(data[i].tips);
			$(".tippricef").text(data[i].price);
			$(".squrs").text(data[i].spec);
			$(".place").text(data[i].place);
			$(".weight").text(data[i].weight);
				goodName=$(".tipnamef").text();
				goodPrice=$(".tippricef").text();
				specifications=$(".squrs").text();
				picture=data[i].pic;
				goodId=data[i].id;
		}
	})
	}	
	
	
	
	var ss=1
	
	//购物车加减按钮
	$("#redu").click(function(){
		if(ss>=2){
			ss--;
			$("#add").val(ss);
			numbers--;
		}		
	})
	$("#add1").click(function(){
		if(ss<=99){
			ss++;			
			numbers++;
			$("#add").val(ss)
		}		
	})
	
	//吸顶菜单
	var settop=	$("#mainbox_top").offset().top+100
	$(window).scroll(function(){

	if(
