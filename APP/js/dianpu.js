/**
 * Created by Administrator on 2018/9/13.
 */
window.onload=function () {
    $(".add").click(function () {
        let jian=$(".gou .jian");
        let num=$(".gou input").val();
        let zong=20*num;
        jian.css({display:"block"});
        $(".gou input").css("display","block");
        num++;
        $(".gou input").val(num);
        $("footer .box2").css({backgroundColor:"#fe0000"});
        $("footer .box3").css({borderColor:"#fe0000"});
        $(".icon-gouwuche").css({color:"#fe0000"});
        $("footer .box1 p1").css({color:"#fe0000"});
        $("footer .box1 p1").html(zong+20+"元");
        $("footer .box1 p1").css("font-size","20px");
        $("footer .box1 p2").css({color:"#fe0000"});
        $("footer .box1").css({marginTop:"0"});
        $("footer .box2").click(function () {
           $(".boxz").css({display:"block"});
           $(".boxz .center p").html(num);
           $(".boxz .money p").html(zong+20+"元");
        })
    })
    $(".gou .jian").click(function () {
        let num=$(".gou input").val();
        num--;
        if(num<1){
            num=0;
            $(".gou .jian").css("display","none");
            $(".gou input").css("display","none");
            $("footer .box1 p1").html("未选购商品");
            $("footer .box1 p2").html("另需配送费5元");
            $("footer .box1 p1").css({fontSize:"14px",color:"#000"});
            $("footer .box1 p2").css({color:"#000"});
            $("footer .box1").css({marginTop:"0.2rem"});
            $("footer .box2").css({backgroundColor:"#a0a0a0"});
        }
        $(".gou input").val(num);
    })
}