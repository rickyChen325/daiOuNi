// console.log(1)
function loadHtml(url,selector){
	$.ajax({
	url:url,
	ansyc:false,
	success:function(data){
			$(selector).html(data);
		}
	})
}


// $("#topmenu ul li").hover(function () {
// // console.log(1)
//     $("#topmenu .topmenu>li").addClass("menuhover");
//     // $("#topmenu ul li ul").addClass("submenufixed");
//     $(this).addClass("menuhover").children("ul").show();
//     }, function () {
//     $(this).removeClass("menuhover").children("ul").hide();
// });


// var arr=["../img/common/beijing.jpg","../img/common/shenzhen.jpg",
// "../img/common/tianjin.jpg","../img/common/chengdu.jpg",
// "../img/common/zhejiang.jpg","../img/common/jiangsu.jpg",
// "../img/common/fujian.jpg","../img/common/hainan.jpg",
// "../img/common/chongqin.jpg","../img/common/hunan.jpg",
// "../img/common/hebei.jpg","../img/common/jiangxi.jpg"]
// $(".name").each(function(){
//     $(this).mouseover(function(){
//         $(this).addClass("select").siblings().removeClass("select");
//         $(".city").children().eq($(this).index(".name")).show().siblings("div").hide();
//         $("#cityshops").attr("src",arr[$(this).index('.name')])
//     })
// })





// function ShowTopMenuHover(type) {
//     $(document).ready(function () {
//         if (type == 1) {
//             $("#topmenu .topmenu>li").addClass("menuhover");
//             $("#topmenu ul li ul").addClass("submenufixed");
//             // console.log(1)
//         } else {
//             $("#topmenu ul li").hover(function () {
//                 $(this).addClass("menuhover").children("ul").show();
//             }, function () {
//                 $(this).removeClass("menuhover").children("ul").hide();
//             });
//         }
//     });
// }


