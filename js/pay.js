$(function(){
	//三级联动
	$("#city").citySelect({   
    prov:"四川", //省份 
    city:"成都", //城市 
    nodata:"none" //当子集无数据时，隐藏select 
	});

	//get cookie
	var a=0;
	var b=0;
	var c=0;
	var aa=0;
	var bb=0;
	var cc=0;
	var goods=$.cookie("carts") ? JSON.parse($.cookie("carts")):{};
	for(var goodid in goods){
		var str= "<tr class='product' id="+$.cookie("aaa")+">"+
                    "<td class='img'><img width='120' height='120' src="+goods[goodid].pic+" alt='' /></td>"+
                    "<td><a href='##'>"+goods[goodid].name+"</a></td>"+
                   
                    "<td class='word'>&nbsp;</td>"+
                    "<td class='price' style='text-decoration:line-through;' class='preprice'>"+goods[goodid].price+"</td>"+
                    "<td class='price' class='sale'>"+(goods[goodid].price-goods[goodid].nowprice)+"</td>"+
                    "<td class='price' class='nowprice'>"+goods[goodid].nowprice+"</td>"+
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

	//物品数量
	$("#totalcount").html($("tr.product").size())

	//商品显示
	$("#productmoney").html(parseInt(a)+parseInt(aa))
	$("#discountmoney").html(parseInt(b)+parseInt(bb))
	$("#totalmoney").html(parseInt(c)+parseInt(cc))
	$("#totalpayment").html(parseInt(c)+parseInt(cc))

    $("#payIt").click(function(){
        if (!$.cookie("userName1")) {
            $("#errortext").text("请先登录账号")
        }else{
            location.href="../html/index.html";
        }
    })

})