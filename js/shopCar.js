$(function(){
	var a=0;
	var b=0;
	var c=0;
	var aa=0;
	var bb=0;
	var cc=0;
	var prepriceAll;
	var saleAll;
	var nowpriceAll;
	var isRight1=1;
	var isRight2=1;
	var preprice1;
	var nowprice1;
	var sale1;
	var preprice2;
	var nowprice2;
	var sale2;
	

	var goods=$.cookie("carts") ? JSON.parse($.cookie("carts")):{};
	for(var goodid in goods){
		var str= "<tr class='product' id="+$.cookie("aaa")+">"+
                    "<td class='img'><img width='120' height='120' src="+goods[goodid].pic+" alt='' /></td>"+
                    "<td><a href='##'>"+goods[goodid].name+"</a></td>"+
                   
                    "<td class='word'>&nbsp;</td>"+
                    "<td class='price' style='text-decoration:line-through;' class='preprice'>"+goods[goodid].price+"</td>"+
                    "<td class='price' class='sale'>"+(goods[goodid].price-goods[goodid].nowprice)+"</td>"+
                    "<td class='price' class='nowprice'>"+goods[goodid].nowprice+"</td>"+
                    "<td class='action'><div><a href='##' class='delate'>删除</a><br/><a href='##' >修改</a></div></td>"+
                    "<td class='size'><input class='select' type='checkbox' /></td>"+
                "</tr>"+
            "</table>"
        $("table").append(str)

        a=goods[goodid].price;
        b=goods[goodid].price-goods[goodid].nowprice;
        c=goods[goodid].nowprice;
        preprice1=goods[goodid].price;
		nowprice1=goods[goodid].nowprice;
		sale1=goods[goodid].price-goods[goodid].nowprice;
        // console.log(a)
        // console.log(goodid)
        // console.log(goods[goodid].price-goods[goodid].nowprice)    
	}
	// console.log($.cookie("goodId"))
	// console.log($("#0").find("#delate"))
	// var aaa=$.cookie("goodId")

	var goods=$.cookie("carts1") ? JSON.parse($.cookie("carts1")):{};
	for(var goodid in goods){
		var str= "<tr class='product' id="+$.cookie("bbb")+">"+
                    "<td class='img'><img width='120' height='120' src="+goods[goodid].pic+" alt='' /></td>"+
                    "<td><a href='##'>"+goods[goodid].name+"</a></td>"+
                   
                    "<td class='word'>&nbsp;</td>"+
                    "<td class='price' style='text-decoration:line-through;' class='preprice'>"+goods[goodid].price+"</td>"+
                    "<td class='price' class='sale'>"+(goods[goodid].price-goods[goodid].nowprice)+"</td>"+
                    "<td class='price' class='nowprice'>"+goods[goodid].nowprice+"</td>"+
                    "<td class='action'><div><a href='##' class='delate'>删除</a><br/><a href='##' >修改</a></div></td>"+
                    "<td class='size'><input class='select' type='checkbox' /></td>"+
                "</tr>"+
            "</table>"
        $("table").append(str)
        // console.log(goodid)
        // console.log(goods[goodid].price-goods[goodid].nowprice)

 
 		aa=goods[goodid].price;
        bb=goods[goodid].price-goods[goodid].nowprice;
        cc=goods[goodid].nowprice;
        preprice2=goods[goodid].price;
		nowprice2=goods[goodid].nowprice
		sale2=goods[goodid].price-goods[goodid].nowprice;
        // console.log(aa)

	}

	//删除
	$("#aaa").find(".delate").click(function(){
		$.cookie("carts","",{expires:-1,path:"/"})
		$(this).parent().parent().parent().remove()
		// console.log(111)
		$("#totalcount").html($("tr.product").size())
		a=0;
		b=0;
		c=0;
		prepriceAll=parseInt(a)+parseInt(aa)
		$("#productmoney").html(prepriceAll)
		saleAll=parseInt(b)+parseInt(bb)
		$("#discountmoney").html(saleAll)
		nowpriceAll=parseInt(c)+parseInt(cc)
		$("#totalmoney").html(nowpriceAll)
	})
	$("#bbb").find(".delate").click(function(){
		$.cookie("carts1","",{expires:-1,path:"/"})
		$(this).parent().parent().parent().remove()
		$("#totalcount").html($("tr.product").size())
		// console.log(111)
		aa=0;
		bb=0;
		cc=0;
		prepriceAll=parseInt(a)+parseInt(aa)
		$("#productmoney").html(prepriceAll)
		saleAll=parseInt(b)+parseInt(bb)
		$("#discountmoney").html(saleAll)
		nowpriceAll=parseInt(c)+parseInt(cc)
		$("#totalmoney").html(nowpriceAll)
	})

	//物品数量
	$("#totalcount").html($("tr.product").size())

	//商品显示
	$("#productmoney").html(parseInt(a)+parseInt(aa))
	$("#discountmoney").html(parseInt(b)+parseInt(bb))
	$("#totalmoney").html(parseInt(c)+parseInt(cc))

	//全选
	var allRight=1;
	if ($.cookie("carts")) {
		$("#aaa .select").prop("checked",true);
		isRight1=1;
		// console.log(2222)
	}
	if ($.cookie("carts1")) {
		$("#bbb .select").prop("checked",true);
		isRight1=1;
		// console.log(2222)
	}
	

	$("#aaa .select").click(function(){
		if (isRight1==1) {
			a=0;
			b=0;
			c=0;
			prepriceAll=parseInt(a)+parseInt(aa)
			$("#productmoney").html(prepriceAll)
			saleAll=parseInt(b)+parseInt(bb)
			$("#discountmoney").html(saleAll)
			nowpriceAll=parseInt(c)+parseInt(cc)
			$("#totalmoney").html(nowpriceAll)
			isRight1=0;
			allRight=0;
		}else{
			a=preprice1;
			b=sale1;
			c=nowprice1;
			prepriceAll=parseInt(a)+parseInt(aa)
			$("#productmoney").html(prepriceAll)
			saleAll=parseInt(b)+parseInt(bb)
			$("#discountmoney").html(saleAll)
			nowpriceAll=parseInt(c)+parseInt(cc)
			$("#totalmoney").html(nowpriceAll)
			isRight1=1;
		}
		if (allRight==1) {
			$("#allselect").prop("checked",true);
		}else {
			$("#allselect").prop("checked",false);
		}
		if (isRight1==1&&isRight2==1) {
			$("#allselect").prop("checked",true);
			allRight=1;
		}else{
			$("#allselect").prop("checked",false);
			allRight=0;
		}
	})

	$("#bbb .select").click(function(){
		if (isRight2==1) {
			aa=0;
			bb=0;
			cc=0;
			prepriceAll=parseInt(a)+parseInt(aa)
			$("#productmoney").html(prepriceAll)
			saleAll=parseInt(b)+parseInt(bb)
			$("#discountmoney").html(saleAll)
			nowpriceAll=parseInt(c)+parseInt(cc)
			$("#totalmoney").html(nowpriceAll)
			isRight2=0;
			allRight=0;
		}else{
			aa=preprice2;
			bb=sale2;
			cc=nowprice2;
			prepriceAll=parseInt(a)+parseInt(aa)
			$("#productmoney").html(prepriceAll)
			saleAll=parseInt(b)+parseInt(bb)
			$("#discountmoney").html(saleAll)
			nowpriceAll=parseInt(c)+parseInt(cc)
			$("#totalmoney").html(nowpriceAll)
			isRight2=1;
		}
		if (allRight==1) {
		$("#allselect").prop("checked",true);
		}else {
			$("#allselect").prop("checked",false);
		}
		if (isRight1==1&&isRight2==1) {
			$("#allselect").prop("checked",true);
			allRight=1;
		}else{
			$("#allselect").prop("checked",false);
			allRight=0;
		}
		
	})
	if (allRight==1) {
		$("#allselect").prop("checked",true);
	}else {
		$("#allselect").prop("checked",false);
	}


	$("#allselect").click(function(){
		if (allRight==1) {
			$("#aaa .select").prop("checked",false);
			$("#bbb .select").prop("checked",false);
			isRight1=0;
			isRight2=0;
			allRight=0;
			aa=0;
			bb=0;
			cc=0;
			a=0;
			b=0;
			c=0;
			prepriceAll=parseInt(a)+parseInt(aa)
			$("#productmoney").html(prepriceAll)
			saleAll=parseInt(b)+parseInt(bb)
			$("#discountmoney").html(saleAll)
			nowpriceAll=parseInt(c)+parseInt(cc)
			$("#totalmoney").html(nowpriceAll)
		}else{
			$("#aaa .select").prop("checked",true);
			$("#bbb .select").prop("checked",true);
			isRight1=1;
			isRight2=1;
			allRight=1;
			aa=preprice2;
			bb=sale2;
			cc=nowprice2;
			a=preprice1;
			b=sale1;
			c=nowprice1;
			prepriceAll=parseInt(a)+parseInt(aa)
			$("#productmoney").html(prepriceAll)
			saleAll=parseInt(b)+parseInt(bb)
			$("#discountmoney").html(saleAll)
			nowpriceAll=parseInt(c)+parseInt(cc)
			$("#totalmoney").html(nowpriceAll)
			isRight2=1;
		}
		
	})
})