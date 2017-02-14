
var arr=["../img/common/beijing.jpg","../img/common/shenzhen.jpg","../img/common/tianjin.jpg","../img/common/chengdu.jpg","../img/common/zhejiang.jpg","../img/common/jiangsu.jpg","../img/common/fujian.jpg","../img/common/hainan.jpg","../img/common/chongqin.jpg","../img/common/hunan.jpg","../img/common/hebei.jpg","../img/common/jiangxi.jpg"]
$(".name").each(function(){
    $(this).mouseover(function(){
        $(this).addClass("select").siblings().removeClass("select");
        $(".city").children().eq($(this).index(".name")).show().siblings("div").hide();
        $("#cityshops").attr("src",arr[$(this).index('.name')])
    })
})


