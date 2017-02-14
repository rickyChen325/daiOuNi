$(function(){

	
	$.get("../data/goodList/list.json",function(data){
		// console.log(data)
		// console.log(data)
		var result=data;
		// console.log(result)
		for(var i in result){
				
				var str="<div class='wraperitem' goodid="+result[i].goodid+">"+
                        "<div class='itemimg'><a href="+result[i].href+"  title="+result[i].name+"><img src="+result[i].img+" title="+result[i].name+" alt="+result[i].name+"  /></a></div>"+
                        "<div class='itemname'><a href="+result[i].href+"  title="+result[i].name+">"+result[i].name+"</a></div>"+
                       "<div class='itemprice'> <div class='pricemarket'>市场价：<span style='text-decoration:line-through;'>￥"+result[i].price+"</span></div>"+
                        "<div class='pricemember'>商城价：<span>￥"+result[i].nowprice+"</span></div> </div>"+
                    "</div>"
				$("#jietuolist").append(str);
		}

		$("#jietuolist .wraperitem").click(function(){
			var goodId=$(this).attr("goodid")
			// console.log(111)
			// console.log($(this).attr('goodid'))
			$.cookie("goodId",goodId,{expires:7,path:"/"})
			// $.cookie("goodId1",goodId,{expires:7,path:"/"})
		})

	})
	// console.log($(".wraperitem"))

	$.get("../data/goodList/hotlist.json",function(data){
		// console.log(data)
		// console.log(data)
		var result=data;
		// console.log(result)
		for(var i in result){
				
				var str="<div class='productimg'><a href="+result[i].href+" ><img src="+result[i].img+" alt="+result[i].name+" /></a></div>"+
                    "<div class='productname'><a href="+result[i].href+" >"+result[i].name+"</a></div>"+
                    "<div class='productprice'>商城价：<span>￥"+result[i].nowprice+"</span></div>"
				$("#listhots").append(str)
		}
		
	})
	
})