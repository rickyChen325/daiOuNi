$(function() {

	var goodName;
	var goodPrice;
	var goodSize;
	var goodPicture;
	var goodid=$.cookie("goodId");
	// console.log(goodid)
	//放大镜json


	if ($.cookie("goodId")==0) {
		$.get("../data/goodDetail/zoom2.json",function(data){
		// console.log(data)
		// console.log(data)
			$.cookie("aaa","aaa")
			var result=data;
			for(var i in result){
				$(".middle-img").attr("src",result[i].img1);
				$(".big-img").attr("src",result[i].img1);
				$(".small-img-box").find("img").eq(0).attr("src",result[i].img1);
				$(".small-img-box").find("img").eq(1).attr("src",result[i].img2);
				$(".small-img-box").find("img").eq(2).attr("src",result[i].img3);
				$(".small-img-box").find("img").eq(3).attr("src",result[i].img4);
				$("#name1").html(result[i].goodName);
				$("#itemmarket").html(result[i].arr[0])
				$("#itemprice").html(result[i].arr2[0])
				$("#productlist").find("img").eq(0).attr("src",result[i].img5);
				$("#productlist").find("img").eq(1).attr("src",result[i].img6);
				$("#productlist").find("img").eq(2).attr("src",result[i].img7);
				$("#productlist").find("img").eq(3).attr("src",result[i].img8);
				//选用材质
				$("#gsmateria").find("span").click(function(){
					$(this).addClass("materiaselect ").siblings("span").removeClass("materiaselect").addClass("materia");
					// var arr=[5746,7114,7614];
					// var arr2=[3024,3744,4008]
					
					$("#itemmarket").eq($(this).index(this)).html(result[i].arr[$(this).index()]);
					$("#itemprice").eq($(this).index(this)).html(result[i].arr2[$(this).index()]);
				})
				//加入购物车
				$(".addtocart_zuan").click(function(){	
					var goods=$.cookie("carts")? JSON.parse($.cookie("carts")):{};
					
						goods[goodid]={
							id:$.cookie("goodId"),
							name:result[i].goodName,
							price:$("#itemmarket").html(),
							nowprice:$("#itemprice").html(),
							pic:result[i].img1

					} 
					$.cookie("carts", JSON.stringify(goods), {expires:7,path:'/'});
					// console.log($.cookie("carts"))
					// console.log(goods)
					location.href="../html/shopCar.html"
				})
			}
		})
	}else if ($.cookie("goodId")==1) {
		$.get("../data/goodDetail/zoom1.json",function(data){
		// console.log(data)
		// console.log(data)
			$.cookie("bbb","bbb")
			var result=data;
			
			for(var i in result){
				$(".middle-img").attr("src",result[i].img1);
				$(".big-img").attr("src",result[i].img1);
				$(".small-img-box").find("img").eq(0).attr("src",result[i].img1);
				$(".small-img-box").find("img").eq(1).attr("src",result[i].img2);
				$(".small-img-box").find("img").eq(2).attr("src",result[i].img3);
				$(".small-img-box").find("img").eq(3).attr("src",result[i].img4);
				$("#name1").html(result[i].goodName);
				$("#itemmarket").html(result[i].arr[0])
				$("#itemprice").html(result[i].arr2[0])
				$("#productlist").find("img").eq(0).attr("src",result[i].img5);
				$("#productlist").find("img").eq(1).attr("src",result[i].img6);
				$("#productlist").find("img").eq(2).attr("src",result[i].img7);
				$("#productlist").find("img").eq(3).attr("src",result[i].img8);
				//选用材质
				$("#gsmateria").find("span").click(function(){
					$(this).addClass("materiaselect ").siblings("span").removeClass("materiaselect").addClass("materia");
					// var arr=[5746,7114,7614];
					// var arr2=[3024,3744,4008]
					$("#itemmarket").eq($(this).index(this)).html(result[i].arr[$(this).index()]);
					$("#itemprice").eq($(this).index(this)).html(result[i].arr2[$(this).index()]);

				})
				//加入购物车
				$(".addtocart_zuan").click(function(){			
					var goods=$.cookie("carts1")? JSON.parse($.cookie("carts1")):{};
					
						goods[goodid]={
							id:$.cookie("goodId"),
							name:result[i].goodName,
							price:$("#itemmarket").html(),
							nowprice:$("#itemprice").html(),
							pic:result[i].img1

					} 
					$.cookie("carts1", JSON.stringify(goods), {expires:7,path:'/'});
					// console.log($.cookie("carts"))
					// console.log(goods)
					location.href="../html/shopCar.html"
				})
			}
		})
	}
	
	


	//放大镜
	var oDiv = $("#box");
	var oMiddleImgBox = $("#box .middle-img-box");
	var oMiddleImg = $("#box .middle-img");
	var oImageZoom = $("#box .image-zoom");
	var oBigImgBox = $("#box .big-img-box");
	var oBigImg = $("#box .big-img");
	var oSmallImgBox = $("#box .small-img-box");
	var aSmallImg = $("#box .small-img-box img");
	// console.log($("#box"))
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


	

	//lazyload
	$("img").lazyload({
		placeholder : "../img/goodDetail/lazyload.gif", 
		    event   : "scroll",
		    effect  : "fadeIn",
    });

    //scroll
    $("#productitemhead").click(function(){
    	$("html,body").stop().animate({scrollTop:$("#productlist").offset().top},500);
    })
    $("#productfuwuhead").click(function(){
    	$("html,body").stop().animate({scrollTop:$("#productfuwu").offset().top},500);
    })
    $("#productaskshead").click(function(){
    	$("html,body").stop().animate({scrollTop:$("#productasks").offset().top},500);
    })
   // console.log($("#productfuwu").position().top)


    //吸顶
    var iTop=$("#producthead").offset().top;
	$(window).scroll(function(){
		var iScrollTop=$(this).scrollTop();
		if (iScrollTop>=iTop) {
			$("#producthead").css({position:"fixed",top:0});
		}else{
			$("#producthead").css("position","static");
		}
	})

	

})